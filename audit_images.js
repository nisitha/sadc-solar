const fs = require('fs');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const auditImages = (items, type) => {
  items.forEach(item => {
    if (item.imageUrl && !item.imageUrl.startsWith('/') && !item.imageUrl.startsWith('http')) {
      console.log(`Broken path in ${type}: ${item.imageUrl} (slug: ${item.slug})`);
    }
  });
};

auditImages(data.products, 'products');
auditImages(data.news, 'news');
auditImages(data.solutions, 'solutions');
auditImages(data.pages, 'pages');
