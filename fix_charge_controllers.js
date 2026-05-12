const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const publicDir = 'd:/Antigravity Project/sadc/frontend/public';
const category = "Solar Charge Controllers";
const products = data.products.filter(p => p.categories.includes(category));

const normalizeFilename = (filename) => {
  return filename.toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/-+/g, '-').replace(/-\./g, '.');
};

console.log(`Processing ${products.length} products in "${category}"`);

products.forEach(product => {
  if (product.imageUrl && product.imageUrl.startsWith('/uploads/')) {
    const originalRelPath = product.imageUrl;
    const fullPath = path.join(publicDir, originalRelPath);
    
    if (fs.existsSync(fullPath)) {
      const dir = path.dirname(originalRelPath);
      const filename = path.basename(originalRelPath);
      const normalized = normalizeFilename(filename);
      
      if (normalized !== filename) {
        const newRelPath = path.posix.join(dir, normalized);
        const newFullPath = path.join(publicDir, newRelPath);
        
        console.log(`Renaming: ${filename} -> ${normalized}`);
        fs.renameSync(fullPath, newFullPath);
        product.imageUrl = newRelPath;
      }
    } else {
      // Check if it's the .webp.webp issue
      if (originalRelPath.endsWith('.webp.webp')) {
        const fixedRelPath = originalRelPath.replace('.webp.webp', '.webp');
        const fixedFullPath = path.join(publicDir, fixedRelPath);
        if (fs.existsSync(fixedFullPath)) {
          console.log(`Fixing double extension: ${originalRelPath} -> ${fixedRelPath}`);
          product.imageUrl = fixedRelPath;
        } else {
           // Maybe it's .png.webp?
           const pngWebpPath = originalRelPath.replace('.webp.webp', '.png.webp');
           const pngWebpFullPath = path.join(publicDir, pngWebpPath);
           if (fs.existsSync(pngWebpFullPath)) {
             console.log(`Fixing to png.webp: ${originalRelPath} -> ${pngWebpPath}`);
             product.imageUrl = pngWebpPath;
           } else {
             console.log(`MISSING: ${originalRelPath}, using fallback.`);
             product.imageUrl = '/img/standardizing-bg.webp';
           }
        }
      } else {
        console.log(`MISSING: ${originalRelPath}, using fallback.`);
        product.imageUrl = '/img/standardizing-bg.webp';
      }
    }
  }
});

fs.writeFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', JSON.stringify(data, null, 2));
console.log('Done.');
