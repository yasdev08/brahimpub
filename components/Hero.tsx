"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

// Floating product card shapes - represent printed materials
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

// Business card mockup
const BusinessCard = () => (
  <div className="w-48 h-28 bg-white rounded-xl shadow-2xl shadow-black/40 overflow-hidden border border-white/10 flex-shrink-0">
    <div className="h-1.5 bg-brand w-full" />
    <div className="p-3">
      <div className="w-6 h-6 bg-brand/10 rounded flex items-center justify-center mb-2">
        <div className="w-3 h-3 bg-brand rounded-sm" />
      </div>
      <div className="h-2 bg-gray-800 rounded w-20 mb-1.5" />
      <div className="h-1.5 bg-gray-400 rounded w-28 mb-1" />
      <div className="h-1.5 bg-gray-400 rounded w-20" />
      <div className="mt-2 flex gap-1">
        <div className="h-1 bg-brand/30 rounded w-16" />
        <div className="h-1 bg-gray-300 rounded w-10" />
      </div>
    </div>
  </div>
);

// Flyer mockup
const FlyerCard = () => (
  <div className="w-32 h-44 bg-gradient-to-b from-brand to-brand-dark rounded-xl shadow-2xl shadow-black/40 overflow-hidden border border-white/10 flex-shrink-0">
    <div className="p-3 h-full flex flex-col">
      <div className="h-16 bg-white/10 rounded-lg mb-2 flex items-center justify-center">
        <div className="w-8 h-8 bg-white/30 rounded-full" />
      </div>
      <div className="h-2 bg-white rounded w-full mb-1.5" />
      <div className="h-1.5 bg-white/60 rounded w-3/4 mb-1" />
      <div className="h-1.5 bg-white/60 rounded w-2/3 mb-auto" />
      <div className="h-6 bg-white/20 rounded-lg flex items-center justify-center">
        <div className="h-1.5 bg-white rounded w-12" />
      </div>
    </div>
  </div>
);

// QR card mockup
const QRCard = () => (
  <div className="w-40 h-40 bg-dark rounded-2xl shadow-2xl shadow-black/40 overflow-hidden border border-white/10 p-3 flex flex-col items-center justify-center gap-2 flex-shrink-0">
    <div className="w-20 h-20 bg-white rounded-lg p-2">
      <div className="w-full h-full grid grid-cols-3 gap-0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`rounded-sm ${
              [0, 2, 6, 8, 4, 1, 5, 7, 3][i] % 2 === 0
                ? "bg-dark"
                : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
    <div className="h-1.5 bg-white/40 rounded w-20" />
    <div className="h-1 bg-white/20 rounded w-14" />
  </div>
);

// Poster mockup
const PosterCard = () => (
  <div className="w-28 h-40 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl shadow-black/40 overflow-hidden border border-white/10 flex-shrink-0">
    <div className="p-2.5 h-full flex flex-col">
      <div className="h-20 bg-gradient-to-br from-brand/20 to-brand/5 rounded-lg mb-2 border border-brand/20 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand/50 rounded-full" />
      </div>
      <div className="h-1.5 bg-white rounded w-full mb-1" />
      <div className="h-1 bg-white/50 rounded w-3/4 mb-1" />
      <div className="h-1 bg-white/30 rounded w-2/3 mb-auto" />
      <div className="h-1 bg-brand/70 rounded w-full" />
    </div>
  </div>
);

// Banner mockup
const BannerCard = () => (
  <div className="w-56 h-20 bg-gradient-to-r from-charcoal to-gray-800 rounded-xl shadow-2xl shadow-black/40 overflow-hidden border border-white/10 flex items-center gap-3 px-4 flex-shrink-0">
    <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
      <div className="w-5 h-5 bg-brand rounded" />
    </div>
    <div className="flex-1">
      <div className="h-2 bg-white rounded w-full mb-1.5" />
      <div className="h-1.5 bg-white/40 rounded w-3/4" />
    </div>
  </div>
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
            <div className="flex flex-col gap-8">
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
            </div>

            {/* Right — product mockups */}
            <div className="relative h-[520px] hidden lg:block">
              {/* Background glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_60%_50%,rgba(200,16,46,0.08),transparent)]" />

              {/* Floating products */}
              <ProductMockup
                delay={0.5}
                className="absolute top-16 left-8"
                rotate={-6}
              >
                <BusinessCard />
              </ProductMockup>

              <ProductMockup
                delay={0.65}
                className="absolute top-8 right-16"
                rotate={4}
              >
                <FlyerCard />
              </ProductMockup>

              <ProductMockup
                delay={0.8}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                rotate={0}
              >
                <QRCard />
              </ProductMockup>

              <ProductMockup
                delay={0.95}
                className="absolute bottom-28 left-16"
                rotate={3}
              >
                <PosterCard />
              </ProductMockup>

              <ProductMockup
                delay={1.1}
                className="absolute bottom-16 right-4"
                rotate={-3}
              >
                <BannerCard />
              </ProductMockup>

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
