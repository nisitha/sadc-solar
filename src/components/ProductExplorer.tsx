import React, { useRef, useState, useEffect } from "react";
import { Search, Zap, Sun, Battery, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductExplorer() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const EXPLORER_ITEMS = [
    {
      title: t.catOffGridInverters,
      icon: Zap,
      href: "/products/off-grid-solar-inverters"
    },
    {
      title: t.catOnGridInverters,
      icon: Settings,
      href: "/products/on-grid-solar-inverters"
    },
    {
      title: t.catChargeControllers,
      icon: Sun,
      href: "/products/solar-charge-controllers"
    },
    {
      title: t.catSolarBatteries,
      icon: Battery,
      href: "/products/solar-batteries"
    },
    {
      title: t.catSolarPanels,
      icon: Sun,
      href: "/products/solar-panels"
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
        {/* Decorative Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Search Bar Container */}
        <div className="max-w-2xl mx-auto mb-16 relative z-10">
          <div className="relative">
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-full py-5 px-14 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary/50 transition-all text-lg font-medium"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-primary p-2.5 rounded-full">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Product Grid Container */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] opacity-40">
              {t.productsAndSolutions}
            </h3>
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-20">{t.horizontalExplorer}</span>
            </div>
          </div>

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 pb-12 no-scrollbar snap-x snap-mandatory"
          >
            {EXPLORER_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={i} 
                  href={item.href}
                  className="min-w-[280px] md:min-w-[320px] bg-[#262626] rounded-[2.5rem] p-10 snap-start border border-white/5 hover:border-brand-primary/30 transition-all duration-500 hover:bg-[#2a2a2a] group/card flex flex-col items-center text-center justify-between h-[320px]"
                  prefetch={false}
                >
                  <div className="w-24 h-24 rounded-3xl bg-white/[0.02] flex items-center justify-center group-hover/card:bg-brand-primary/10 transition-colors duration-500">
                    <Icon className="w-12 h-12 text-brand-primary group-hover/card:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight px-4 leading-tight notranslate">
                    {item.title}
                  </h4>
                  <div className="text-brand-primary font-black text-[10px] uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                    {t.viewCatalog}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative mb-12">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-brand-primary"
              style={{ width: `${Math.max(5, scrollProgress)}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </div>

          {/* Footer CTA */}
          <div className="flex justify-center border-t border-white/5 pt-12">
            <Link 
              href="/products"
              className="group inline-flex items-center text-sm font-black text-brand-primary uppercase tracking-[0.3em] hover:text-white transition-colors"
              prefetch={false}
            >
              {t.exploreTechnology}
              <div className="ml-4 w-8 h-8 rounded-full border border-brand-primary/30 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
