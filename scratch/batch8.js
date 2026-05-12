const fs = require('fs');
const path = require('path');

const translatedData = [
  {
    "id": "458",
    "title_pt": "Bateria LiFePO4 de 24V 200AH para Armazenamento Solar",
    "excerpt_pt": "",
    "content_pt": "<div class=\"breadcrumb-title \">\n<h1 class=\"titlefont text-uppercase text-center\">BATERIA LIFEPO4 DE 24V 200AH PARA ARMAZENAMENTO SOLAR</h1>\n</div>\n<p>Bateria LiFePO4 de 24 volts 200AH com saída contínua de 100 amperes, pico de saída de 300 amperes; 10 anos de garantia; 70-80% mais leve do que as baterias equivalentes de Chumbo-Ácido Seladas (SLA); vida útil 5 vezes superior (3000 ciclos de carga vs. 400 em SLA); capacidade efectiva 75% superior às baterias SL; inclui circuito de protecção do Sistema de Gestão de Bateria (BMS).</p>\n<p>Procura uma solução de armazenamento de energia leve, não tóxica e isenta de manutenção? As baterias de Fosfato de Ferro de Lítio (LFP) de ciclo profundo da Youth Power são optimizadas com arquitectura de células proprietária, electrónica de potência, BMS e métodos de montagem. São uma substituição directa para as baterias de chumbo-ácido e muito mais seguras. A química LFP é a mais segura e ambientalmente responsável disponível. São modulares, leves e escaláveis para instalações. As baterias proporcionam segurança energética e integração perfeita de fontes de energia renováveis e tradicionais, em conjunto com ou de forma independente da rede: net zero, peak shaving (redução de picos), reserva de emergência, portátil e móvel. Desfrute de uma instalação fácil e custos reduzidos com a bateria de parede Youth Power.</p>\n<strong>1) Especificações Detalhadas</strong>\n<div class=\"table-responsive\">\n<div class=\"modern-table-container\"><table class=\"modern-table\">\n<tbody>\n<tr>\n<th colspan=\"4\"  >Especificações da Bateria</th>\n</tr>\n<tr>\n<td >Modelo N.º</td>\n<td>YP-W24100</td>\n<td>YP-W24200</td>\n<td>YP-W24300</td>\n</tr>\n<tr>\n<td >Tensão</td>\n<td>25.6V</td>\n<td>25.6V</td>\n<td>25.6V</td>\n</tr>\n<tr>\n<td >Combinação</td>\n<td>8S2P</td>\n<td>8S4P</td>\n<td>8S6P</td>\n</tr>\n<tr>\n<td >Capacidade</td>\n<td>100AH</td>\n<td>200AH</td>\n<td>300A</td>\n</tr>\n<tr>\n<td >Energia</td>\n<td>2.56KWH</td>\n<td>5.12KwH</td>\n<td>7.68KwH</td>\n</tr>\n<tr>\n<td >Peso</td>\n<td>22.7kg</td>\n<td>45.3kg</td>\n<td>68.0kg</td>\n</tr>\n<tr>\n<td ></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td >Química</td>\n<td colspan=\"3\" >Fosfato de Ferro de Lítio ( LiFePO4 ) - Ião de Lítio mais seguro, sem risco de incêndio</td>\n</tr>\n<tr>\n<td >BMS</td>\n<td colspan=\"3\">Sistema de Gestão de Bateria incorporado</td>\n</tr>\n<tr>\n<td >Conectores</td>\n<td colspan=\"3\">Conector à prova de água</td>\n</tr>\n<tr>\n<td >Dimensões</td>\n<td colspan=\"3\">610X440*220mm</td>\n</tr>\n<tr>\n<td >Ciclos ( 80% DOD )</td>\n<td colspan=\"3\">6000 ciclos</td>\n</tr>\n<tr>\n<td >Profundidade de descarga</td>\n<td colspan=\"3\">Até 100%</td>\n</tr>\n<tr>\n<td >Tempo de vida</td>\n<td colspan=\"3\">10 anos</td>\n</tr>\n<tr>\n<td >Carga padrão</td>\n<td colspan=\"3\">Corrente constante : 20A</td>\n</tr>\n<tr>\n<td >Descarga padrão</td>\n<td colspan=\"3\">Corrente constante : 20A</td>\n</tr>\n<tr>\n<td >Carga contínua máxima</td>\n<td colspan=\"3\">100A</td>\n</tr>\n<tr>\n<td >Descarga contínua máxima</td>\n<td colspan=\"3\">100A</td>\n</tr>\n<tr>\n<td >Temperatura de operação</td>\n<td colspan=\"3\">Carga : 0-45°C. Descarga : -20-55°C</td>\n</tr>\n<tr>\n<td >Temperatura de Armazenamento</td>\n<td colspan=\"3\">Manter entre -20 a 65°C</td>\n</tr>\n<tr>\n<td >Padrão de protecção</td>\n<td colspan=\"3\">IP21</td>\n</tr>\n<tr>\n<td >Tensão de operação</td>\n<td colspan=\"3\">20-29.2 VDC</td>\n</tr>\n<tr>\n<td >Tensão máx. de carga</td>\n<td colspan=\"3\">29.2 VDC</td>\n</tr>\n<tr>\n<td >Efeito de memória</td>\n<td colspan=\"3\">Nenhum</td>\n</tr>\n<tr>\n<td >Manutenção</td>\n<td colspan=\"3\">Livre de manutenção</td>\n</tr>\n<tr>\n<td >Compatibilidade</td>\n<td colspan=\"3\" >Compatível com todos os inversores off-grid e controladores de carga padrão. Manter o rácio de 2:1 entre a saída da bateria e o inversor.</td>\n</tr>\n<tr>\n<td >Período de Garantia</td>\n<td colspan=\"3\">10 Anos</td>\n</tr>\n<tr>\n<td >Observações:</td>\n<td colspan=\"3\" >O BMS da bateria de parede Youth Power 24V deve ser ligado apenas em paralelo. A ligação em série anulará a garantia. Permite o máximo de 14 unidades em paralelo para expandir a capacidade.</td>\n</tr>\n</tbody>\n</table></div>\n</div>\n",
    "features_pt": [
      {
        "title_pt": "Características",
        "items_pt": [
          "Longa vida útil - expectativa de vida do produto de 15 a 20 anos",
          "Sistema modular permite que a capacidade de armazenamento seja facilmente expansível à medida que as necessidades de energia aumentam",
          "Arquitectura proprietária e Sistema de Gestão de Bateria (BMS) integrado - sem necessidade de programação, firmware ou cablagem adicional",
          "Opera com uma eficiência inigualável de 98% por mais de 5.000 ciclos",
          "Pode ser montada em rack ou na parede numa área de espaço morto da sua casa/empresa",
          "Oferece até 100% de profundidade de descarga",
          "Materiais recicláveis, não tóxicos e não perigosos - recicle no fim da vida útil"
        ]
      }
    ]
  },
  {
    "id": "460",
    "title_pt": "NSB 155FT RED",
    "excerpt_pt": "",
    "content_pt": "<strong>A Bateria NSB RED® proporciona uma vida longa para condições de rede eléctrica fiáveis e pouco fiáveis</strong>\n\n<ul class=\"modern-list\">\n<ul class=\"modern-list\">\n<li>A electroquímica de chumbo puro aumenta consideravelmente a resistência à temperatura e à corrosão, reduzindo o envelhecimento dos componentes</li>\n<li>Placas finas proporcionam uma grande área de superfície, alta densidade de potência e baixa resistência</li>\n<li>Vida útil de projecto de 15+ anos a 20°C (68°F)</li>\n<li>Definição de vida de projecto EUROBAT: Vida Muito Longa (12+ anos)</li>\n<li>Recarregamento rápido</li>\n<li>Gama de temperaturas de funcionamento -40°C a +65°C (-40°F a 149°F)</li>\n<li>O fabrico automatizado de última geração garante consistência e fiabilidade</li>\n<li>Vida útil em prateleira de até 24 meses</li>\n<li>Design avançado de terminais em 3 fases para garantir uma operação livre de fugas - terminais de latão proporcionam o máximo desempenho</li>\n<li>Materiais plásticos de Óxido de Polifenileno (PPO) de alto módulo, concebidos para suportar temperaturas de funcionamento elevadas e prolongadas e manter a elevada compressão da bateria, essencial para um funcionamento fiável</li>\n<li>Invólucro de plástico selado termicamente, não halogenado</li>\n<li>Retardador de chama (UL 94 VO) e LOI de pelo menos 28%</li>\n<li>Aprovado como carga não perigosa para transporte terrestre, marítimo e aéreo - DOT 49CFR173.159(d), (i) e (ii)</li>\n\n\n<h4>Dimensões</h4>\n<div class=\"table-responsive\">\n<div class=\"modern-table-container\"><table class=\"modern-table\">\n<tbody>\n<tr>\n<th>Altura</th>\n<th>11 pol. (aprox. 280 mm)</th>\n</tr>\n<tr>\n<th>Largura</th>\n<td>4.9 pol. (aprox. 125 mm)</td>\n</tr>\n<tr>\n<th>Comprimento</th>\n<td>22 pol. (aprox. 560 mm)</td>\n</tr>\n<tr>\n<th>Peso</th>\n<td>101 lbs (aprox. 46 kg)</td>\n</tr>\n</tbody>\n</table></div>\n</div>\n<h4>Eléctrico</h4>\n<div class=\"table-responsive\">\n<div class=\"modern-table-container\"><table class=\"modern-table\">\n<tbody>\n<tr>\n<th >Terminal</th>\n<th >Fêmea M8 x 1.25</th>\n</tr>\n<tr>\n<th >Binário do terminal</th>\n<td>8,0 Nm</td>\n</tr>\n<tr>\n<th >Capacidade de 1h a 1,70VPC @ 20/25°C</th>\n<td>106 / 110 Ah</td>\n</tr>\n<tr>\n<th >Capacidade de 3h a 1,75VPC @ 20/25°C</th>\n<td>133 / 137 Ah</td>\n</tr>\n<tr>\n<th >Capacidade de 8h a 1,75VPC @ 20/25°C</th>\n<td>150 / 153 Ah</td>\n</tr>\n<tr>\n<th >Capacidade de 10h a 1,80VPC @ 20/25°C</th>\n<td>153 / 155 Ah</td>\n</tr>\n<tr>\n<th >Tensão de flutuação @ 20/25°C</th>\n<td>2,28 / 2,27 VPC</td>\n</tr>\n<tr>\n<th >Impedância (1Khz)</th>\n<td>3,1 mΩ @ 25°C</td>\n</tr>\n<tr>\n<th >Condutância</th>\n<td>1648 S</td>\n</tr>\n<tr>\n<th >Corrente de curto-circuito</th>\n<td>4200 A</td>\n</tr>\n<tr>\n<th >Gama de temperaturas de operação</th>\n<td>-40°C a +65°C</td>\n</tr>\n<tr>\n<th >Tensão nominal</th>\n<td>12 V</td>\n</tr>\n</tbody>\n</table></div>\n</div>",
    "features_pt": []
  },
  {
    "id": "464",
    "title_pt": "NSB 210FT HT RED",
    "excerpt_pt": "",
    "content_pt": "<p>A Bateria NSB HT RED® proporciona uma vida longa em condições de rede pouco fiáveis, mesmo a temperaturas elevadas.</p>\n\n<ul class=\"modern-list\">\n<ul class=\"modern-list\">\n<li>A electroquímica de chumbo puro aumenta consideravelmente a resistência à temperatura e à corrosão, reduzindo o envelhecimento dos componentes</li>\n<li>Placas finas proporcionam uma grande área de superfície, alta densidade de potência e baixa resistência</li>\n<li>Vida útil de projecto de 15+ anos a 20°C (68°F)</li>\n<li>Vida extra longa em operação a alta temperatura 40°C (104°F)</li>\n<li>Definição de vida de projecto EUROBAT: Vida Muito Longa (12+ anos)</li>\n<li>Design avançado de terminais em 3 fases para garantir uma operação livre de fugas - terminais de latão proporcionam o máximo desempenho</li>\n<li>Aprovado como carga não perigosa para transporte terrestre, marítimo e aéreo - DOT 49CFR173.159(d), (i) e (ii)</li>\n<li>Recarregamento rápido</li>\n<li>Elevado desempenho cíclico</li>\n<li>Retardador de chama (UL 94 VO) e LOI de pelo menos 28%</li>\n<li>Vida útil em prateleira de até 24 meses</li>\n<li>Gama de temperaturas de funcionamento -40°C a +65°C (-40°F a 149°F)</li>\n<li>O fabrico automatizado de última geração garante consistência e fiabilidade</li>\n<li>Materiais plásticos de Óxido de Polifenileno (PPO) de alto módulo, concebidos para suportar temperaturas de funcionamento elevadas e prolongadas e manter a elevada compressão da bateria, essencial para um funcionamento fiável</li>\n<li>Invólucro de plástico selado termicamente, não halogenado</li>\n\n\n<h4>Dimensões</h4>\n<div class=\"table-responsive\">\n<div class=\"modern-table-container\"><table class=\"modern-table\">\n<tbody>\n<tr>\n<th>Altura</th>\n<th>328 mm</th>\n</tr>\n<tr>\n<th>Largura</th>\n<td>126 mm</td>\n</tr>\n<tr>\n<th>Comprimento</th>\n<td>560 mm</td>\n</tr>\n<tr>\n<th>Peso</th>\n<td>66 kg</td>\n</tr>\n</tbody>\n</table></div>\n</div>\n<h4>Eléctrico</h4>\n<div class=\"table-responsive\">\n<div class=\"modern-table-container\"><table class=\"modern-table\">\n<tbody>\n<tr>\n<th >Terminal</th>\n<th>Fêmea M8 x 1.25</th>\n</tr>\n<tr>\n<th >Binário do terminal</th>\n<td>8,0 Nm</td>\n</tr>\n<tr>\n<th >Capacidade de 1h a 1,70VPC @ 20/25°C</th>\n<td>150 / 156 Ah</td>\n</tr>\n<tr>\n<th >Capacidade de 3h a 1,75VPC @ 20/25°C</th>\n<td>184 / 189 Ah</td>\n</tr>\n<tr>\n<th >Capacidade de 8h a 1,75VPC @ 20/25°C</th>\n<td>207 / 210 Ah</td>\n</tr>\n<tr>\n<th >Capacidade de 10h a 1,80VPC @ 20/25°C</th>\n<td>209 / 212 Ah</td>\n</tr>\n<tr>\n<th >Tensão de flutuação @ 20/25°C</th>\n<td>2,28 / 2,27 VPC</td>\n</tr>\n<tr>\n<th >Impedância (1Khz)</th>\n<td>2,6 mΩ @ 25°C</td>\n</tr>\n<tr>\n<th >Condutância</th>\n<td>2102 S</td>\n</tr>\n<tr>\n<th >Corrente de curto-circuito</th>\n<td>6000 A</td>\n</tr>\n<tr>\n<th >Gama de temperaturas de operação</th>\n<td>-40°C a +65°C</td>\n</tr>\n<tr>\n<th >Tensão nominal</th>\n<td>12 V</td>\n</tr>\n</tbody>\n</table></div>\n</div>",
    "features_pt": []
  },
  {
    "id": "467",
    "title_pt": "313K (Alta Temperatura)",
    "excerpt_pt": "",
    "content_pt": "<p>2V/12V, Alta temperatura, Ciclagem e Flutuação</p>\n<h4 class=\"btit\">Resumo da gama</h4>\n<div class=\"stit\">\n<p>A série 313K (HTB), sob o nome de 313 graus Kelvin, é uma série de Baterias para Alta Temperatura. Com 8 tecnologias patenteadas exclusivas, a série 313K oferece uma excelente capacidade de ciclagem profunda em altas temperaturas. A série 313K ajuda o utilizador a reduzir consideravelmente o custo operacional. A série 313K é a primeira escolha para o aumento das exigências de energia em locais de telecomunicações remotos com altas temperaturas e outras aplicações híbridas off-grid exigentes.</p>\n\n<h4>Especificações Gerais</h4>\n<div class=\"table-responsive\">\n<div class=\"modern-table-container\"><table class=\"modern-table\">\n<tbody>\n<tr class=\"firstRow\">\n<th rowspan=\"2\">Tipo</th>\n<th rowspan=\"2\">Tensão Nominal (V)</th>\n<th >Capacidade\n<p>Nominal (Ah)</th></p>\n<th colspan=\"4\">Dimensões (mm)</th>\n<th rowspan=\"2\">Peso\n<p>(Kg)</th></p>\n</tr>\n<tr>\n<th>C<sub>10</sub></th>\n<th>Comprimento</th>\n<th>Largura</th>\n<th>Altura</th>\n<th>Altura Total</th>\n</tr>\n<tr>\n<td  >HTB-200</td>\n<td  >2</td>\n<td  >200</td>\n<td  >227</td>\n<td  >96</td>\n<td  >291</td>\n<td  >303</td>\n<td  >17</td>\n</tr>\n<tr>\n<td  >HTB-300</td>\n<td  >2</td>\n<td  >300</td>\n<td  >227</td>\n<td  >133</td>\n<td  >291</td>\n<td  >303</td>\n<td  >24</td>\n</tr>\n<tr>\n<td  >HTB-400</td>\n<td  >2</td>\n<td  >400</td>\n<td  >227</td>\n<td  >170</td>\n<td  >291</td>\n<td  >303</td>\n<td  >31</td>\n</tr>\n<tr>\n<td  >HTB-500</td>\n<td  >2</td>\n<td  >500</td>\n<td  >231</td>\n<td  >155</td>\n<td  >395</td>\n<td  >407</td>\n<td  >39</td>\n</tr>\n<tr>\n<td  >HTB-600</td>\n<td  >2</td>\n<td  >600</td>\n<td  >231</td>\n<td  >180</td>\n<td  >396</td>\n<td  >408</td>\n<td  >46</td>\n</tr>\n<tr>\n<td  >HTB-800</td>\n<td  >2</td>\n<td  >800</td>\n<td  >231</td>\n<td  >231</td>\n<td  >396</td>\n<td  >408</td>\n<td  >61</td>\n</tr>\n<tr>\n<td  >HTB-1000</td>\n<td  >2</td>\n<td  >1000</td>\n<td  >231</td>\n<td  >282</td>\n<td  >396</td>\n<td  >408</td>\n<td  >76</td>\n</tr>\n<tr>\n<td  >HTB-1200</td>\n<td  >2</td>\n<td  >1200</td>\n<td  >232</td>\n<td  >264</td>\n<td  >502</td>\n<td  >514</td>\n<td  >90</td>\n</tr>\n<tr>\n<td  >HTB-1500</td>\n<td  >2</td>\n<td  >1500</td>\n<td  >232</td>\n<td  >322</td>\n<td  >502</td>\n<td  >514</td>\n<td  >110</td>\n</tr>\n<tr>\n<td  >HTB-2000</td>\n<td  >2</td>\n<td  >2000</td>\n<td  >232</td>\n<td  >456</td>\n<td  >502</td>\n<td  >514</td>\n<td  >155</td>\n</tr>\n<tr>\n<td  >12HTB100</td>\n<td  >12</td>\n<td  >100</td>\n<td  >390</td>\n<td  >108</td>\n<td  >287</td>\n<td  >287</td>\n<td  >35</td>\n</tr>\n<tr>\n<td   >12HTB150</td>\n<td   >12</td>\n<td   >150</td>\n<td   >546</td>\n<td   >125</td>\n<td   >310</td>\n<td   >310</td>\n<td   >54.7</td>\n</tr>\n<tr>\n<td  >12HTB170</td>\n<td  >12</td>\n<td  >170</td>\n<td  >546</td>\n<td  >125</td>\n<td  >310</td>\n<td  >310</td>\n<td  >60.5</td>\n</tr>\n<tr>\n<td   >12HTB100F</td>\n<td   >12</td>\n<td   >100</td>\n<td   >395</td>\n<td   >108</td>\n<td   >274</td>\n<td   >287</td>\n<td   >30</td>\n</tr>\n<tr>\n<td  >12HTB150F</td>\n<td  >12</td>\n<td  >150</td>\n<td  >550</td>\n<td  >125</td>\n<td  >272</td>\n<td  >283</td>\n<td  >47</td>\n</tr>\n<tr>\n<td  >12HTB170F</td>\n<td  >12</td>\n<td  >170</td>\n<td  >550</td>\n<td  >125</td>\n<td  >272</td>\n<td  >283</td>\n<td  >50</td>\n</tr>\n<tr>\n<td  >12HTB190F</td>\n<td  >12</td>\n<td  >190</td>\n<td  >558</td>\n<td  >125</td>\n<td  >305</td>\n<td  >316</td>\n<td  >57.5</td>\n</tr>\n<tr>\n<td  >12HTB200F</td>\n<td  >12</td>\n<td  >200</td>\n<td  >558</td>\n<td  >125</td>\n<td  >305</td>\n<td  >316</td>\n<td  >58</td>\n</tr>\n<tr>\n<td  >12HTB150HT</td>\n<td  >12</td>\n<td  >150</td>\n<td  >550</td>\n<td  >110</td>\n<td  >276</td>\n<td  >287</td>\n<td  >44</td>\n</tr>\n</tbody>\n</table></div>\n</div>\n</div>",
    "features_pt": [
      {
        "title_pt": "Características Técnicas",
        "items_pt": [
          "Bateria de Chumbo-Ácido regulada por válvula (VRLA) com eletrólito em gel-ácido AGM especialmente projectada",
          "Tecnologia de grelha anti-corrosão patenteada",
          "Material activo optimizado para condições de alta temperatura",
          "Ampla gama de temperaturas de operação: -40°C a +80°C",
          "Excelente desempenho em ciclagem profunda",
          "Design robusto e inovador por dentro e por fora para garantir máxima segurança e fiabilidade",
          "Caixa em ABS retardador de chama inovador (UL94 V-0, opcional)",
          "Baixa taxa de auto-descarga",
          "Adequado para operação contínua em temperaturas superiores a 35°C",
          "Cumpre com as normas IEC, IEEE, UL, EN, CE, etc.",
          "Vida útil de projecto a 35°C (95°F): 15+ anos (2V), 10+ anos (12V)"
        ]
      }
    ]
  },
  {
    "id": "470",
    "title_pt": "HRL (Alta Taxa e Longa Vida)",
    "excerpt_pt": "",
    "content_pt": "<p>2V/12V, Alta Taxa, Longa Vida</p>\n<h4 class=\"btit\">Resumo da gama</h4>\n<p>A série HRL, nome de Alta Taxa e Longa Vida (High Rate Long life), é uma bateria VRL de alta taxa. É especialmente projectada para grandes centros de dados e UPS. Com um excelente desempenho de descarga de alta potência, alta fiabilidade, design de vida longa e ampla gama de temperaturas de operação, a série HRL é ideal para baterias UPS de alto desempenho.</p>\n\n<h4>Especificações Gerais</h4>\n<div class=\"table-responsive\">\n<div class=\"modern-table-container\"><table class=\"modern-table\">\n<tbody>\n<tr class=\"firstRow\">\n<td  rowspan=\"2\"  v ><strong>Tipo</strong></td>\n<td  rowspan=\"2\"  v ><strong>Tensão Nominal (V)</strong></td>\n<td    v ><strong>Potência Nominal (W)</strong></td>\n<td colspan=\"4\"   v ><strong>Dimensões (mm)</strong></td>\n<td  rowspan=\"2\"  v ><strong>Peso (Kg)</strong></td>\n</tr>\n<tr>\n<th    v ><strong>Taxa de 15 minutos, 1,67V/célula</strong></th>\n<th    v ><strong>Comprimento</strong></th>\n<th    v ><strong>Largura</strong></th>\n<th    v ><strong>Altura</strong></th>\n<th    v ><strong>Altura Total</strong></th>\n</tr>\n<tr>\n<td    v >HRL550</td>\n<td    v >2</td>\n<td    v >550</td>\n<td    v >184,5</td>\n<td    v >94,5</td>\n<td    v >370</td>\n<td    v >370</td>\n<td    v >13,0</td>\n</tr>\n<tr>\n<td    v >HRL750</td>\n<td    v >2</td>\n<td    v >750</td>\n<td    v >183</td>\n<td    v >100</td>\n<td    v >370</td>\n<td    v >370</td>\n<td    v >16,3</td>\n</tr>\n<tr>\n<td    v >HRL1000</td>\n<td    v >2</td>\n<td    v >1000</td>\n<td    v >184,5</td>\n<td    v >123</td>\n<td    v >370</td>\n<td    v >370</td>\n<td    v >20,0</td>\n</tr>\n</tbody>\n</table></div>\n</div>",
    "features_pt": [
      {
        "title_pt": "Aplicações Principais",
        "items_pt": [
          "UPS (Fontes de Alimentação Ininterrupta)",
          "Centros de dados",
          "Instalações eléctricas",
          "Televisão por cabo"
        ]
      }
    ]
  },
  {
    "id": "475",
    "title_pt": "Bateria Solar GEL de 12V, 200Ah",
    "excerpt_pt": "",
    "content_pt": "<div class=\"tablr-responsive\">\n<div class=\"modern-table-container\"><table class=\"modern-table\">\n<tbody>\n<tr >\n<td v>Tensão Nominal</td>\n<td colspan=\"2\" v>12V</td>\n</tr>\n<tr >\n<td v>Capacidade Nominal (10HR)</td>\n<td colspan=\"2\" v>200AH</td>\n</tr>\n<tr >\n<td rowspan=\"4\" v>Dimensões</td>\n<td v>Comprimento</td>\n<td v>522±3mm (20.55 polegadas)</td>\n</tr>\n<tr >\n<td v>Largura</td>\n<td v>240±2mm (9.45 polegadas)</td>\n</tr>\n<tr >\n<td v>Altura do Recipiente</td>\n<td v>218±2mm (8.58 polegadas)</td>\n</tr>\n<tr >\n<td v>Altura Total (com Terminal)</td>\n<td v>224±2mm (8.81 polegadas)</td>\n</tr>\n<tr >\n<td v>Peso Aproximado</td>\n<td colspan=\"2\" v>Aprox. 55 Kg (121.254 Ibs)</td>\n</tr>\n<tr >\n<td v>Terminal</td>\n<td colspan=\"2\" v>T11</td>\n</tr>\n<tr >\n<td v>Material do Recipiente</td>\n<td colspan=\"2\" v>ABS</td>\n</tr>\n<tr >\n<td rowspan=\"5\" v>Capacidade Nominal</td>\n<td v>20hr, 1.80V/célula, 25°C</td>\n<td v>209.1 AH / 10.4A</td>\n</tr>\n<tr >\n<td v>10hr, 1.80V/célula, 25°C</td>\n<td v>200.0 AH / 20.0A</td>\n</tr>\n<tr >\n<td v>5hr, 1.75V/célula, 25°C</td>\n<td v>173.0 AH / 34.6A</td>\n</tr>\n<tr >\n<td v>3hr, 1.75V/célula, 25°C</td>\n<td v>157.2 AH / 52.4A</td>\n</tr>\n<tr >\n<td v>1hr, 1.60V/célula, 25°C</td>\n<td v>122.8 AH / 122.8A</td>\n</tr>\n</tbody>\n</table></div>\n</div>",
    "features_pt": []
  },
  {
    "id": "656",
    "title_pt": "Série SP PRO 2i : Inteligência Reforçada",
    "excerpt_pt": "",
    "content_pt": "<p>O carregador inversor bidireccional mais inteligente do mundo vem agora com comunicações avançadas integradas de série, na NOVA Série SP PRO 2i.</p>\n<p>Reconhecível pelo 'selo de prata' circular na caixa exterior, as novas funcionalidades da Série SP PRO 2i incluem funcionalidade de comunicações avançada para operação de sistemas multifásicos e interface de alta velocidade com marcas de baterias geridas compatíveis. Todos os Modos de Resposta à Procura (DRM 0 - 8) são totalmente suportados, bem como todos os Modos de Qualidade de Energia AS4777. Estas funcionalidades incorporadas proporcionam um valor acrescentado significativo ao SP PRO, sem a necessidade de adquirir acessórios adicionais - poupando custos e tempo valioso durante a instalação.</p>\n<p>Quer viva (ou queira viver) fora da rede (off-grid), ou ligado à rede e queira adicionar armazenamento de bateria, o carregador inversor bidireccional SP PRO pode controlar e gerir todos os aspectos das suas necessidades energéticas. Ao incorporar energia solar, eólica, hídrica, com um gerador a diesel e/ou fornecimento da rede, pode ter a certeza de que todo o seu local nunca ficará sem energia.</p>\n<h4>Novo Modelo SPMC480 de 3,5kW já disponível!</h4>\n<p>O novo modelo SPMC480 responde a uma procura crescente por sistemas de armazenamento de bateria de menor escala, com uma saída contínua de 3,5kW para superar todos os equivalentes de marcas concorrentes no mercado, quando comparados com precisão. O SPMC480 também pode fornecer 5,25kW durante 30 minutos, 6kW durante 1 minuto e uma saída de pico de 8,4kW durante 30 segundos. Este novo modelo também é capaz de carregar baterias a partir de uma fonte AC até 73A DC ou 3,5kW. Podem ser ligados até 7kW de fotovoltaico acoplado em AC gerido, ou uma quantidade ilimitada de fotovoltaico acoplado em DC.</p>\n\n<h4>Modelos da série SP PRO AU</h4>\n<div class=\"table-responsive\">\n<div class=\"modern-table-container\"><table class=\"modern-table\">\n<tbody>\n<tr class=\"modelheader\">\n<td id=\"AUbg24V\" >24V</td>\n<td id=\"AUbg24V\" >24V</td>\n<td id=\"AUbg48V\" >48V</td>\n<td id=\"AUbg48V\" >48V</td>\n<td id=\"AUbg48V\" >48V</td>\n<td id=\"AUbg120V\" >120V</td>\n<td id=\"AUbg120V\" >120V</td>\n<td id=\"AUbg120V\" >120V</td>\n</tr>\n<tr class=\"modelheader\">\n<td>3,0 kW</td>\n<td>4,5 kW</td>\n<td>3,5 kW</td>\n<td>5,0 kW</td>\n<td>7,5 kW</td>\n<td>7,5 kW</td>\n<td>15,0 kW</td>\n<td>20,0 kW</td>\n</tr>\n<tr>\n<th class=\"ModelNumbers\">SPMC240-AU</th>\n<th class=\"ModelNumbers\">SPMC241-AU</th>\n<th class=\"ModelNumbers\">SPMC480-AU</th>\n<th class=\"ModelNumbers\">SPMC481-AU</th>\n<th class=\"ModelNumbers\">SPMC482-AU</th>\n<th class=\"ModelNumbers\">SPMC1201</th>\n<th class=\"ModelNumbers\">SPLC1200</th>\n<th class=\"ModelNumbers\">SPLC1202</th>\n</tr>\n</tbody>\n</table></div>\n</div>",
    "features_pt": [
      {
        "title_pt": "Características e Benefícios do Produto:",
        "items_pt": [
          "NOVO! Comunicações Avançadas de série, para operação de sistema multifásico e interface de bateria gerida",
          "NOVO! Modo de recuperação AC Coupling para recarregar facilmente a partir de fotovoltaico acoplado em AC",
          "Projectado e fabricado na Austrália",
          "Mais funcionalidades incluídas de série 'dentro da caixa' do que qualquer outro carregador inversor",
          "Operação isolada (off-grid) e Híbrida Solar (reserva de rede e alimentação da rede), marítima e móvel",
          "Compatível com acoplamento AC ou DC",
          "Actualização (Retrofit) de sistemas existentes",
          "Facilmente configurável para aplicações domésticas e comerciais",
          "Controlador de gerador integrado para maximizar a eficiência do sistema",
          "Potência de carga contínua AC de 3 kW a 60 kW",
          "Contactor de transferência de 63A ou 125A de série",
          "Modos de Resposta à Procura (DRM 0 - 8)",
          "Modos de Qualidade de Energia AS4777",
          "Até 10 anos de garantia (aplicam-se termos e condições)"
        ]
      }
    ]
  },
  {
    "id": "661",
    "title_pt": "Blueplanet 3.0 TL3 - 10.0 TL3",
    "excerpt_pt": "",
    "content_pt": "<p>Nem sempre tem de ser para sul: os inversores blueplanet 3.0 TL3 a 10.0 TL3 oferecem-lhe todas as opções para implementar instalações solares multifacetadas. Assim, não hesite em considerar telhados este-oeste ou incluir uma trapeira no seu projecto para tirar o máximo partido do seu investimento fotovoltaico.</p>\n<h4><strong>Bem planeado, rapidamente instalado</strong></h4>\n<p>Pode escolher entre inúmeros inversores, todos equipados com 2 trackers MPP; e, tal como acontece com a maioria dos inversores KACO new energy, os trackers são capazes de processar toda a potência AC.</p>\n<p>Pode montar confortavelmente estas unidades leves na parede; as ligações DC e AC são facilmente cabladas através de conectores de ficha.</p>\n<p>O comissionamento é facilmente facilitado pelo ecrã comprovado com o seu menu bem organizado. A comunicação fluida com os inversores é alcançada através das interfaces padrão de ligações USB, RS485 e Ethernet. O registador de dados com servidor web também está integrado para uma monitorização significativa.</p>\n<h4>Autoconsumo de energia solar</h4>\n<p>A função Priwatt também vem de fábrica: quem procura uma forma fácil de utilizar directamente a sua própria energia solar de forma direccionada alcançou aqui o seu objectivo.</p>\n",
    "features_pt": [
      {
        "title_pt": "Os seus benefícios num relance",
        "items_pt": [
          "Amortização rápida de arrays fotovoltaicos residenciais e pequenos comerciais",
          "Alta flexibilidade para projectos de sistemas não convencionais",
          "Equipamento padrão extensivo",
          "Instalação e comissionamento simples",
          "Registador de dados com servidor web para monitorização contínua do sistema",
          "Optimizado para o autoconsumo direccionado de energia solar"
        ]
      }
    ]
  }
];

fs.writeFileSync(path.join(__dirname, 'batch8.json'), JSON.stringify(translatedData, null, 2));
console.log("Batch 8 translated.");
