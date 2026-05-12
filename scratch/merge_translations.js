const fs = require('fs');
const path = require('path');

const wpDataPath = path.join(__dirname, '../src/data/wp-data.json');
const wpData = JSON.parse(fs.readFileSync(wpDataPath, 'utf8'));

const batchFiles = [
  'batch1.json', 'batch2.json', 'batch3.json', 'batch4.json', 'batch5.json',
  'batch6.json', 'batch7.json', 'batch8.json', 'batch9.json'
];

let totalUpdated = 0;

batchFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const batch = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    batch.forEach(translatedItem => {
      const product = wpData.products.find(p => p.id === translatedItem.id);
      if (product) {
        product.title_pt = translatedItem.title_pt;
        product.excerpt_pt = translatedItem.excerpt_pt;
        product.content_pt = translatedItem.content_pt;
        
        // Parallelize features
        if (translatedItem.features_pt && translatedItem.features_pt.length > 0) {
          product.features = product.features || [];
          translatedItem.features_pt.forEach((featPt, idx) => {
            if (product.features[idx]) {
              product.features[idx].title_pt = featPt.title_pt;
              product.features[idx].items_pt = featPt.items_pt;
            } else {
               // If for some reason index doesn't match, we still want the translation
               product.features[idx] = featPt;
            }
          });
        }
        totalUpdated++;
      }
    });
  }
});

fs.writeFileSync(wpDataPath, JSON.stringify(wpData, null, 2));
console.log(`Successfully merged ${totalUpdated} products into wp-data.json`);
