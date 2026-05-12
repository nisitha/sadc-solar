const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'wp-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

function enforceTables(html) {
    if (!html) return "";

    let result = html;

    // 1. Wrap existing tables and apply classes
    // First, remove existing wrappers to avoid nesting
    result = result.replace(/<div class="modern-table-container">([\s\S]*?)<\/div>/gi, '$1');
    
    result = result.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (match, content) => {
        // Clean up the table content (remove inline styles, colspans if 1, etc.)
        let cleanedContent = content
            .replace(/style="[^"]*"/gi, '')
            .replace(/align="[^"]*"/gi, '')
            .replace(/valign="[^"]*"/gi, '')
            .replace(/width="[^"]*"/gi, '')
            .replace(/height="[^"]*"/gi, '')
            .replace(/colspan="1"/gi, '')
            .replace(/rowspan="1"/gi, '')
            .replace(/<br\s*\/?>/gi, ' ');

        // If the first row is all <td>, convert them to <th>
        cleanedContent = cleanedContent.replace(/<tr>([\s\S]*?)<\/tr>/i, (rowMatch, rowContent) => {
            if (rowContent.includes('<td')) {
                return `<tr>${rowContent.replace(/<td/gi, '<th').replace(/<\/td>/gi, '</th>')}</tr>`;
            }
            return rowMatch;
        });

        return `<div class="modern-table-container"><table class="modern-table">${cleanedContent}</table></div>`;
    });

    // 2. Identify plain text matrices (multiple spaces or tabs)
    // We look for blocks of text that aren't already inside a table or tag
    // This is hard, so we'll look for lines with 2+ spaces or tabs
    const lines = result.split('\n');
    let inMatrix = false;
    let matrixLines = [];
    let newResult = [];

    for (let line of lines) {
        const textLine = line.replace(/<[^>]+>/g, '').trim();
        const columns = textLine.split(/\s{2,}|\t/);

        if (columns.length >= 2 && textLine.length > 0 && !line.includes('<table') && !line.includes('<h')) {
            if (!inMatrix) {
                inMatrix = true;
                matrixLines = [];
            }
            matrixLines.push(columns);
        } else {
            if (inMatrix) {
                if (matrixLines.length >= 2) {
                    let table = '<div class="modern-table-container"><table class="modern-table"><thead>';
                    matrixLines.forEach((cols, idx) => {
                        if (idx === 0) {
                            table += '<tr>' + cols.map(c => `<th>${c.trim()}</th>`).join('') + '</tr></thead><tbody>';
                        } else {
                            table += '<tr>' + cols.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
                        }
                    });
                    table += '</tbody></table></div>';
                    newResult.push(table);
                } else {
                    // Not a real matrix, just a single line
                    matrixLines.forEach(cols => newResult.push(cols.join('  ')));
                }
                inMatrix = false;
            }
            newResult.push(line);
        }
    }
    result = newResult.join('\n');

    // 3. Convert any remaining spec-like lists to tables if they weren't caught
    // (Similar to previous script but more aggressive)
    result = result.replace(/<ul>([\s\S]*?)<\/ul>/gi, (match, content) => {
        if (content.includes('<table')) return match; // Already contains a table
        
        const lines = content.match(/<li>(.*?)<\/li>/gi);
        if (!lines) return match;

        const specItems = [];
        for (const line of lines) {
            const innerText = line.replace(/<[^>]+>/g, '').trim();
            const specMatch = innerText.match(/^([^:\-\–\—]+)[:\-\–\—\s]+(.+)$/);
            if (specMatch && specMatch[1].length < 50) {
                specItems.push({ key: specMatch[1].trim(), value: specMatch[2].trim() });
            }
        }

        if (specItems.length >= 2 && specItems.length === lines.length) {
            let table = '<div class="modern-table-container"><table class="modern-table"><tbody>';
            specItems.forEach(item => {
                table += `<tr><td class="spec-key">${item.key}</td><td class="spec-value">${item.value}</td></tr>`;
            });
            table += '</tbody></table></div>';
            return table;
        }

        return match;
    });

    return result;
}

data.products = data.products.map(p => {
    p.content_en = enforceTables(p.content_en);
    p.content_pt = enforceTables(p.content_pt);
    return p;
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Global table enforcement completed for ${data.products.length} products.`);
