export default function LocalBusinessSchema() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://mb-pub.vercel.app";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "MB PUB",

    description:
      "Agence de publicité, impression et communication visuelle en Algérie.",

    url: siteUrl,

    logo: `${siteUrl}/logo1.png`,

    image: `${siteUrl}/og-image.jpg`,

    email: "mbpublicite31@gmail.com",

    telephone: "+213553924419",

    address: {
      "@type": "PostalAddress",
      addressCountry: "DZ",
      addressLocality: "Algérie",
    },

    areaServed: {
      "@type": "Country",
      name: "Algérie",
    },

    sameAs: ["https://lnk.bio/mbpub31"],

    serviceType: [
      "Impression publicitaire",
      "Design graphique",
      "Signalétique",
      "Enseignes",
      "Communication visuelle",
      "Solutions QR",
      "Solutions digitales",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
