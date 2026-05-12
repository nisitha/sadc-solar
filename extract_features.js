const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'wp-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function extractFeatures(html) {
    if (!html) return { cleanedHtml: '', features: [] };

    const features = [];
    let cleanedHtml = html;

    // Pattern to match <h4> and the following <ul>
    // We use a non-greedy match for the <ul> part
    const sectionRegex = /<h4[^>]*>(.*?)<\/h4>\s*<ul>([\s\S]*?)<\/ul>/gi;
    let match;

    while ((match = sectionRegex.exec(html)) !== null) {
        const title = match[1].replace(/<[^>]+>/g, '').trim();
        const ulContent = match[2];
        const liRegex = /<li>([\s\S]*?)<\/li>/gi;
        const items = [];
        let liMatch;
        while ((liMatch = liRegex.exec(ulContent)) !== null) {
            items.push(liMatch[1].replace(/<[^>]+>/g, '').trim());
        }

        if (title && items.length > 0) {
            features.push({ title, items });
        }
    }

    // Remove the extracted sections from the HTML to avoid duplication
    cleanedHtml = html.replace(sectionRegex, '').trim();
    
    // Also remove empty <p> tags that might be left over
    cleanedHtml = cleanedHtml.replace(/<p>\s*<\/p>/gi, '').trim();

    return { cleanedHtml, features };
}

data.products = data.products.map(p => {
    const en = extractFeatures(p.content_en);
    const pt = extractFeatures(p.content_pt);

    // Merge features by title if possible, or just keep them separate
    // Actually, it's better to keep them separate so we have title_en, title_pt, items_en, items_pt
    const combinedFeatures = en.features.map((f, i) => {
        const pt_f = pt.features[i] || { title: f.title, items: f.items };
        return {
            title_en: f.title,
            title_pt: pt_f.title,
            items_en: f.items,
            items_pt: pt_f.items
        };
    });

    return {
        ...p,
        content_en: en.cleanedHtml,
        content_pt: pt.cleanedHtml,
        features: combinedFeatures
    };
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Extracted features for ${data.products.length} products.`);
