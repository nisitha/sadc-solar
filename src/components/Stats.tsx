"use client";
import React from "react";
import { motion } from "framer-motion";
import Counter from "./Counter";

const STATS = [
  { label: "Fundada em", value: 2013, suffix: "" },
  { label: "Projetos Realizados", value: 57, suffix: "+" },
  { label: "Clientes Satisfeitos", value: 54, suffix: "" },
  { label: "Parceiros de Negócios", value: 102, suffix: "" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-5xl font-black text-gray-900 mb-2 group-hover:text-primary transition-colors">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
