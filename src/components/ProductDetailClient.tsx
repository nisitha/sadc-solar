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

const ICON_MAP: Record<string, any> = {
  "User Friendly": Smile,
  "Flexible": Layers,
  "Real-time Monitoring": Eye,
  "High Efficiency": Zap,
  "Safety First": ShieldCheck,
  "Off-grid Ready": ZapOff,
  "Reliable": Activity,
  "Water Resistance": Droplet,
  "Anti-reflective": Sun,
  "Advanced Cooling": Cpu
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
  const { t } = useLanguage();

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
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/products" className="flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors mb-12 group" prefetch={false}>
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {t.backToCatalog as string}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32 space-y-8">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl group">
                <img
                  src={(product.imageUrl || "/placeholder-product.webp")
                    .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")}
                  alt={product.title}
                  className="w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-8 left-8 flex flex-col space-y-3">
                  <span className="px-4 py-1.5 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {t.premiumQuality as string}
                  </span>
                  <span className="px-4 py-1.5 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {t.warrantyGuaranteed as string}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <div className="text-brand-primary font-bold text-xs uppercase tracking-[0.4em] mb-4">
                  {t.productCategory as string}: <span className="notranslate">{product.categories[0]}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-none mb-8 notranslate">
                  {product.title}
                </h1>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact-us" className="px-10 py-5 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 flex items-center uppercase tracking-widest text-xs" prefetch={false}>
                    {t.requestProposal as string} <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                  <button className="px-10 py-5 bg-gray-100 text-gray-900 font-bold rounded-2xl hover:bg-gray-200 transition-all flex items-center uppercase tracking-widest text-xs">
                    {t.downloadDatasheet as string} <Download className="ml-3 w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-10">
                <div className="border-l-4 border-brand-primary pl-8">
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-6">
                    {t.coreOverview as string}
                  </h3>
                  <div
                    className="text-lg text-gray-600 leading-relaxed font-medium prose-custom"
                    dangerouslySetInnerHTML={{
                      __html: product.content
                        .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features?.map((feature: any, i: number) => {
                    const Icon = ICON_MAP[feature.title] || Activity;
                    return (
                      <div key={i} className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-brand-primary/20 transition-all group">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 notranslate">{feature.title}</h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed notranslate">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>

                <TechnicalTable specifications={product.specifications} t={t} />
              </div>
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
    <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl">
      <div className="bg-gray-900 px-10 py-6">
        <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] flex items-center">
          <Settings className="w-4 h-4 mr-3 text-brand-primary" />
          Technical Specifications
        </h3>
      </div>
      <div className="bg-white overflow-x-auto">
        <div
          className="technical-spec-table p-4"
          dangerouslySetInnerHTML={{
            __html: specifications
              .replace(/<th>Parameter<\/th>/gi, `<th>${t.parameter}</th>`)
              .replace(/<th>Specification<\/th>/gi, `<th>${t.specification}</th>`)
              .replace(/Voltage/gi, t.voltage)
              .replace(/Power/gi, t.power)
              .replace(/Efficiency/gi, t.efficiency)
              .replace(/Weight/gi, t.weight)
          }}
        />
      </div>
    </div>
  );
}
