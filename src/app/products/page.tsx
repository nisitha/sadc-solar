import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/lib/wordpress";

export default async function AllProductsPage() {
  const products = await getProducts();
  
  // Sort products: menu_order ASC, then date DESC
  const sortedProducts = [...products].sort((a, b) => {
    if (a.menu_order !== b.menu_order) {
      return (a.menu_order || 0) - (b.menu_order || 0);
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Extract unique categories
  const categories = Array.from(new Set(products.flatMap(p => p.categories)));

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 bg-gray-50/50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-32" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4">SADC Solar Energy</div>
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-tight">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mt-8">
            Explore our comprehensive catalog of high-performance solar components, from industrial-grade inverters to specialized wiring solutions.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ProductList initialProducts={sortedProducts} categories={categories} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
