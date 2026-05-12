const fs = require('fs');
const path = require('path');

const dataFile = 'd:/Antigravity Project/sadc/frontend/src/data/wp-data.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

// Helper for PT-AO translations
const translateToPTAO = (text) => {
  if (!text) return "";
  
  // Custom dictionary for common terms in solar energy and business for PT-AO
  let translated = text;
  
  // Common Technical / Business replacements for PT-AO
  const replacements = [
    // Standard PT-AO/PT-PT terms vs PT-BR
    [/Monitoramento/g, "Monitorização"],
    [/Controle/g, "Controlo"],
    [/Equipe/g, "Equipa"],
    [/Usuário/g, "Utilizador"],
    [/Software/g, "Software"], // Usually kept
    [/Projetos/g, "Projectos"],
    [/Contate-nos/g, "Contacte-nos"],
    [/Inovação/g, "Inovação"],
    [/Energia/g, "Energia"],
    [/Qualidade/g, "Qualidade"],
    [/Sustentabilidade/g, "Sustentabilidade"],
    
    // Solar specific
    [/High Yield/gi, "Alto Rendimento"],
    [/Smart O&M/gi, "Operação e Manutenção Inteligente"],
    [/Low Cost/gi, "Baixo Custo"],
    [/Proven Safety/gi, "Segurança Comprovada"],
    [/Efficient/gi, "Eficiente"],
    [/Flexible/gi, "Flexível"],
    [/Convenient/gi, "Conveniente"],
    [/Innovative/gi, "Inovador"],
    [/Robust/gi, "Robusto"],
    [/Easy to Use/gi, "Fácil de Utilizar"],
    [/Turnkey/gi, "Chave na Mão"],
    [/Solar Water Pumps/gi, "Bombas de Água Solares"],
    [/Solar Street Lights/gi, "Iluminação Pública Solar"],
    [/Wiring and Cables/gi, "Cablagem e Cabos"],
    [/On-grid/gi, "On-grid (Ligado à Rede)"],
    [/Off-grid/gi, "Off-grid (Sistemas Isolados)"],
    [/Deep Cycle/gi, "Ciclo Profundo"],
    [/Inverter/gi, "Inversor"],
    [/Charger/gi, "Carregador"],
    [/Power/gi, "Potência"],
    [/Voltage/gi, "Tensão"],
    [/Current/gi, "Corrente"],
    [/Grid/gi, "Rede Eléctrica"],
    [/Battery/gi, "Bateria"],
    [/Efficiency/gi, "Eficiência"],
    [/Warranty/gi, "Garantia"],
    [/Reliable/gi, "Fiável"],
    [/Maintenance/gi, "Manutenção"],
    [/Installation/gi, "Instalação"],
    
    // Business/Contextual
    [/About Us/gi, "Sobre Nós"],
    [/Latest News/gi, "Últimas Notícias"],
    [/Contact Information/gi, "Informações de Contacto"],
    [/Headquarters/gi, "Sede Central"],
    [/Solutions/gi, "Soluções"],
    [/Products/gi, "Produtos"],
    [/Project realized/gi, "Projecto realizado"],
    [/Successful delivery/gi, "Entrega bem-sucedida"],
    [/Angola/g, "Angola"],
    [/Luanda/g, "Luanda"],
    [/Premium/gi, "Premium"],
    [/High-end/gi, "De alta gama"],
    [/State of the art/gi, "Estado da arte"],
    [/Technologically mature/gi, "Tecnologicamente maduro"],
    [/Industry leader/gi, "Líder da indústria"],
    
    // Sentences (partial matches)
    [/Now Available/gi, "Agora Disponível"],
    [/Learn more/gi, "Saiba mais"],
    [/Read more/gi, "Ler mais"],
    [/View details/gi, "Ver detalhes"],
    [/Request proposal/gi, "Solicitar proposta"],
    [/Download datasheet/gi, "Baixar ficha técnica"],
    [/Core overview/gi, "Visão geral central"],
    [/Advanced features/gi, "Funcionalidades avançadas"],
    [/Technical specifications/gi, "Especificações técnicas"],
    [/Operating temperature/gi, "Temperatura de funcionamento"],
    [/Protection level/gi, "Nível de protecção"],
    [/Output voltage/gi, "Tensão de saída"],
    [/Input voltage/gi, "Tensão de entrada"],
    [/Continuous power/gi, "Potência contínua"],
    [/Weight/gi, "Peso"],
    [/Dimensions/gi, "Dimensões"],
    [/Models/gi, "Modelos"],
    [/Compatibility/gi, "Compatibilidade"],
    [/Application/gi, "Aplicação"],
    [/Users benefit from/gi, "Os utilizadores beneficiam de"],
    [/Guaranteed yield/gi, "Rendimento garantido"],
    [/Rapid amortization/gi, "Amortização rápida"],
    [/Compact design/gi, "Design compacto"],
    [/Smart management/gi, "Gestão inteligente"],
    [/Real-time tracking/gi, "Acompanhamento em tempo real"]
  ];

  replacements.forEach(([regex, replacement]) => {
    translated = translated.replace(regex, replacement);
  });

  return translated;
};

const processItems = (items) => {
  if (!items) return;
  items.forEach(item => {
    // Ensure all base fields have _en and _pt
    if (item.title && !item.title_en) item.title_en = item.title;
    if (item.content && !item.content_en) item.content_en = item.content;
    if (item.excerpt && !item.excerpt_en) item.excerpt_en = item.excerpt;
    if (item.description && !item.description_en) item.description_en = item.description;
    
    // Perform PT-AO translation
    item.title_pt = translateToPTAO(item.title_en || "");
    item.content_pt = translateToPTAO(item.content_en || "");
    item.excerpt_pt = translateToPTAO(item.excerpt_en || "");
    item.description_pt = translateToPTAO(item.description_en || "");
    
    // Special handling for News and Solutions
    if (item.summary) {
      item.summary_en = item.summary;
      item.summary_pt = translateToPTAO(item.summary_en);
    }
    
    // Clean up old fields
    delete item.title;
    delete item.content;
    delete item.excerpt;
    delete item.description;
    delete item.summary;
  });
};

processItems(data.products);
processItems(data.solutions);
processItems(data.news);
processItems(data.pages);

// Also categories translation mapping if we need it in data
if (data.categories) {
  data.categories = data.categories.map(cat => ({
    name_en: cat,
    name_pt: translateToPTAO(cat)
  }));
}

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Angolan Portuguese (PT-AO) Bilingual Overhaul Complete.');
