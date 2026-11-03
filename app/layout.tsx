import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager from "@/components/GoogleTagManager";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brahimpub.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
    google: "GvyLVLTWsVhmvsFLAmQPb7rhoCLB2a-Vnj-orSiWd-Q",
  },

  title: {
    default: "MB PUB | Publicité, Impression & Enseignes à Oran",
    template: "%s | MB PUB",
  },

  description:
    "MB PUB est une agence de publicité, impression et communication visuelle à Oran. Enseignes publicitaires, impression numérique, grand format, design graphique et solutions digitales.",

  keywords: [
    "MB PUB",
    "publicité Oran",
    "agence publicité Oran",
    "communication visuelle Oran",
    "impression publicitaire Oran",
    "enseignes publicitaires Oran",
    "enseignes lumineuses Oran",
    "impression grand format Oran",
    "design graphique Oran",
    "habillage vitrine Oran",
    "bâche publicitaire Oran",
    "signalétique Oran",
    "affichage digital Oran",
    "cartes de visite Oran",
    "flyers Oran",
    "QR menu restaurant Oran",
  ],

  authors: [{ name: "MB PUB", url: siteUrl }],
  creator: "MB PUB",
  publisher: "MB PUB",

  openGraph: {
    title: "MB PUB | Publicité, Impression & Enseignes à Oran",
    description:
      "Transformez vos idées en supports visuels puissants. Impression, signalétique, design, publicité et solutions digitales à Oran.",
    siteName: "MB PUB",
    locale: "fr_DZ",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MB PUB — Publicité, Impression & Communication Visuelle à Oran",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MB PUB | Publicité & Impression à Oran",
    description:
      "Enseignes, impression, design graphique et solutions digitales pour votre entreprise à Oran.",
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
      { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },

  applicationName: "MB PUB",
  appleWebApp: {
    capable: true,
    title: "MB PUB",
    statusBarStyle: "black",
  },
  formatDetection: { telephone: true },

  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <GoogleTagManager />
        {children}
        <AnalyticsTracker />
        <GoogleAnalytics />
        <Analytics />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
