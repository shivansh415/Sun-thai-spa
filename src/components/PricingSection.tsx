"use client";

import { motion } from "framer-motion";
import { Clock, Star, Crown } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import {
  SERVICES,
  CATEGORIES,
  formatPrice,
  bookingUrl,
  type Service,
} from "@/lib/services-data";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Badge                                                              */
/* ------------------------------------------------------------------ */

function PriceBadge({ type }: { type: "most-popular" | "premium" }) {
  if (type === "most-popular") {
    return (
      <span className="inline-flex items-center gap-1 bg-spa-gold/15 text-spa-gold text-[10px] font-sans font-semibold uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full">
        <Star className="w-2.5 h-2.5 fill-spa-gold" />
        Popular
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 bg-spa-goldLight/10 text-spa-goldLight text-[10px] font-sans font-semibold uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-full">
      <Crown className="w-2.5 h-2.5" />
      Premium
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing row                                                        */
/* ------------------------------------------------------------------ */

function PricingRow({ service }: { service: Service }) {
  return (
    <motion.div
      variants={rowVariants}
      className="group flex items-center gap-3 md:gap-4 py-4 px-4 md:px-6 rounded-lg transition-all duration-300 hover:bg-spa-card/80 hover:shadow-[0_2px_16px_rgba(201,151,58,0.08)] border border-transparent hover:border-spa-gold/15"
    >
      {/* Name + badge */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-playfair text-sm md:text-base text-spa-cream truncate">
            {service.name}
          </h4>
          {service.badge && <PriceBadge type={service.badge} />}
        </div>
        <p className="mt-0.5 text-spa-muted text-[11px] md:text-xs italic truncate">
          {service.tagline}
        </p>
      </div>

      {/* Duration */}
      <span className="hidden sm:flex items-center gap-1.5 text-spa-muted text-[11px] md:text-xs font-sans whitespace-nowrap">
        <Clock className="w-3 h-3 text-spa-gold/70" />
        {service.duration}
      </span>

      {/* Dotted separator (desktop) */}
      <span
        className="hidden md:block flex-shrink-0 w-16 border-b border-dotted border-spa-cream/15"
        aria-hidden="true"
      />

      {/* Price */}
      <span className="text-gold-gradient font-playfair text-base md:text-lg font-semibold whitespace-nowrap">
        {formatPrice(service.price)}
      </span>

      {/* Book CTA */}
      <a
        href={bookingUrl(service.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-1.5 bg-wa hover:bg-wa-hover text-white rounded-full px-4 py-2 font-sans uppercase tracking-[0.1em] text-[10px] font-semibold transition-colors duration-300 whitespace-nowrap flex-shrink-0"
        aria-label={`Book ${service.name}`}
      >
        <WhatsAppIcon className="w-3 h-3" />
        Book
      </a>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Category group                                                     */
/* ------------------------------------------------------------------ */

function CategoryGroup({
  emoji,
  label,
  services,
}: {
  emoji: string;
  label: string;
  services: readonly Service[];
}) {
  if (services.length === 0) return null;
  return (
    <div className="mb-10 last:mb-0">
      {/* Sticky category header */}
      <div className="sticky top-[72px] md:top-[72px] z-10 bg-spa-bg/95 backdrop-blur-sm py-3 md:py-4 border-b border-spa-gold/20 mb-2">
        <h3 className="font-playfair text-xl md:text-2xl text-spa-cream flex items-center gap-2.5">
          <span className="text-lg md:text-xl">{emoji}</span>
          {label}
          <span className="ml-2 text-spa-muted text-xs font-sans font-normal">
            ({services.length})
          </span>
        </h3>
      </div>

      {/* Rows */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-1"
      >
        {services.map((s) => (
          <PricingRow key={s.id} service={s} />
        ))}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main pricing section                                               */
/* ------------------------------------------------------------------ */

export default function PricingSection() {
  // Group services by category (skip "all")
  const categoryGroups = CATEGORIES.filter((c) => c.id !== "all").map((cat) => ({
    ...cat,
    services: SERVICES.filter((s) => s.category === cat.id),
  }));

  return (
    <section
      id="pricing"
      className="bg-spa-bg py-20 md:py-28 px-4 md:px-8"
    >
      {/* Header */}
      <header className="text-center max-w-2xl mx-auto">
        <p className="text-spa-gold text-xs font-sans uppercase tracking-[0.3em] font-medium">
          Our Pricing
        </p>
        <h2 className="mt-4 font-playfair text-4xl sm:text-5xl md:text-6xl text-spa-cream">
          Investment in Your Wellbeing
        </h2>
        <p className="mt-4 text-spa-muted text-sm md:text-base leading-relaxed">
          Transparent pricing, no hidden charges. Every session includes a
          private suite, certified therapist, and premium products.
        </p>
      </header>

      {/* Pricing table */}
      <div className="mt-12 md:mt-16 max-w-4xl mx-auto bg-spa-section/50 rounded-2xl border border-spa-cream/5 p-4 md:p-8">
        {categoryGroups.map((group) => (
          <CategoryGroup
            key={group.id}
            emoji={group.emoji}
            label={group.label}
            services={group.services}
          />
        ))}
      </div>

      {/* Bottom note */}
      <p className="mt-8 text-center text-spa-muted text-[11px] md:text-xs font-sans max-w-md mx-auto leading-relaxed">
        All prices inclusive of taxes. Advance booking recommended.
        <br />
        Walk-ins welcome subject to availability.
      </p>
    </section>
  );
}
