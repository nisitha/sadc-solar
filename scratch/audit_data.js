const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/wp-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function audit(key) {
    if (!data[key]) {
        console.log(`Key ${key} not found in data.`);
        return;
    }
    console.log(`Auditing ${key}...`);
    let missingEn = 0;
    let missingPt = 0;
    data[key].forEach(item => {
        if (!item.content_en) missingEn++;
        if (!item.content_pt) missingPt++;
    });
    console.log(`- Total: ${data[key].length}`);
    console.log(`- Missing content_en: ${missingEn}`);
    console.log(`- Missing content_pt: ${missingPt}`);
}

audit('products');
audit('solutions');
audit('news');
audit('pages');
