"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronDown, Menu, X, Globe, Search, Zap, Sun, Battery, Settings, ShieldCheck, Award, Lightbulb, Grid, Cable, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const SOLUTIONS = [
  { name: "Soluções Chave na Mão", href: "/solutions/turnkey-solutions" },
  { name: "Outras Soluções Chave na Mão", href: "/solutions/other-turnkey-solutions" },
];

const PRODUCTS_LIST = [
  { name: "INVERSORES SOLARES OFF-GRID", href: "/products/off-grid-solar-inverters" },
  { name: "INVERSORES SOLARES ON-GRID", href: "/products/on-grid-solar-inverters" },
  { name: "CONTROLADORES DE CARGA SOLAR", href: "/products/solar-charge-controllers" },
  { name: "PAINÉIS SOLARES", href: "/products/solar-panels" },
  { name: "BATERIAS SOLARES", href: "/products/solar-batteries" },
  { name: "BOMBAS DE ÁGUA SOLARES", href: "/products/solar-water-pumps" },
  { name: "LUMINÁRIAS SOLARES", href: "/products/solar-street-lights" },
  { name: "ARMÁRIOS DE RACK E BATERIAS", href: "/products/rack-and-battery-cabinets" },
  { name: "FIAÇÃO E CABOS", href: "/products/wiring-and-cables" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { language, setLanguage } = useLanguage();
  const [isTranslateLoaded, setIsTranslateLoaded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Google Translate Initialization
    if (!(window as any).googleTranslateElementInit) {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'pt',
          includedLanguages: 'en,pt',
          autoDisplay: false,
        }, 'google_translate_element');
        setIsTranslateLoaded(true);
      };
      const addScript = document.createElement('script');
      addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      addScript.async = true;
      document.body.appendChild(addScript);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = (lang: 'en' | 'pt') => {
    setLanguage(lang);
  };

  return (
    <header className="w-full sticky top-0 z-[100] flex flex-col shadow-lg shadow-black/5">
      {/* Top Bar - Dark Premium Style with Search */}
      <div className="bg-[#121212] border-b border-white/5 py-3 px-6 hidden lg:block relative z-[60]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8 text-[10px] font-black text-white/50 tracking-widest uppercase">
            <a href="mailto:solutions@sadcsolar.com" className="flex items-center hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5 mr-2 text-primary" />
              solutions@sadcsolar.com
            </a>
            <a href="tel:+244923512645" className="flex items-center hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2 text-primary" />
              +244 923 512 645
            </a>
          </div>

          <div className="flex-1 max-w-xl mx-12 relative group">
            <input 
              type="text"
              placeholder={language === 'pt' ? "O que você está procurando?" : "What are you looking for?"}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 px-12 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all backdrop-blur-md"
              onFocus={() => setIsSearchOpen(true)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <AnimatePresence>
              {isSearchOpen && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/10 rounded-full hover:bg-primary transition-colors"
                >
                  <X className="w-3 h-3 text-white" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

            <MapPin className="w-3.5 h-3.5 mr-2 text-primary" />
            Luanda, Angola
          </div>
        </div>
      </div>

      {/* Search Explorer Dropdown */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="hidden lg:block">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[58]"
              onClick={() => setIsSearchOpen(false)}
            />
            <div className="max-w-7xl mx-auto px-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                className="absolute top-2 left-1/2 -translate-x-1/2 w-full max-w-5xl bg-[#121212]/90 border border-white/10 rounded-[2.5rem] z-[59] shadow-2xl backdrop-blur-3xl overflow-hidden p-8"
              >
                {/* Solutions Row - Compact */}
                <div className="mb-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">Soluções</span>
                    <div className="h-[1px] flex-1 bg-white/5" />
                  </div>
                  <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
                    {SOLUTIONS.map((item, i) => (
                      <Link 
                        key={i} 
                        href={item.href}
                        onClick={() => setIsSearchOpen(false)}
                        className="min-w-[220px] bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center space-x-4 hover:bg-white/[0.08] hover:border-primary/40 transition-all group"
                        prefetch={false}
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                          <ShieldCheck className="w-5 h-5 text-primary group-hover:text-white" />
                        </div>
                        <span className="text-xs font-bold text-white/80 group-hover:text-white transition-colors truncate notranslate">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Products Row - Compact Grid-like Flow */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">Categorias de Produtos</span>
                    <div className="h-[1px] flex-1 bg-white/5" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {PRODUCTS_LIST.map((item, i) => (
                      <Link 
                        key={i} 
                        href={item.href}
                        onClick={() => setIsSearchOpen(false)}
                        className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center space-x-4 hover:bg-white/[0.08] hover:border-primary/40 transition-all group"
                        prefetch={false}
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20">
                           <Award className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors uppercase tracking-wider notranslate">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer Explorer Action */}
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-center">
                   <Link href="/products" className="text-[10px] font-black text-primary uppercase tracking-[0.3em] hover:text-white transition-colors" prefetch={false}>
                      Ver Catálogo Completo de Tecnologia →
                   </Link>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <nav 
        className={cn(
          "w-full px-6 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-gray-100" 
            : "bg-white py-5 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center" prefetch={false}>
            <img 
              src="/logo.svg" 
              alt="SADC Solar Logo" 
              className="w-44 md:w-60 h-auto object-contain transition-transform duration-300 hover:scale-105" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="/">Início</NavLink>
            <NavLink href="/about-us">Sobre Nós</NavLink>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setActiveMenu('solutions')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center text-[15px] font-semibold text-gray-700 group-hover:text-primary transition-colors cursor-pointer">
                Soluções <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <AnimatePresence>
                {activeMenu === 'solutions' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {SOLUTIONS.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        className="block px-6 py-3.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-50 last:border-0"
                        prefetch={false}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setActiveMenu('products')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center text-[15px] font-semibold text-gray-700 group-hover:text-primary transition-colors cursor-pointer">
                Produtos <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <AnimatePresence>
                {activeMenu === 'products' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
                  >
                    {PRODUCTS_LIST.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        className="px-8 py-4 text-left text-[13px] font-bold text-brand-primary uppercase tracking-wider hover:bg-gray-50 transition-all border-b border-gray-50 last:border-0"
                        prefetch={false}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/news">Últimas Notícias</NavLink>
            
            {/* Language Switcher */}
            <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100">
              <button 
                onClick={() => toggleLanguage('en')}
                className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black transition-all",
                  language === 'en' ? "bg-white shadow-sm text-primary" : "text-gray-400 hover:text-gray-600"
                )}
              >
                EN
              </button>
              <button 
                onClick={() => toggleLanguage('pt')}
                className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black transition-all",
                  language === 'pt' ? "bg-white shadow-sm text-primary" : "text-gray-400 hover:text-gray-600"
                )}
              >
                PT
              </button>
            </div>

            <Link 
              href="/contact-us" 
              className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary-hover transform hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20"
              prefetch={false}
            >
              Contate-nos
            </Link>
          </div>

          <div id="google_translate_element" className="hidden"></div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Cinematic Full-screen Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="lg:hidden fixed inset-0 z-[110] bg-white/70 flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-white/50">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center" prefetch={false}>
                <img src="/logo.svg" alt="SADC Solar" className="w-32 h-auto" />
              </Link>
              <button 
                className="p-2 text-gray-900 bg-gray-100 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 pb-32">
              <div className="flex flex-col space-y-8">
                
                {/* Premium Region Setting / Language Selector (At Top) */}
                <div className="p-6 bg-[#0B111D] rounded-[2.5rem] shadow-2xl shadow-black/40 border border-white/5 mb-4">
                  <div className="flex items-center space-x-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Configuração de Região</div>
                      <div className="text-sm font-bold text-white uppercase tracking-wider">Selecione o Idioma</div>
                    </div>
                  </div>
                  
                  <div className="relative flex p-1.5 bg-black/40 rounded-full border border-white/5 min-h-[60px]">
                    {/* Animated Highlight Background (Buttery Smooth Sliding Pill) */}
                    <div className="absolute inset-y-1.5 left-1.5 right-1.5 pointer-events-none z-0">
                      <motion.div 
                        initial={false}
                        animate={{ 
                          x: language === 'en' ? '0%' : '100%',
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 35,
                          mass: 1 
                        }}
                        className="w-1/2 h-full bg-brand-primary rounded-full shadow-lg shadow-brand-primary/30"
                      />
                    </div>

                    <button 
                      onClick={() => toggleLanguage('en')} 
                      className={cn(
                        "relative z-10 flex-1 flex items-center justify-center text-[11px] uppercase tracking-wider transition-all duration-300", 
                        language === 'en' ? "text-white font-bold" : "text-gray-500 hover:text-white"
                      )}
                    >
                      English (EN)
                    </button>
                    <button 
                      onClick={() => toggleLanguage('pt')} 
                      className={cn(
                        "relative z-10 flex-1 flex items-center justify-center text-[11px] uppercase tracking-wider transition-all duration-300", 
                        language === 'pt' ? "text-white font-bold" : "text-gray-500 hover:text-white"
                      )}
                    >
                      Português (PT)
                    </button>
                  </div>
                </div>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-100/50 mb-4" />

                <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Início</MobileNavLink>
                <MobileNavLink href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>Sobre Nós</MobileNavLink>
                
                <div className="space-y-6">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Soluções</div>
                  <div className="grid grid-cols-1 gap-3">
                    {SOLUTIONS.map(s => (
                      <Link 
                        key={s.name} 
                        href={s.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-4 p-5 bg-gray-50 rounded-3xl border border-gray-100/50 active:scale-[0.98] transition-all min-h-[64px]"
                        prefetch={false}
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-[15px] font-bold text-gray-800 notranslate">{s.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">Catálogo de Tecnologia</div>
                  <div className="grid grid-cols-1 gap-3">
                    {PRODUCTS_LIST.slice(0, 4).map(item => (
                      <Link 
                        key={item.name} 
                        href={item.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-4 p-5 bg-white/50 rounded-3xl border border-gray-100/30 active:scale-[0.98] transition-all min-h-[64px]"
                        prefetch={false}
                      >
                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                          <Zap className="w-5 h-5 text-gray-500" />
                        </div>
                        <span className="text-[13px] font-bold text-gray-600 notranslate uppercase tracking-wider">{item.name}</span>
                      </Link>
                    ))}
                    <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-4 text-xs font-black text-primary uppercase tracking-[0.3em] hover:opacity-70 transition-opacity">
                      EXPLORAR TODOS OS PRODUTOS →
                    </Link>
                  </div>
                </div>

                <MobileNavLink href="/news" onClick={() => setIsMobileMenuOpen(false)}>Últimas Notícias</MobileNavLink>
                
                <Link 
                  href="/contact-us" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-6 bg-primary text-white text-center font-black rounded-[2.5rem] shadow-2xl shadow-primary/30 uppercase tracking-[0.3em] text-sm min-h-[64px] flex items-center justify-center hover:scale-[1.02] active:scale-95 transition-all"
                  prefetch={false}
                >
                  Obter um Orçamento Gratuito
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-[15px] font-semibold text-gray-700 hover:text-primary transition-colors"
      prefetch={false}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="text-2xl font-black text-gray-900 py-4 px-2 block border-b border-gray-100/50 last:border-0 hover:text-primary transition-colors min-h-[56px] flex items-center"
      prefetch={false}
    >
      {children}
    </Link>
  );
}
