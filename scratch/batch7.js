const fs = require('fs');
const path = require('path');

const translatedData = [
  {
    "id": "437",
    "title_pt": "Estruturas para baterias",
    "excerpt_pt": "",
    "content_pt": "<p>A carteira de produtos inclui estruturas de bateria padrão e anti-sísmicas (em conformidade com o Código de Construção Uniforme, Zona Sísmica 4). Estas foram projectadas para todos os tipos de células na gama e são fornecidas desmontadas para permitir uma fácil instalação. As estruturas construídas para o efeito são robustas, adaptáveis e proporcionam uma boa protecção alcalina.</p>\n<p>As dimensões são fornecidas abaixo para a gama de layouts de estruturas. Os comprimentos das estruturas estão disponíveis em incrementos de 150 mm, desde 600 mm até um máximo de 6.000 mm. Calcule o comprimento necessário utilizando o comprimento da célula na página 5, 10 ou 15 para ligação normal, e utilizando a largura da célula de 195 mm para ligação transversal.</p>",
    "features_pt": []
  },
  {
    "id": "440",
    "title_pt": "Armários para Baterias",
    "excerpt_pt": "",
    "content_pt": "<p>Sendo uma organização de renome no mercado, estamos empenhados em oferecer uma gama abrangente de <b>Armários para Baterias</b> aos nossos clientes globais. Os armários de bateria oferecidos por nós estão disponíveis em vários tamanhos, como de 17U de Altura a 45U de Altura, 300mm a 1200mm de Profundidade e 600mm a 1200mm de largura. Estes armários são fabricados utilizando matéria-prima de qualidade superior e tecnologia sofisticada em conformidade com as normas industriais certificadas nos fornecedores. Para entregar uma gama isenta de defeitos, estes produtos são verificados em relação a vários parâmetros de qualidade estabelecidos pela indústria internacional.</p>\n<b>Acessórios Padrão:</b> Tabuleiro de Fixação de alta resistência, Gestão de distribuição de energia, Ventoinhas AC/DC, Gestão de Cabos, Luz fluorescente\n<b>Construção:</b> Aço CRC de 1,2mm/1,5mm (conforme requisito) de espessura, Ângulos de montagem de equipamento e partição de 2,0mm de espessura, gancho de elevação de alta resistência\n<b>Capacidade de Carga Estática:</b> até 750 Kg - 1000 kg\n",
    "features_pt": [
      {
        "title_pt": "Características",
        "items_pt": [
          "Elevada capacidade de suporte de carga",
          "Vida útil prolongada",
          "Manutenção fácil"
        ]
      }
    ]
  },
  {
    "id": "443",
    "title_pt": "Armário de Bateria 110-220VDC \"Grande\"",
    "excerpt_pt": "",
    "content_pt": "<p>O armário de bateria foi projectado para condições difíceis e possui classificação de protecção de entrada IP 43/44. Além disso, o armário está equipado com um amortecedor de vibrações opcional, a fim de evitar o efeito da vibração nos componentes. Estabilizadores horizontais que protegem as baterias de se deslocarem dentro do armário.</p>\n<strong>120Ah - 190Ah</strong>\n\n<ul class=\"modern-list\">\n<ul class=\"modern-list\">\n<li>Acesso frontal</li>\n<li>Elevado grau IP</li>\n<li>Compartimento de bateria escalável - Máx. 18 unidades de 190Ah</li>\n<li>Monitorização de bateria incorporada</li>\n<li>2 x interruptor de fusível HH1/250A</li>\n\n",
    "features_pt": []
  },
  {
    "id": "446",
    "title_pt": "Armário de Bateria Clássico Easy UPS 3M com baterias, IEC, 2 x 1000mm de largura - Config E",
    "excerpt_pt": "",
    "content_pt": "<div class=\"features__text-container\">Armário de Bateria Clássico Easy UPS 3M com baterias, IEC, 2 x 1000mm de largura - Config E</div>\n<div class=\"features__text-container\">Armário de bateria que inclui baterias e disjuntor de bateria.</div>\n<div>\n<h4 class=\"tab-content-header__title\">Especificações</h4>\n<div class=\"technical-specification-tab\">\n<div class=\"technical-specification-tab__header\">\n<p>Baterias e Autonomia</p>\n\n<li class=\"technical-specification-tab__title\">Tipo de bateria: VRLA</li>\n<li class=\"technical-specification-tab__title\">Montagem da bateria: Armário de bateria fechado</li>\n\n</div>\n</div>\n<div class=\"technical-specification-tab\">\n<div class=\"technical-specification-tab__header\">\n<h4 class=\"technical-specification-tab__title\">Físico</h4>\n</div>\n\n<li class=\"technical-content-block\">Altura Máxima: 1895MM, 189.5CM</li>\n<li class=\"technical-content-block\">Largura Máxima: 2004MM, 200.4CM</li>\n<li class=\"technical-content-block\">Profundidade Máxima: 845MM, 84.5CM</li>\n<li class=\"technical-content-block\">Peso Líquido: 2542.0KG</li>\n<li class=\"technical-content-block\">Peso de Envio: 2582.0KG</li>\n<li class=\"technical-content-block\">Altura de Envio: 1980MM, 198.0CM</li>\n<li class=\"technical-content-block\">Largura de Envio: 2260MM, 226.0CM</li>\n<li class=\"technical-content-block\">Profundidade de Envio: 970MM, 97.0CM</li>\n\n</div>\n<div class=\"technical-specification-tab\">\n<div class=\"technical-specification-tab__header\">\n<h4 class=\"technical-specification-tab__title\">Ambiental</h4>\n</div>\n\n<li class=\"technical-content-block\">Temperatura de Operação: 0 - 40 °C</li>\nTemperatura de Armazenamento: -15 - 40 °C\n\n</div>\n</div>",
    "features_pt": []
  },
  {
    "id": "450",
    "title_pt": "Armários / Invólucros para Baterias",
    "excerpt_pt": "",
    "content_pt": "<h4>Invólucros para Baterias e Carregadores</h4>\n<span class=\"semibold-class\">Invólucros Personalizados NEMA 1, 3R e 12</span>\n<p>A Exponential Power projecta e constrói invólucros DC personalizados para sistemas de baterias e/ou carregadores. Um armário típico integra baterias, estruturas e carregadores num invólucro com classificação para interior (NEMA 1 ou 12) ou exterior (NEMA 3R). Existem muitas opções e acessórios diferentes disponíveis, tornando cada sistema único e construído de acordo com as necessidades específicas do seu local. Podem ser construídos com baterias, combinações de bateria/carregador e até painéis de distribuição DC. As baterias podem ser instaladas em gavetas extraíveis ou prateleiras fixas.</p>\n\n<span class=\"textbold\">NEMA Tipo 1</span> - Os invólucros destinam-se a utilização interior para proporcionar um grau de protecção ao pessoal contra o acesso a partes perigosas e para proporcionar um grau de protecção do equipamento dentro do invólucro contra a entrada de objectos estranhos sólidos (queda de sujidade). Este é um armário interior básico que incluirá ventilação para as baterias.\n<span class=\"textbold\">NEMA Tipo 3R</span> - Os invólucros destinam-se a utilização interior ou exterior para proporcionar um grau de protecção ao pessoal contra o acesso a partes perigosas; para proporcionar um grau de protecção do equipamento dentro do invólucro contra a entrada de objectos estranhos sólidos (queda de sujidade); para proporcionar um grau de protecção relativamente a efeitos nocivos no equipamento devido à entrada de água (chuva, granizo, neve); e que não serão danificados pela formação externa de gelo no invólucro. Este é um armário exterior típico que exigirá protecções contra a chuva para as aberturas de ventilação.\n<span class=\"textbold\">NEMA Tipo 12</span> - Os invólucros destinam-se a utilização interior para proporcionar um grau de protecção ao pessoal contra o acesso a partes perigosas; para proporcionar um grau de protecção do equipamento dentro do invólucro contra a entrada de objectos estranhos sólidos (queda de sujidade e poeira circulante, cotão, fibras e partículas); e para proporcionar um grau de protecção relativamente a efeitos nocivos no equipamento devido à entrada de água (gotejamento e salpicos ligeiros). Este armário exigirá aberturas de ventilação NEMA 12 e/ou ventoinhas de arrefecimento.\n<h4>Tamanhos Comuns de Invólucros de Bateria</h4>\n<h4>Dados Técnicos</h4>\n<div class=\"modern-table-container\"><table class=\"modern-table\">\n<tbody>\n<tr>\n<th class=\"textbold\">Peça N.º</th>\n<th class=\"textbold\">\n<div >N.º de Portas</div></th>\n<th class=\"textbold\">\n<div >Comprimento (pol.) [c/ abas de chuva]</div></th>\n<th class=\"textbold\">\n<div >Largura/Profundidade (pol.)</div></th>\n<th class=\"textbold\">\n<div >Altura (pol.) [c/ pés de 6\" e olhais]</div></th>\n<th class=\"textbold\">\n<div >Tam. Ventilação/Ventoinha (pol.)</div></th>\n</tr>\n<tr v>\n<td>SBS-603624STD</td>\n<td>\n<div >1</div></td>\n<td>\n<div >36 [45]</div></td>\n<td>\n<div >24</div></td>\n<td>\n<div >60 [67.75]</div></td>\n<td>\n<div >6</div></td>\n</tr>\n<tr v>\n<td>SBS-723624STD</td>\n<td>\n<div >1</div></td>\n<td>\n<div >36 [44]</div></td>\n<td>\n<div >24</div></td>\n<td>\n<div >72 [79.75]</div></td>\n<td>\n<div >6</div></td>\n</tr>\n<tr v>\n<td>SBS-723636STD</td>\n<td>\n<div >1</div></td>\n<td>\n<div >36 [45]</div></td>\n<td>\n<div >36</div></td>\n<td>\n<div >72 [79.75]</div></td>\n<td>\n<div >6</div></td>\n</tr>\n<tr v>\n<td>SBS-903636STD</td>\n<td>\n<div >1</div></td>\n<td>\n<div >36 [45]</div></td>\n<td>\n<div >36</div></td>\n<td>\n<div >90 [97.75]</div></td>\n<td>\n<div >6</div></td>\n</tr>\n<tr>\n<td>SBS-724824STD</td>\n<td>\n<div >1</div></td>\n<td>\n<div >48 [57]</div></td>\n<td>\n<div >24</div></td>\n<td>\n<div >72 [79.75]</div></td>\n<td>\n<div >6</div></td>\n</tr>\n<tr>\n<td>SBS-724836STD</td>\n<td>\n<div >1</div></td>\n<td>\n<div >48 [57]</div></td>\n<td>\n<div >36</div></td>\n<td>\n<div >72 [79.75]</div></td>\n<td>\n<div >6</div></td>\n</tr>\n<tr v>\n<td>SBS-726024STD</td>\n<td>\n<div >1</div></td>\n<td>\n<div >60 [69]</div></td>\n<td>\n<div >24</div></td>\n<td>\n<div >72 [79.75]</div></td>\n<td>\n<div >6</div></td>\n</tr>\n<tr v>\n<td>SBS-726036STD*</td>\n<td>\n<div >1</div></td>\n<td>\n<div >60 [69]</div></td>\n<td>\n<div >36</div></td>\n<td>\n<div >72 [79.75]</div></td>\n<td>\n<div >6</div></td>\n</tr>\n<tr>\n<td>SBS-907224STD*</td>\n<td>\n<div >2</div></td>\n<td>\n<div >72 [81]</div></td>\n<td>\n<div >24</div></td>\n<td>\n<div >90 [97.75]</div></td>\n<td>\n<div >6</div></td>\n</tr>\n<tr>\n<td>SBS-907236STD*</td>\n<td>\n<div >2</div></td>\n<td>\n<div >72 [81]</div></td>\n<td>\n<div >36</div></td>\n<td>\n<div >90 [97.75]</div></td>\n<td>\n<div >6</div></td>\n</tr>\n<tr v>\n<td>SBS-8611230STD*</td>\n<td>\n<div >3</div></td>\n<td>\n<div >112 [121]</div></td>\n<td>\n<div >30</div></td>\n<td>\n<div >86 [93.75]</div></td>\n<td>\n<div >10</div></td>\n</tr>\n<tr>\n<td>SBS-8614930STD*</td>\n<td>\n<div >4</div></td>\n<td>\n<div >149 [158]</div></td>\n<td>\n<div >30</div></td>\n<td>\n<div >86 [93.75]</div></td>\n<td>\n<div >10</div></td>\n</tr>\n</tbody>\n</table></div>\n\n<strong><span class=\"textbold\">Grelha NEMA 1 e kit de filtro de alumínio lavável</span></strong> - Grelha de aço inoxidável com parafusos de orelhas. Disponível nos tamanhos de 6\" e 10\".\n<strong><span class=\"textbold\">Subpainel do carregador e instalação do carregador</span></strong> - Subpainéis de tamanho total ou meio podem ser instalados dentro do invólucro para montar o carregador e outro equipamento. Esta funcionalidade é comum quando um carregador é pré-instalado dentro de um invólucro. O subpainel é tipicamente montado nos lados dos armários e pode estender-se para a frente ou para trás do armário.\n<strong><span class=\"textbold\">Kit de suporte de chão</span> (necessário para aplicações NEMA Tipo 3R)</strong> - O kit inclui dois suportes. Armários maiores requerem dois kits (4 suportes). Suportes de 6\"A são padrão e suportes de 12\" são opcionais.\n<strong><span class=\"textbold\">Montagem e instalação da estrutura</span></strong> - A Exponential Power montará e instalará a estrutura de bateria dentro do armário para que, uma vez colocado o invólucro, este possa ser carregado com as baterias. Para montar permanentemente a estrutura, é necessário o kit de suporte de chão.\n<strong><span class=\"textbold\">Cablagem DC</span></strong> - A Exponential Power fornecerá e ligará os cabos DC ao carregador e fornecerá o cabo, terminais e capas isolantes adequados necessários para ligar à bateria fornecida",
    "features_pt": [
      {
        "title_pt": "Características Típicas",
        "items_pt": [
          "Aço carbono (0.104 - 0.125\")",
          "Acabamento em pó cinza ANSI-61",
          "Costuras continuamente soldadas e polidas",
          "Olhais de elevação para fácil manuseamento",
          "Dobradiças de porta ocultas",
          "Puxador com chave / cadeado",
          "Mecanismo de bloqueio em 3 pontos",
          "Reforços de corpo",
          "Junta resistente ao óleo",
          "Pino de terra na porta",
          "Compartimento para documentos fornecido na porta",
          "Provisão para montagem de luz LED"
        ]
      },
      {
        "title_pt": "Padrões Típicos da Indústria",
        "items_pt": [
          "NEMA Tipo 1, 3R, 12",
          "Listado UL Tipo 1, 3R, 12",
          "CSA Tipo 1, 3R, 12",
          "IEC 60529"
        ]
      },
      {
        "title_pt": "Acessórios e Opções de Armário",
        "items_pt": [
          "Kit de grelha e filtro lavável",
          "Kit de ventoinha (inclui grelha e filtro)",
          "Protecção contra chuva (para aplicações NEMA 3R exteriores)",
          "Iluminação LED activada pela porta",
          "Aberturas de ventilação e kit de ventoinha NEMA 12",
          "Subpainel",
          "Aquecedor com termóstato integrado",
          "Kit de suporte de chão (suportes de 6\" ou 12\" disponíveis)",
          "Escudo de gotejamento",
          "Janela de visualização",
          "Baterias (Chumbo-Ácido inundadas, VRLA ou Ni-Cad)",
          "Estrutura de bateria e instalação de estrutura",
          "Contenção de derrames"
        ]
      }
    ]
  }
];

fs.writeFileSync(path.join(__dirname, 'batch7.json'), JSON.stringify(translatedData, null, 2));
console.log("Batch 7 translated.");
