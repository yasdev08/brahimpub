"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="bg-gray-soft py-20 lg:py-28" aria-label="Notre processus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-brand text-sm font-bold uppercase tracking-widest mb-4 font-display"
          >
            Comment ça marche
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-dark leading-tight"
          >
            Simple, rapide, efficace.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent hidden lg:block" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-white hover:border-brand/10 transition-all duration-300 group"
            >
              {/* Step number bubble */}
              <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-brand/20 group-hover:scale-110 transition-transform duration-300">
                <span className="font-display font-bold text-white text-sm">{step.number}</span>
              </div>

              <h3 className="font-display text-base font-bold text-dark mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{step.description}</p>

              {/* Arrow connector — right side, desktop */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-12 w-6 h-6 bg-white border border-brand/20 rounded-full items-center justify-center z-10 shadow-sm">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M3 5H7M5 3L7 5L5 7" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
