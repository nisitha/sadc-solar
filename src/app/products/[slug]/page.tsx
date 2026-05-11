import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getProductsByCategory, getProducts } from "@/lib/wordpress";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, Zap, Shield, Clock, Download, Star, ShieldCheck, 
  Activity, Weight, Package, FileText, ArrowRight, CheckCircle2,
  Smile, Layers, Home, List, Settings, Building2
} from "lucide-react";

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

const ICON_MAP: Record<string, any> = {
  "User Friendly": Smile,
  "Flexible": Layers,
  "Safe & Reliable": ShieldCheck,
  "Application": Home,
  "Technical Parameter": List,
  "Technical Data": List,
  "Features": Zap,
  "Overview": FileText,
};

function parseSections(html: string) {
  const headingRegex = /<(h[2-4]|strong|b)>([^<]+)<\/\1>/gi;
  const sections: { title: string; content: string }[] = [];
  let lastIndex = 0;
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const headingText = match[2].trim().replace(/&nbsp;/g, ' ');
    if (sections.length > 0) {
      sections[sections.length - 1].content = html.substring(lastIndex, match.index);
    } else if (match.index > 0) {
      // Capture any intro text before the first heading
      sections.push({ title: "Overview", content: html.substring(0, match.index) });
    }
    sections.push({ title: headingText, content: "" });
    lastIndex = headingRegex.lastIndex;
  }

  if (sections.length > 0) {
    sections[sections.length - 1].content = html.substring(lastIndex);
  } else {
    sections.push({ title: "Overview", content: html });
  }

  return sections.filter(s => s.content.trim() || ICON_MAP[s.title]);
}

const TechnicalTable = ({ html }: { html: string }) => {
  const liRegex = /<li>(.*?):(.*?)<\/li>/gi;
  const rows: { key: string; value: string }[] = [];
  let match;
  
  const cleanHtml = html.replace(/<[^>]*>?/gm, (tag) => {
    return tag.match(/<\/?li>/i) ? tag : '';
  });

  while ((match = liRegex.exec(cleanHtml)) !== null) {
    rows.push({ key: match[1].trim(), value: match[2].trim() });
  }

  if (rows.length === 0) return <div className="wp-content prose-custom" dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm mt-4">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-400 uppercase text-[9px] font-black tracking-[0.2em]">
          <tr>
            <th className="px-8 py-5">Parameter</th>
            <th className="px-8 py-5">Specification</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-8 py-5 font-black text-gray-900 border-r border-gray-50 notranslate">{row.key}</td>
              <td className="px-8 py-5 font-medium text-gray-500 italic notranslate">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const RenderFeatureContent = ({ html }: { html: string }) => {
  // Try to find list items in the HTML
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  const liMatches = Array.from(html.matchAll(liRegex));
  
  if (liMatches.length > 0) {
    return (
      <div className="space-y-4">
        {liMatches.map((match, i) => (
          <div key={i} className="group/item flex items-start gap-4">
            <div className="mt-1 shrink-0 w-5 h-5 rounded-lg bg-brand-primary/10 flex items-center justify-center group-hover/item:bg-brand-primary transition-colors duration-300">
              <CheckCircle2 className="w-3 h-3 text-brand-primary group-hover/item:text-white transition-colors" />
            </div>
            <div 
              className="text-sm md:text-base text-gray-600 font-semibold leading-relaxed"
              dangerouslySetInnerHTML={{ __html: match[1].trim() }}
            />
          </div>
        ))}
      </div>
    );
  }

  // Fallback: Try to split by common delimiters if no <li> tags found
  const points = html
    .replace(/<p[^>]*>/gi, '')
    .replace(/<\/p>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .split('\n')
    .map(p => p.replace(/<[^>]*>?/gm, '').trim())
    .filter(p => p.length > 3);

  if (points.length > 1) {
    return (
      <div className="space-y-4">
        {points.map((p, i) => (
          <div key={i} className="group/item flex items-start gap-4">
            <div className="mt-1 shrink-0 w-5 h-5 rounded-lg bg-brand-primary/10 flex items-center justify-center group-hover/item:bg-brand-primary transition-colors duration-300">
              <CheckCircle2 className="w-3 h-3 text-brand-primary group-hover/item:text-white transition-colors" />
            </div>
            <p className="text-sm md:text-base text-gray-600 font-semibold leading-relaxed">{p}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div 
      className="wp-content prose-custom text-sm md:text-base text-gray-600 font-semibold leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default async function DynamicProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = (await getPostBySlug(slug)) as any;
  const categoryProducts = await getProductsByCategory(slug);

  if (product && (product as any).categories) {
    const sanitizedContent = product.content
      .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")
      .replace(/-\d+x\d+(?=\.[a-z0-9]+$)/gi, "");

    const sections = parseSections(sanitizedContent);

    // Extract Basic Specs for the Top Grid
    const specFields = [
      { label: "Voltage", icon: Zap, key: /Voltage:\s*([^<\n]+)/i },
      { label: "Power", icon: Activity, key: /Power:\s*([^<\n]+)/i },
      { label: "Efficiency", icon: Star, key: /Efficiency:\s*([^<\n]+)/i },
      { label: "Weight", icon: Weight, key: /Weight:\s*([^<\n]+)/i },
    ];
    
    const topSpecs = specFields
      .map(f => ({ ...f, value: sanitizedContent.match(f.key)?.[1]?.trim() }))
      .filter(s => s.value);

    const datasheetUrl = sanitizedContent.match(/href="([^"]+\.pdf)"/i)?.[1];

    return (
      <main className="flex min-h-screen flex-col bg-white">
        <Header />

        <div className="pt-32 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Link href="/" className="flex items-center text-[10px] font-black tracking-[0.3em] text-gray-400 hover:text-brand-primary transition-colors mb-12 group uppercase" prefetch={false}>
              <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Catalog
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Product Gallery */}
                <div className="lg:col-span-7">
                  <div className="group relative bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl shadow-black/5 aspect-[4/3]">
                    <img 
                      src={product.slug === 'enlarged-led-module-solar-street-lightslz'
                        ? '/uploads/40W-to-200W-LED-Solar-Street-Light.webp'
                        : (product.imageUrl || "/placeholder-product.webp")
                            .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")
                            .replace(/-\d+x\d+(?=\.[a-z0-9]+$)/gi, "")} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                </div>

              {/* Product Info */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.categories?.map((cat: string) => (
                      <span key={cat} className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] px-4 py-1.5 bg-brand-primary/5 rounded-full border border-brand-primary/10">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-brand-primary/5 rounded-lg border border-brand-primary/10 text-brand-primary">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Premium Quality</span>
                    </div>
                    <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-brand-primary/5 rounded-lg border border-brand-primary/10 text-brand-primary">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Warranty Guaranteed</span>
                    </div>
                  </div>

                  <h1 className="text-5xl font-black text-gray-900 tracking-tighter leading-[1.1] mb-6">
                    {product.title}
                  </h1>
                </div>

                {topSpecs.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 notranslate">
                    {topSpecs.map((spec, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center text-gray-400 space-x-2">
                          <spec.icon className="w-4 h-4" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">{spec.label}</span>
                        </div>
                        <div className="text-lg font-black text-gray-900">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col space-y-4 pt-4">
                  <Link href="/contact-us" className="flex items-center justify-center space-x-3 w-full px-10 py-6 bg-brand-primary text-white font-black rounded-2xl hover:bg-brand-hover transition-all shadow-2xl shadow-brand-primary/30 text-sm uppercase tracking-[0.2em] group" prefetch={false}>
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  {datasheetUrl && (
                    <a href={datasheetUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 w-full px-10 py-6 bg-white text-gray-900 font-black rounded-2xl border-2 border-gray-100 hover:bg-gray-50 transition-all text-sm uppercase tracking-[0.2em] notranslate">
                      <Download className="w-4 h-4 text-brand-primary" />
                      <span>Download Datasheet</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="mt-32">
              <div className="mb-16">
                <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">Core Overview & Advanced Features</h2>
                <div className="w-20 h-1.5 bg-brand-primary rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.map((section, i) => {
                  const Icon = ICON_MAP[Object.keys(ICON_MAP).find(k => section.title.includes(k)) || "Overview"];
                  const isTechnical = section.title.toLowerCase().includes('technical');
                  
                  return (
                    <div key={i} className={`group ${isTechnical ? 'md:col-span-2' : ''} bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500`}>
                      <div className="flex items-center space-x-5 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">{section.title}</h3>
                      </div>
                      
                      {isTechnical ? (
                        <TechnicalTable html={section.content} />
                      ) : (
                        <RenderFeatureContent html={section.content} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  if (categoryProducts.length > 0) {
    const categoryName = slug.replace(/-/g, " ");
    return (
      <main className="flex min-h-screen flex-col bg-white">
        <Header />
        <div className="pt-32 pb-24 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <div className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">Product Category</div>
                <h1 className="text-5xl font-black text-gray-900 tracking-tight leading-tight capitalize">{categoryName}</h1>
              </div>
              <div className="flex items-center space-x-4 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4">Showing {categoryProducts.length} Products</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((p: any, i: number) => (
                <Link key={i} href={`/products/${p.slug}`} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/20 flex flex-col h-full" prefetch={false}>
                  <div className="relative aspect-video overflow-hidden bg-gray-50">
                    <img 
                      src={(p.imageUrl || "/placeholder-product.webp")
                        .replace(/https?:\/\/[^\/]+\/wp-content\/uploads\//g, "/uploads/")
                        .replace(/-\d+x\d+(?=\.[a-z0-9]+$)/gi, "")} 
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">{p.title}</h3>
                    <div 
                      className="text-sm text-gray-500 font-medium mb-8 leading-relaxed line-clamp-3 flex-grow"
                      dangerouslySetInnerHTML={{ __html: p.excerpt || p.content.substring(0, 150) + '...' }}
                    />
                    <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-primary transition-colors ml-auto">
                        <Zap className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  notFound();
}
