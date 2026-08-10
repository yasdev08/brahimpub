import {
  AtSign,
  Share2,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
const footerLinks = {
  navigation: [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Processus", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Impression", href: "#services" },
    { label: "Grand Format", href: "#services" },
    { label: "Design Graphique", href: "#services" },
    { label: "Solutions QR", href: "#services" },
    { label: "Solutions Digitales", href: "#services" },
  ],
};

const socials = [
  { icon: AtSign, label: "Socials", href: "https://lnk.bio/mbpub31" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/+213553924419",
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo1.png"
                alt="MB PUB"
                width={140}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Agence de publicité, impression et communication visuelle en
              Algérie. Nous transformons vos idées en supports qui font la
              différence.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/8 hover:bg-brand rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                  >
                    <Icon size={16} />
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
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
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
              {[
                {
                  icon: Phone,
                  text: "+213 553 924 419",
                  href: "tel:+213553924419",
                },
                {
                  icon: Mail,
                  text: "contact@mbpub.dz",
                  href: "mailto:mbpublicite31@gmail.com",
                },
                {
                  icon: MapPin,
                  text: "29 Rue Colonel Chabou aek, Maraval,Oran Algérie",
                  href: "https://www.google.com/maps/place/Mb+Pub/data=!4m2!3m1!1s0x0:0xaac900da3133f09f?sa=X&ved=1t:2428&hl=en&gl=dz&ictx=111",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      <Icon size={15} className="text-brand flex-shrink-0" />
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
          <p className="text-white/30 text-sm">
            © 2026 MB PUB. Tous droits réservés.
          </p>
          <p className="text-brand text-sm font-semibold font-display">
            Propulsez votre visibilité.
          </p>
        </div>
      </div>
    </footer>
  );
}
