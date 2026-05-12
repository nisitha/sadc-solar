import React from "react";
import { getProducts } from "@/lib/wordpress";
import ProductDetailClient from "@/components/ProductDetailClient";

export async function generateStaticParams() {
  const products = await getProducts();
  const productSlugs = products.map((p: any) => ({ slug: p.slug }));
  
  // Also include category slugs
  const categories = Array.from(new Set(products.flatMap(p => p.categories)));
  const categorySlugs = categories.map((c: string) => ({ 
    slug: c.toLowerCase().replace(/\s+/g, "-") 
  }));

  return [...productSlugs, ...categorySlugs];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const products = await getProducts();
  const { slug } = await params;

  // Check if it's a category
  const categories = Array.from(new Set(products.flatMap(p => p.categories)));
  const categorySlugs = categories.map((c: string) => c.toLowerCase().replace(/\s+/g, "-"));
  const isCategory = categorySlugs.includes(slug);

  const product = products.find((p: any) => p.slug === slug);

  return (
    <ProductDetailClient 
      slug={slug}
      product={product}
      isCategory={isCategory}
      allProducts={products}
    />
  );
}
