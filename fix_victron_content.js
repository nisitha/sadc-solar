const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const publicDir = 'd:/Antigravity Project/sadc/frontend/public';
const fallback = '/img/standardizing-bg.webp';

const fixProduct = (product) => {
  if (product.content) {
    let original = product.content;
    
    // In memory, after JSON.parse, src=\" in JSON becomes src="
    const srcRegex = /src="(\/uploads\/[^"]+)"/g;
    
    product.content = original.replace(srcRegex, (match, src) => {
      const fullPath = path.join(publicDir, src);
      if (src.includes('@') || !fs.existsSync(fullPath)) {
        console.log(`Replacing malformed/missing path: ${src} -> ${fallback}`);
        return `src="${fallback}"`;
      }
      return match;
    });
  }
};

data.products.forEach(fixProduct);

fs.writeFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', JSON.stringify(data, null, 2));
console.log('Victron content image paths fixed.');
