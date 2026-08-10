"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Sparkles, Headphones, Layers } from "lucide-react";
import { whyItems } from "@/lib/data";

const iconMap = { Star, Sparkles, Headphones, Layers };

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-dark py-20 lg:py-28 relative overflow-hidden" aria-label="Pourquoi MB PUB">
      {/* Background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(200,16,46,0.08),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-brand text-sm font-bold uppercase tracking-widest mb-4 font-display"
          >
            Notre différence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Pourquoi choisir
            <br />
            <span className="text-brand">MB PUB ?</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyItems.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-white/5 hover:bg-white/8 border border-white/8 hover:border-brand/30 rounded-2xl p-7 group transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />

                <div className="w-12 h-12 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300 relative">
                  <Icon size={21} />
                </div>

                <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-brand transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
