"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getSolutions } from "@/lib/wordpress";
import { ArrowLeft, CheckCircle, Shield, Settings, Activity } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function SolutionDetailClient({ slug, initialSolution, initialCategorySolutions }: { slug: string, initialSolution: any, initialCategorySolutions: any[] }) {
  const { t, language } = useLanguage();
  const [solution, setSolution] = useState<any>(initialSolution);
  const [categorySolutions, setCategorySolutions] = useState<any[]>(initialCategorySolutions);

  if (!solution) {
    notFound();
  }

  const isAggregator = slug === "turnkey-solutions" || slug === "other-turnkey-solutions";

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      <div className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Link href="/" className="flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors mb-12 group" prefetch={false}>
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {t.backToHome as string}
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-6">
              {isAggregator ? t.strategicSolutions as string : t.expertSolarSolutions as string}
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-8">
              {isAggregator 
                ? (slug === "turnkey-solutions" ? t.turnkeySolutions as string : t.otherTurnkeySolutions as string) 
                : (language === 'pt' ? (solution.title_pt || solution.title) : (solution.title_en || solution.title))}
            </h1>
            
            <div className="relative rounded-[3rem] overflow-hidden aspect-video mb-16 shadow-2xl group">
              <img 
                src={(solution.imageUrl || "/placeholder-solution.webp")
                  .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")} 
                alt={isAggregator 
                  ? (slug === "turnkey-solutions" ? t.turnkeySolutions as string : t.otherTurnkeySolutions as string) 
                  : (language === 'pt' ? (solution.title_pt || solution.title) : (solution.title_en || solution.title))}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {isAggregator ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {categorySolutions.map((item: any) => (
                  <Link 
                    key={item.id} 
                    href={`/solutions/${item.slug}`}
                    className="group relative overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 h-[400px] shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                    prefetch={false}
                  >
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={(item.imageUrl || "/placeholder-solution.webp")
                          .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")
                          .replace(/-\d+x\d+(\.[a-z]+)/gi, "$1")} 
                        alt={language === 'pt' ? (item.title_pt || item.title) : (item.title_en || item.title)}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-colors duration-500 group-hover:from-brand-primary/90" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-2xl font-black text-white mb-4 transition-colors duration-500">
                        {language === 'pt' ? (item.title_pt || item.title) : (item.title_en || item.title)}
                      </h3>
                      <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <span className="inline-flex items-center text-white font-bold text-sm uppercase tracking-widest">
                          {t.viewDetailedSolution as string} <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <>
                <div 
                  className="text-xl text-gray-600 leading-relaxed font-medium wp-content space-y-8 prose-custom"
                  dangerouslySetInnerHTML={{ __html: (language === 'pt' ? (solution.content_pt || "") : (solution.content_en || ""))
                    .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")
                    .replace(/-\d+x\d+(\.[a-z]+)/gi, "$1") 
                  }}
                />

                <div className="mt-20 p-6 md:p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
                  <h2 className="text-3xl font-black text-gray-900 mb-8">{t.whySadcForSolution as string}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: Shield, title: t.unmatchedReliability, desc: t.reliabilityDesc },
                      { icon: Settings, title: t.customIntegration, desc: t.integrationDesc },
                      { icon: Activity, title: t.realTimeMonitoring, desc: t.monitoringDesc },
                      { icon: CheckCircle, title: t.certifiedInstallation, desc: t.installationDesc },
                    ].map((item, i) => (
                      <div key={i} className="flex space-x-6">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title as string}</h4>
                          <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc as string}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16 text-center">
                  <Link href="/contact-us" className="inline-block px-12 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-hover transition-all shadow-2xl shadow-primary/20 text-lg uppercase tracking-widest" prefetch={false}>
                    {t.discussYourProject as string}
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
