const fs = require('fs');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));
const p = data.products.find(x => x.slug === 'conext-mppt-80-600-solar-pv-charge-controller');
console.log('Schneider imageUrl:', JSON.stringify(p.imageUrl));
