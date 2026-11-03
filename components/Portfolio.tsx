"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, projectCategories } from "@/lib/portfolio";

const HOME_LIMIT = 10;

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
              data-track-event="portfolio_filter"
              data-track-category={cat}
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

        {/* Grid: 4 columns on desktop. With "Tous", tiles 0 and 5 are large
            (2x2) so 10 items fill exactly two 4x2 blocks with no gaps. */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:grid-flow-dense"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => {
              const large = activeCategory === "Tous" && (i === 0 || i === 5);
              return (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                  large ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden bg-gray-900 aspect-[3/4] ${
                    large ? "lg:aspect-auto lg:h-full" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} — réalisation MB PUB à Oran`}
                    fill
                    sizes={
                      large
                        ? "(max-width: 1024px) 50vw, 600px"
                        : "(max-width: 1024px) 50vw, 300px"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Readability gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20 pointer-events-none" />

                  {/* Hover overlay */}
                  <Link
                    href={`/realisations#${item.id}`}
                    data-track-event="project_click"
                    data-track-project-id={item.id}
                    data-track-category={item.category}
                    data-track-location="home"
                    className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2"
                  >
                    <Eye size={18} className="text-white" />
                    <span className="text-white font-semibold text-sm font-display">
                      Voir le projet
                    </span>
                  </Link>

                  {/* Category */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-black/40 backdrop-blur-md border border-white/20 px-2 sm:px-2.5 py-1 rounded-full max-w-[calc(100%-1.25rem)] truncate">
                    <span className="text-white text-xs font-semibold font-display">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-4 pointer-events-none">
                  <p className="text-white/60 text-xs font-medium mb-0.5">
                    {item.client}
                  </p>
                  <h3 className="font-display text-white font-bold text-sm sm:text-base leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
              );
            })}
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
