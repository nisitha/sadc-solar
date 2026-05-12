const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/wp-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const targetSlugs = [
    'off-grid-solar-inverters',
    'on-grid-solar-inverters',
    'solar-charge-controllers',
    'solar-panels',
    'solar-batteries',
    'solar-water-pumps',
    'solar-street-lights',
    'rack-and-battery-cabinets',
    'wiring-and-cables'
];

function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

const productsToTranslate = data.products.filter(p => 
    p.categories.some(cat => targetSlugs.includes(slugify(cat)))
);

console.log(`Found ${productsToTranslate.length} products to translate.`);

const extraction = productsToTranslate.map(p => ({
    id: p.id,
    slug: p.slug,
    title_en: p.title_en || p.title,
    excerpt_en: p.excerpt_en || p.excerpt || "",
    content_en: p.content_en || p.content,
    features: p.features ? p.features.map(f => ({
        title_en: f.title_en,
        items_en: f.items_en
    })) : []
}));

fs.writeFileSync(path.join(__dirname, 'to_translate.json'), JSON.stringify(extraction, null, 2));
