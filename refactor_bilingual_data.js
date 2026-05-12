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
  "to": "a",
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
  "Similar to the MultiPlus, the Quattro is also a combined inverter and charger": "Semelhante ao MultiPlus, o Quattro é também um inversor e carregador combinado",
  "Additionally it can accept two AC input": "Adicionalmente, pode aceitar duas entradas AC",
  "automatically connect to the active source": "ligar-se automaticamente à fonte ativa",
  "The main output has no-break functionality": "A saída principal tem funcionalidade no-break",
  "Computers and other electronic equipment will continue to operate without disruption": "Computadores e outros equipamentos eletrónicos continuarão a funcionar sem interrupção",
  
  // Specific sentences from products
  "The new Sunny Tripower 25000TL-JP is the high-performance solution": "O novo Sunny Tripower 25000TL-JP é a solução de alto desempenho",
  "for use in larger, decentralized medium-voltage systems": "para uso em sistemas descentralizados de média tensão maiores",
  "on the Japanese market": "no mercado japonês",
  "This newly developed product is based on the technologically mature Sunny Tripower platform": "Este produto recém-desenvolvido baseia-se na plataforma Sunny Tripower tecnologicamente madura",
  "Users benefit from years of experience": "Os utilizadores beneficiam de anos de experiência",
  "professional support": "suporte profissional",
  "as a market leader provides": "que a SMA, como líder de mercado, oferece",
  "guaranteeing system operators rapid amortization": "garantindo aos operadores do sistema uma amortização rápida",
  "high design flexibility": "alta flexibilidade de design",
  "compatibility with many PV modules on the market": "compatibilidade com muitos módulos fotovoltaicos no mercado",
  "personalized system parameterization using Modbus": "parametrização personalizada do sistema usando Modbus"
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
  // Sort keys by length descending to avoid partial replacements
  const keys = Object.keys(TRANSLATION_MAP).sort((a, b) => b.length - a.length);
  
  keys.forEach(en => {
    const ptVal = TRANSLATION_MAP[en];
    // Case insensitive replacement for the key
    const regex = new RegExp(`\\b${en}\\b`, 'gi');
    pt = pt.replace(regex, ptVal);
  });
  
  return pt;
};

data.products.forEach(p => {
  p.content_en = sanitize(p.content || "");
  p.content_pt = translateHTML(p.content_en);
  
  p.description_en = sanitize(p.description || "");
  p.description_pt = translateHTML(p.description_en);
  
  p.title_en = sanitize(p.title || "");
  // We keep title mostly same but can translate common suffixes if needed
  p.title_pt = p.title_en; 
  
  // Remove old fields to clean up
  delete p.content;
  delete p.description;
});

// Also process solutions
if (data.solutions) {
  data.solutions.forEach(s => {
    s.content_en = sanitize(s.content || "");
    s.content_pt = translateHTML(s.content_en);
    delete s.content;
  });
}

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Refactoring and Full Content Translation complete.');
