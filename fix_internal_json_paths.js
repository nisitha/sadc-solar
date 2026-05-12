const fs = require('fs');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const fixInternalPaths = (str) => {
  if (typeof str !== 'string') return str;
  
  // Replace relative uploads/ with absolute /uploads/
  let fixed = str.replace(/src=\\"uploads\//g, 'src=\\"/uploads/');
  
  // Fix extensions to .webp
  fixed = fixed.replace(/src=\\"(\/uploads\/[^"]+)\.(jpg|jpeg|png|gif)\\"/gi, 'src=\\"$1.webp\\"');
  
  return fixed;
};

const processObject = (obj) => {
  for (let key in obj) {
    if (key === 'content' || key === 'description' || key === 'specifications') {
      obj[key] = fixInternalPaths(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      processObject(obj[key]);
    }
  }
};

processObject(data);

fs.writeFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', JSON.stringify(data, null, 2));
console.log('Fixed internal image paths in wp-data.json');
