const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/wp-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const productMap = new Map(data.products.map(p => [p.id, p]));
const solutionMap = new Map(data.solutions.map(s => [s.id, s]));
const newsMap = new Map(data.news.map(n => [n.id, n]));

data.allPosts = data.allPosts.map(post => {
    const product = productMap.get(post.id);
    if (product) {
        return { ...post, ...product };
    }
    const solution = solutionMap.get(post.id);
    if (solution) {
        return { ...post, ...solution };
    }
    const news = newsMap.get(post.id);
    if (news) {
        return { ...post, ...news };
    }
    return post;
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log("allPosts aligned with bilingual sources.");
