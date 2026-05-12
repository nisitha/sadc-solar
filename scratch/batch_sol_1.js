const fs = require('fs');
const path = require('path');

const wpDataPath = path.join(__dirname, '../src/data/wp-data.json');
const data = JSON.parse(fs.readFileSync(wpDataPath, 'utf8'));

const batch1Translations = [
  {
    "id": "421",
    "title_pt": "Aquecedor Solar de Água",
    "excerpt_pt": "Solução econômica e de alta eficiência para aquecimento de água, combinando desempenho e autonomia.",
    "content_pt": "<div>Custo-benefício aliado a uma elevada eficiência</div>\nCombina alto desempenho, autonomia, instalação simples e rentabilidade. Produzido com as matérias-primas mais refinadas, sempre de acordo com as normas internacionais, detém todos os certificados que garantem a sua qualidade. O depósito de água AELIOS apresenta coberturas decorativas de plástico ABS à prova de UV que oferecem uma nova abordagem estética.\n\n<span class=\"my_note\">Disponível em:</span>\n<ul>\n \t<li>Circuito fechado ou Circuito aberto</li>\n \t<li>Apenas VIDRO</li>\n \t<li>Dupla ou tripla ação</li>\n</ul>"
  },
  {
    "id": "424",
    "title_pt": "SEMÁFOROS SOLARES",
    "excerpt_pt": "Solução de sinalização de tráfego com alimentação solar e controle sem fio, ideal para cruzamentos sem infraestrutura elétrica.",
    "content_pt": "<h4><strong>Cruzamento Solar</strong></h4>\nEsta solução adota o controlador sem fio de segunda geração Noble OPTO. Por utilizar comunicação sem fio 433M e alimentação por energia solar, é ecológica e economiza energia. Não há necessidade de quebrar a estrada para instalar cabos. É conveniente para a construção. É uma excelente escolha quando a instalação em cruzamentos exige custos de mão de obra elevados e uma alimentação elétrica inconveniente.\n\n<img class=\"alignnone wp-image-426 size-full\" src=\"/uploads/2021/08/solar-02.webp\" alt=\"\" width=\"825\" height=\"610\" />\n\n&nbsp;"
  },
  {
    "id": "478",
    "title_pt": "Gerador de Energia Solar Comercial Fora da Rede.",
    "excerpt_pt": "Desenvolvimento comercial de grande escala em Somerset, com armazenamento de energia e monitoramento avançado.",
    "content_pt": "<p style=\"text-align: left;\">A SADC SOLAR foi chamada para implementar um desenvolvimento comercial fora da rede em Somerset - energia em grande escala. O cliente já tinha decidido que a energia solar era a melhor opção para o local, mas precisava de uma equipe especializada para projetar e instalar um sistema abrangente de energia fora da rede, capaz de armazenar a energia gerada e oferecer controle e monitoramento sofisticados.</p>\n<p style=\"text-align: left;\">O local remoto foi equipado com um conjunto solar de 57kWp, o que foi suficiente para fornecer energia ao negócio em todos os momentos, incluindo noites e períodos sem sol. O sistema fora da rede foi projetado para armazenar o excesso de energia para esses períodos.</p>\n<p style=\"text-align: left;\">Trabalhando em estreita colaboração com o fornecedor solar existente do cliente, a SADC SOLAR projetou um grande sistema fora da rede que consistia em baterias solares especializadas e inversores/carregadores.</p>\n<p style=\"text-align: left;\">Apesar de o local ser remoto e a instalação ser necessária rapidamente, a SADC SOLAR aceitou o desafio e todo o projeto, fabricação e instalação foram concluídos em apenas duas semanas.</p>\n<img class=\"alignnone wp-image-480 size-full\" src=\"/uploads/2021/08/Somerset-3.webp\" alt=\"\" width=\"1000\" height=\"562\" />\n<h4><strong>Solução:</strong></h4>\n<ul>\n \t<li>9x Quattro 48/10000/140</li>\n \t<li>Baterias de 6080Ah a 48V</li>\n \t<li>Conjunto de Painéis Solares de 57Kwp</li>\n \t<li>9x Inversores Solares</li>\n \t<li>Monitor de Bateria BMV600</li>\n \t<li>Estrutura de rack de aço fabricada sob medida</li>\n</ul>\n<img class=\"alignnone wp-image-481 size-full\" src=\"/uploads/2021/08/Somerset-4.webp\" alt=\"\" width=\"1028\" height=\"578\" />\n\n<em><strong>\"Este foi um projeto desafiador, com todo o projeto, fabricação e instalação precisando ser concluídos em apenas duas semanas.\"</strong></em>"
  },
  {
    "id": "484",
    "title_pt": "Sistema Solar Profissional Fora da Rede de 3660W, 48V, 11.0kWh",
    "excerpt_pt": "Kit solar de grande escala ideal para residências fora da rede, com inversor carregador de 5000Va.",
    "content_pt": "Este kit fora da rede de grande escala é ideal para casas sem ligação à rede elétrica.\n\n<strong>Sistema Solar Profissional Fora da Rede de 3600W, 48V, 11.0kWh</strong>\n\nEste kit fora da rede de grande escala é ideal para residências fora da rede. Nas condições de verão do Reino Unido, este sistema poderia gerar aproximadamente 30.0kWh por dia. Este sistema inclui um inversor carregador de 5000Va (4000w).\n\nO Sistema Solar Profissional Fora da Rede de 3600W, 48V, 11.0kWh inclui os seguintes componentes:\n\n12 x Painéis solares domésticos de 300w - O modelo do painel pode variar dependendo da disponibilidade\n\n1 x Inversor carregador solar Victron EasySolar 48/5000\n\n2 x Interruptores isoladores DC\n\n12 x Suportes de montagem em forma de L de alumínio (conjunto de 6)\n\n4 x Conectores tipo MC4 (1 par, macho e fêmea)\n\n2 x Conectores de derivação solar MC4 (Par)\n\n1 x Fusível e porta-fusível\n\n8 x Baterias Rolls S6 L16-SC (6v 487ah)\n\n1 x Interruptor isolador de bateria\n\n7 x Cabos de conexão de bateria\n\n20 metros de cabo solar de núcleo único de 4mm\n\n2 metros de cabo de núcleo único de 25mm\n\n4 x Terminais de cabo\n\n4 x Extensões MC4 de 2 metros\n<h4>Opções de atualização de bateria:</h4>\nRolls S6 460 (6v 415ah) AGM. Isto daria uma capacidade utilizável de 14.0kWh.\n\n4 x Baterias Solares de Lítio Pylon US2000 2.4kWh 48v. Isto daria uma capacidade utilizável de 7.7kWh\n\n5 x Baterias Solares de Lítio Pylon US2000 2.4kWh 48v. Isto daria uma capacidade utilizável de 9.6kWh\n\nAs baterias de lítio aceitam uma taxa de carga significativamente mais elevada, reduzindo assim o tempo de funcionamento do gerador, se houver um presente no sistema."
  },
  {
    "id": "487",
    "title_pt": "Sistema Solar Profissional Fora da Rede de 2700W, 48V, 10.0kWh",
    "excerpt_pt": "Kit solar de grande escala para residências ecológicas fora da rede, gerando até 23.0kWh por dia.",
    "content_pt": "<strong>Sistema Solar Profissional Fora da Rede de 2700W, 48V, 10.0kWh</strong>\n\nEste kit fora da rede de grande escala é ideal para casas fora da rede/ecológicas. Nas condições de verão do Reino Unido, este sistema poderia gerar aproximadamente 23.0kWh por dia. Este sistema inclui um inversor carregador de 3000Va (2400w).\n\nO Sistema Solar Profissional Fora da Rede de 2700W, 48V, 10.0kWh inclui os seguintes componentes:\n\n9 x Painéis solares domésticos de 300w - O modelo do painel pode variar dependendo da disponibilidade\n\n1 x Inversor carregador solar Victron EasySolar 48/3000\n\n2 x Interruptores isoladores DC\n\n9 x Suportes de montagem em forma de L de alumínio (conjunto de 6)\n\n4 x Conectores tipo MC4 (1 par, macho e fêmea)\n\n1 x Conectores de derivação solar MC4 (Par)\n\n8 x Grampos de terminal de bateria (1 par, positivo e negativo)\n\n7 x Cabos de conexão de bateria\n\n1 x Fusível e porta-fusível\n\n8 x Baterias Rolls S6 L16-HC (6v 487ah)\n\n1 x Interruptor isolador de bateria\n\n20 metros de cabo solar de núcleo único de 4mm\n\n2 metros de cabo de núcleo único de 16mm\n\n4 x Terminais de cabo\n\n4 x Extensões MC4 de 2 metros\n<h4>Opções de atualização de bateria:</h4>\nRolls S6 460 (6v 415ah) AGM. Isto daria uma capacidade utilizável de 14.0kWh.\n\n4 x Baterias Solares de Lítio Pylon US2000 2.4kWh 48v. Isto daria uma capacidade utilizável de 7.7kWh\n\n5 x Baterias Solares de Lítio Pylon US2000 2.4kWh 48v. Isto daria uma capacidade utilizável de 9.6kWh\n\nAs baterias de lítio aceitam uma taxa de carga significativamente mais elevada, reduzindo assim o tempo de funcionamento do gerador, se houver um presente no sistema."
  },
  {
    "id": "496",
    "title_pt": "Carregamento de VE Fora da Rede",
    "excerpt_pt": "Instalações de carregamento de veículos elétricos personalizadas e independentes da rede elétrica.",
    "content_pt": "<strong>Instalações personalizadas de carregamento de veículos elétricos fora da rede</strong>\n\nPodemos projetar, construir e instalar estações de carregamento de veículos elétricos fora da rede personalizadas. Carports (coberturas para automóveis) com painéis solares podem ser construídos para carregar um conjunto de baterias de armazenamento que, em seguida, descarrega para o seu carro elétrico. Por vezes, os carros elétricos são estacionados em locais que não possuem ligação à rede elétrica.\n\n<img class=\"alignnone size-medium wp-image-498\" src=\"/uploads/2021/08/system-B-1-298x300.webp\" alt=\"\" width=\"298\" height=\"300\" />\n\n<img class=\"alignnone size-medium wp-image-499\" src=\"/uploads/2021/08/system-C-298x300.webp\" alt=\"\" width=\"298\" height=\"300\" />\n\n&nbsp;"
  }
];

batch1Translations.forEach(trans => {
  const item = data.solutions.find(s => s.id === trans.id);
  if (item) {
    item.title_pt = trans.title_pt;
    item.excerpt_pt = trans.excerpt_pt;
    item.content_pt = trans.content_pt;
    if (trans.features_pt) item.features_pt = trans.features_pt;
  }
});

fs.writeFileSync(wpDataPath, JSON.stringify(data, null, 2));
console.log('Batch 1 translations applied.');
