import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Réalisations & Portfolio | Projets MB PUB à Oran",
  description:
    "Découvrez les réalisations de MB PUB à Oran. Enseignes, impression, design graphique, habillage vitrine — des projets concrets pour des professionnels locaux.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Réalisations MB PUB à Oran | Portfolio",
    description:
      "Enseignes, impression, design, habillage vitrine — le portfolio de MB PUB pour les professionnels d'Oran.",
    url: "/realisations",
  },
};

const projects = [
  {
    id: "wonder",
    image: "/portfolio/wonder.jpg",
    title: "Wonder",
    category: "Cartes de visite & Identité",
    description:
      "Conception et impression de cartes de visite professionnelles pour une identité visuelle cohérente et impactante.",
    service: "Impression numérique",
    serviceSlug: "impression",
    tags: ["Cartes de visite", "Design graphique"],
  },
  {
    id: "wonderfood",
    image: "/portfolio/wonderfood.jpg",
    title: "Wonder Food",
    category: "Communication restaurant",
    description:
      "Création de supports de communication print pour un restaurant : flyers, affiches et menus.",
    service: "Impression numérique",
    serviceSlug: "impression",
    tags: ["Flyers", "Affiches", "Restaurant"],
  },
  {
    id: "thalassa",
    image: "/portfolio/thalassa.jpg",
    title: "Thalassa",
    category: "Affiche événementielle",
    description:
      "Conception et impression d'affiches pour un événement professionnel avec un rendu soigné.",
    service: "Impression numérique",
    serviceSlug: "impression",
    tags: ["Affiches", "Événement"],
  },
  {
    id: "backlight",
    image: "/portfolio/backlight.jpg",
    title: "Backlight publicitaire",
    category: "Grand format",
    description:
      "Réalisation d'une impression backlight rétroéclairée pour une vitrine commerciale.",
    service: "Impression grand format",
    serviceSlug: "grand-format",
    tags: ["Backlight", "Grand format", "Vitrine"],
  },
  {
    id: "zizou",
    image: "/portfolio/zizou.jpg",
    title: "Enseigne Zizou",
    category: "Enseigne commerciale",
    description:
      "Conception et fabrication d'une enseigne publicitaire pour un commerce à Oran.",
    service: "Enseignes publicitaires",
    serviceSlug: "enseignes-publicitaires",
    tags: ["Enseigne", "Façade"],
  },
  {
    id: "website",
    image: "/portfolio/website.jpg",
    title: "Profil QR Business",
    category: "Solutions digitales",
    description:
      "Création d'un profil digital accessible par QR code pour une présence en ligne professionnelle.",
    service: "Solutions QR",
    serviceSlug: "solutions-qr",
    tags: ["QR code", "Digital", "Profil"],
  },
  {
    id: "latino",
    image: "/portfolio/latino.jpg",
    title: "Latino",
    category: "Identité visuelle",
    description:
      "Conception de cartes de visite et d'identité graphique pour un établissement.",
    service: "Design graphique",
    serviceSlug: "design-graphique",
    tags: ["Cartes de visite", "Identité"],
  },
  {
    id: "rezki",
    image: "/portfolio/rezki.jpg",
    title: "Rezki",
    category: "Impression & Communication",
    description:
      "Supports de communication imprimés pour un professionnel à Oran.",
    service: "Impression numérique",
    serviceSlug: "impression",
    tags: ["Impression", "Communication"],
  },
  {
    id: "saphirbleu",
    image: "/portfolio/saphirbleu.jpg",
    title: "Saphir Bleu",
    category: "Identité visuelle & Design",
    description:
      "Création de supports visuels et d'identité pour un établissement.",
    service: "Design graphique",
    serviceSlug: "design-graphique",
    tags: ["Design", "Identité"],
  },
  {
    id: "facade",
    image: "/portfolio/facade.jpg",
    title: "Habillage de façade",
    category: "Façade & Enseigne",
    description:
      "Habillage complet de façade pour un commerce : revêtement et enseigne sur mesure.",
    service: "Enseignes publicitaires",
    serviceSlug: "enseignes-publicitaires",
    tags: ["Façade", "Habillage", "Enseigne"],
  },
  {
    id: "fantasia",
    image: "/portfolio/fantasia.jpg",
    title: "Fantasia",
    category: "Communication visuelle",
    description:
      "Supports de communication grand format et print pour Fantasia à Oran.",
    service: "Impression numérique",
    serviceSlug: "impression",
    tags: ["Grand format", "Print"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Réalisations MB PUB",
  description:
    "Portfolio des projets réalisés par MB PUB — publicité, impression et communication visuelle à Oran.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://brahimpub.vercel.app"}/realisations`,
};

export default function RealisationsPage() {
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
              { label: "Réalisations" },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="bg-white py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-brand text-sm font-bold uppercase tracking-widest mb-4 font-display">
                Portfolio
              </p>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-dark leading-tight mb-6">
                Nos réalisations à Oran.
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                Des projets concrets réalisés pour des commerçants, restaurants,
                cabinets et entreprises à Oran et en Algérie. Chaque projet
                reflète notre engagement pour la qualité et la créativité.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio grid */}
        <section className="bg-gray-soft py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="break-inside-avoid group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.category} par MB PUB à Oran`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Link
                        href={`/services/${project.serviceSlug}`}
                        className="text-xs font-semibold text-white/90 bg-brand px-3 py-1.5 rounded-full"
                      >
                        {project.service}
                      </Link>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-brand text-xs font-bold uppercase tracking-wider mb-1.5">
                      {project.category}
                    </p>
                    <h2 className="font-display font-bold text-dark text-lg mb-2">
                      {project.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-dark py-14 lg:py-18">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Votre projet dans notre prochain portfolio ?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Que vous ayez besoin d&apos;une enseigne, d&apos;une impression ou d&apos;un design
              graphique — MB PUB est là pour vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-brand/30 hover:-translate-y-0.5 font-display"
              >
                Demander un devis
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
