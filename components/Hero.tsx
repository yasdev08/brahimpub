"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Floating wrapper with a gentle bob animation
const ProductMockup = ({
  delay,
  className,
  children,
  rotate = 0,
}: {
  delay: number;
  className: string;
  children: React.ReactNode;
  rotate?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotate: rotate - 5 }}
    animate={{ opacity: 1, y: 0, rotate }}
    transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    style={{ rotate }}
  >
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// Real client projects shown in the hero collage
const heroShots = [
  {
    src: "/portfolio/saphirbleu.jpg",
    alt: "Lettres lumineuses Saphir Bleu réalisées par MB PUB",
    label: "Saphir Bleu",
    caption: "Lettres lumineuses",
  },
  {
    src: "/portfolio/zizou.jpg",
    alt: "Enseigne lumineuse Zizou Snack à Oran",
    label: "Zizou Snack",
    caption: "Enseigne de façade",
  },
  {
    src: "/portfolio/wonderfood.jpg",
    alt: "Pose de l'enseigne Wonder Food's de nuit",
    label: "Wonder Food's",
    caption: "Logo lumineux",
  },
];

const PhotoCard = ({
  shot,
  className,
  priority = false,
}: {
  shot: (typeof heroShots)[number];
  className: string;
  priority?: boolean;
}) => (
  <figure
    className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 bg-charcoal ${className}`}
  >
    <Image
      src={shot.src}
      alt={shot.alt}
      fill
      sizes="(max-width: 1024px) 160px, 260px"
      className="object-cover"
      priority={priority}
    />
    <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-3 pt-10">
      <span className="block text-white font-display font-bold text-sm leading-tight">
        {shot.label}
      </span>
      <span className="block text-white/60 text-xs">{shot.caption}</span>
    </figcaption>
  </figure>
);

export default function Hero() {


  return (
    <section
      id="accueil"
      className="relative min-h-screen bg-dark flex flex-col overflow-hidden "
      aria-label="Section principale"
    >
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(200,16,46,0.15),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen pt-16 sm:pt-20">
            {/* Left — copy */}
            <div className="flex flex-col gap-8 min-w-0">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-sm font-semibold px-4 py-2 rounded-full w-fit font-display"
              >
                <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
                Agence Publicité & Impression — Algérie
              </motion.div>

              {/* Headline */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
                >
                  Votre marque
                  <br />
                  mérite d&apos;être{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient">remarquée.</span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand/40 origin-left"
                    />
                  </span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-xl"
              >
                MB PUB transforme vos idées en supports visuels puissants.
                Impression, design, publicité et solutions digitales pour faire
                grandir votre entreprise.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-brand/30 hover:shadow-brand/40 hover:-translate-y-0.5 font-display group"
                >
                  Demander un devis
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 font-display"
                >
                  Découvrir nos services
                </Link>
              </motion.div>

              {/* Trust pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                {["Design", "Impression", "Publicité", "Digital"].map((tag) => (
                  <span
                    key={tag}
                    className="text-white/40 text-sm font-medium flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 bg-brand/60 rounded-full" />
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Mobile: real projects strip (the collage is desktop-only) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="lg:hidden -mx-4 sm:-mx-6 px-4 sm:px-6 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Quelques réalisations"
              >
                {heroShots.map((shot, i) => (
                  <Link
                    key={shot.src}
                    href="/realisations"
                    className="snap-start shrink-0"
                  >
                    <PhotoCard shot={shot} className="w-40 h-56" priority={i === 0} />
                  </Link>
                ))}
                <Link
                  href="/realisations"
                  className="snap-start shrink-0 w-40 h-56 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2 text-white font-display font-semibold text-sm text-center px-4"
                >
                  Voir toutes nos réalisations
                  <ArrowRight size={18} className="text-brand" />
                </Link>
              </motion.div>
            </div>

            {/* Right — product mockups */}
            <div className="relative h-[520px] hidden lg:block">
              {/* Background glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_60%_50%,rgba(200,16,46,0.08),transparent)]" />

              {/* Floating real projects: overlaps only cover card tops,
                  never the captions at the bottom of each card. */}
              <ProductMockup delay={0.5} className="absolute bottom-0 left-0 z-10" rotate={-4}>
                <PhotoCard shot={heroShots[1]} className="w-56 h-80" />
              </ProductMockup>

              <ProductMockup delay={0.65} className="absolute top-12 right-0 z-10" rotate={3}>
                <PhotoCard shot={heroShots[0]} className="w-64 h-96" priority />
              </ProductMockup>

              <ProductMockup delay={0.8} className="absolute top-0 left-24 z-20" rotate={-1}>
                <PhotoCard shot={heroShots[2]} className="w-44 h-56" />
              </ProductMockup>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-2 right-10 z-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3"
              >
                <p className="text-white font-display font-bold text-sm">Réalisé à Oran</p>
                <p className="text-white/50 text-xs">Photos de nos chantiers</p>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute top-1/3 right-8 w-px h-32 bg-gradient-to-b from-transparent via-brand/30 to-transparent"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="absolute bottom-1/3 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/30"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
