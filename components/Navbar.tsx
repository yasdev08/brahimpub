"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { label: "Enseignes publicitaires", href: "/services/enseignes-publicitaires" },
  { label: "Enseignes lumineuses", href: "/services/enseignes-lumineuses" },
  { label: "Impression numérique", href: "/services/impression" },
  { label: "Grand format & bâches", href: "/services/grand-format" },
  { label: "Habillage vitrine", href: "/services/habillage-vitrine" },
  { label: "Design graphique", href: "/services/design-graphique" },
  { label: "Affichage digital LED", href: "/services/affichage-digital" },
  { label: "Solutions QR", href: "/services/solutions-qr" },
];

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuId = "mobile-navigation";
  const servicesMenuId = "services-navigation";

  const isHome = pathname === "/";

  // On non-home pages the navbar is always in "scrolled" state
  const alwaysScrolled = !isHome;

  useEffect(() => {
    if (alwaysScrolled) return;
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysScrolled]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const isScrolled = alwaysScrolled || scrolled;
  const textColor = isScrolled ? "text-gray-700" : "text-white/90";

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 sm:h-20 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label="MB PUB - Retour à l'accueil"
            >
              <Image
                src="/logo1.png"
                alt="MB PUB"
                width={200}
                height={140}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Navigation principale"
            >
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onMouseEnter={() => setServicesOpen(true)}
                      aria-controls={servicesMenuId}
                      className={`text-sm font-medium transition-colors duration-200 hover:text-brand flex items-center gap-1 ${textColor}`}
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          id={servicesMenuId}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          onMouseLeave={() => setServicesOpen(false)}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 z-50"
                        >
                          {serviceLinks.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setServicesOpen(false)}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand transition-colors"
                            >
                              {s.label}
                            </Link>
                          ))}
                          <div className="border-t border-gray-100 mt-2 pt-2 px-4 pb-1">
                            <Link
                              href="/services"
                              className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                            >
                              Voir tous les services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-brand relative group ${textColor} ${
                      pathname === link.href ? "text-brand" : ""
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-brand transition-all duration-200 ${
                        pathname === link.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-brand/20 hover:shadow-brand/30 hover:-translate-y-0.5 font-display"
              >
                Demander un devis
              </Link>
              <button
                className={`lg:hidden p-2 rounded-md transition-colors ${
                  isScrolled ? "text-dark" : "text-white"
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                aria-controls={menuId}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-sm lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-full pt-24 pb-8 px-6">
              <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
                {navLinks.map((link, i) =>
                  link.hasDropdown ? (
                    <div key={link.href}>
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-navigation"
                        className="w-full flex items-center justify-between text-2xl font-bold text-white/90 hover:text-brand py-3 border-b border-white/10 font-display transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            id="mobile-services-navigation"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 flex flex-col gap-1">
                              {serviceLinks.map((s) => (
                                <Link
                                  key={s.href}
                                  href={s.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="text-base text-white/60 hover:text-brand py-2 transition-colors"
                                >
                                  {s.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-2xl font-bold text-white/90 hover:text-brand py-3 border-b border-white/10 font-display transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-auto pt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center bg-brand text-white font-bold text-lg py-4 rounded-xl shadow-xl shadow-brand/30 font-display"
                >
                  Demander un devis
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
