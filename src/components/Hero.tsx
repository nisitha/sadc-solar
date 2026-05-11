"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sun } from "lucide-react";
import Link from "next/link";

const SLIDES = [
  { 
    id: 1, 
    image: "/slider/sl1.JPG",
    topText: "ENERGIA RENOVÁVEL - ENERGIA PARA ESTA E",
    bottomText: "PRÓXIMAS GERAÇÕES"
  },
  { 
    id: 2, 
    image: "/slider/sl2.jpg",
    topText: "VITALIDADE RENOVÁVEL - AS MELHORES COISAS NA",
    bottomText: "VIDA SÃO GRATUITAS"
  },
  { 
    id: 3, 
    image: "/slider/sl3.jpg",
    topText: "ENERGIA RENOVÁVEL É IGUAL A",
    bottomText: "SEGURANÇA ENERGÉTICA"
  },
  { 
    id: 4, 
    image: "/slider/sl4.jpg",
    topText: "RENOVÁVEL É O FUTURO, É MAIS DO QUE APENAS ENERGIA,",
    bottomText: "É UM ESTILO DE VIDA"
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden flex items-center">
      {/* Premium Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${SLIDES[currentSlide].image})` }}
            />
            {/* Cinematic Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Top Text */}
            <div className="text-white uppercase tracking-wide font-medium text-xl md:text-3xl mb-2 drop-shadow-lg">
              {SLIDES[currentSlide].topText}
            </div>
            
            {/* Bottom Text Row */}
            <div className="flex items-center mt-2">
              <div className="w-12 md:w-24 h-[2px] bg-white mr-4" />
              <h1 className="text-brand-primary font-bold text-3xl md:text-5xl lg:text-6xl uppercase leading-tight drop-shadow-2xl">
                {SLIDES[currentSlide].bottomText}
              </h1>
            </div>

            {/* Subtext and Buttons */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white/90 text-lg md:text-xl mt-8 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md"
            >
              Soluções solares de alta eficiência projetadas para os ambientes mais exigentes. Tecnologia de precisão para um futuro sustentável.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link 
                href="/products" 
                className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center group shadow-xl shadow-primary/20"
                prefetch={false}
              >
                Ver Nossos Produtos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about-us"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 text-white font-bold hover:text-primary transition-colors py-4 px-6 group"
                prefetch={false}
              >
                <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-brand-accent-2 transition-colors bg-black/20 backdrop-blur-sm">
                  <Play className="w-4 h-4 fill-current ml-0.5 group-hover:text-brand-accent-2 transition-colors" />
                </div>
                <span>Saber Mais</span>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Stats or Accents */}
      <div className="absolute right-0 bottom-0 p-12 hidden xl:block z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-black/40 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/10 max-w-xs"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-brand-accent-2/20 rounded-xl flex items-center justify-center">
              <Sun className="text-brand-accent-2 w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white drop-shadow-sm">500+</div>
              <div className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Projects Completed</div>
            </div>
          </div>
          <p className="text-sm text-white/70 font-medium leading-relaxed">
            Liderando a revolução da energia renovável em Luanda e além com experiência certificada.
          </p>
        </motion.div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-brand-primary w-16" : "bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
