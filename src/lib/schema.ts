// /src/lib/schema.ts

export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SoulFrame Studio",
  image: "https://www.soulframestudio.in/logo.png",
  telephone: "+919731741573",
  priceRange: "₹3,999 - ₹49,999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Banaswadi",
    addressRegion: "Karnataka",
    addressCountry: "IN"
  },
  areaServed: "Bangalore",
  description:
    "Commercial photography studio and cyclorama rental space in Banaswadi, Bangalore offering cyclorama wall, product, fashion, food and ecommerce shoots."
})



export const createStudioZonesSchema = (zones: any[]) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  name: "SoulFrame Studio Layout",
  hasPart: zones.map((z) => ({
    "@type": "Place",
    name: z.name,
    description: `Studio setup with dimensions ${z.dimensions}`
  }))
})



export const createFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is your photography studio located in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SoulFrame Studio is located in Banaswadi in North Bangalore with easy access from HRBR Layout, Kalyan Nagar and Indiranagar."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer cyclorama studio rental in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the studio includes a 16ft × 16ft cyclorama infinity wall suitable for product photography, fashion shoots and commercial productions."
      }
    },
    {
      "@type": "Question",
      name: "What types of shoots can be done in your studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The studio is used for product photography, ecommerce catalog shoots, fashion campaigns, food photography and brand advertising visuals."
      }
    }
  ]
})
