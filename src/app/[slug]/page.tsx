import React from "react";
import { getPostBySlug, getPages } from "@/lib/wordpress";
import GenericPageClient from "@/components/GenericPageClient";

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((page: any) => ({
    slug: page.slug,
  }));
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPostBySlug(slug);

  return (
    <GenericPageClient page={page} />
  );
}
