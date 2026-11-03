import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { MessageCircle } from "lucide-react";
import { projects, projectCategories } from "@/lib/portfolio";
import { getServiceBySlug } from "@/lib/services-data";

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

const serviceName = (slug: string) =>
  getServiceBySlug(slug)?.name ?? "Nos services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brahimpub.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Réalisations MB PUB",
  description:
    "Portfolio des projets réalisés par MB PUB — publicité, impression et communication visuelle à Oran.",
  url: `${siteUrl}/realisations`,
  hasPart: projects.map((p) => ({
    "@type": "CreativeWork",
    name: p.title,
    description: p.description,
    image: `${siteUrl}${p.image}`,
    about: p.category,
    creator: { "@type": "Organization", name: "MB PUB" },
  })),
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
                Enseignes lumineuses, façades, caissons backlight, signalétique
                intérieure et sites web : des projets réels, photographiés sur
                place chez nos clients à Oran.
              </p>
              <ul className="flex flex-wrap gap-2 mt-8" aria-label="Catégories">
                {projectCategories.slice(1).map((cat) => (
                  <li
                    key={cat}
                    className="text-sm font-semibold font-display text-gray-600 bg-gray-100 px-4 py-2 rounded-full"
                  >
                    {cat} ·{" "}
                    {projects.filter((p) => p.category === cat).length}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio grid */}
        <section className="bg-gray-soft py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {projects.map((project, i) => (
                <article
                  key={project.id}
                  id={project.id}
                  className="break-inside-avoid scroll-mt-28 group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.category} par MB PUB à Oran`}
                      width={project.width}
                      height={project.height}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300">
                      <Link
                        href={`/services/${project.services[0]}`}
                        data-track-event="project_service_click"
                        data-track-project-id={project.id}
                        data-track-service={project.services[0]}
                        className="text-xs font-semibold text-white/90 bg-brand px-3 py-1.5 rounded-full"
                      >
                        {serviceName(project.services[0])}
                      </Link>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-brand text-xs font-bold uppercase tracking-wider mb-1.5">
                      {project.category} · {project.client}
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
                </article>
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
