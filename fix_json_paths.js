const fs = require('fs');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const fixPaths = (obj) => {
  if (Array.isArray(obj)) {
    obj.forEach(item => fixPaths(item));
  } else if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      if (key === 'imageUrl' && typeof obj[key] === 'string') {
        if (!obj[key].startsWith('/') && !obj[key].startsWith('http')) {
          console.log(`Fixing imageUrl: ${obj[key]}`);
          obj[key] = '/' + obj[key];
        }
      } else if (key === 'content' && typeof obj[key] === 'string') {
        // Fix relative uploads in content
        const regex = /src=\\"uploads\//g;
        if (regex.test(obj[key])) {
          console.log(`Fixing relative src in content`);
          obj[key] = obj[key].replace(/src=\\"uploads\//g, 'src=\\"/uploads/');
        }
        // Also check for domain-based uploads that might have been missed
        const domainRegex = /https?:\/\/[^\/]+\/wp-content\/uploads\//g;
        if (domainRegex.test(obj[key])) {
          console.log(`Fixing domain-based src in content`);
          obj[key] = obj[key].replace(domainRegex, '/uploads/');
        }
      } else {
        fixPaths(obj[key]);
      }
    }
  }
};

fixPaths(data);
fs.writeFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', JSON.stringify(data, null, 2));
console.log('Done fixing paths.');
