const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const publicDir = 'd:/Antigravity Project/sadc/frontend/public';

const checkImages = (items, type) => {
  items.forEach(item => {
    if (item.imageUrl && item.imageUrl.startsWith('/uploads/')) {
      const fullPath = path.join(publicDir, item.imageUrl);
      if (!fs.existsSync(fullPath)) {
        console.log(`Missing image for ${type} ${item.slug}: ${item.imageUrl}`);
      }
    }
  });
};

checkImages(data.solutions, 'solutions');
