const fs = require('fs');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const category = "Solar Charge Controllers";
const mapping = {
  'flexmax-60-80': '/uploads/2021/08/flexmax6080-3a2af14dce8c89866debc4ee0da48089.webp',
  'classic-150': '/uploads/2021/08/classic-lg.webp',
  'conext-mppt-80-600-solar-pv-charge-controller': '/uploads/2021/08/schneider-electric-conext-mppt-80-600-solar-charge-controller-2.png.webp',
  'smartsolar-mppt-150-45-up-to-250-100': '/uploads/2021/08/360-912-20190730142501.webp',
  'smartsolar-mppt-rs-450-100-tr-450-200-tr': '/uploads/2021/08/mppt-rs.webp'
};

data.products.forEach(p => {
  if (p.categories.includes(category) && mapping[p.slug]) {
    console.log(`Updating ${p.slug} -> ${mapping[p.slug]}`);
    p.imageUrl = mapping[p.slug];
  }
});

fs.writeFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', JSON.stringify(data, null, 2));
console.log('JSON updated for Solar Charge Controllers.');
