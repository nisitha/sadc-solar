import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

const NEW_ARTICLES = [
  {
    title: "Angola Energia 2025: The Solar Energy Vision",
    summary: "Discover Angola's strategic roadmap for integrating solar energy to meet the nation's growing energy demands by 2025.",
    link: "https://angolaenergia2025.gestoenergy.com/en/conteudo/solar-energy",
    image: "/img/news-1.jpg",
    tag: "Strategic Vision"
  },
  {
    title: "The 10 Largest Solar Projects in Angola",
    summary: "A deep dive into the massive solar infrastructure projects driving Angola's transition towards sustainable and financed renewable energy.",
    link: "https://solarfinanced.africa/countries/solar-energy-in-angola/10-largest-solar-projects-in-angola",
    image: "/img/news-2.jpg",
    tag: "Infrastructure"
  },
  {
    title: "CNN Business: Angola's Renewable Investment",
    summary: "CNN highlights Angola's major shift from oil dependency to investing heavily in hydropower and solar projects like Quilemba and PRODEL.",
    link: "https://www.cnn.com/2026/02/12/business/video/angola-renewable-energy-hydropower-solar-investment-business-oil-quilemba-prodel",
    image: "/img/news-3.jpg",
    tag: "Global Media"
  },
  {
    title: "Sub-Saharan Africa's Largest Off-Grid Solar Plant",
    summary: "Angola makes history by opening the largest off-grid solar plant in Moxico Leste, bringing vital electricity to rural communities.",
    link: "https://clubofmozambique.com/news/angola-opens-sub-saharan-africas-largest-off-grid-solar-plant-in-moxico-leste",
    image: "/img/news-4.jpg",
    tag: "Record Breaking"
  }
];

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A]">
      <Header />

      <div className="pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="max-w-3xl mb-20">
            <div className="text-[#EA6003] font-bold text-xs uppercase tracking-[0.3em] mb-4">Latest Updates</div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
              News & <span className="text-white/40">Insights.</span>
            </h1>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      alt={article.title}
                      className="w-full h-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#EA6003] text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                        {article.tag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#EA6003] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mb-8 leading-relaxed line-clamp-3 flex-grow">
                      {article.summary}
                    </p>
                    <div className="flex items-center text-sm font-bold text-[#EA6003] group/btn">
                      Read More <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
