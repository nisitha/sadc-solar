const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const category = "Solar Charge Controllers";
const products = data.products.filter(p => p.categories.includes(category));

console.log(`Found ${products.length} products in category "${category}":`);
products.forEach(p => {
  console.log(`- ${p.title} (slug: ${p.slug}) -> imageUrl: ${p.imageUrl}`);
});
