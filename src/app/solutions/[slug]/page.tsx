import React from "react";
import { getPostBySlug, getSolutions } from "@/lib/wordpress";
import SolutionDetailClient from "@/components/SolutionDetailClient";

export async function generateStaticParams() {
  const solutions = await getSolutions();
  // Include specific aggregator slugs as well
  const staticPaths = [
    { slug: "turnkey-solutions" },
    { slug: "other-turnkey-solutions" },
    ...solutions.map((solution: any) => ({
      slug: solution.slug,
    })),
  ];
  return staticPaths;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solutions = await getSolutions();

  const isAggregator = slug === "turnkey-solutions" || slug === "other-turnkey-solutions";
  let solution = null;
  let categorySolutions: any[] = [];

  if (isAggregator) {
    solution = {
      title: slug === "turnkey-solutions" ? "Turnkey Solutions" : "Other Turnkey Solutions",
      imageUrl: slug === "turnkey-solutions" ? "/img/solutions-hero.webp" : "/img/other-solutions-hero.webp"
    };
    categorySolutions = solutions.filter((s: any) => 
      slug === "turnkey-solutions" ? s.isMainSolution : !s.isMainSolution
    );
  } else {
    solution = await getPostBySlug(slug);
  }

  return (
    <SolutionDetailClient 
      slug={slug}
      initialSolution={solution}
      initialCategorySolutions={categorySolutions}
    />
  );
}
