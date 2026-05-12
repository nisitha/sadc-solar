const fs = require('fs');
const path = require('path');

const dataFile = 'd:/Antigravity Project/sadc/frontend/src/data/wp-data.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

const TRANSLATION_MAP = {
  // General Terms
  "High Yield": "Alto Rendimento",
  "Smart O&M": "Operação e Manutenção Inteligente",
  "Low Cost": "Baixo Custo",
  "Proven Safety": "Segurança Comprovada",
  "Efficient": "Eficiente",
  "Flexible": "Flexível",
  "Convenient": "Conveniente",
  "Innovative": "Inovador",
  "Robust": "Robusto",
  "Easy to Use": "Fácil de Usar",
  "Start saving costs": "Comece a poupar custos",
  "Your benefits at a glance": "Os seus benefícios num relance",
  "Highlights": "Destaques",
  "Application": "Aplicação",
  "User Friendly": "Fácil de Usar",
  "Safe & Reliable": "Seguro e Confiável",
  "Technical Parameter": "Parâmetro Técnico",
  "Core Overview": "Visão Geral",
  "Advanced Features": "Funcionalidades Avançadas",
  "Multifunctional": "Multifuncional",
  "Remote Monitoring and Control": "Monitorização e Controlo Remotos",
  "Two AC inputs and two AC outputs": "Duas entradas AC e duas saídas AC",
  "PowerAssist exclusive function": "Função exclusiva PowerAssist",
  "Virtually unlimited power": "Potência virtualmente ilimitada",
  
  // Sentences & Technical Details
  "Efficiency of": "Eficiência de",
  "Peak efficiency of": "Eficiência de pico de",
  "DC input voltage of up to": "Tensão de entrada DC de até",
  "Operating temperature range from": "Intervalo de temperatura de operação de",
  "through active": "através de gestão ativa de temperatura",
  "temperature management": "",
  "Compatible with": "Compatível com",
  "Built-in": "Integrado",
  "recovery function": "função de recuperação",
  "Commissioning": "Comissionamento",
  "remote firmware upgrade": "atualização remota de firmware",
  "Online IV curve scan": "Digitalização de curva IV online",
  "diagnosis": "diagnóstico",
  "Fuse free design": "Design sem fusíveis",
  "smart string current monitoring": "monitorização inteligente de corrente de string",
  "protection": "proteção",
  "Type II SPD for both DC and AC": "SPD Tipo II para DC e AC",
  "Compliant with global safety and grid code": "Em conformidade com códigos globais de segurança e rede",
  "5 year warranty": "5 anos de garantia",
  "Warranty": "Garantia",
  "Dimensions": "Dimensões",
  "Weight": "Peso",
  "Continuous output power": "Potência de saída contínua",
  "Input Voltage": "Tensão de Entrada",
  "Output voltage": "Tensão de Saída",
  "Pure Sinewave Output": "Saída de Onda Senoidal Pura",
  "Overload Capability": "Capacidade de Sobrecarga",
  "Battery Charger Maximum DC Output": "Saída DC Máxima do Carregador de Bateria",
  "Field Upgradeable Firmware": "Firmware Atualizável em Campo",
  "Non-Volatile Memory": "Memória Não Volátil",
  "Ideal for": "Ideal para",
  "copper": "cobre",
  "Pure copper": "Cobre puro",
  "high amperage applications": "aplicações de alta amperagem",
  "corrosion protection": "proteção contra corrosão",
  "Includes one black cable and one red cable": "Inclui um cabo preto e um cabo vermelho",
  "Semelhante ao MultiPlus, o Quattro is também um inversor e carregador combinado": "Semelhante ao MultiPlus, o Quattro é também um inversor e carregador combinado",
  "Additionally it can accept two AC input": "Adicionalmente, pode aceitar duas entradas AC",
  "automatically connect to the active source": "ligar-se automaticamente à fonte ativa",
  "The main output has no-break functionality": "A saída principal tem funcionalidade no-break",
  "Computers and other electronic equipment will continue to operate without disruption": "Computadores e outros equipamentos eletrónicos continuarão a funcionar sem interrupção",
  "The world's smartest bi-directional inverter charger now comes with": "O inversor carregador bidirecional mais inteligente do mundo agora vem com"
};

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
    .replace(/Â/g, '');
};

const translateHTML = (html) => {
  let pt = html;
  const keys = Object.keys(TRANSLATION_MAP).sort((a, b) => b.length - a.length);
  keys.forEach(en => {
    const ptVal = TRANSLATION_MAP[en];
    const regex = new RegExp(`\\b${en}\\b`, 'gi');
    pt = pt.replace(regex, ptVal);
  });
  return pt;
};

const formatToModernHTML = (html) => {
  if (!html) return "";
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
    let trimmed = line.trim();
    if (!trimmed || trimmed === " " || trimmed === "\t") {
      flushTable();
      flushList();
      return;
    }
    if (trimmed.startsWith('<h') || trimmed.startsWith('<div')) {
      flushTable();
      flushList();
      formattedLines.push(trimmed);
      return;
    }
    if (trimmed.startsWith('<li>') || trimmed.startsWith('..') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      flushTable();
      let content = trimmed.replace(/^<li>/, '').replace(/<\/li>$/, '').replace(/^(\.\.|\-|\*) /, '');
      currentList.push(content);
      return;
    }
    const specMatch = trimmed.match(/^([^:]{2,40}):\s*(.{1,120})$/);
    if (specMatch && !trimmed.includes('<') && trimmed.length < 180) {
      flushList();
      currentTable.push({ key: specMatch[1].trim(), value: specMatch[2].trim() });
      return;
    }
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
  // 1. Sanitize
  const baseEn = sanitize(p.content_en || "");
  
  // 2. Translate if necessary or refresh PT from EN base if it was corrupted
  const basePt = translateHTML(baseEn);
  
  // 3. Format BOTH into Modern HTML
  p.content_en = formatToModernHTML(baseEn);
  p.content_pt = formatToModernHTML(basePt);
  
  // Handle specifications too if they exist as separate fields
  if (p.specifications_en) {
    p.specifications_en = formatToModernHTML(sanitize(p.specifications_en));
    p.specifications_pt = formatToModernHTML(translateHTML(sanitize(p.specifications_en)));
  }
});

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Bilingual Modern HTML Sync complete.');
