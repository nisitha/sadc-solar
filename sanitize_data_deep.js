const fs = require('fs');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const sanitize = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/Â°/g, '°')
    .replace(/â€“/g, '—')
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€\?/g, '"')
    .replace(/â€/g, '"')
    .replace(/Ã—/g, 'x')
    .replace(/Â /g, ' ')
    .replace(/\"œ/g, '"')
    .replace(/\"™/g, "'")
    .replace(/Â/g, ''); // Remove stray Â
};

const processObject = (obj) => {
  for (let key in obj) {
    if (key === 'content' || key === 'description' || key === 'title') {
      obj[key] = sanitize(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      processObject(obj[key]);
    }
  }
};

processObject(data);

fs.writeFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', JSON.stringify(data, null, 2));
console.log('Deep data sanitization complete.');
