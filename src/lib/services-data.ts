// Single source of truth for all spa services.
// Both TreatmentsSection and PricingSection import from here.

export type ServiceCategory = "massage" | "specialty" | "body-treatment";

export type Service = {
  id: string;
  name: string;
  price: number;
  duration: string;
  category: ServiceCategory;
  tagline: string;
  benefits: readonly string[];
  image: string;
  alt: string;
  badge?: "most-popular" | "premium";
};

export const CATEGORIES = [
  { id: "all" as const, label: "All", emoji: "✨" },
  { id: "massage" as const, label: "Massage Therapies", emoji: "💆" },
  { id: "specialty" as const, label: "Specialty Treatments", emoji: "✨" },
  { id: "body-treatment" as const, label: "Body Treatments", emoji: "🌿" },
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number]["id"];

export const SERVICES: readonly Service[] = [
  {
    id: "balinese-massage",
    name: "Balinese Massage",
    price: 2000,
    duration: "60 Min",
    category: "massage",
    tagline: "Ancient Balinese healing art for total body harmony",
    benefits: [
      "Improves blood & oxygen circulation",
      "Balances the body",
      "Boosts immunity levels",
      "Relieves sleep disorders",
      "Alleviates strained muscles & joint pain",
    ],
    image: "/images/service-balinese.jpg",
    alt: "Professional Balinese massage therapy in candlelit luxury spa",
    badge: "most-popular",
  },
  {
    id: "aroma-massage",
    name: "Aroma Massage",
    price: 2000,
    duration: "60 Min",
    category: "massage",
    tagline: "Soothing essential oils for mind and body relief",
    benefits: [
      "Stress reducing",
      "Anxiety reliever",
      "Increased calmness & relaxation",
      "Decreases muscle tension",
      "Pain relief",
      "Reduces symptoms of depression",
    ],
    image: "/images/treatment-aromatherapy.jpg",
    alt: "Aromatherapy massage with essential oils and plumeria flowers",
  },
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    price: 2000,
    duration: "60 Min",
    category: "massage",
    tagline: "Classic full-body massage for deep relaxation",
    benefits: [
      "Pain management",
      "Increased blood flow",
      "Rehabilitation for muscle injuries",
      "Increased flexibility",
      "Reduced stress",
      "Improved immune system",
    ],
    image: "/images/service-swedish.jpg",
    alt: "Swedish massage with smooth gliding strokes in luxury spa",
    badge: "most-popular",
  },
  {
    id: "thai-spa",
    name: "Thai Spa",
    price: 2500,
    duration: "60 Min",
    category: "massage",
    tagline: "Traditional Thai techniques to restore energy flow",
    benefits: [
      "Relieves headaches & migraines",
      "Reduces back pain",
      "Relieves joint stiffness & pain",
      "Increases flexibility & range of motion",
      "Eases anxiety",
      "Revives energy",
    ],
    image: "/images/treatment-thai.jpg",
    alt: "Traditional Thai massage therapy in dark luxury spa room",
    badge: "most-popular",
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue",
    price: 2500,
    duration: "60 Min",
    category: "massage",
    tagline: "Targeted deep muscle therapy for chronic tension",
    benefits: [
      "Great stress reliever",
      "Reduces pain",
      "Lowers blood pressure & heart rate",
      "Breaks up scar tissue",
      "Reduces arthritis symptoms",
      "Rehabilitates injured muscles",
    ],
    image: "/images/treatment-deep-tissue.jpg",
    alt: "Deep tissue massage hands working on client's back",
  },
  {
    id: "relax-signature",
    name: "Relax Signature",
    price: 2500,
    duration: "60 Min",
    category: "massage",
    tagline: "Our signature blend for ultimate relaxation",
    benefits: [
      "Reduces stress levels",
      "Deep relaxation",
      "Improved blood circulation",
      "Body detoxification",
      "Improved sleep quality",
      "Bolstered immune system",
    ],
    image: "/images/service-relax-signature.jpg",
    alt: "Signature relaxation massage with orchid flowers and candles",
  },
  {
    id: "healing-touch",
    name: "Healing Touch",
    price: 3000,
    duration: "60 Min",
    category: "massage",
    tagline: "Energy healing for body, mind and spirit",
    benefits: [
      "Relieves anxiety & stress",
      "Helps wounds heal faster",
      "Improves immune system function",
      "Reduces nausea & fatigue",
      "Improves symptoms of chronic conditions",
      "Better sleep",
    ],
    image: "/images/service-healing-touch.jpg",
    alt: "Energy healing therapy with golden light in luxury spa",
    badge: "premium",
  },
  {
    id: "chocolate-massage",
    name: "Chocolate Massage",
    price: 3000,
    duration: "60 Min",
    category: "specialty",
    tagline: "Indulgent cocoa therapy for skin & soul",
    benefits: [
      "Deep relaxation",
      "Skin nourishment & softening",
      "Antioxidant-rich treatment",
      "Muscle tension relief",
      "Natural mood enhancer",
    ],
    image: "/images/service-chocolate.jpg",
    alt: "Chocolate massage therapy with melted cocoa application",
  },
  {
    id: "ubtan-massage",
    name: "Ubtan Massage",
    price: 2500,
    duration: "60 Min",
    category: "specialty",
    tagline: "Traditional Indian herbal ritual for glowing skin",
    benefits: [
      "Traditional skin brightening",
      "Deep cleansing",
      "Natural exfoliation",
      "Skin softening",
      "Ayurvedic healing",
    ],
    image: "/images/service-ubtan.jpg",
    alt: "Ubtan herbal treatment with turmeric and sandalwood paste",
  },
  {
    id: "wine-vodka-massage",
    name: "Wine & Vodka Massage",
    price: 3000,
    duration: "60 Min",
    category: "specialty",
    tagline: "Luxurious antioxidant therapy for skin rejuvenation",
    benefits: [
      "Antioxidant-rich treatment",
      "Skin rejuvenation",
      "Deep relaxation",
      "Detoxifying",
      "Improves skin texture",
    ],
    image: "/images/service-wine-vodka.jpg",
    alt: "Wine therapy spa treatment with grape extract application",
  },
  {
    id: "couple-massage",
    name: "Couple Massage",
    price: 3000,
    duration: "60 Min",
    category: "specialty",
    tagline: "Share the luxury experience together",
    benefits: [
      "Shared relaxation experience",
      "Stress relief for both",
      "Bonding & connection",
      "Synchronized therapy",
      "Romantic atmosphere",
    ],
    image: "/images/treatment-couples.jpg",
    alt: "Luxury couples spa suite with two massage tables",
  },
  {
    id: "four-hand-massage",
    name: "Four Hand Massage",
    price: 3000,
    duration: "60 Min",
    category: "specialty",
    tagline: "Double the therapists, double the relief",
    benefits: [
      "Two therapists simultaneously",
      "Deeper relaxation",
      "Enhanced muscle relief",
      "Synchronized strokes",
      "Overwhelmingly immersive experience",
    ],
    image: "/images/service-four-hand.jpg",
    alt: "Four-hand massage with two therapists working simultaneously",
    badge: "premium",
  },
  {
    id: "body-polishing",
    name: "Body Polishing",
    price: 5000,
    duration: "90 Min",
    category: "body-treatment",
    tagline: "Full body exfoliation for radiant glowing skin",
    benefits: [
      "Full body exfoliation",
      "Skin brightening",
      "Removes dead skin cells",
      "Smooth & glowing skin",
      "Deep moisturization",
    ],
    image: "/images/service-body-polishing.jpg",
    alt: "Body polishing treatment with exfoliating scrub application",
    badge: "premium",
  },
  {
    id: "water-therapy",
    name: "Water Therapy",
    price: 3000,
    duration: "60 Min",
    category: "body-treatment",
    tagline: "Hydrotherapy for complete body rejuvenation",
    benefits: [
      "Hydrotherapy benefits",
      "Deep muscle relaxation",
      "Improved circulation",
      "Stress relief",
      "Full body rejuvenation",
    ],
    image: "/images/service-water-therapy.jpg",
    alt: "Water therapy hydrotherapy treatment in luxury spa",
  },
] as const;

/** Format a number as ₹X,XXX */
export function formatPrice(n: number): string {
  return `₹${n.toLocaleString("en-IN")}`;
}

/** Build a WhatsApp booking link for a given service name */
export function bookingUrl(serviceName: string): string {
  const text = encodeURIComponent(
    `Hi, I want to book ${serviceName}`
  );
  return `https://wa.me/918827272939?text=${text}`;
}
