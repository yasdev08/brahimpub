"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, QrCode, MapPin, AtSign, MessageCircle, Globe, ArrowRight } from "lucide-react";

const features = [
  { icon: QrCode, label: "QR Business Card", color: "from-brand/20 to-brand/5", textColor: "text-brand" },
  { icon: MessageCircle, label: "WhatsApp direct", color: "from-green-500/20 to-green-500/5", textColor: "text-green-400" },
  { icon: MapPin, label: "Google Maps", color: "from-blue-500/20 to-blue-500/5", textColor: "text-blue-400" },
  { icon: AtSign, label: "Instagram", color: "from-pink-500/20 to-pink-500/5", textColor: "text-pink-400" },
  { icon: Globe, label: "Site web", color: "from-purple-500/20 to-purple-500/5", textColor: "text-purple-400" },
  { icon: Smartphone, label: "Menu QR", color: "from-amber-500/20 to-amber-500/5", textColor: "text-amber-400" },
];

// Phone mockup SVG
const PhoneMockup = () => (
  <div className="relative w-52 mx-auto">
    {/* Phone frame */}
    <div className="relative bg-gray-900 rounded-[40px] p-3 shadow-2xl shadow-black/60 border border-white/10">
      {/* Screen */}
      <div className="bg-dark rounded-[32px] overflow-hidden" style={{ minHeight: 380 }}>
        {/* Status bar */}
        <div className="h-8 bg-dark flex items-center justify-between px-5 pt-2">
          <div className="text-white/40 text-xs">9:41</div>
          <div className="w-16 h-4 bg-dark rounded-full" />
          <div className="flex gap-1">
            {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-white/40 rounded-full" />)}
          </div>
        </div>

        {/* QR profile content */}
        <div className="p-4 flex flex-col items-center gap-3">
          {/* Avatar */}
          <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-dark rounded-2xl flex items-center justify-center shadow-lg shadow-brand/30">
            <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xs font-display">MB</span>
            </div>
          </div>

          {/* Name & title */}
          <div className="text-center">
            <div className="text-white font-bold text-sm font-display">MB PUB</div>
            <div className="text-white/50 text-xs">Agence Publicité & Design</div>
          </div>

          {/* QR code */}
          <div className="w-20 h-20 bg-white rounded-xl p-2">
            <div className="w-full h-full grid grid-cols-4 gap-0.5">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className={`rounded-sm ${[0,1,3,4,6,9,10,12,15][Math.floor(i/2)] !== undefined ? "bg-dark" : "bg-transparent"} ${i % 3 === 0 || i % 5 === 0 ? "bg-dark" : "bg-transparent"}`} />
              ))}
            </div>
          </div>

          {/* CTA links */}
          {[
            { icon: MessageCircle, label: "WhatsApp", color: "bg-green-500/20 text-green-400" },
            { icon: Globe, label: "Site web", color: "bg-blue-500/20 text-blue-400" },
            { icon: MapPin, label: "Nous trouver", color: "bg-red-500/20 text-red-400" },
          ].map((item) => (
            <div key={item.label} className={`w-full flex items-center gap-3 ${item.color} rounded-xl px-3 py-2`}>
              <item.icon size={14} />
              <span className="text-xs font-medium font-display">{item.label}</span>
            </div>
          ))}

          <div className="text-white/20 text-xs text-center">Propulsé par MB PUB</div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pt-2">
        <div className="w-20 h-1 bg-white/20 rounded-full" />
      </div>
    </div>

    {/* Glow under phone */}
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-36 h-8 bg-brand/20 blur-xl rounded-full" />
  </div>
);

export default function DigitalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-charcoal py-20 lg:py-28 overflow-hidden relative" aria-label="Solutions digitales">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_75%_50%,rgba(200,16,46,0.08),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — content */}
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full font-display mb-6"
            >
              <span className="w-1.5 h-1.5 bg-brand rounded-full" />
              Solutions Digitales
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              Le print rencontre
              <br />
              <span className="text-gradient">le digital.</span>
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="font-display text-xl font-semibold text-white/70 mb-4"
            >
              Un simple scan. Toutes vos informations.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-white/50 text-base leading-relaxed mb-8"
            >
              MB PUB combine l&apos;impact du support physique avec la puissance du digital.
              Vos cartes de visite, menus et affiches deviennent des portes d&apos;entrée vers
              toute votre présence en ligne — WhatsApp, site web, Google Maps, réseaux sociaux.
            </motion.p>

            {/* Features grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={feat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className={`bg-gradient-to-br ${feat.color} border border-white/5 rounded-xl p-3 flex items-center gap-2.5 group hover:border-white/15 transition-colors`}
                  >
                    <Icon size={16} className={feat.textColor} />
                    <span className={`text-xs font-semibold ${feat.textColor} font-display`}>{feat.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-brand/25 group font-display"
            >
              Créer ma carte QR
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right — phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
