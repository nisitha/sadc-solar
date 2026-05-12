const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'wp-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const dictionary = {
  "High Temperature": "Alta Temperatura",
  "High Rate": "Alta Taxa",
  "Long Life": "Vida Longa",
  "Deep Cycle": "Ciclo Profundo",
  "Cycling & floating": "Ciclagem e flutuação",
  "Range summary": "Resumo da gama",
  "Technical Features": "Características Técnicas",
  "Special designed": "Especialmente desenhado",
  "Patented anti-corrosion grid": "Tecnologia de grelha anti-corrosão patenteada",
  "Optimized active material": "Material activo optimizado",
  "operating temperature range": "gama de temperatura de operação",
  "Excellent deep cycling performance": "Excelente desempenho de ciclagem profunda",
  "Innovative robust design": "Design robusto inovador",
  "flame retardant": "retardador de chama",
  "Low self-discharge rate": "Baixa taxa de auto-descarga",
  "Suitable for continuous operation": "Adequado para operação contínua",
  "Design life": "Vida útil de projecto",
  "Main Applications": "Principais Aplicações",
  "Hybrid telecom remote base stations": "Estações base remotas de telecomunicações híbridas",
  "Renewable energy wind & solar sites": "Sítios de energia renovável eólica e solar",
  "Grid frequency leveling systems": "Sistemas de nivelamento de frequência de rede",
  "reliability is poor": "fiabilidade é fraca",
  "extreme environment off-grid": "off-grid em ambientes extremos",
  "General Specifications": "Especificações Gerais",
  "Nominal Voltage": "Tensão Nominal",
  "Rated Capacity": "Capacidade Nominal",
  "Dimensions": "Dimensões",
  "Weight": "Peso",
  "Length": "Comprimento",
  "Width": "Largura",
  "Height": "Altura",
  "Total Height": "Altura Total",
  "Efficiency": "Eficiência",
  "Innovative": "Inovador",
  "Flexible": "Flexível",
  "Convenient": "Conveniente",
  "Efficient": "Eficiente",
  "Monitoring": "Monitorização",
  "monitoring": "monitorização",
  "Solar Panel": "Painel Solar",
  "Solar Panels": "Painéis Solares",
  "Battery": "Bateria",
  "Batteries": "Baterias",
  "Charge Controller": "Controlador de Carga",
  "Inverter": "Inversor",
  "Off-grid": "Fora da rede",
  "On-grid": "Ligado à rede",
  "Smart": "Inteligente",
  "Remote Control": "Controlo Remoto",
  "Water Pump": "Bomba de Água",
  "Reliable": "Fiável",
  "Wide input voltage range": "Ampla gama de tensão de entrada",
  "Maintenance free": "Livre de manutenção",
  "Lead Acid": "Chumbo-Ácido",
  "Gel Battery": "Bateria de Gel",
  "Solar System": "Sistema Solar",
  "Energy Storage": "Armazenamento de Energia"
};

/**
 * SANITIZE: targets specific corrupted sequences safely.
 */
const sanitize = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/â„ƒ/g, '°C')
    .replace(/â„‰/g, '°F')
    .replace(/Â°/g, '°')
    .replace(/â€³/g, '"')
    .replace(/Ã—/g, 'x')
    .replace(/â„/g, '')
    .replace(/Â/g, ''); 
};

const translateDeeply = (text) => {
  if (!text) return "";
  let translated = sanitize(text);
  Object.keys(dictionary).forEach(key => {
    const regex = new RegExp(key, 'gi');
    translated = translated.replace(regex, dictionary[key]);
  });
  return translated;
};

// Process News, Solutions, Products, and Pages
['products', 'news', 'solutions', 'pages'].forEach(type => {
  if (data[type] && Array.isArray(data[type])) {
    data[type].forEach(item => {
      // Restore base fields from _en if they were deleted (safety)
      if (!item.title && item.title_en) item.title = item.title_en;
      if (!item.excerpt && item.excerpt_en) item.excerpt = item.excerpt_en;

      // Update _en and _pt versions
      if (item.title_en) item.title_en = sanitize(item.title_en);
      if (item.content_en) item.content_en = sanitize(item.content_en);
      if (item.excerpt_en) item.excerpt_en = sanitize(item.excerpt_en);
      
      item.title_pt = translateDeeply(item.title_en);
      item.content_pt = translateDeeply(item.content_en);
      item.excerpt_pt = translateDeeply(item.excerpt_en);

      // Final cleanup of base fields (removing large content)
      delete item.content;
      delete item.description;

      if (item.features && Array.isArray(item.features)) {
        item.features.forEach(feat => {
          if (feat.title_en) feat.title_en = sanitize(feat.title_en);
          feat.title_pt = translateDeeply(feat.title_en || "");
          if (feat.items_en) {
            feat.items_en = feat.items_en.map(it => sanitize(it));
            feat.items_pt = feat.items_en.map(it => translateDeeply(it));
          }
        });
      }
    });
  }
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Overhaul complete with safe sanitization.`);
