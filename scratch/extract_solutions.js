const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/wp-data.json'), 'utf8'));

const targetCategories = ['Turnkey Solutions', 'Other Turnkey Solutions'];

const solutionsToTranslate = data.solutions.filter(s => {
    return s.categories && s.categories.some(c => targetCategories.includes(c));
});

console.log(`Found ${solutionsToTranslate.length} solutions to translate.`);

fs.writeFileSync(path.join(__dirname, 'solutions_to_translate.json'), JSON.stringify(solutionsToTranslate, null, 2));
