export default function LocalBusinessSchema() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brahimpub.vercel.app";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "MB PUB",

    description:
      "Agence de publicité, impression et communication visuelle à Oran.",

    url: siteUrl,

    logo: `${siteUrl}/logo1.png`,

    image: `${siteUrl}/og-image.jpg`,

    email: "mbpublicite31@gmail.com",

    telephone: "+213553924419",

    address: {
      "@type": "PostalAddress",
      streetAddress: "29 Rue Colonel Chabou aek,Maraval, Oran",
      addressLocality: "Oran",
      addressRegion: "Oran",
      postalCode: "31000 ",
      addressCountry: "DZ",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Oran",
      },
      {
        "@type": "Country",
        name: "Algérie",
      },
    ],

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
