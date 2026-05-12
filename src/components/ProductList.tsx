"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Zap, ArrowRight, Filter, Search, Grid, List } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductList({ initialProducts, categories }: { initialProducts: any[], categories: string[] }) {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Helper to translate categories from wp-data.json
  const translateCategory = (cat: string) => {
    const mapping: Record<string, string> = {
      "Solar Panels": t.catSolarPanels as string,
      "Solar Inverters": t.catSolarInverters as string,
      "On-grid Solar Inverters": t.catOnGridInverters as string || t.catSolarInverters as string,
      "Off-grid Solar Inverters": t.catOffGridInverters as string || t.catSolarInverters as string,
      "Solar Batteries": t.catSolarBatteries as string,
      "Solar Charge Controllers": t.catChargeControllers as string,
      "Solar Water Pumps": t.catSolarPumps as string,
      "Solar Street Lights": t.catStreetLights as string,
      "Wiring and Cables": t.catWiringCables as string,
      "Rack and Battery Cabinets": t.catRacksCabinets as string || cat,
    };
    return mapping[cat] || cat;
  };

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(p => {
      const matchesCategory = activeCategory === "All" || p.categories.includes(activeCategory);
      const title = language === 'pt' ? (p.title_pt || p.title) : (p.title_en || p.title);
      const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, initialProducts, language]);

  return (
    <div className="space-y-12">
      {/* Filter Bar */}
      <div className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
          <button 
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === "All" ? "bg-brand-yellow text-brand-navy shadow-lg shadow-brand-yellow/20" : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-brand-navy"}`}
          >
            {t.allCategories as string}
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? "bg-brand-yellow text-brand-navy shadow-lg shadow-brand-yellow/20" : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-brand-navy"}`}
            >
              {translateCategory(cat)}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-80 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400 group-focus-within:text-brand-yellow transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder={t.searchProducts as string}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 font-medium focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow/50 transition-all shadow-sm placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
        {filteredProducts.map((p, i) => {
          const title = language === 'pt' ? (p.title_pt || p.title) : (p.title_en || p.title);
          const rawContent = language === 'pt' ? p.content_pt : p.content_en;
          // Strip HTML tags for the preview
          const plainTextDescription = rawContent ? rawContent.replace(/<[^>]*>?/gm, '').trim() : "";

          return (
            <SectionReveal key={p.slug}>
              <Link 
                href={`/products/${p.slug}`}
                className="group relative flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                prefetch={false}
              >
                {/* Image Container - Strict Fixed Height */}
                <div className="relative h-56 w-full bg-slate-50 p-6 flex items-center justify-center shrink-0">
                  <img 
                    src={(p.imageUrl || "/placeholder-product.webp")
                          .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")} 
                    alt={title}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-brand-navy border border-slate-100 uppercase tracking-widest shadow-sm">
                      {translateCategory(p.categories[0])}
                    </span>
                  </div>
                </div>

                {/* Content Container - Flex Grow to push CTA down */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-[#001f3f] mb-3 group-hover:text-brand-primary transition-colors leading-snug line-clamp-2 min-h-[3rem] notranslate">
                      {title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                      {plainTextDescription}
                    </p>
                  </div>

                  {/* CTA - Anchored to Bottom */}
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between group/cta">
                    <span className="text-[10px] font-black text-[#001f3f] uppercase tracking-[0.2em] group-hover/cta:text-brand-primary transition-colors">
                      {t.viewDetails as string}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-navy transition-all duration-300 shadow-sm border border-slate-100">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-24">
          <div className="text-gray-400 font-bold mb-4">{t.noProductsFound as string}</div>
          <button 
            onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
            className="text-primary font-black uppercase tracking-widest text-sm hover:underline"
          >
            {t.clearFilters as string}
          </button>
        </div>
      )}
    </div>
  );
}
