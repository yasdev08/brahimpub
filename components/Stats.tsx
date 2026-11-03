"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { stats } from "@/lib/data";
import { projects } from "@/lib/portfolio";

const clients = Array.from(new Set(projects.map((p) => p.client)));

const iconMap = { CheckCircle, Users, Award, Clock };

function CountUp({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-white border-b border-gray-100 py-16 lg:py-20"
      aria-label="Chiffres clés"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark text-balance max-w-2xl mx-auto">
            Des solutions créatives pour les entreprises qui veulent se
            démarquer.
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 flex flex-col items-center text-center gap-3 group hover:bg-brand/5 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-brand/8 rounded-xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <Icon size={22} />
                </div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-dark">
                  <CountUp
                    target={parseInt(stat.value)}
                    suffix={stat.suffix}
                    started={isInView}
                  />
                </div>
                <p className="text-muted text-sm font-medium leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Real clients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-4 font-display">
            Ils nous font confiance à Oran
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {clients.map((client) => (
              <li
                key={client}
                className="font-display font-bold text-gray-400 text-base lg:text-lg"
              >
                {client}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
