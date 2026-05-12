"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import {
  ArrowLeft, Download, ShieldCheck, Zap,
  ArrowRight, Activity, Smile, Layers, Eye, ZapOff, Droplet, Sun, Cpu, Settings
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import FeatureCard from "@/components/FeatureCard";

const ICON_MAP: Record<string, any> = {
  "User Friendly": Smile,
  "Flexible": Layers,
  "Real-time Monitoring": Eye,
  "High Efficiency": Zap,
  "Efficient": Zap,
  "Safety First": ShieldCheck,
  "Off-grid Ready": ZapOff,
  "Reliable": Activity,
  "Robust": ShieldCheck,
  "Water Resistance": Droplet,
  "Anti-reflective": Sun,
  "Advanced Cooling": Cpu,
  "Convenient": Smile,
  "Innovative": Cpu,
  "Highlights": Zap,
  "Easy to Use": Smile,
  "KEY FEATURES": Settings,
  "Product Highlights": Zap,
  "FEATURES": Settings
};

export default function ProductDetailClient({
  slug,
  product,
  isCategory,
  allProducts
}: {
  slug: string,
  product: any,
  isCategory: boolean,
  allProducts: any[]
}) {
  const { t, language } = useLanguage();

  const translateCategory = (cat: string) => {
    const map: Record<string, string> = {
      "solar-panels": t.catSolarPanels as string,
      "solar-inverters": t.catSolarInverters as string,
      "on-grid-solar-inverters": t.catOnGridInverters as string,
      "off-grid-solar-inverters": t.catOffGridInverters as string,
      "solar-batteries": t.catSolarBatteries as string,
      "solar-charge-controllers": t.catChargeControllers as string,
      "solar-water-pumps": t.catSolarPumps as string,
      "solar-street-lights": t.catStreetLights as string,
      "wiring-and-cables": t.catWiringCables as string,
      "rack-and-battery-cabinets": t.catRacksCabinets as string,
      "monitoring-and-management": t.catMonitoring as string
    };
    return map[cat] || cat;
  };

  if (isCategory) {
    const categoryName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const translatedCatName = translateCategory(slug);
    const categoryProducts = allProducts.filter(p =>
      p.categories.some((c: string) => c.toLowerCase().replace(/\s+/g, "-") === slug)
    );

    return (
      <main className="flex min-h-screen flex-col bg-white">
        <Header />
        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <Link href="/products" className="flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors mb-12 group" prefetch={false}>
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t.backToCatalog as string}
            </Link>
            <div className="mb-16">
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight uppercase mb-4 notranslate">
                {translatedCatName}
              </h1>
              <p className="text-lg text-gray-500 font-medium tracking-wide">
                {(t.showingProducts as string).replace('{count}', categoryProducts.length.toString())}
              </p>
            </div>
            <ProductList
              initialProducts={categoryProducts}
              categories={Array.from(new Set(allProducts.flatMap(p => p.categories)))}
            />
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!product) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Link href="/products" className="flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors mb-12 group" prefetch={false}>
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {t.backToCatalog as string}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="sticky top-32 space-y-8">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-sm group">
                <img
                  src={(product.imageUrl || "/placeholder-product.webp")
                    .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")}
                  alt={language === 'pt' ? (product.title_pt || product.title) : (product.title_en || product.title)}
                  className="w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-8 left-8 flex flex-col space-y-3">
                  <span className="px-4 py-1.5 bg-brand-navy text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {t.premiumQuality as string}
                  </span>
                  <span className="px-4 py-1.5 bg-brand-yellow text-brand-navy text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {t.warrantyGuaranteed as string}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <div className="text-brand-navy font-bold text-xs uppercase tracking-[0.4em] mb-4">
                  {t.productCategory as string}: <span className="text-slate-500 font-medium notranslate">{translateCategory(product.categories[0])}</span>
                </div>
                <h1 className="text-3xl md:text-6xl font-black text-brand-navy tracking-tight leading-tight mb-8 notranslate">
                  {language === 'pt' ? (product.title_pt || product.title) : (product.title_en || product.title)}
                </h1>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact-us" className="px-6 py-4 md:px-10 md:py-5 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 flex items-center uppercase tracking-widest text-xs" prefetch={false}>
                    {t.requestProposal as string} <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                  <button className="px-6 py-4 md:px-10 md:py-5 bg-gray-100 text-gray-900 font-bold rounded-2xl hover:bg-gray-200 transition-all flex items-center uppercase tracking-widest text-xs">
                    {t.downloadDatasheet as string} <Download className="ml-3 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        <div className="mt-24 space-y-16">
              <div className="space-y-12">
                <div className="border-l-4 border-brand-yellow pl-8">
                  <h3 className="text-xl font-black text-brand-navy uppercase tracking-widest mb-8 bg-slate-100 px-6 py-3 rounded-xl inline-block shadow-sm">
                    {t.coreOverview as string}
                  </h3>
                  <div
                    className="text-xl text-slate-600 leading-relaxed font-medium prose-custom max-w-5xl"
                    dangerouslySetInnerHTML={{
                      __html: language === 'pt' ? product.content_pt : product.content_en
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {product.features?.map((feature: any, i: number) => {
                    const title = language === 'pt' ? (feature.title_pt || feature.title_en || feature.title) : (feature.title_en || feature.title);
                    const items = language === 'pt' ? (feature.items_pt || feature.items_en || feature.items || []) : (feature.items_en || feature.items || []);
                    const Icon = ICON_MAP[feature.title_en || feature.title] || Activity;

                    return (
                      <FeatureCard
                        key={i}
                        title={title}
                        items={items}
                        icon={Icon}
                      />
                    );
                  })}
                </div>

                <TechnicalTable specifications={language === 'pt' ? product.specifications_pt : product.specifications_en} t={t} />
              </div>
            </div>
          </div>
        </div>

        <Footer />
    </main>
  );
}

function TechnicalTable({ specifications, t }: { specifications: string, t: any }) {
  if (!specifications) return null;

  return (
    <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-sm bg-white/80 backdrop-blur-md">
      <div className="bg-slate-50 px-10 py-6 border-b border-slate-100">
        <h3 className="text-sm font-black text-brand-navy uppercase tracking-[0.3em] flex items-center">
          <Settings className="w-4 h-4 mr-3 text-brand-yellow" />
          {t.specifications as string}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <div
          className="technical-spec-table p-8 text-slate-600"
          dangerouslySetInnerHTML={{
            __html: specifications
          }}
        />
      </div>
    </div>
  );
}
