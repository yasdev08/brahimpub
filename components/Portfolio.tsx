"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import { portfolioItems, portfolioCategories } from "@/lib/data";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = activeCategory === "Tous"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="realisations" className="bg-white py-20 lg:py-28" aria-label="Nos réalisations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12" ref={ref}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-brand text-sm font-bold uppercase tracking-widest mb-4 font-display"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-bold text-dark leading-tight"
            >
              Nos réalisations.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted max-w-sm text-base"
          >
            Des projets réalisés pour des entrepreneurs, restaurants, cabinets et entreprises à travers l&apos;Algérie.
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label="Filtrer par catégorie"
        >
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-2 rounded-full text-sm font-semibold font-display transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-brand text-white shadow-md shadow-brand/20"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                  i === 0 || i === 4 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                {/* Visual */}
                <div
                  className={`w-full ${i === 0 || i === 4 ? "h-64 lg:h-full min-h-64" : "h-48"} bg-gradient-to-br ${item.gradient} relative flex items-center justify-center`}
                >
                  {/* Abstract shape */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-white" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg border border-white rotate-12" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-0.5 bg-white rotate-45" />
                  </div>

                  {/* Product type indicator */}
                  <div className="flex flex-col items-center gap-2 opacity-40">
                    <div className="w-12 h-8 bg-white/30 rounded-lg" />
                    <div className="w-8 h-8 bg-white/20 rounded-full" />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Eye size={18} className="text-white" />
                    <span className="text-white font-semibold text-sm font-display">Voir le projet</span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">
                    <span className="text-white text-xs font-semibold font-display">{item.category}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="font-display text-white font-bold text-sm leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 border-2 border-dark text-dark hover:bg-dark hover:text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 font-display"
          >
            Démarrer votre projet
          </button>
        </motion.div>
      </div>
    </section>
  );
}
