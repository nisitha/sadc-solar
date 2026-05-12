import React from "react";
import { getPostBySlug, getNews } from "@/lib/wordpress";
import NewsDetailClient from "@/components/NewsDetailClient";

export async function generateStaticParams() {
  const news = await getNews();
  return news.map((item: any) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getPostBySlug(slug);

  return (
    <NewsDetailClient item={item} />
  );
}
