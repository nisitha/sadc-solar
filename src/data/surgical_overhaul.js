const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'wp-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// High-Fidelity PT-AO Translation Map for Technical Content
const technicalMap = {
    // Categories & Types
    "Off Grid Solar System Packages": "Pacotes de Sistemas Solares Off-Grid",
    "On-grid Solar Inverters": "Inversores Solares On-grid",
    "Solar Panels": "Painéis Solares",
    "Solar Batteries": "Baterias Solares",
    "Turnkey Solutions": "Soluções Chave na Mão",
    
    // Feature Titles
    "High Yield": "Alto Rendimento",
    "Smart O&M": "Operação e Manutenção Inteligente",
    "Low Cost": "Baixo Custo",
    "Proven Safety": "Segurança Comprovada",
    "Efficient": "Eficiente",
    "Flexible": "Flexível",
    "Innovative": "Inovador",
    "Reliable": "Fiável",
    "Convenient": "Conveniente",
    "High Efficiency": "Alta Eficiência",
    "User Friendly": "Fácil de Usar",
    "Real-time Monitoring": "Monitorização em Tempo Real",
    "Safety First": "Segurança em Primeiro Lugar",
    "Off-grid Ready": "Pronto para Off-grid",
    
    // Common Phrases in content
    "Designed for commercial usage": "Projectado para uso comercial",
    "three-phase inverter": "inversor trifásico",
    "variable weather conditions": "condições meteorológicas variáveis",
    "transformerless device": "dispositivo sem transformador",
    "efficiency ratings of up to": "índices de eficiência de até",
    "wide input voltage range": "ampla gama de tensão de entrada",
    "suitable to low power installations": "adequado para instalações de baixa potência",
    "fully-integrated DC switch": "interruptor DC totalmente integrado",
    "remote controlled DC disconnect function": "função de desconexão DC controlada remotamente",
    "True three-phase bridge topology": "Topologia de ponte trifásica real",
    "Transformerless topology": "Topologia sem transformador",
    "specific grid codes": "códigos de rede específicos",
    "can be selected in the field": "podem ser seleccionados no terreno",
    "Dual input section": "Secção de entrada dupla",
    "independent MPPT": "MPPT independente",
    "optimal energy harvesting": "colheita de energia ideal",
    "sub-arrays oriented in different directions": "sub-arrays orientados em diferentes direcções",
    "Efficiency of 98.0 %": "Eficiência de 98,0 %",
    "Peak efficiency of 98.7 %": "Eficiência de pico de 98,7 %",
    "DC input voltage of up to 1000 V": "Tensão de entrada DC de até 1000 V",
    "Optimum system design": "Projecto de sistema optimizado",
    "active OptiCool temperature management": "gestão activa de temperatura OptiCool",
    "Straightforward system visualization": "Visualização simples do sistema",
    "Integrated graphic display": "Ecrã gráfico integrado",
    "daily trends": "tendências diárias",
    "Efficient parameterization": "Parametrização eficiente",
    "remote monitoring via SMA Cluster Controlador": "monitorização remota via SMA Cluster Controlador",
    "medium-sized and large-scale systems": "sistemas de médio e grande porte",
    "All systems are prebuilt and tested": "Todos os sistemas são pré-construídos e testados",
    "You will need to supply a backup generator": "Será necessário fornecer um gerador de reserva",
    "as part of the off grid system": "como parte do sistema off-grid",
    "Battery expandable down the track": "Bateria expansível no futuro",
    "add more 4 kWh batteries later": "adicione mais baterias de 4 kWh posteriormente",
    "Battery cabinet suits 3 batteries": "Armário de baterias para 3 baterias",
    "pre-arrange a 4 battery cabinet": "pré-organizar um armário para 4 baterias",
    "solar panels": "painéis solares",
    "crystalline PERC panels": "painéis PERC cristalinos",
    "cables": "cabos",
    "mounting system": "sistema de montagem",
    "monitoring": "monitorização",
    "highlights": "Destaques",
    "Start saving costs": "Comece a poupar custos",
    "meet most of your requirements": "atender à maioria dos seus requisitos",
    "connect the inverter to the transformer on site": "ligar o inversor ao transformador no local",
    "additional MPP trackers": "trackers MPP adicionais",
    "grid and plant protection": "protecção de rede e da planta",
    "without the usual costs": "sem os custos habituais",
    "necessary section switches": "interruptores de secção necessários",
    "activated directly by the Powador-protect control unit": "activados directamente pela unidade de controlo Powador-protect",
    "suitable for both 1500 V and 1000 V PV modules": "adequado para módulos fotovoltaicos de 1500 V e 1000 V",
    "protect against overvoltage": "proteger contra sobretensão",
    "innovative silicon carbide power transistors": "transístores de potência de carboneto de silício inovadores",
    "extreme thermal load capacity": "capacidade de carga térmica extrema",
    "desert inverter": "inversor de deserto",
    "late power derating": "derating de potência tardio",
    "thermal reserve": "reserva térmica",
    "invested in 15 percent more power": "investido em 15 por cento mais potência",
    "Simple maintenance": "Manutenção simples",
    "at a glance": "num relance",
    "Cost-saving": "Poupança de custos",
    "integrated section switches": "interruptores de secção integrados",
    "Highest efficiency": "Eficiência mais alta",
    "overload capacity": "capacidade de sobrecarga",
    "silicon carbide technology": "tecnologia de carboneto de silício",
    "High power density": "Alta densidade de potência",
    "easy handling and logistics": "manuseio e logística fáceis",
    "Special properties for extreme environmental conditions": "Propriedades especiais para condições ambientais extremas",
    "Lean commissioning": "Comissionamento simplificado",
    "updates via remote services": "actualizações via serviços remotos",
    "Decentralised design": "Projecto descentralizado",
    "Virtual Central": "Central Virtual",
    "concept possible": "conceito possível",
    "HIGH YIELD": "ALTO RENDIMENTO",
    "Compatible with bifacial module": "Compatível com módulo bifacial",
    "Built-in PID recovery function": "Função de recuperação PID integrada",
    "Touch free commissioning": "Comissionamento sem toque",
    "remote firmware upgrade": "actualização remota de firmware",
    "Online IV curve scan and diagnosis": "Digitalização e diagnóstico de curva IV online",
    "Fuse free design": "Projecto sem fusíveis",
    "smart string current monitoring": "monitorização inteligente de corrente de string",
    "Compatible with Al and Cu AC cables": "Compatível com cabos AC de Al e Cu",
    "DC 2 in 1 connection enabled": "Ligação DC 2 em 1 activada",
    "Q at night function": "Função Q à noite",
    "IP66 and C5 protection": "Protecção IP66 e C5",
    "Type II SPD for both DC and AC": "SPD Tipo II para DC e AC",
    "Compliant with global safety and grid code": "Em conformidade com as normas globais de segurança e rede",
};

function deepTranslate(text) {
    if (!text) return "";
    let result = text;
    
    // UTF-8 Sanitization
    result = result.replace(/Â°/g, '°');
    result = result.replace(/â€³/g, '"');
    result = result.replace(/â€“/g, '-');
    result = result.replace(/Ã—/g, 'x');
    result = result.replace(/\"‹/g, ''); // Fix special character

    // PT-AO Core Spelling
    result = result.replace(/\bProjeto\b/g, 'Projecto');
    result = result.replace(/\bprojetos\b/g, 'projectos');
    result = result.replace(/\bprojeto\b/g, 'projecto');
    result = result.replace(/\bconectividade\b/g, 'conectividade');

    // Semantic Mapping
    for (const [en, pt] of Object.entries(technicalMap)) {
        const regex = new RegExp(`(?<![a-zA-Z])${en}(?![a-zA-Z])`, 'gi');
        result = result.replace(regex, pt);
    }

    return result;
}

data.products = data.products.map(p => {
    // Translate Core Fields
    const title_pt = deepTranslate(p.title_en || p.title);
    const content_pt = deepTranslate(p.content_en || p.content);
    
    // Translate Features (Critical Requirement)
    let features = p.features;
    if (features && Array.isArray(features)) {
        features = features.map(f => ({
            ...f,
            title_pt: deepTranslate(f.title),
            description_pt: deepTranslate(f.description)
        }));
    }

    return {
        ...p,
        title_pt,
        content_pt,
        features
    };
});

// Translate Solutions
if (data.solutions) {
    data.solutions = data.solutions.map(s => ({
        ...s,
        title_pt: deepTranslate(s.title_en || s.title),
        content_pt: deepTranslate(s.content_en || s.content),
        excerpt_pt: deepTranslate(s.excerpt_en || s.excerpt)
    }));
}

// Translate Pages
if (data.pages) {
    data.pages = data.pages.map(pg => ({
        ...pg,
        title_pt: deepTranslate(pg.title_en || pg.title),
        content_pt: deepTranslate(pg.content_en || pg.content)
    }));
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log("Surgical PT-AO Overhaul Completed.");
