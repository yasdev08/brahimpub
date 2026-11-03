import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos de MB PUB — Agence de Publicité à Oran",
  description:
    "MB PUB est une agence de publicité et communication visuelle basée à Oran. Enseignes, impression, design graphique et solutions digitales pour les professionnels algériens.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos de MB PUB | Agence de Publicité à Oran",
    description:
      "Découvrez MB PUB, agence de publicité et communication visuelle à Oran.",
    url: "/a-propos",
  },
};

const values = [
  {
    title: "Qualité professionnelle",
    description:
      "Des supports conçus et produits avec les meilleurs matériaux pour représenter votre marque à sa juste valeur.",
  },
  {
    title: "Créativité au service de votre marque",
    description:
      "Des designs qui sortent du lot, pensés pour attirer l'attention et rester dans les mémoires.",
  },
  {
    title: "Accompagnement personnalisé",
    description:
      "Un interlocuteur dédié qui vous guide de la première idée jusqu'à la livraison finale.",
  },
  {
    title: "Solutions complètes",
    description:
      "Du print au digital, tout ce dont vous avez besoin pour développer votre visibilité, en un seul endroit.",
  },
];

const services = [
  "Enseignes publicitaires et lumineuses",
  "Impression numérique (cartes de visite, flyers, affiches)",
  "Impression grand format (bâches, roll-ups, panneaux)",
  "Habillage vitrine et façade",
  "Design graphique et identité visuelle",
  "Affichage digital LED",
  "Solutions QR (menus, profils digitaux)",
  "Solutions digitales (sites web, réseaux sociaux)",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "À propos de MB PUB",
  description:
    "MB PUB est une agence de publicité et communication visuelle à Oran.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://brahimpub.vercel.app"}/a-propos`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: "MB PUB",
    description:
      "Agence de publicité, impression et communication visuelle à Oran, Algérie.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "29 Rue Colonel Chabou aek",
      addressLocality: "Maraval",
      addressRegion: "Oran",
      addressCountry: "DZ",
    },
    telephone: "+213553924419",
    email: "mbpublicite31@gmail.com",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://brahimpub.vercel.app",
    sameAs: ["https://lnk.bio/mbpub31"],
    areaServed: { "@type": "City", name: "Oran" },
  },
};

export default function AboutPage() {
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
            items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
          />
        </div>

        {/* Hero */}
        <section className="bg-white py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-brand text-sm font-bold uppercase tracking-widest mb-4 font-display">
                  Qui sommes-nous
                </p>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
                  MB PUB, votre agence de publicité à Oran.
                </h1>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  MB PUB est une agence de publicité et de communication
                  visuelle basée à Oran, en Algérie. Nous accompagnons les
                  commerçants, professionnels et entreprises dans tous leurs
                  besoins de visibilité — de l&apos;enseigne à l&apos;impression, du
                  design graphique aux solutions digitales.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  Notre approche est simple : comprendre votre activité, votre
                  image et vos objectifs, puis proposer des solutions sur mesure
                  qui font la différence. Chaque projet est traité avec soin,
                  du brief initial jusqu&apos;à la livraison finale.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-brand/25 hover:-translate-y-0.5 font-display"
                >
                  Nous contacter
                </Link>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10">
                  <Image
                    src="/portfolio/fantasiaa.jpg"
                    alt="Façade lumineuse Pizzeria Fantasia réalisée par MB PUB à Oran"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-dark rounded-2xl p-5 shadow-xl max-w-xs hidden lg:block">
                  <p className="text-white font-display font-bold text-lg mb-1">
                    Oran, Algérie
                  </p>
                  <p className="text-white/50 text-sm">
                    29 Rue Colonel Chabou aek, Maraval
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="bg-gray-soft py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark mb-6">
                  Ce que nous faisons
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  MB PUB couvre l&apos;ensemble de vos besoins en communication
                  visuelle : de la conception à la production, en passant par
                  l&apos;installation et les solutions digitales.
                </p>
                <ul className="space-y-3">
                  {services.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-brand flex-shrink-0 mt-0.5"
                      />
                      <span className="text-dark text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/services"
                    className="text-brand font-semibold hover:text-brand-dark transition-colors"
                  >
                    Voir tous nos services →
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark mb-6">
                  Notre approche
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      n: "01",
                      t: "Écoute et compréhension",
                      d: "Nous prenons le temps de comprendre votre activité, votre image et vos attentes avant de proposer quoi que ce soit.",
                    },
                    {
                      n: "02",
                      t: "Proposition créative et adaptée",
                      d: "Nos propositions sont pensées pour votre secteur et votre clientèle, pas copiées sur un modèle générique.",
                    },
                    {
                      n: "03",
                      t: "Production et livraison soignée",
                      d: "Du fichier validé à la pose ou la livraison, nous assurons la qualité de bout en bout.",
                    },
                    {
                      n: "04",
                      t: "Suivi et disponibilité",
                      d: "Nous restons disponibles après la livraison pour tout ajustement ou nouveau besoin.",
                    },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-4">
                      <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs font-display">
                          {step.n}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-dark mb-1 text-sm">
                          {step.t}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed">
                          {step.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark mb-10 text-center">
              Pourquoi nous choisissent-ils ?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-6 border border-gray-100 rounded-2xl hover:border-brand/20 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle size={20} className="text-brand" />
                  </div>
                  <h3 className="font-display font-bold text-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to find us */}
        <section className="bg-dark py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-6">
                  Nous trouver à Oran
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  Notre atelier est situé à Maraval, Oran. Nous accueillons nos
                  clients sur rendez-vous et répondons rapidement à toute
                  demande par téléphone ou WhatsApp.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      text: "29 Rue Colonel Chabou aek, Maraval, Oran",
                      href: "https://www.google.com/maps/place/Mb+Pub/data=!4m2!3m1!1s0x0:0xaac900da3133f09f",
                    },
                    {
                      icon: Phone,
                      text: "+213 553 924 419",
                      href: "tel:+213553924419",
                    },
                    {
                      icon: Mail,
                      text: "mbpublicite31@gmail.com",
                      href: "mailto:mbpublicite31@gmail.com",
                    },
                    {
                      icon: MessageCircle,
                      text: "WhatsApp disponible",
                      href: "https://wa.me/213553924419",
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i}>
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                        >
                          <Icon
                            size={17}
                            className="text-brand flex-shrink-0 mt-0.5"
                          />
                          <span className="text-sm">{item.text}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="font-display font-bold text-white text-xl mb-3">
                  Travailler avec MB PUB
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Vous avez un projet de publicité, d&apos;impression, d&apos;enseigne ou
                  de communication visuelle à Oran ? Parlez-nous de votre
                  besoin, nous vous répondons rapidement.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold py-3.5 rounded-xl transition-colors font-display"
                  >
                    Demander un devis
                  </Link>
                  <Link
                    href="/realisations"
                    className="flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-semibold py-3.5 rounded-xl transition-colors"
                  >
                    Voir nos réalisations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
