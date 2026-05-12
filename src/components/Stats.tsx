"use client";
import React from "react";
import { motion } from "framer-motion";
import Counter from "./Counter";
import { useLanguage } from "@/context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  const STATS = [
    { label: t.foundedIn, value: 2013, suffix: "" },
    { label: t.projectsRealized, value: 57, suffix: "+" },
    { label: t.satisfiedClients, value: 54, suffix: "" },
    { label: t.businessPartners, value: 102, suffix: "" },
  ];

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
