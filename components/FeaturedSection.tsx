"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, FileText, Palette, CheckSquare, Printer, Truck } from "lucide-react";

const steps = [
  { icon: FileText, number: "01", label: "Brief", desc: "Vous partagez vos besoins" },
  { icon: Palette, number: "02", label: "Design", desc: "Nous créons votre visuel" },
  { icon: CheckSquare, number: "03", label: "Validation", desc: "Vous approuvez le design" },
  { icon: Printer, number: "04", label: "Production", desc: "Impression haute qualité" },
  { icon: Truck, number: "05", label: "Livraison", desc: "Réception de votre commande" },
];

// Print materials visual mockup
const PrintMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Main business card stack */}
    <div className="relative">
      {/* Shadow cards */}
      {[6, 4, 2].map((offset, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-2xl shadow-lg"
          style={{
            width: 300,
            height: 170,
            top: offset,
            left: offset,
            opacity: 0.5 + i * 0.15,
          }}
        />
      ))}
      {/* Main card */}
      <div className="relative bg-dark rounded-2xl shadow-2xl" style={{ width: 300, height: 170 }}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand rounded-t-2xl" />
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="font-display font-bold text-white text-lg">Ahmed Benali</div>
              <div className="text-white/50 text-xs mt-0.5">Directeur Général</div>
            </div>
            <div className="w-10 h-10 bg-brand/20 rounded-xl flex items-center justify-center">
              <div className="w-5 h-5 bg-brand rounded-lg" />
            </div>
          </div>
          <div className="border-t border-white/10 pt-3 flex gap-4">
            <div className="text-white/40 text-xs">+213 555 123 456</div>
            <div className="text-white/40 text-xs">info@entreprise.dz</div>
          </div>
        </div>
      </div>

      {/* Floating flyer */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [-8, -6, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 -top-12 w-24 h-36 bg-gradient-to-b from-brand to-brand-dark rounded-xl shadow-xl"
        style={{ rotate: -8 }}
      >
        <div className="p-2">
          <div className="h-14 bg-white/10 rounded-lg mb-2" />
          <div className="h-1.5 bg-white rounded mb-1" />
          <div className="h-1 bg-white/50 rounded w-3/4" />
        </div>
      </motion.div>

      {/* Floating label / sticker */}
      <motion.div
        animate={{ y: [4, -4, 4], rotate: [6, 8, 6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-16 -bottom-8 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
        style={{ rotate: 6 }}
      >
        <div className="w-12 h-12 grid grid-cols-3 gap-0.5 p-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className={`rounded-sm ${i % 2 === 0 ? "bg-dark" : "bg-transparent"}`} />
          ))}
        </div>
      </motion.div>

      {/* Quality badge */}
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-8 bottom-4 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2"
      >
        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-dark text-xs font-bold font-display">Qualité Pro</span>
      </motion.div>
    </div>
  </div>
);

export default function FeaturedSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden" aria-label="Notre processus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — mockup */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-80 lg:h-96"
          >
            {/* Background shape */}
            <div className="absolute inset-0 bg-gray-soft rounded-3xl" />
            <PrintMockup />
          </motion.div>

          {/* Right — content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-brand text-sm font-bold uppercase tracking-widest mb-4 font-display"
            >
              Notre approche
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-3xl lg:text-4xl font-bold text-dark leading-tight mb-5"
            >
              Du design à l&apos;impression.
              <br />
              <span className="text-brand">Tout au même endroit.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted text-base leading-relaxed mb-8"
            >
              MB PUB prend en charge l&apos;intégralité du processus créatif et de production.
              De la conception graphique jusqu&apos;à la livraison, vous n&apos;avez qu&apos;un seul
              interlocuteur pour tous vos besoins.
            </motion.p>

            {/* Steps timeline */}
            <div className="flex flex-col gap-4 mb-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-brand/8 rounded-xl flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-200">
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="font-display text-xs font-bold text-muted uppercase tracking-wider">
                          {step.number} — {step.label}
                        </span>
                        <p className="text-dark text-sm font-medium">{step.desc}</p>
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden sm:block w-px h-8 bg-gray-200 ml-5 -mb-8 mt-2" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-dark hover:bg-charcoal text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 group font-display"
            >
              Parlons de votre projet
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
