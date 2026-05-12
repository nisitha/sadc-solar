const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const publicDir = 'd:/Antigravity Project/sadc/frontend/public';

const manualRemapping = {
  'blueplanet-87-0-tl3-125-tl3': '/uploads/2021/08/csm_KNE-blueplanet-3-10TL3-2_082c396c1a.webp',
  'string-inverter-sg110cx': '/uploads/2021/08/Sunny-Central-2750-EV.webp', // Fallback to similar inverter
  'conext-mppt-80-600-solar-pv-charge-controller': '/uploads/2021/08/schneider-electric-conext-mppt-80-600-solar-charge-controller-2.png.webp',
  'enlarged-led-module-solar-street-lightslz': '/uploads/2021/08/SLB主-.webp',
  '12-awg-600-volt-solar-wire': '/uploads/2021/08/solar-cable.webp'
};

const auditProducts = () => {
  let fixedCount = 0;

  data.products.forEach(product => {
    // Apply manual remapping if missing
    if (manualRemapping[product.slug]) {
      product.imageUrl = manualRemapping[product.slug];
      fixedCount++;
    }

    if (product.imageUrl) {
      let original = product.imageUrl;
      let fixed = original;

      // Ensure absolute path
      if (!fixed.startsWith('/') && !fixed.startsWith('http')) {
        fixed = '/' + fixed;
      }

      // Ensure webp extension (and fix double .webp.webp)
      if (fixed.includes('.')) {
        fixed = fixed.replace(/\.(jpg|jpeg|png|gif|webp)(\.webp)?$/i, '.webp');
      }

      if (fixed !== original) {
        product.imageUrl = fixed;
        fixedCount++;
      }
    }

    // Audit content
    if (product.content) {
      let original = product.content;
      let fixed = original;

      // Fix relative src
      fixed = fixed.replace(/src=\\"uploads\//g, 'src=\\"/uploads/');
      
      // Fix extensions in content
      fixed = fixed.replace(/src=\\"(\/uploads\/[^"]+)\.(jpg|jpeg|png|gif)\\"/gi, 'src=\\"$1.webp\\"');

      if (fixed !== original) {
        product.content = fixed;
        fixedCount++;
      }
    }
  });

  fs.writeFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', JSON.stringify(data, null, 2));
  console.log(`Total fixed/remapped: ${fixedCount}`);
};

auditProducts();
