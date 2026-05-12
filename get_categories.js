const fs = require('fs');
const data = JSON.parse(fs.readFileSync('d:/Antigravity Project/sadc/frontend/src/data/wp-data.json', 'utf8'));

const categories = new Set();
data.solutions.forEach(s => {
  if (s.categories) {
    s.categories.forEach(c => categories.add(c));
  }
});

console.log('Available Solution Categories:', Array.from(categories));
