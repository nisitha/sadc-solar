const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const publicDir = 'd:/Antigravity Project/sadc/frontend/public';
const fallback = '/img/standardizing-bg.webp';

const fixMalformedPaths = (str) => {
  if (typeof str !== 'string') return str;
  
  // Find all image sources
  const imgRegex = /src=\\"(\/uploads\/[^"]+)\\"/g;
  let match;
  let fixed = str;
  
  while ((match = imgRegex.exec(str)) !== null) {
    const originalPath = match[1];
    
    // Check if it has special characters or if it doesn't exist
    if (originalPath.includes('@') || !fs.existsSync(path.join(publicDir, originalPath))) {
      console.log(`Fixing path: ${originalPath} -> ${fallback}`);
      fixed = fixed.replace(originalPath, fallback);
    }
  }
  
  return fixed;
};

const processObject = (obj) => {
  for (let key in obj) {
    if (key === 'content' || key === 'description') {
      obj[key] = fixMalformedPaths(obj[key]);
    } else if (key === 'imageUrl') {
      const originalPath = obj[key];
      if (originalPath.includes('@') || !fs.existsSync(path.join(publicDir, originalPath))) {
        console.log(`Fixing imageUrl: ${originalPath} -> ${fallback}`);
        obj[key] = fallback;
      }
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      processObject(obj[key]);
    }
  }
};

processObject(data);

fs.writeFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', JSON.stringify(data, null, 2));
console.log('Fixed malformed image paths in wp-data.json');
