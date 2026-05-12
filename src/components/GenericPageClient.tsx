"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function GenericPageClient({ page }: { page: any }) {
  const { t, language } = useLanguage();

  if (!page) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* Hero Section for Pages */}
      <section className="relative pt-48 pb-24 bg-gray-900 overflow-hidden">
        {page.imageUrl && (
          <div className="absolute inset-0 z-0">
            <img 
              src={page.imageUrl} 
              alt={language === 'pt' ? page.title_pt : page.title_en} 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          </div>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">SADC Solar</div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight notranslate">
            {language === 'pt' ? page.title_pt : page.title_en}
          </h1>
        </div>
      </section>

      {/* Page Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div 
            className="text-lg text-gray-600 leading-relaxed font-medium wp-content space-y-8 prose-custom"
            dangerouslySetInnerHTML={{ __html: language === 'pt' ? page.content_pt : page.content_en }}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
