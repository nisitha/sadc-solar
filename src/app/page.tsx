import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRight, Zap, Battery, Sun, Droplets, Lightbulb, Grid, Settings, Cable, Shield, Clock, Award, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getProducts, getSolutions } from "@/lib/wordpress";
import { cn } from "@/lib/utils";
import FinancingSection from "@/components/FinancingSection";

const ICON_MAP: { [key: string]: any } = {
  "Off-grid Solar Inverters": Zap,
  "On-grid Solar Inverters": Settings,
  "Solar Charge Controllers": Zap,
  "Solar Panels": Sun,
  "Solar Batteries": Battery,
  "Solar Water Pumps": Droplets,
  "Solar Street Lights": Lightbulb,
  "Rack and Battery Cabinets": Grid,
  "Wiring and Cables": Cable,
  "Turnkey Solutions": Shield,
  "Other Turnkey Solutions": Shield,
};

export default async function Home() {
  const products = await getProducts();
  const solutions = await getSolutions();

  const turnkeySolutions = solutions.filter((s: any) => s.categories.includes("Turnkey Solutions"));
  const otherSolutions = solutions.filter((s: any) => s.categories.includes("Other Turnkey Solutions"));
  const featuredProducts = products.slice(0, 9);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <Hero />
      
      {/* Stats Section */}
      <Stats />







      {/* Corporate Presence / Image Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="inline-flex items-center space-x-2 bg-brand-accent-2/10 px-4 py-2 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-brand-accent-2 animate-pulse" />
                <span className="text-[10px] font-bold text-brand-accent-2 uppercase tracking-widest">Líderes da Indústria</span>
              </div>
              <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-tight mb-8">
                Pioneira de Angola em <br />Padrões de Energia Solar.
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">
                A SADC Solar dedica-se a estabelecer Padrões de Energia Renovável que ajudarão a mudar a forma como pensamos sobre a energia. Nossa presença em Luanda garante suporte local para todas as províncias angolanas.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  "Padrões de Qualidade Certificados",
                  "Suporte Técnico de Longo Prazo",
                  "Garantias de Desempenho Máximo",
                  "Tecnologia de Energia Sustentável",
                ].map((text, i) => (
                  <div key={i} className="group flex items-center space-x-4 text-sm font-bold text-gray-900">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent-2/5 flex items-center justify-center shrink-0 group-hover:bg-brand-accent-2 group-hover:text-white transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent-2 group-hover:text-white transition-colors" />
                    </div>
                    <span className="leading-tight">{text}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal className="relative group">
              <div className="absolute inset-0 bg-primary rounded-[3rem] rotate-3 scale-95 opacity-10 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/img/sadc (3).jpg" 
                  alt="SADC Corporate Solar Leadership" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Financing & Banking Section */}
      <FinancingSection />

      {/* Cinematic Impact Billboard */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center overflow-hidden rounded-[3rem] mx-4 my-12 shadow-2xl bg-cover bg-center group cursor-pointer"
        style={{ backgroundImage: "url('/img/standardizing-bg.jpg')" }}
      >
        {/* Brand Fill Overlay */}
        <div className="absolute inset-0 bg-[#EA6003] opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease-in-out z-0" />

        <SectionReveal className="relative z-10 text-center px-6 max-w-4xl pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Padronizando Energias Renováveis <br className="hidden md:block" /> na Região da SADC.
          </h2>
          <div className="w-24 h-1.5 bg-white mt-8 mx-auto rounded-full transition-all duration-500 group-hover:w-48 group-hover:bg-[#EA6003] shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
        </SectionReveal>
      </section>

      {/* Project Gallery Section */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-brand-accent-2 font-bold text-xs uppercase tracking-[0.3em] mb-4">Galeria de Projetos</div>
            <h2 className="text-5xl font-black text-white tracking-tight mb-6">Nosso Impacto em Angola.</h2>
            <p className="text-lg text-white/50 font-medium leading-relaxed">
              Um vislumbre da escala e complexidade dos projetos de infraestrutura solar que entregamos com sucesso.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
                label: "Utility Scale Solar"
              },
              {
                url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1000",
                label: "Commercial Rooftop"
              },
              {
                url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200",
                label: "Rural Electrification"
              },
              {
                url: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1000",
                label: "Modern Infrastructure"
              }
            ].map((project, i) => (
              <SectionReveal key={i} className="relative rounded-3xl overflow-hidden group shadow-2xl">
                <img 
                  src={project.url} 
                  alt={project.label} 
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-bold text-lg notranslate">{project.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="bg-primary rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden group shadow-[0_35px_60px_-15px_rgba(252,163,17,0.3)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Pronto para mudar para a energia solar?</h2>
              <p className="text-xl text-white/80 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                Entre em contato com nossos especialistas hoje para uma avaliação gratuita do local e uma proposta de energia personalizada em Angola.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/contact-us" className="px-12 py-6 bg-white text-primary font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-2xl shadow-black/10 text-lg uppercase tracking-widest" prefetch={false}>
                  Obter um Orçamento Gratuito
                </Link>
                <Link href="/about-us" className="px-12 py-6 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg uppercase tracking-widest" prefetch={false}>
                  Saber Mais
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
