import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getPages } from "@/lib/wordpress";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((page: any) => ({
    slug: page.slug,
  }));
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPostBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* Hero Section for Pages */}
      <section className="relative pt-48 pb-24 bg-gray-900 overflow-hidden">
        {page.imageUrl && (
          <div className="absolute inset-0 z-0">
            <img 
              src={page.imageUrl} 
              alt={page.title} 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          </div>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">SADC Solar</div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            {page.title}
          </h1>
        </div>
      </section>

      {/* Page Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div 
            className="text-lg text-gray-600 leading-relaxed font-medium wp-content space-y-8"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
