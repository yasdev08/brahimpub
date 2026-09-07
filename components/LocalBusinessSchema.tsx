export default function LocalBusinessSchema() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brahimpub.vercel.app";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: "MB PUB",
        description:
          "Agence de publicité, impression et communication visuelle à Oran, Algérie. Enseignes publicitaires, impression numérique, grand format, design graphique et solutions digitales.",
        url: siteUrl,
        telephone: "+213553924419",
        email: "mbpublicite31@gmail.com",
        image: `${siteUrl}/og-image.jpg`,
        logo: `${siteUrl}/logo1.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "29 Rue Colonel Chabou aek",
          addressLocality: "Maraval",
          addressRegion: "Oran",
          postalCode: "31000",
          addressCountry: "DZ",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "35.6911",
          longitude: "-0.6417",
        },
        hasMap:
          "https://www.google.com/maps/place/Mb+Pub/data=!4m2!3m1!1s0x0:0xaac900da3133f09f",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
            ],
            opens: "08:30",
            closes: "18:00",
          },
        ],
        sameAs: ["https://lnk.bio/mbpub31"],
        areaServed: {
          "@type": "City",
          name: "Oran",
          "@id": "https://www.wikidata.org/wiki/Q35379",
        },
        priceRange: "DA",
        currenciesAccepted: "DZD",
        paymentAccepted: "Cash",
        knowsAbout: [
          "Enseignes publicitaires",
          "Enseignes lumineuses",
          "Impression numérique",
          "Impression grand format",
          "Habillage vitrine",
          "Design graphique",
          "Affichage digital LED",
          "Solutions QR",
          "Communication visuelle",
          "Publicité Oran",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "MB PUB",
        description:
          "Publicité, impression et communication visuelle à Oran — MB PUB",
        publisher: {
          "@id": `${siteUrl}/#business`,
        },
        inLanguage: "fr-DZ",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/services?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
