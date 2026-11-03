"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, projectCategories } from "@/lib/portfolio";

const HOME_LIMIT = 8;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = (
    activeCategory === "Tous"
      ? projects
      : projects.filter((item) => item.category === activeCategory)
  ).slice(0, HOME_LIMIT);

  return (
    <section
      id="realisations"
      className="bg-white py-20 lg:py-28"
      aria-label="Nos réalisations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
          ref={ref}
        >
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
            Enseignes, façades, signalétique et supports digitaux réalisés pour
            des commerces et restaurants d&apos;Oran. Des photos de nos
            chantiers, sans retouche.
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
          {projectCategories.map((cat) => (
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
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                  i === 0 || i === 4 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                {/* Background image */}
                {/* Visual */}
                <div
                  className={`relative w-full overflow-hidden bg-gray-900 ${
                    i === 0 || i === 4
                      ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px]"
                      : "aspect-[4/3]"
                  }`}
                >
                  {/* Blurred background */}
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    aria-hidden="true"
                    sizes="64px"
                    quality={30}
                    className="object-cover scale-110 blur-2xl opacity-40"
                  />

                  {/* Dark layer */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Actual project image */}
                  <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                    <Image
                      src={item.image}
                      alt={`${item.title} — réalisation MB PUB à Oran`}
                      fill
                      sizes={
                        i === 0 || i === 4
                          ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      }
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Readability gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Hover overlay */}
                  <Link
                    href={`/realisations#${item.id}`}
                    className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2"
                  >
                    <Eye size={18} className="text-white" />
                    <span className="text-white font-semibold text-sm font-display">
                      Voir le projet
                    </span>
                  </Link>

                  {/* Category */}
                  <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full">
                    <span className="text-white text-xs font-semibold font-display">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-12 pointer-events-none">
                  <p className="text-white/60 text-xs font-medium mb-0.5">
                    {item.client}
                  </p>
                  <h3 className="font-display text-white font-bold text-base leading-tight">
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 border-2 border-dark text-dark hover:bg-dark hover:text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 font-display"
          >
            Voir toutes nos réalisations
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-brand/25 font-display"
          >
            Démarrer votre projet
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
