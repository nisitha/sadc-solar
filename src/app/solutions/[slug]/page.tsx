import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getSolutions } from "@/lib/wordpress";
import { ArrowLeft, CheckCircle, Shield, Settings, Activity } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

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

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = (await getPostBySlug(slug)) as any;

  if (!solution) {
    notFound();
  }

  // Handle Aggregator Pages (Category-like pages)
  const isAggregator = slug === "turnkey-solutions" || slug === "other-turnkey-solutions";
  const categoryFilter = slug === "turnkey-solutions" ? "Turnkey Solutions" : "Other Turnkey Solutions";
  const categorySolutions = isAggregator 
    ? (await getSolutions()).filter((s: any) => s.categories.includes(categoryFilter))
    : [];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      <div className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors mb-12 group" prefetch={false}>
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-6">
              {isAggregator ? "Strategic Solutions" : "Expert Solar Solutions"}
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-8">
              {solution.title}
            </h1>
            
            <div className="relative rounded-[3rem] overflow-hidden aspect-video mb-16 shadow-2xl group">
              <img 
                src={(solution.imageUrl || "/placeholder-solution.jpg")
                  .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")
                  .replace(/-\d+x\d+(\.[a-z]+)/gi, "$1")} 
                alt={solution.title}
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
                    <img 
                      src={(item.imageUrl || "/placeholder-solution.jpg")
                        .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")
                        .replace(/-\d+x\d+(\.[a-z]+)/gi, "$1")} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-colors duration-500 group-hover:from-primary/90" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-2xl font-black text-white mb-4 transition-colors duration-500">
                        {item.title}
                      </h3>
                      <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <span className="inline-flex items-center text-white font-bold text-sm uppercase tracking-widest">
                          View Detailed Solution <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
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
                  dangerouslySetInnerHTML={{ __html: solution.content
                    .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")
                    .replace(/-\d+x\d+(\.[a-z]+)/gi, "$1") 
                  }}
                />

                <div className="mt-20 p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
                  <h2 className="text-3xl font-black text-gray-900 mb-8">Why SADC Solar for this Solution?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: Shield, title: "Unmatched Reliability", desc: "Our systems are engineered to withstand the most demanding conditions." },
                      { icon: Settings, title: "Custom Integration", desc: "We tailor every component to your specific energy requirements." },
                      { icon: Activity, title: "Real-time Monitoring", desc: "Stay informed about your energy production 24/7." },
                      { icon: CheckCircle, title: "Certified Installation", desc: "Installed by our local, highly trained technical team in Luanda." },
                    ].map((item, i) => (
                      <div key={i} className="flex space-x-6">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16 text-center">
                  <Link href="/contact-us" className="inline-block px-12 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-hover transition-all shadow-2xl shadow-primary/20 text-lg uppercase tracking-widest" prefetch={false}>
                    Discuss Your Project
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

