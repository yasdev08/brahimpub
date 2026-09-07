import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, MessageCircle, Clock, AtSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Devis Gratuit | MB PUB Oran",
  description:
    "Contactez MB PUB à Oran pour un devis gratuit. Enseigne, impression, design graphique ou solutions digitales — réponse rapide par téléphone, WhatsApp ou formulaire.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contacter MB PUB à Oran | Devis Gratuit",
    description:
      "Demandez un devis pour vos enseignes, impressions ou projets de communication visuelle à Oran.",
    url: "/contact",
  },
};

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+213 553 924 419",
    sub: "Réponse rapide disponible",
    href: "https://wa.me/213553924419",
    external: true,
    cta: "Écrire sur WhatsApp",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+213 553 924 419",
    sub: "Disponible pour vous répondre",
    href: "tel:+213553924419",
    external: false,
    cta: "Appeler maintenant",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mbpublicite31@gmail.com",
    sub: "Pour les demandes détaillées",
    href: "mailto:mbpublicite31@gmail.com",
    external: false,
    cta: "Envoyer un email",
  },
  {
    icon: AtSign,
    label: "Réseaux sociaux",
    value: "lnk.bio/mbpub31",
    sub: "Tous nos profils",
    href: "https://lnk.bio/mbpub31",
    external: true,
    cta: "Voir nos profils",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacter MB PUB",
  description: "Page de contact de MB PUB — Publicité à Oran",
  url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://brahimpub.vercel.app"}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: "MB PUB",
    telephone: "+213553924419",
    email: "mbpublicite31@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "29 Rue Colonel Chabou aek",
      addressLocality: "Maraval",
      addressRegion: "Oran",
      addressCountry: "DZ",
    },
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://brahimpub.vercel.app",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
  },
};

export default function ContactPage() {
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
            items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
          />
        </div>

        {/* Hero */}
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-brand text-sm font-bold uppercase tracking-widest mb-4 font-display">
                Devis gratuit
              </p>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-dark leading-tight mb-5">
                Parlons de votre projet.
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                Décrivez-nous votre besoin, nous vous répondons rapidement avec
                une proposition adaptée. Devis gratuit et sans engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Contact methods */}
        <section className="bg-gray-soft py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-brand/20 hover:shadow-md transition-all duration-200 flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center group-hover:bg-brand/15 transition-colors">
                      <Icon size={20} className="text-brand" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-dark text-sm">
                        {method.label}
                      </p>
                      <p className="text-muted text-xs mt-0.5">{method.sub}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="bg-gray-soft py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-5">
                {/* Address */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="font-display font-bold text-dark mb-4 flex items-center gap-2">
                    <MapPin size={16} className="text-brand" />
                    Notre atelier
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    29 Rue Colonel Chabou aek<br />
                    Maraval, Oran<br />
                    Algérie
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Mb+Pub/data=!4m2!3m1!1s0x0:0xaac900da3133f09f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand text-sm font-semibold hover:text-brand-dark transition-colors"
                  >
                    Voir sur Google Maps →
                  </a>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h2 className="font-display font-bold text-dark mb-4 flex items-center gap-2">
                    <Clock size={16} className="text-brand" />
                    Horaires
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {[
                      { j: "Samedi – Jeudi", h: "08h30 – 18h00" },
                      { j: "Vendredi", h: "Fermé" },
                    ].map((row) => (
                      <li
                        key={row.j}
                        className="flex justify-between items-center"
                      >
                        <span className="text-muted">{row.j}</span>
                        <span
                          className={`font-semibold ${
                            row.h === "Fermé" ? "text-gray-400" : "text-dark"
                          }`}
                        >
                          {row.h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/213553924419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark rounded-2xl p-6 border border-white/5 flex items-center gap-4 group hover:bg-charcoal transition-colors"
                >
                  <div className="w-12 h-12 bg-[#25D366]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={22} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm">
                      WhatsApp
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">
                      +213 553 924 419
                    </p>
                    <p className="text-[#25D366] text-xs font-semibold mt-1 group-hover:underline">
                      Écrire maintenant →
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
