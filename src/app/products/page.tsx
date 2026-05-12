"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/lib/wordpress";
import { useLanguage } from "@/context/LanguageContext";

export default function AllProductsPage() {
  const { t } = useLanguage();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await getProducts();
      
      // Sort products: menu_order ASC, then date DESC
      const sorted = [...data].sort((a, b) => {
        if (a.menu_order !== b.menu_order) {
          return (a.menu_order || 0) - (b.menu_order || 0);
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      const cats = Array.from(new Set(data.flatMap(p => p.categories)));
      
      setProducts(sorted);
      setCategories(cats);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 bg-gray-50/50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-32" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4">SADC Solar Energy</div>
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-tight">
            {t.ourProductsTitle as string}
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mt-8">
            {t.ourProductsDescription as string}
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {!loading ? (
            <ProductList initialProducts={products} categories={categories} />
          ) : (
            <div className="flex items-center justify-center py-24">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
