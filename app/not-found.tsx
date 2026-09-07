import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page introuvable — 404 | MB PUB",
  description: "Cette page n'existe pas. Retournez à l'accueil de MB PUB.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-20 lg:pt-24 min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-20 h-20 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <span className="text-brand font-display font-bold text-3xl">404</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-dark mb-4">
            Page introuvable
          </h1>
          <p className="text-muted text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil ou découvrez nos services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-brand/25 hover:-translate-y-0.5 font-display"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-brand text-dark hover:text-brand font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Voir nos services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-brand text-dark hover:text-brand font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
