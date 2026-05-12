const fs = require('fs');
const path = require('path');

const translatedData = [
  {
    "id": "225",
    "title_pt": "SM Sunny Tripower 25000TL-JP",
    "excerpt_pt": "",
    "content_pt": "<p>O novo Sunny Tripower 25000TL-JP é a solução de alto desempenho para utilização em sistemas de média tensão descentralizados de grande escala no mercado japonês. Este produto, recentemente desenvolvido, baseia-se na plataforma Sunny Tripower, tecnologicamente madura. Os utilizadores beneficiam de anos de experiência e do suporte profissional que a SM, como líder de mercado, oferece. A sua eficiência de pico de 98,7 por cento assegura elevados rendimentos, garantindo assim aos operadores do sistema uma amortização rápida. O conceito multistring e a vasta gama de tensão de entrada permitem uma elevada flexibilidade de projecto e compatibilidade com muitos módulos fotovoltaicos no mercado.</p>\n<p>Além da monitorização profissional e eficiente do sistema, o opcional SM Cluster Controller também permite a parametrização personalizada do sistema utilizando Modbus.</p>\n",
    "features_pt": [
      {
        "title_pt": "Eficiente",
        "items_pt": [
          "Eficiência de 98,0 % (de acordo com JIS C 8961)",
          "Eficiência de pico de 98,7 %"
        ]
      },
      {
        "title_pt": "Flexível",
        "items_pt": [
          "Tensão de entrada DC de até 1000 V",
          "Projecto de sistema optimizado graças ao conceito multistring e conversor step-up",
          "Gama de temperatura de funcionamento de -25 °C a +60 °C através da gestão activa de temperatura OptiCool"
        ]
      },
      {
        "title_pt": "Conveniente",
        "items_pt": [
          "Visualização e monitorização directa do sistema graças ao Webconnect e Sunny Portal",
          "Ecrã gráfico integrado que mostra os valores de rendimento e as tendências diárias"
        ]
      },
      {
        "title_pt": "Inovador",
        "items_pt": [
          "Parametrização eficiente e monitorização remota via SM Cluster Controller e Sunny Portal para sistemas de média e larga escala"
        ]
      }
    ]
  },
  {
    "id": "228",
    "title_pt": "SM Sunny Central 2200 / 2475 / 2500-EV / 2750-EV / 3000-EV",
    "excerpt_pt": "",
    "content_pt": "<p>O inversor Sunny Central, com 1.850 kVA ou 2.200 kVA para 1.000 VDC e 2.500 kVA, 2.750 kVA ou 3.000 kVA para 1.500 VDC (a 35°C), permite projectos de centrais fotovoltaicas ainda mais eficientes. A flexibilidade deste inversor permite a implementação com uma variedade de módulos. O transformador de alimentação integrado e a área de instalação proporcionam um ambiente ideal para a integração dos equipamentos necessários ao cliente. Adequado para qualquer clima exterior em todo o mundo, este novo Sunny Central está equipado com OptiCool, uma tecnologia comprovada de arrefecimento por ar que garante um funcionamento suave sob condições ambientais extremas.</p>\n",
    "features_pt": [
      {
        "title_pt": "Eficiente",
        "items_pt": [
          "Até 4 inversores podem ser transportados num contentor de transporte padrão",
          "Possibilidade de sobredimensionamento até 225%",
          "Potência total a temperaturas ambientes de até 35°C"
        ]
      },
      {
        "title_pt": "Robusto",
        "items_pt": [
          "Sistema de arrefecimento de ar inteligente OptiCool para um arrefecimento eficiente",
          "Adequado para utilização no exterior em todas as condições ambientais climáticas a nível mundial"
        ]
      },
      {
        "title_pt": "Flexível",
        "items_pt": [
          "Conforme com todos os requisitos de rede conhecidos a nível mundial",
          "Q sob pedido",
          "Disponível como dispositivo individual ou solução chave na mão, incluindo bloco de média tensão"
        ]
      },
      {
        "title_pt": "Fácil de Usar",
        "items_pt": [
          "Área de ligação DC melhorada",
          "Área de ligação para equipamento do cliente",
          "Suporte de tensão integrado para cargas internas e externas"
        ]
      }
    ]
  },
  {
    "id": "231",
    "title_pt": "KACO Blueplanet 87.0 TL3 - 125 TL3",
    "excerpt_pt": "",
    "content_pt": "<h4>Comece a poupar custos</h4>\n<p>O blueplanet 92.0 TL3 deve satisfazer a maioria dos seus requisitos. Uma razão para isso: a tensão de linha de 400 V. Permite-lhe ligar o inversor ao transformador no local - e combiná-lo com o blueplanet 20.0 TL3 para trackers MPP adicionais.</p>\n<p>Pode implementar a protecção da rede e da instalação também sem os custos habituais: os interruptores de secção necessários estão integrados no blueplanet 92.0 TL3 e podem ser activados directamente pela unidade de controlo Powador-protect. Além disso, o inversor é adequado tanto para módulos fotovoltaicos de 1500 V como de 1000 V.</p>\n<p>O inversor possui descarregadores SPD tipo 1+2 no lado DC para proteger contra sobretensão; os descarregadores para o lado AC, bem como as interfaces RS485 e Ethernet, podem ser facilmente adaptados.</p>\n<h4>Eficiente</h4>\n<p>O blueplanet 92.0 TL3 deve o seu elevado rácio de projecto DC:AC de 1,5:1 aos inovadores transístores de potência de carboneto de silício. A sua extrema capacidade de carga térmica também o torna um \"inversor do deserto\" com derating de potência tardio. No blueplanet 105 TL3, a reserva térmica é investida em 15 por cento mais potência. A escolha é sua!</p>\n<p>Manutenção simples também é necessária? Confirmado.</p>\n",
    "features_pt": [
      {
        "title_pt": "Os seus benefícios num relance",
        "items_pt": [
          "Poupança de custos devido à tensão de linha de 380 V / 400 V / 480 V e interruptores de secção integrados",
          "Optimizado para módulos fotovoltaicos de 1000 V e 1500 V",
          "Maior eficiência e capacidade de sobrecarga através da tecnologia de carboneto de silício",
          "Alta densidade de potência para fácil manuseamento e logística",
          "Propriedades especiais para condições ambientais extremas",
          "Comissionamento simplificado e actualizações através de serviços remotos",
          "Projecto descentralizado ou conceito de 'Central Virtual' possível"
        ]
      }
    ]
  },
  {
    "id": "234",
    "title_pt": "Inversor de String Sungrow SG110CX",
    "excerpt_pt": "",
    "content_pt": "<p>O Sungrow SG110CX é um inversor de string trifásico de alta potência, ideal para aplicações comerciais e industriais de grande escala. Com múltiplos canais MPPT, garante a máxima extracção de potência, mesmo em telhados com orientações variadas ou sombreamento parcial. O seu design robusto com protecção IP66 e resistência à corrosão de nível C5 torna-o perfeito para ambientes exteriores exigentes. Inclui funcionalidades avançadas de monitorização e segurança, como o Interruptor de Circuito por Falha de Arco (AFCI) e recuperação PID, garantindo a longevidade e o desempenho contínuo do seu sistema solar.</p>",
    "features_pt": [
      {
        "title_pt": "ALTO RENDIMENTO",
        "items_pt": [
          "9 MPPTs com eficiência máx. de 98,7%",
          "Compatível com módulos bifaciais",
          "Função de recuperação PID integrada"
        ]
      },
      {
        "title_pt": "OPERAÇÃO E MANUTENÇÃO INTELIGENTE",
        "items_pt": [
          "Comissionamento sem contacto e actualização remota de firmware",
          "Digitalização e diagnóstico da curva IV online*",
          "Design sem fusíveis com monitorização inteligente da corrente da string"
        ]
      },
      {
        "title_pt": "BAIXO CUSTO",
        "items_pt": [
          "Compatível com cabos AC de Al e Cu",
          "Ligação DC 2 em 1 activada",
          "Função Q à noite"
        ]
      },
      {
        "title_pt": "SEGURANÇA COMPROVADA",
        "items_pt": [
          "Protecção IP66 e C5",
          "SPD Tipo II para DC e AC",
          "Conforme com os códigos globais de segurança e de rede"
        ]
      }
    ]
  },
  {
    "id": "237",
    "title_pt": "ABB INVERSORES DE STRING PVI-10.0/12.5-TL",
    "excerpt_pt": "",
    "content_pt": "<p>Projectado para uso comercial, este inversor trifásico é único na sua capacidade de controlar o desempenho dos painéis fotovoltaicos, especialmente durante períodos de condições meteorológicas variáveis.</p>\n<p>Este dispositivo sem transformador possui dois MPPTs independentes e classificações de eficiência de até 97,7%. A ampla gama de tensão de entrada torna o inversor adequado para instalações de baixa potência com tamanho de string reduzido. Está disponível com um interruptor DC totalmente integrado opcional, fusível e função de desconexão DC controlada remotamente.</p>\n",
    "features_pt": [
      {
        "title_pt": "Destaques",
        "items_pt": [
          "Topologia de ponte trifásica real para conversor de saída DC/AC",
          "Topologia sem transformador",
          "Cada inversor é configurado com códigos de rede específicos que podem ser seleccionados no terreno",
          "Ampla gama de entrada",
          "Secção de entrada dupla com MPPT independente permite a recolha optimizada de energia a partir de dois sub-arrays orientados em direcções diferentes"
        ]
      }
    ]
  }
];

fs.writeFileSync(path.join(__dirname, 'batch1.json'), JSON.stringify(translatedData, null, 2));
console.log("Batch 1 translated.");
