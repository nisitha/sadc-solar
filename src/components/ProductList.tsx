"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Zap, ArrowRight, Filter, Search, Grid, List } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductList({ initialProducts, categories }: { initialProducts: any[], categories: string[] }) {
  const { t } = useLanguage();
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
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, initialProducts]);

  return (
    <div className="space-y-12">
      {/* Filter Bar */}
      <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-black/[0.03] border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
          <button 
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === "All" ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-gray-50 text-gray-500 hover:bg-gray-100"}`}
          >
            {t.allCategories as string}
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-gray-50 text-gray-500 hover:bg-gray-100"}`}
            >
              {translateCategory(cat)}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-80 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder={t.searchProducts as string}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm text-gray-600 font-medium focus:ring-2 focus:ring-primary transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((p, i) => (
          <SectionReveal key={p.slug}>
            <Link 
              href={`/products/${p.slug}`}
              className="group relative block bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/20 flex flex-col h-full"
              prefetch={false}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <img 
                  src={p.slug === 'enlarged-led-module-solar-street-lightslz' 
                    ? '/uploads/40W-to-200W-LED-Solar-Street-Light.webp'
                    : (p.imageUrl || "/placeholder-product.webp")
                        .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")
                        .replace(/-\d+x\d+(\.[a-z]+)/gi, "$1")} 
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                    {translateCategory(p.categories[0])}
                  </span>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-8 flex flex-col flex-grow relative overflow-hidden">
                {/* Hover Fill Effect (matches home page cards) */}
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 group-hover:text-white transition-colors leading-snug line-clamp-2">
                    {p.title}
                  </h3>
                  
                  <div className="mt-auto pt-6 border-t border-gray-50 group-hover:border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-black text-primary group-hover:text-white uppercase tracking-[0.2em] transition-colors">
                      {t.viewDetails as string}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <ArrowRight className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SectionReveal>
        ))}
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
