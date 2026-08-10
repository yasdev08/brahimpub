import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mbpub.dz"),
  title: {
    default: "MB PUB — Agence Publicité & Impression en Algérie",
    template: "%s | MB PUB",
  },
  description:
    "MB PUB est votre agence de publicité et d'impression à Oran, Algérie. Cartes de visite, flyers, affiches, enseignes, design graphique et solutions digitales QR pour développer votre visibilité.",
  keywords: [
    "impression publicitaire Algérie",
    "agence publicité Algérie",
    "cartes de visite Algérie",
    "impression flyers Oran",
    "design graphique Algérie",
    "QR menu restaurant Algérie",
    "supports publicitaires",
    "impression Oran",
  ],
  openGraph: {
    title: "MB PUB — Agence Publicité & Impression en Algérie",
    description:
      "Transformez vos idées en supports visuels puissants. Impression, design, publicité et solutions digitales.",
    siteName: "MB PUB",
    locale: "fr_DZ",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
