const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'wp-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function sanitizeEncoding(text) {
    if (!text) return "";
    return text
        .replace(/â„ƒ/g, '°C')
        .replace(/â„‰/g, '°F')
        .replace(/Â°/g, '°')
        .replace(/â€³/g, '"')
        .replace(/Ã—/g, 'x')
        .replace(/â„¢/g, '™')
        .replace(/â€“/g, '–')
        .replace(/â€”/g, '—')
        .replace(/â€˜/g, '‘')
        .replace(/â€™/g, '’')
        .replace(/â€œ/g, '“')
        .replace(/â€/g, '”')
        .replace(/â€/g, '–')
        .replace(/Â/g, '')
        .replace(/â€¢/g, '•')
        .replace(/â€¦/g, '...')
        .replace(/â‹/g, '');
}

function parseToTable(text) {
    if (!text) return "";

    // 1. Fix concatenated strings like "Nominal Capacity(10HR)200AH"
    // Pattern: Text followed by (Text) followed by Number+Text
    let result = text.replace(/([a-zA-Z\s]+)\(([^)]+)\)(\d+[a-zA-Z]+)/g, '$1 ($2): $3');
    
    // 2. Identify list items that look like specs and convert to tables
    // We look for <ul> blocks and check if they contain spec-like <li>s
    result = result.replace(/<ul>([\s\S]*?)<\/ul>/gi, (match, content) => {
        const lines = content.match(/<li>(.*?)<\/li>/gi);
        if (!lines) return match;

        const specItems = [];
        let isSpecList = true;

        for (const line of lines) {
            const innerText = line.replace(/<[^>]+>/g, '').trim();
            // Check if it looks like a spec: "Key - Value" or "Key: Value" or "Key Value"
            // We expect at most 4 words for the key and some value
            const specMatch = innerText.match(/^([^:\-\–\—\s]{2,}(?:\s[^:\-\–\—\s]+){0,3})[:\-\–\—\s]+(\d+.*|.*?\d+.*)$/);
            
            if (specMatch) {
                specItems.push({ key: specMatch[1].trim(), value: specMatch[2].trim() });
            } else {
                // If even one item doesn't look like a spec, we might not want to table-ify the whole thing
                // unless it's a very clear list of specs
                if (innerText.length > 100) { // Too long to be a spec
                    isSpecList = false;
                    break;
                }
            }
        }

        if (isSpecList && specItems.length >= 2) {
            let table = '<div class="modern-table-container"><table class="modern-table"><tbody>';
            for (const item of specItems) {
                table += `<tr><td class="spec-key">${item.key}</td><td class="spec-value">${item.value}</td></tr>`;
            }
            table += '</tbody></table></div>';
            return table;
        }

        return match;
    });

    // 3. Clean up leftover empty <ul>/</ul> tags from previous extraction
    result = result.replace(/<ul[^>]*>\s*<\/ul>/gi, '');
    result = result.replace(/<ul>\s*<ul>/gi, '<ul>');
    result = result.replace(/<\/ul>\s*<\/ul>/gi, '</ul>');
    result = result.replace(/^\s*<\/ul>\s*$/gm, '');
    result = result.replace(/^\s*<ul>\s*$/gm, '');

    return result;
}

data.products = data.products.map(p => {
    // Sanitize and format content
    p.content_en = parseToTable(sanitizeEncoding(p.content_en));
    p.content_pt = parseToTable(sanitizeEncoding(p.content_pt));
    
    // Sanitize specifications
    if (p.specifications_en) p.specifications_en = sanitizeEncoding(p.specifications_en);
    if (p.specifications_pt) p.specifications_pt = sanitizeEncoding(p.specifications_pt);

    // Sanitize features (now in the array)
    if (p.features && Array.isArray(p.features)) {
        p.features = p.features.map(f => ({
            ...f,
            title_en: sanitizeEncoding(f.title_en),
            title_pt: sanitizeEncoding(f.title_pt),
            items_en: (f.items_en || []).map(sanitizeEncoding),
            items_pt: (f.items_pt || []).map(sanitizeEncoding)
        }));
    }

    return p;
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Global cleanup completed for ${data.products.length} products.`);
