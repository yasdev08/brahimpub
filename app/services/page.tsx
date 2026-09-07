import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Megaphone, Printer, Maximize2, PenTool,
  Presentation, QrCode, Globe, Zap, Store,
  ArrowRight, MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services de Publicité & Communication Visuelle à Oran",
  description:
    "Enseignes publicitaires, impression numérique, grand format, habillage vitrine, design graphique et solutions digitales — découvrez tous les services de MB PUB à Oran.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services de Publicité à Oran | MB PUB",
    description:
      "Enseignes, impression, design, affichage digital — MB PUB accompagne les professionnels d'Oran dans leur communication visuelle.",
    url: "/services",
  },
};

const serviceCards = [
  {
    slug: "enseignes-publicitaires",
    icon: Megaphone,
    name: "Enseignes publicitaires",
    description:
      "Enseignes sur mesure, lettres découpées, habillage de façade. Le premier signal visuel de votre commerce.",
    tags: ["Façade", "Sur mesure", "Pose incluse"],
    priority: true,
  },
  {
    slug: "enseignes-lumineuses",
    icon: Zap,
    name: "Enseignes lumineuses",
    description:
      "Lettres LED, caissons lumineux, enseignes rétroéclairées. Visible 24h/24 pour un impact maximal.",
    tags: ["LED", "Nuit & jour", "Extérieur"],
    priority: true,
  },
  {
    slug: "impression",
    icon: Printer,
    name: "Impression numérique",
    description:
      "Cartes de visite, flyers, affiches, brochures et catalogues. Qualité professionnelle pour tous vos supports.",
    tags: ["Cartes de visite", "Flyers", "Affiches"],
    priority: true,
  },
  {
    slug: "grand-format",
    icon: Maximize2,
    name: "Impression grand format",
    description:
      "Banderoles, bâches, roll-ups, panneaux et signalétique. Pour une visibilité qui s'impose.",
    tags: ["Bâches", "Roll-ups", "Panneaux"],
    priority: false,
  },
  {
    slug: "habillage-vitrine",
    icon: Store,
    name: "Habillage vitrine & façade",
    description:
      "Covering adhésif, lettrage, film givré. Votre vitrine devient un support de communication.",
    tags: ["Vitrine", "Adhésif", "Aluco-Bond"],
    priority: false,
  },
  {
    slug: "design-graphique",
    icon: PenTool,
    name: "Design graphique",
    description:
      "Logo, identité visuelle, charte graphique, réseaux sociaux et packaging. L'image qui vous représente.",
    tags: ["Logo", "Identité", "Réseaux sociaux"],
    priority: false,
  },
  {
    slug: "affichage-digital",
    icon: Presentation,
    name: "Affichage digital LED",
    description:
      "Écrans LED, afficheurs RGB, solutions dynamiques pour commerces et entreprises.",
    tags: ["LED P2/P5/P10", "Dynamique", "Extérieur"],
    priority: false,
  },
  {
    slug: "solutions-qr",
    icon: QrCode,
    name: "Solutions QR code",
    description:
      "Cartes QR business, menus QR restaurant, profils digitaux. Connectez vos supports physiques au digital.",
    tags: ["Menus QR", "Carte QR", "Profil digital"],
    priority: false,
  },
  {
    slug: "solutions-digitales",
    icon: Globe,
    name: "Solutions digitales",
    description:
      "Sites vitrine, présence Google, réseaux sociaux. Votre visibilité en ligne à Oran.",
    tags: ["Site web", "Google Business", "Social media"],
    priority: false,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services MB PUB",
  description: "Services de publicité et communication visuelle à Oran",
  numberOfItems: serviceCards.length,
  itemListElement: serviceCards.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://brahimpub.vercel.app"}/services/${s.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services" },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-brand text-sm font-bold uppercase tracking-widest mb-4 font-display">
                Nos expertises
              </p>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-dark leading-tight mb-6">
                Publicité &amp; communication visuelle à Oran
              </h1>
              <p className="text-muted text-lg leading-relaxed max-w-2xl">
                MB PUB accompagne les professionnels et commerçants d&apos;Oran dans
                tous leurs besoins de communication visuelle — de l&apos;enseigne à
                l&apos;impression, du design graphique aux solutions digitales.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-gray-soft py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={`group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-brand/20 flex flex-col ${
                      service.priority ? "lg:col-span-1" : ""
                    }`}
                  >
                    <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand/15 transition-colors">
                      <Icon size={22} className="text-brand" />
                    </div>
                    <h2 className="font-display font-bold text-xl text-dark mb-3 group-hover:text-brand transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-brand/80 bg-brand/8 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-muted group-hover:text-brand group-hover:translate-x-1 transition-all flex-shrink-0 ml-3"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-dark py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Un projet en tête ?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Décrivez-nous votre besoin, nous vous proposons la solution adaptée
              et un devis rapide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-brand/30 hover:-translate-y-0.5 font-display"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="https://wa.me/213553924419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
