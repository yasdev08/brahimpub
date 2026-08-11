import { AtSign, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

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
  {
    icon: AtSign,
    label: "Socials",
    href: "https://lnk.bio/mbpub31",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/213553924419",
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
            <div className="flex items-center gap-2 mb-5">
              {/* Replace this with your actual logo if needed */}
              <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center shadow-lg shadow-brand/20">
                <span className="text-white font-bold text-sm tracking-tight font-display">
                  MB
                </span>
              </div>

              <span className="font-bold text-xl tracking-tight text-white font-display">
                PUB
              </span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Agence de publicité, impression et communication visuelle en
              Algérie. Nous transformons vos idées en supports qui font la
              différence.
            </p>

            {/* Socials */}
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
                  text: "mbpublicite31@gmail.com",
                  href: "mailto:mbpublicite31@gmail.com",
                },
                {
                  icon: MapPin,
                  text: "29 Rue Colonel Chabou aek, Maraval, Oran",
                  href: "https://www.google.com/maps/place/Mb+Pub/data=!4m2!3m1!1s0x0:0xaac900da3133f09f",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.text}>
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
                      className="flex items-start gap-2.5 text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      <Icon
                        size={15}
                        className="text-brand flex-shrink-0 mt-0.5"
                      />

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
            © 2026 MB PUB. Tous droits réservés.
          </p>

          <p className="text-white/30 text-xs sm:text-sm text-center">
            Site web conçu & développé par{" "}
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
