const fs = require('fs');
const path = require('path');

const wpDataPath = path.join(__dirname, '../src/data/wp-data.json');
const data = JSON.parse(fs.readFileSync(wpDataPath, 'utf8'));

// allPosts usually contains a mix of products and solutions for search or listing
// We need to make sure the _pt fields are synced if they exist in the source but not in allPosts

data.allPosts.forEach(post => {
  // Find matching item in products or solutions
  const source = data.products.find(p => p.id === post.id) || 
                 data.solutions.find(s => s.id === post.id) ||
                 data.news.find(n => n.id === post.id);

  if (source) {
    if (source.title_pt) post.title_pt = source.title_pt;
    if (source.content_pt) post.content_pt = source.content_pt;
    if (source.excerpt_pt) post.excerpt_pt = source.excerpt_pt;
    if (source.features_pt) post.features_pt = source.features_pt;
    if (source.description_pt) post.description_pt = source.description_pt;
    if (source.specifications_pt) post.specifications_pt = source.specifications_pt;
  }
});

fs.writeFileSync(wpDataPath, JSON.stringify(data, null, 2));
console.log('allPosts synchronized with updated content.');
