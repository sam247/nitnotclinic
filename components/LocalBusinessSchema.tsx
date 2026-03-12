const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nitnot.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${baseUrl}/#organization`,
  name: "NitNOT Clinic",
  description: "Professional head lice treatment and lice removal clinic in Hampton, London. Safe, child-friendly head lice treatment at our clinic or in your home. 100% guarantee.",
  url: baseUrl,
  telephone: "+447835356251",
  email: "anica@nitnot.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Flat 8, Chapter Way",
    addressLocality: "Hampton",
    addressRegion: "Richmond",
    addressCountry: "GB",
    postalCode: "TW12 1AG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4224,
    longitude: -0.3689,
  },
  areaServed: [
    { "@type": "City", name: "Hampton" },
    { "@type": "City", name: "London" },
    { "@type": "State", name: "Surrey" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "11:00",
      closes: "17:00",
    },
  ],
  priceRange: "££",
  image: `${baseUrl}/images/nitnot-logo.webp`,
  sameAs: [],
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
