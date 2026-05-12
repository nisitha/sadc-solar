const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'wp-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Enhanced PT-AO Mapping
const mapping = {
  "Efficiency": "Eficiência",
  "Power": "Potência",
  "Voltage": "Tensão",
  "Current": "Corrente",
  "Weight": "Peso",
  "Dimensions": "Dimensões",
  "Monitoring": "Monitorização",
  "Reliability": "Fiabilidade",
  "Safety": "Segurança",
  "Safe": "Seguro",
  "Project": "Projecto",
  "Engineering": "Engenharia",
  "Design": "Projecto",
  "Infrastructure": "Infraestrutura",
  "Sustainable": "Sustentável",
  "Renewable": "Renovável",
  "Solar": "Solar",
  "Panel": "Painel",
  "Inverter": "Inversor",
  "Battery": "Bateria",
  "Lithium": "Lítio",
  "Off-grid": "Off-grid (Sistemas Isolados)",
  "On-grid": "On-grid (Ligado à Rede)",
  "Turnkey": "Chave na Mão",
  "Solution": "Solução",
  "Product": "Produto",
  "Management": "Gestão",
  "Control": "Controlo",
  "System": "Sistema",
  "Quality": "Qualidade",
  "High": "Alta",
  "Low": "Baixa",
  "Advanced": "Avançada",
  "Modern": "Moderna",
  "Innovative": "Inovadora",
  "Remote": "Remota",
  "Real-time": "Tempo Real",
  "Operation": "Operação",
  "Maintenance": "Manutenção",
  "Support": "Suporte",
  "Service": "Serviço",
  "Contact": "Contacto",
  "Proposal": "Proposta",
  "Quote": "Orçamento",
  "Standard": "Padrão",
  "Compliance": "Conformidade",
  "Requirement": "Requisito",
  "Regulation": "Regulamentação",
  "Angola": "Angola",
  "Luanda": "Luanda",
  "Global": "Global",
  "Market": "Mercado",
  "Industry": "Indústria",
  "Leader": "Líder",
  "Pioneer": "Pioneira",
  "Standard": "Norma",
  "Certification": "Certificação",
  "Guaranteed": "Garantida",
  "Warranty": "Garantia",
  "Protection": "Protecção",
  "Outdoor": "Exterior",
  "Indoor": "Interior",
  "Climate": "Clima",
  "Harsh": "Severo",
  "Extreme": "Extremo",
  "Reliable": "Fiável",
  "Efficient": "Eficiente",
  "Flexible": "Flexível",
  "Convenient": "Conveniente",
  "Smart": "Inteligente",
  "Proactive": "Proactiva",
  "Optimization": "Optimização",
  "Performance": "Desempenho",
  "Yield": "Rendimento",
  "Generation": "Geração",
  "Transition": "Transição",
  "Transformation": "Transformação",
  "Impact": "Impacto",
  "Success": "Sucesso",
  "Client": "Cliente",
  "Partner": "Parceiro",
  "Institutional": "Institucional",
  "Financing": "Financiamento",
  "Bank": "Banco",
  "Independence": "Independência",
  "Security": "Segurança",
  "Environment": "Ambiente",
  "Responsibility": "Responsabilidade",
  "Ethics": "Ética",
  "Transparency": "Transparência",
  "Integrity": "Integridade",
  "Commitment": "Compromisso",
  "Specialization": "Especialização",
  "Technological": "Tecnológica",
  "Excellence": "Excelência",
  "Vision": "Visão",
  "Mission": "Missão",
  "Values": "Valores",
  "Future": "Futuro",
  "Sustainability": "Sustentabilidade",
  "Angola Energia 2025": "Angola Energia 2025",
};

function translate(text) {
  if (!text) return "";
  let result = text;
  
  // Sanitization
  result = result.replace(/Â°/g, '°');
  result = result.replace(/â€³/g, '"');
  result = result.replace(/â€“/g, '-');
  result = result.replace(/Ã—/g, 'x');

  // PT-AO Spelling
  result = result.replace(/\bProjeto\b/g, 'Projecto');
  result = result.replace(/\bprojetos\b/g, 'projectos');
  result = result.replace(/\bconetividade\b/g, 'conectividade');

  // Technical Map
  for (const [en, pt] of Object.entries(mapping)) {
    const regex = new RegExp(`\\b${en}\\b`, 'g');
    result = result.replace(regex, pt);
  }

  return result;
}

// Deep Overhaul
data.products = data.products.map(p => ({
  ...p,
  title_pt: translate(p.title_en || p.title),
  content_pt: translate(p.content_en || p.content),
  description_pt: translate(p.description_en || p.description),
  specifications_pt: translate(p.specifications_en || p.specifications)
}));

if (data.solutions) {
  data.solutions = data.solutions.map(s => ({
    ...s,
    title_pt: translate(s.title_en || s.title),
    content_pt: translate(s.content_en || s.content),
    excerpt_pt: translate(s.excerpt_en || s.excerpt)
  }));
}

if (data.news) {
  data.news = data.news.map(n => ({
    ...n,
    title_pt: translate(n.title_en || n.title),
    content_pt: translate(n.content_en || n.content),
    summary_pt: translate(n.summary_en || n.summary)
  }));
}

if (data.pages) {
  data.pages = data.pages.map(pg => ({
    ...pg,
    title_pt: translate(pg.title_en || pg.title),
    content_pt: translate(pg.content_en || pg.content)
  }));
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log("PT-AO Overhaul Completed.");
