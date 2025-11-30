export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MotorcycleRepair",
    "@id": "https://www.ajmotorbikes.com/#organization",
    name: "AJ Motorbikes",
    alternateName: "AJ Motorbikes Taller de Motos",
    image: "https://www.ajmotorbikes.com/aj-logo.webp",
    logo: {
      "@type": "ImageObject",
      url: "https://www.ajmotorbikes.com/aj-logo.webp",
      width: "200",
      height: "200",
    },
    description:
      "Taller especializado en mantenimiento y reparación de motocicletas en Calahorra, La Rioja. Más de 20 años de experiencia. Servicios de mecánica, electricidad, neumáticos, recambios y tasación.",
    url: "https://www.ajmotorbikes.com",
    telephone: "+34646 64 05 11",
    email: "ajmotorbikeslr@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Achútegui de Blas, 22",
      addressLocality: "Calahorra",
      addressRegion: "La Rioja",
      postalCode: "26500",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.3048",
      longitude: "-1.9648",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "16:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "€€",
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "42.3048",
          longitude: "-1.9648",
        },
        geoRadius: "50000",
      },
      {
        "@type": "City",
        name: "Calahorra",
      },
      {
        "@type": "City",
        name: "Arnedo",
      },
      {
        "@type": "City",
        name: "Autol",
      },
      {
        "@type": "City",
        name: "Rincón de Soto",
      },
      {
        "@type": "City",
        name: "Alfaro",
      },
      {
        "@type": "City",
        name: "Pradejón",
      },
      {
        "@type": "City",
        name: "San Adrián",
      },
      {
        "@type": "City",
        name: "Aldeanueva de Ebro",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Taller de Motos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mantenimiento y Reparación",
            description:
              "Servicios completos de mantenimiento y reparación de motocicletas de todas las marcas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Recambios Originales",
            description:
              "Venta de recambios originales y compatibles para motocicletas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Neumáticos",
            description:
              "Venta, montaje y equilibrado de neumáticos para motos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electricidad y Diagnóstico",
            description:
              "Diagnóstico y reparación de sistemas eléctricos de motocicletas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Revisión Pre-ITV",
            description:
              "Revisión completa antes de pasar la ITV para motocicletas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tasación y Compra de Motos",
            description:
              "Tasación profesional y compra de motocicletas de ocasión",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/ajmotorbikes",
      "https://www.instagram.com/ajmotorbikes",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
