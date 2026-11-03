import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, WifiOff } from "lucide-react";

export const metadata: Metadata = {
  title: "Hors connexion",
  robots: { index: false, follow: false },
};

// Served by the service worker when a page is requested without a network
// connection and no cached copy exists. Keep it static and dependency-light.
export default function OfflinePage() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        {/* eslint-disable-next-line @next/next/no-img-element -- precached file, must work offline without the image optimizer */}
        <img
          src="/icons/icon-192.png"
          alt="MB PUB"
          width={96}
          height={96}
          className="mx-auto mb-8 rounded-2xl"
        />
        <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-sm font-semibold px-4 py-2 rounded-full mb-6 font-display">
          <WifiOff size={16} />
          Vous êtes hors connexion
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          Cette page n&apos;est pas encore disponible hors ligne.
        </h1>
        <p className="text-white/60 mb-8 leading-relaxed">
          Les pages que vous avez déjà consultées restent accessibles. Vous
          pouvez aussi nous appeler directement : l&apos;appel ne nécessite pas
          Internet.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="tel:+213553924419"
            className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold py-3.5 rounded-xl transition-colors font-display"
          >
            <Phone size={18} />
            +213 553 924 419
          </a>
          <a
            href="https://wa.me/213553924419"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3.5 rounded-xl transition-colors border border-white/10"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <Link
            href="/"
            className="text-white/50 hover:text-white text-sm mt-2 transition-colors"
          >
            Réessayer — retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
