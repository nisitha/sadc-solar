import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getNews } from "@/lib/wordpress";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const news = await getNews();
  return news.map((item: any) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getPostBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/news" className="flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors mb-12 group" prefetch={false}>
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            BACK TO NEWS
          </Link>

          <article className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-6">Market News</div>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-8">
                {item.title}
              </h1>
              <div className="flex items-center justify-center space-x-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-primary" />
                  SADC Admin
                </div>
              </div>
            </div>

            {item.imageUrl && (
              <div className="rounded-[3rem] overflow-hidden aspect-video mb-16 shadow-2xl">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div 
              className="text-xl text-gray-600 leading-relaxed font-medium wp-content space-y-8"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />

            <div className="mt-24 pt-12 border-t border-gray-100 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Share this story:</span>
                <div className="flex space-x-2">
                  {[Share2].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all">
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
              <Link href="/news" className="text-sm font-bold text-primary hover:underline" prefetch={false}>
                View More News →
              </Link>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
}
