import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  servicePages,
  getServiceBySlug,
  getRelatedServices,
} from "@/lib/services-data";
import {
  CheckCircle,
  ChevronRight,
  MessageCircle,
  Phone,
  Plus,
  Minus,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `/services/${slug}`,
      ...(service.heroImage && {
        images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.h1 }],
      }),
    },
  };
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-100 last:border-0">
      <summary className="flex items-center justify-between py-5 cursor-pointer list-none gap-4">
        <span className="font-display font-semibold text-dark group-open:text-brand transition-colors">
          {question}
        </span>
        <span className="flex-shrink-0 text-muted group-open:text-brand transition-colors">
          <Plus size={18} className="group-open:hidden" />
          <Minus size={18} className="hidden group-open:block" />
        </span>
      </summary>
      <p className="text-muted pb-5 leading-relaxed">{answer}</p>
    </details>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedServices).slice(0, 3);

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brahimpub.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "MB PUB",
      address: {
        "@type": "PostalAddress",
        streetAddress: "29 Rue Colonel Chabou aek",
        addressLocality: "Maraval, Oran",
        addressCountry: "DZ",
      },
      telephone: "+213553924419",
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: "Oran",
    },
    url: `${siteUrl}/services/${slug}`,
    ...(service.heroImage && { image: `${siteUrl}${service.heroImage}` }),
  };

  const faqJsonLd =
    service.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Navbar />
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-brand text-sm font-bold uppercase tracking-widest mb-4 font-display">
                  {service.category}
                </p>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
                  {service.h1}
                </h1>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  {service.intro}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-brand/25 hover:-translate-y-0.5 font-display"
                  >
                    Demander un devis gratuit
                  </Link>
                  <a
                    href="https://wa.me/213553924419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-brand text-gray-700 hover:text-brand font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>
              {service.heroImage && (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 aspect-[4/3] lg:aspect-auto lg:h-80">
                  <Image
                    src={service.heroImage}
                    alt={service.h1}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-soft py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark mb-10 text-center">
              Pourquoi choisir MB PUB pour vos {service.name.toLowerCase()} ?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle size={20} className="text-brand" />
                  </div>
                  <h3 className="font-display font-bold text-dark mb-2">
                    {f.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types / Solutions */}
        {service.types.length > 0 && (
          <section className="bg-white py-14 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark mb-3">
                Solutions disponibles
              </h2>
              <p className="text-muted mb-10 max-w-2xl">
                Chaque projet est différent. Découvrez les différentes options que nous proposons.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {service.types.map((type, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-6 border border-gray-100 rounded-2xl hover:border-brand/30 transition-colors"
                  >
                    <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-xs font-display">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-dark mb-1.5">
                        {type.name}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Applications */}
        {service.applications.length > 0 && (
          <section className="bg-dark py-14 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                    Qui fait appel à ce service ?
                  </h2>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    Nos solutions s&apos;adressent à tous les professionnels et
                    entreprises qui souhaitent améliorer leur visibilité à Oran.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.applications.map((app, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-white/80 text-sm"
                      >
                        <ChevronRight size={15} className="text-brand flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <p className="font-display font-bold text-white text-xl mb-4">
                    Vous avez un projet ?
                  </p>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    Décrivez-nous votre besoin, nous vous répondons rapidement
                    avec une proposition adaptée à votre activité.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors font-display"
                    >
                      Demander un devis
                    </Link>
                    <a
                      href="tel:+213553924419"
                      className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3 rounded-xl transition-colors"
                    >
                      <Phone size={16} />
                      +213 553 924 419
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        {service.process.length > 0 && (
          <section className="bg-white py-14 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark mb-10">
                Comment ça se passe ?
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step, i) => (
                  <div key={i} className="relative">
                    {i < service.process.length - 1 && (
                      <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-gray-200 z-0 -translate-y-px ml-6" />
                    )}
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-brand/20">
                        <span className="text-white font-bold text-xs font-display">
                          {step.step}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-dark mb-2 text-sm">
                        {step.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {service.faq.length > 0 && (
          <section className="bg-gray-soft py-14 lg:py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark mb-10">
                Questions fréquentes
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100 px-6">
                {service.faq.map((item, i) => (
                  <FAQItem key={i} {...item} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related services */}
        {related.length > 0 && (
          <section className="bg-white py-14 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl font-bold text-dark mb-8">
                Services complémentaires
              </h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="group p-6 border border-gray-100 rounded-2xl hover:border-brand/30 hover:shadow-md transition-all duration-200"
                  >
                    <h3 className="font-display font-bold text-dark mb-2 group-hover:text-brand transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-muted text-sm mb-4 leading-relaxed">
                      {rel.metaDescription.substring(0, 100)}…
                    </p>
                    <span className="text-brand text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Découvrir <ChevronRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="bg-brand py-14 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contactez MB PUB à Oran pour un devis gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/90 font-display shadow-xl"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="https://wa.me/213553924419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/30"
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
