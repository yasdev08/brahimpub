import Link from "next/link";
import Image from "next/image";
import { AtSign, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Enseignes publicitaires", href: "/services/enseignes-publicitaires" },
    { label: "Enseignes lumineuses", href: "/services/enseignes-lumineuses" },
    { label: "Impression numérique", href: "/services/impression" },
    { label: "Grand format & bâches", href: "/services/grand-format" },
    { label: "Habillage vitrine", href: "/services/habillage-vitrine" },
    { label: "Design graphique", href: "/services/design-graphique" },
    { label: "Affichage digital LED", href: "/services/affichage-digital" },
    { label: "Solutions QR", href: "/services/solutions-qr" },
  ],
};

const socials = [
  {
    icon: AtSign,
    label: "Réseaux sociaux MB PUB",
    href: "https://lnk.bio/mbpub31",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp MB PUB",
    href: "https://wa.me/213553924419",
  },
];

const contactItems = [
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
    icon: MapPin,
    text: "29 Rue Colonel Chabou aek, Maraval, Oran",
    href: "https://www.google.com/maps/place/Mb+Pub/data=!4m2!3m1!1s0x0:0xaac900da3133f09f",
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-5" aria-label="MB PUB - Accueil">
              <Image
                src="/logo1.png"
                alt="MB PUB"
                width={160}
                height={160}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Agence de publicité, impression et communication visuelle à Oran.
              Enseignes, impression, design graphique et solutions digitales
              pour les professionnels.
            </p>

            <div className="flex items-center gap-2 mt-6">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-brand hover:text-white transition-colors duration-200"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-2.5 text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      <Icon size={15} className="text-brand flex-shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-white/30 text-xs sm:text-sm text-center">
            © 2026 MB PUB — Publicité & Impression à Oran. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs sm:text-sm text-center">
            Site web conçu &amp; développé par{" "}
            <a
              href="https://yesirdesign31.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:text-[#3B82F6] font-semibold transition-colors duration-200"
            >
              Yesir Design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
