const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/wp-data.json'), 'utf8'));

const targetCategories = [
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

const untranslated = data.products.filter(p => {
  const inCat = p.category && p.category.some(c => targetCategories.includes(c.slug));
  return inCat && (!p.title_pt || !p.content_pt);
});

console.log(`Untranslated products in target categories: ${untranslated.length}`);
if (untranslated.length > 0) {
    untranslated.forEach(p => console.log(`- ${p.id}: ${p.slug}`));
}
