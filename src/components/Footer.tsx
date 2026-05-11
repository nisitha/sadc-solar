import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-primary/80 backdrop-blur-2xl text-white py-32 border-t border-white/20 overflow-hidden">
      {/* Premium Gradient Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group transition-transform hover:scale-105 duration-300" prefetch={false}>
              <img 
                src="/footerlogo.svg" 
                alt="SADC Solar Logo" 
                className="h-16 w-auto brightness-0 invert" 
              />
            </Link>
            <p className="text-white/80 leading-relaxed font-light">
              Soluções de energia solar premium para Angola. Somos especialistas em projetos chave na mão e componentes solares de alta qualidade para um amanhã mais verde.
            </p>
            <div className="flex items-center space-x-5">
              <a 
                href="https://www.linkedin.com/in/wilson-tavares-690790123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="https://www.instagram.com/sadc_solar_energy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://wa.me/244923512645" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-400 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white">Navegação</h3>
            <ul className="space-y-4">
              {[
                { name: "Sobre Nós", href: "/about-us" },
                { name: "Soluções", href: "/solutions" },
                { name: "Produtos", href: "/products" },
                { name: "Últimas Notícias", href: "/news" },
                { name: "Contate-nos", href: "/contact-us" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/80 hover:text-white transition-colors flex items-center group" prefetch={false}>
                    <span className="font-semibold">{item.name}</span>
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white">Informações de Contato</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-1">Localização</div>
                  <span className="font-semibold">Luanda, Angola</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-1">Telefone</div>
                  <span className="font-semibold">+244 923 512 645</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mr-4 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-1">Email</div>
                  <span className="font-semibold">solutions@sadcsolar.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white">Boletim Informativo</h3>
            <p className="text-white/70 mb-8 font-light leading-relaxed">
              Fique atualizado com as últimas tendências em tecnologia solar e energia sustentável.
            </p>
            <form className="space-y-4">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Endereço de E-mail" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-sm focus:ring-2 focus:ring-white/30 transition-all outline-none placeholder:text-white/40 font-medium"
                />
              </div>
              <button className="w-full py-4 bg-white text-brand-primary rounded-xl hover:bg-white/90 transition-all font-black text-xs uppercase tracking-[0.2em] shadow-xl">
                Inscrever-se Agora
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 font-bold tracking-wider gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© {currentYear} SADC Solar. Construído com Energia.</p>
            <a 
              href="https://wa.me/94787676576" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-300"
            >
              Website Desenvolvido por <span className="notranslate">Pixel Craft Studios</span> | +94 78 767 6576
            </a>
          </div>
          <div className="flex space-x-8">
             <Link href="/privacy" className="hover:text-white transition-colors" prefetch={false}>Política de Privacidade</Link>
             <Link href="/terms" className="hover:text-white transition-colors" prefetch={false}>Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
