"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { CheckCircle2, Target, Eye, ShieldCheck, Zap, Activity, Users, Globe, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CONTENT = {
  en: {
    heroTitle: "YOUR TRUSTED SOLAR ENERGY SPECIALIST",
    heroText: "SADC - Electric is looking into the future and establishing Renewable Energy Standards that will help to change the way we think about energy all together.",
    integrityTitle: "INTEGRITY",
    integrityText: "We appreciate your trust in SADC SOLAR. We are committed to integrity as our sacred virtue. When you choose SADC SOLAR, you are choosing:",
    integrityPoints: [
      { t: "Total Transparency", d: "Honesty in every step of the project." },
      { t: "Rigorous Quality", d: "Sustainable and long-lasting solutions." },
      { t: "Trusted Partnership", d: "Focused on meeting your energy needs with rigor." }
    ],
    visionTitle: "VISION",
    visionText: "Innovation and Technology: Adopting cutting-edge technologies like energy storage (batteries), AI for grid management, and digitalization of services. We include Wi-Fi/4G monitoring and cloud platforms for real-time tracking.",
    commitmentTitle: "COMMITMENT",
    commitmentPoints: [
      "Environmental Sustainability", "Efficiency and Economy (ESG)", "Quality and Safety",
      "Innovation and Development", "Social Responsibility"
    ],
    specializationTitle: "SPECIALIZATION",
    specializationPoints: [
      "Technical capacity for solar system sizing using advanced software such as AutoCAD and PVsyst.",
      "Maintenance and management of solar systems.",
      "Compliance with technical standards, safety, and project management legal requirements."
    ]
  },
  pt: {
    heroTitle: "O SEU ESPECIALISTA EM ENERGIA SOLAR DE CONFIANÇA",
    heroText: "A SADC SOLAR está a olhar para o futuro e a estabelecer padrões de energia renovável que ajudarão a mudar a forma como pensamos sobre a energia em geral.",
    integrityTitle: "INTEGRIDADE",
    integrityText: "Agradecemos a confiança na SADC SOLAR. Assumimos o compromisso de que a integridade é a nossa virtude sagrada. Quando confia na SADC SOLAR, está a escolher:",
    integrityPoints: [
      { t: "Transparência Total", d: "Honestidade em cada etapa do projeto." },
      { t: "Qualidade Rigorosa", d: "Soluções sustentáveis e duradouras." },
      { t: "Parceria de Confiança", d: "Focados em atender à sua necessidade energética com rigor e profissionalismo." }
    ],
    visionTitle: "VISÃO",
    visionText: "Inovação e Tecnologia: Adotar tecnologias de ponta, como armazenamento de energia (baterias), inteligência artificial para gestão de redes e digitalização de serviços. Incluímos monitorização Wi-Fi/4G e plataformas na nuvem para acompanhamento em tempo real.",
    commitmentTitle: "COMPROMISSO",
    commitmentPoints: [
      "Sustentabilidade Ambiental", "Eficiência e Economia (ESG)", "Qualidade e Segurança",
      "Inovação e Desenvolvimento", "Responsabilidade Social"
    ],
    specializationTitle: "ESPECIALIZAÇÃO",
    specializationPoints: [
      "Capacidade técnica de dimensionamento sistemas solares usando avançados softwares tais como AutoCAD e PVsyst.",
      "Manutenção e gestão de sistemas solares.",
      "Compliance com as normas técnicas, segurança, requisitos legais de gestão de projetos."
    ]
  }
};

export default function AboutUsPage() {
  const { language } = useLanguage();
  const t = CONTENT[language];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <span className="text-[18vw] font-black uppercase select-none tracking-tighter opacity-[0.03] whitespace-nowrap" style={{ WebkitTextStroke: "2px #EA6003", color: "transparent" }}>
            SADC SOLAR
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="text-brand-primary font-black text-xs uppercase tracking-[0.4em] mb-6">Established 2013</div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] mb-10">
              {t.heroTitle.split(' ').map((word, i) => i === 3 || i === 4 ? <span key={i} className="text-brand-primary">{word} </span> : word + ' ')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-12 max-w-2xl">{t.heroText}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero Banner Image */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl group"
        >
          <img 
            src="/img/sadc (3).webp" 
            alt="SADC Solar Installation"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>

      {/* Stats Bar */}
      <section className="py-20 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: language === 'en' ? "Years Exp." : "Anos Exp.", value: 10, suffix: "+" },
              { label: language === 'en' ? "Projects" : "Projectos", value: 57, suffix: "+" },
              { label: language === 'en' ? "Quality Rate" : "Qualidade", value: 100, suffix: "%" },
              { label: language === 'en' ? "Partners" : "Parceiros", value: 102, suffix: "" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-2"><Counter value={stat.value} suffix={stat.suffix} /></div>
                <div className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrity Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 skew-x-12 translate-x-20" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-brand-primary/20 px-4 py-2 rounded-full mb-8">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" />
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">{t.integrityTitle}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8 leading-tight">{t.integrityText}</h2>
              </div>
              <div className="space-y-6">
                {t.integrityPoints.map((p, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-4 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                      <span className="text-lg font-bold text-white">{p.t}</span>
                    </div>
                    <p className="text-gray-400 text-sm ml-9">{p.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Split Section */}
      <section className="py-32 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-16 rounded-[3rem] border border-gray-100 shadow-sm relative group"
            >
              <div className="w-20 h-20 bg-brand-primary/5 rounded-3xl flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight">{t.visionTitle}</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">{t.visionText}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] lg:aspect-square"
            >
              <div className="absolute inset-0 bg-brand-primary/10 rounded-[3.5rem] rotate-3 translate-x-4 translate-y-4" />
              <img 
                src="/img/sadc (1).webp" 
                alt="Solar Technology"
                className="relative z-10 w-full h-full object-cover rounded-[3.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialization Split Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] lg:aspect-square order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gray-100 rounded-[3.5rem] -rotate-3 -translate-x-4 translate-y-4" />
              <img 
                src="/img/sadc (4).webp" 
                alt="Engineering Excellence"
                className="relative z-10 w-full h-full object-cover rounded-[3.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-12 md:p-16 rounded-[3rem] border border-gray-100 shadow-sm relative group order-1 lg:order-2"
            >
              <div className="w-20 h-20 bg-brand-primary/5 rounded-3xl flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight">{t.specializationTitle}</h3>
              <div className="space-y-6">
                {t.specializationPoints.map((p, i) => (
                  <div key={i} className="flex items-start space-x-5">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                    <p className="text-lg text-gray-600 font-semibold leading-relaxed">
                      {p.split(' ').map((word, j) => 
                        (word.includes('AutoCAD') || word.includes('PVsyst')) 
                        ? <span key={j} className="notranslate text-gray-900 font-black">{word} </span> 
                        : word + ' '
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/5 px-6 py-2 rounded-full mb-8">
            <Award className="w-4 h-4 text-brand-primary" />
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em]">{t.commitmentTitle}</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-20 tracking-tighter">SADC SOLAR ESG & VALUES</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.commitmentPoints.map((item, i) => (
              <div key={i} className="group p-10 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-brand-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 text-left">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
