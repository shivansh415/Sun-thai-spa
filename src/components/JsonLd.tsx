import { BUSINESS } from "@/lib/constants";

const SITE_URL = "https://www.sunthaispa.in";

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    alternateName: ["Sun Thai Spa Bhopal", "Sun Thai Spa Aashima Mall"],
    description:
      "Luxury spa and massage centre in Bhopal offering Thai massage, deep tissue, aromatherapy, couples massage, hot oil massage and Moroccan bath treatments.",
    url: SITE_URL,
    telephone: "+918827272939",
    priceRange: "₹₹",
    image: [
      `${SITE_URL}/images/hero-bg.jpg`,
      `${SITE_URL}/images/room-private.jpg`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No 115, First Floor, Aashima Mall, Shri Rameshwaram",
      addressLocality: "Bagmugaliya",
      addressRegion: "Madhya Pradesh",
      postalCode: "462043",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.2929,
      longitude: 77.4097,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "21:00",
      },
    ],
    sameAs: [BUSINESS.instagram],
    hasMap: "https://maps.google.com/?q=Aashima+Mall+Bhopal",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Priya S." },
        reviewBody:
          "Absolutely incredible experience. The therapists are professional and the rooms are so private and peaceful. Best spa in Bhopal!",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Rahul K." },
        reviewBody:
          "Clean, luxurious, and relaxing. The hot oil massage was heavenly. Highly recommended!",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Anjali T." },
        reviewBody:
          "Came for the couples massage and we were blown away. Easy to book on WhatsApp, friendly staff. Will come back!",
      },
    ],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "999",
      highPrice: "4999",
      priceCurrency: "INR",
      offers: [
        { "@type": "Offer", name: "Thai Massage", price: "999", priceCurrency: "INR" },
        { "@type": "Offer", name: "Deep Tissue Massage", price: "1299", priceCurrency: "INR" },
        { "@type": "Offer", name: "Aromatherapy Massage", price: "1499", priceCurrency: "INR" },
        { "@type": "Offer", name: "Couples Massage", price: "2499", priceCurrency: "INR" },
        { "@type": "Offer", name: "Hot Oil Massage", price: "1199", priceCurrency: "INR" },
        { "@type": "Offer", name: "Moroccan Bath", price: "1999", priceCurrency: "INR" },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Sun Thai Spa located in Bhopal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sun Thai Spa is located at Shop No 115, First Floor, Aashima Mall, Shri Rameshwaram, Bagmugaliya, Bhopal, Madhya Pradesh 462043.",
        },
      },
      {
        "@type": "Question",
        name: "What are the timings of Sun Thai Spa Bhopal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sun Thai Spa is open daily from 11 AM to 9 PM, including weekends and public holidays.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book a massage at Sun Thai Spa Bhopal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can book instantly on WhatsApp at ${BUSINESS.phone}. No deposit needed. Walk-ins are also welcome.`,
        },
      },
      {
        "@type": "Question",
        name: "What massage services are available at Sun Thai Spa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sun Thai Spa offers Thai massage, Swedish massage, deep tissue massage, aromatherapy massage, hot oil massage, couples massage, and Moroccan bath treatments.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price of massage at Sun Thai Spa Bhopal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Massage prices at Sun Thai Spa start from ₹999. Thai massage starts at ₹999, deep tissue at ₹1299, aromatherapy at ₹1499, and couples massage at ₹2499.",
        },
      },
      {
        "@type": "Question",
        name: "Is Sun Thai Spa near MP Nagar Bhopal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Sun Thai Spa at Aashima Mall Bagmugaliya is easily accessible from MP Nagar, Misrod, Hoshangabad Road and other parts of Bhopal.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Spa Services Bhopal",
        item: `${SITE_URL}/#services`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
