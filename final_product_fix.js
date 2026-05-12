const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const publicDir = 'd:/Antigravity Project/sadc/frontend/public';

const fixProduct = (product) => {
  if (product.imageUrl && product.imageUrl.startsWith('/uploads/')) {
    let original = product.imageUrl;
    let img = original;
    
    // Fix double extension
    img = img.replace(/\.webp\.webp$/, '.webp');
    
    const fullPath = path.join(publicDir, img);
    if (!fs.existsSync(fullPath)) {
      // Try with .png.webp
      let pngWebp = img.replace(/\.webp$/, '.png.webp');
      if (fs.existsSync(path.join(publicDir, pngWebp))) {
        img = pngWebp;
      } else {
        // Try other options...
      }
    }
    
    if (img !== original) {
      console.log(`FIXED: ${original} -> ${img}`);
    }
    product.imageUrl = img;
  }
};

data.products.forEach(fixProduct);
fs.writeFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', JSON.stringify(data, null, 2));
console.log('Final fix applied.');
