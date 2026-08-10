"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Printer,
  Maximize2,
  PenTool,
  Megaphone,
  QrCode,
  Globe,
  ArrowUpRight,
  Presentation,
} from "lucide-react";
import { services } from "@/lib/data";
import Image from "next/image";
const iconMap = {
  Printer,
  Maximize2,
  PenTool,
  Megaphone,
  QrCode,
  Globe,
  Presentation,
};
function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[number];
  index: number;
  isInView: boolean;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!service.images || service.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % service.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [service.images.length]);

  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="group relative min-h-[360px] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Changing background images */}
      {service.images.map((image, imageIndex) => (
        <Image
          key={image}
          src={image}
          alt={service.title}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            imageIndex === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 transition-colors duration-300 group-hover:bg-black/50" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full min-h-[360px] p-7">
        {/* Top row */}
        <div className="flex items-start justify-between mb-auto">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-brand transition-all duration-300">
            <Icon size={22} />
          </div>

          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-brand transition-all duration-300">
            <ArrowUpRight size={15} />
          </div>
        </div>

        {/* Bottom content */}
        <div>
          <h3 className="font-display text-xl font-bold text-white mb-2">
            {service.title}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed mb-5">
            {service.description}
          </p>

          <ul className="flex flex-wrap gap-2">
            {service.items.map((item) => (
              <li
                key={item}
                className="text-xs font-medium text-white/90 bg-white/10 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Image indicators */}
          <div className="flex gap-1.5 mt-5">
            {service.images.map((_, imageIndex) => (
              <button
                key={imageIndex}
                onClick={() => setCurrentImage(imageIndex)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  imageIndex === currentImage
                    ? "w-6 bg-brand"
                    : "w-2 bg-white/40"
                }`}
                aria-label={`Voir image ${imageIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="bg-gray-soft py-20 lg:py-28"
      aria-label="Nos services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-brand text-sm font-bold uppercase tracking-widest mb-4 font-display"
          >
            Nos services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-dark leading-tight mb-4"
          >
            Tout ce dont votre
            <br />
            marque a besoin.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg"
          >
            De la première idée jusqu&apos;au produit final.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
