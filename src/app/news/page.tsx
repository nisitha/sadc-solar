"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsPage() {
  const { t } = useLanguage();

  const NEW_ARTICLES = [
    {
      title: t.news1Title,
      summary: t.news1Summary,
      link: "https://angolaenergia2025.gestoenergy.com/en/conteudo/solar-energy",
      image: "/img/news-1.webp",
      tag: t.strategicVision
    },
    {
      title: t.news2Title,
      summary: t.news2Summary,
      link: "https://solarfinanced.africa/countries/solar-energy-in-angola/10-largest-solar-projects-in-angola",
      image: "/img/news-2.webp",
      tag: t.infrastructure
    },
    {
      title: t.news3Title,
      summary: t.news3Summary,
      link: "https://www.cnn.com/2026/02/12/business/video/angola-renewable-energy-hydropower-solar-investment-business-oil-quilemba-prodel",
      image: "/img/news-3.webp",
      tag: t.globalMedia
    },
    {
      title: t.news4Title,
      summary: t.news4Summary,
      link: "https://clubofmozambique.com/news/angola-opens-sub-saharan-africas-largest-off-grid-solar-plant-in-moxico-leste",
      image: "/img/news-4.webp",
      tag: t.recordBreaking
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A]">
      <Header />

      <div className="pt-48 pb-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <SectionReveal className="max-w-3xl mb-20">
            <div className="text-[#EA6003] font-bold text-xs uppercase tracking-[0.3em] mb-4">{t.latestUpdates as string}</div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-tight">
              {(t.newsInsights as string).split('&')[0]} <span className="text-white/40">& {(t.newsInsights as string).split('&')[1]}</span>
            </h1>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEW_ARTICLES.map((article, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <a 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col h-full bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-[#EA6003]/30 hover:shadow-2xl hover:shadow-[#EA6003]/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title as string}
                      className="w-full h-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#EA6003] text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                        {article.tag as string}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#EA6003] transition-colors">
                      {article.title as string}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mb-8 leading-relaxed line-clamp-3 flex-grow">
                      {article.summary as string}
                    </p>
                    <div className="flex items-center text-sm font-bold text-[#EA6003] group/btn">
                      {t.readMore as string} <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
