const fs = require('fs');
const path = require('path');

const dataFile = 'd:/Antigravity Project/sadc/frontend/src/data/wp-data.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

const formatToModernHTML = (html) => {
  if (!html) return "";

  // 1. Convert plain text "Key: Value" or "Key Value" lines into table rows if they look like specs
  // Pattern: Line with a word/phrase followed by a colon or space and then numbers/units
  let lines = html.split('\n');
  let formattedLines = [];
  let currentTable = [];
  let currentList = [];

  const flushTable = () => {
    if (currentTable.length > 0) {
      formattedLines.push('<div class="modern-table-container"><table class="modern-table"><tbody>');
      currentTable.forEach(row => {
        formattedLines.push(`<tr><td class="spec-key">${row.key}</td><td class="spec-value">${row.value}</td></tr>`);
      });
      formattedLines.push('</tbody></table></div>');
      currentTable = [];
    }
  };

  const flushList = () => {
    if (currentList.length > 0) {
      formattedLines.push('<ul class="modern-list">');
      currentList.forEach(item => {
        formattedLines.push(`<li>${item}</li>`);
      });
      formattedLines.push('</ul>');
      currentList = [];
    }
  };

  lines.forEach(line => {
    let trimmed = line.trim().replace(/^(\t| )+/, '');
    if (!trimmed) {
      flushTable();
      flushList();
      return;
    }

    // Detect if it's already a header
    if (trimmed.startsWith('<h')) {
      flushTable();
      flushList();
      formattedLines.push(trimmed);
      return;
    }

    // Detect if it's a list item (starts with bullet characters or is inside <li>)
    if (trimmed.startsWith('<li>') || trimmed.startsWith('..') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      flushTable();
      let content = trimmed.replace(/^<li>/, '').replace(/<\/li>$/, '').replace(/^(\.\.|\-|\*) /, '');
      currentList.push(content);
      return;
    }

    // Detect if it's a spec row (Key: Value)
    // Avoid matching headers or long sentences
    const specMatch = trimmed.match(/^([^:]{2,30}):\s*(.{1,100})$/);
    if (specMatch && !trimmed.includes('<') && trimmed.length < 150) {
      flushList();
      currentTable.push({ key: specMatch[1].trim(), value: specMatch[2].trim() });
      return;
    }

    // Default: Keep as is but flush collectors
    flushTable();
    flushList();
    if (!trimmed.startsWith('<')) {
      formattedLines.push(`<p>${trimmed}</p>`);
    } else {
      formattedLines.push(trimmed);
    }
  });

  flushTable();
  flushList();

  return formattedLines.join('\n');
};

data.products.forEach(p => {
  p.content_en = formatToModernHTML(p.content_en);
  p.content_pt = formatToModernHTML(p.content_pt);
});

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Smart HTML restructuring complete.');
