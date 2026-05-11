"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, ShieldCheck, Globe, Building2, Landmark, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const CONTENT = {
  en: {
    title: "Institutional Financing",
    subtitle: "Financing Lines & Banking Partners",
    description: "We collaborate with global and local financial institutions to enable the energy transition in Angola through structured financing models.",
    banks: [
      {
        name: "Caixa Angola",
        text: "Provides ESG Solar Panel Leasing, facilitating access to sustainable technology with specialized credit lines for residential and commercial projects.",
        url: "https://www.caixaangola.ao",
        icon: Landmark
      },
      {
        name: "BAI (Banco Angolano de Investimentos)",
        text: "Promotion of credit lines for companies and individuals focused on renewable energy, with competitive rates and extended repayment terms.",
        url: "https://www.bancobai.ao",
        icon: Building2
      },
      {
        name: "BPC (Banco de Poupança e Crédito)",
        text: "Promotion of sustainable credit lines for the agricultural and industrial sectors to implement solar infrastructure.",
        url: "https://www.bpc.ao",
        icon: Building2
      },
      {
        name: "BDA (Banco de Desenvolvimento de Angola)",
        text: "Provides funding for high-impact solar infrastructure that drives economic development across the nation.",
        url: "https://www.bda.ao",
        icon: ShieldCheck
      },
      {
        name: "Banco Africano de Desenvolvimento (BAD)",
        text: "Through the Sustainable Energy Fund for Africa (SEFA), it supports projects that improve the energy matrix in the SADC region.",
        url: "https://www.afdb.org",
        icon: ShieldCheck
      },
      {
        name: "International Finance Corporation (IFC)",
        text: "The financial arm of the World Bank, providing capital and advisory for large-scale solar infrastructure development in emerging markets.",
        url: "https://www.ifc.org",
        icon: Globe
      },
      {
        name: "EXIMBank dos EUA",
        text: "Supports solar energy projects with significant financing, especially for equipment procurement and large-scale industrial implementations.",
        url: "https://www.exim.gov",
        icon: Award
      },
      {
        name: "Standard Bank",
        text: "Participation in EUR 1.29 billion financing for the development of solar infrastructure projects in rural Angola.",
        url: "https://www.sc.com/en/news/global-banking/case-study-eur1-29-billion-eca-backed-financing-develop-solar-infrastructure-project-rural-angola/",
        icon: Landmark
      }
    ]
  },
  pt: {
    title: "Financiamento Institucional",
    subtitle: "Principais Linhas de Apoio e Bancos",
    description: "Trabalhamos com instituições financeiras globais e locais para viabilizar a transição energética em Angola através de modelos de financiamento estruturados.",
    banks: [
      {
        name: "Caixa Angola",
        text: "Disponibiliza o Leasing ESG Painéis Solares, facilitando o acesso a tecnologia sustentável com linhas de crédito especializadas para projetos residenciais e comerciais.",
        url: "https://www.caixaangola.ao",
        icon: Landmark
      },
      {
        name: "BAI (Banco Angolano de Investimentos)",
        text: "Promoção de linhas de crédito para empresas e particulares focadas em energias renováveis, com taxas competitivas e prazos de reembolso alargados.",
        url: "https://www.bancobai.ao",
        icon: Building2
      },
      {
        name: "BPC (Banco de Poupança e Crédito)",
        text: "Promoção de linhas de crédito sustentáveis para o sector agrícola e industrial para a implementação de infraestruturas solares.",
        url: "https://www.bpc.ao",
        icon: Building2
      },
      {
        name: "BDA (Banco de Desenvolvimento de Angola)",
        text: "Fornece financiamento para infraestruturas solares de alto impacto que impulsionam o desenvolvimento económico em todo o país.",
        url: "https://www.bda.ao",
        icon: ShieldCheck
      },
      {
        name: "Banco Africano de Desenvolvimento (BAD)",
        text: "Através do Fundo de Energia Sustentável para África (SEFA), apoia projetos que visam melhorar a matriz energética na região da SADC.",
        url: "https://www.afdb.org",
        icon: ShieldCheck
      },
      {
        name: "International Finance Corporation (IFC)",
        text: "O braço financeiro do Banco Mundial, fornecendo capital e consultoria para o desenvolvimento de infraestruturas solares de grande escala em mercados emergentes.",
        url: "https://www.ifc.org",
        icon: Globe
      },
      {
        name: "EXIMBank dos EUA",
        text: "Apoia projetos de energia solar com financiamentos significativos, especialmente para a aquisição de equipamentos e implementações industriais de larga escala.",
        url: "https://www.exim.gov",
        icon: Award
      },
      {
        name: "Standard Bank",
        text: "Participação no financiamento de 1,29 mil milhões de euros para o desenvolvimento de projetos de infraestruturas solares em zonas rurais de Angola.",
        url: "https://www.sc.com/en/news/global-banking/case-study-eur1-29-billion-eca-backed-financing-develop-solar-infrastructure-project-rural-angola/",
        icon: Landmark
      }
    ]
  }
};

export default function FinancingSection() {
  const { language } = useLanguage();
  const t = CONTENT[language];

  return (
    <section className="py-48 relative overflow-hidden bg-[#0a0a0a]">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,var(--brand-primary),transparent_50%)] opacity-[0.15]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black text-xs uppercase tracking-[0.5em] mb-6"
          >
            {t.subtitle}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10"
          >
            {language === 'pt' ? "Financiamento" : "Institutional"} <span className="text-primary">{language === 'pt' ? "Institucional" : "Financing"}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 font-medium leading-relaxed"
          >
            {t.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.banks.map((bank, i) => {
            const Icon = bank.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-full"
              >
                <div className="relative h-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 overflow-hidden transition-all duration-700 hover:border-brand-primary/30 hover:bg-white/[0.06] flex flex-col shadow-2xl shadow-black/50">
                  {/* Glass Glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-colors duration-700" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-xl">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] vertical-rl rotate-180">
                        {bank.name === "Standard Bank" ? (language === 'pt' ? "Estudo de Caso" : "Case Study") : (language === 'pt' ? "Financeiro" : "Financial")}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-6 group-hover:text-brand-primary transition-colors tracking-tight notranslate">
                      {bank.name}
                    </h3>
                    <p className="text-white/40 text-sm font-semibold leading-relaxed mb-12 flex-grow">
                      {bank.text}
                    </p>
                    
                    <div className="pt-8 border-t border-white/5">
                      <a 
                        href={bank.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-black text-white uppercase tracking-[0.2em] group/btn bg-brand-primary/10 px-6 py-3 rounded-xl hover:bg-brand-primary transition-all duration-500"
                      >
                        {language === 'pt' ? "Solicitar Agora" : "Apply Now"}
                        <ArrowRight className="ml-3 w-4 h-4 text-brand-primary group-hover:text-white transition-transform group-hover/btn:translate-x-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
