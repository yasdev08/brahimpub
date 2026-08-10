import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mb-pub.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "MB PUB — Agence de Publicité & Impression en Algérie",
    template: "%s | MB PUB",
  },

  description:
    "MB PUB est une agence de publicité, impression et communication visuelle en Algérie. Cartes de visite, flyers, affiches, enseignes, signalétique, design graphique et solutions digitales.",

  keywords: [
    "MB PUB",
    "impression publicitaire Algérie",
    "agence publicité Algérie",
    "agence communication Algérie",
    "cartes de visite Algérie",
    "flyers Algérie",
    "impression flyers Oran",
    "enseignes lumineuses Algérie",
    "signalétique Algérie",
    "design graphique Algérie",
    "QR menu restaurant Algérie",
    "solutions digitales Algérie",
    "impression Oran",
    "publicité Oran",
  ],

  authors: [
    {
      name: "MB PUB",
      url: siteUrl,
    },
  ],

  creator: "MB PUB",
  publisher: "MB PUB",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "MB PUB — Agence de Publicité & Impression en Algérie",

    description:
      "Transformez vos idées en supports visuels puissants. Impression, signalétique, design, publicité et solutions digitales.",

    url: "/",

    siteName: "MB PUB",
    locale: "fr_DZ",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MB PUB — Publicité, Impression & Communication Visuelle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "MB PUB — Publicité & Impression en Algérie",

    description:
      "Impression, signalétique, design graphique et solutions digitales pour votre entreprise.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/logo1.png",
        type: "image/png",
      },
    ],
    apple: "/logo1.png",
  },

  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
