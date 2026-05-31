"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import {
  SERVICES,
  CATEGORIES,
  formatPrice,
  bookingUrl,
  type CategoryFilter,
  type Service,
} from "@/lib/services-data";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.25 } },
};

/* ------------------------------------------------------------------ */
/*  Badge component                                                    */
/* ------------------------------------------------------------------ */

function Badge({ type }: { type: "most-popular" | "premium" }) {
  const isMostPopular = type === "most-popular";
  return (
    <span
      className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-[0.15em] ${
        isMostPopular
          ? "bg-spa-gold text-black"
          : "bg-gradient-to-r from-spa-gold to-spa-goldLight text-black"
      }`}
    >
      {isMostPopular ? "Most Popular" : "Premium"}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Service card                                                       */
/* ------------------------------------------------------------------ */

function ServiceCard({ service }: { service: Service }) {
  const MAX_BENEFITS = 4;
  return (
    <motion.article
      variants={cardVariants}
      layout
      className="group bg-spa-card rounded-xl overflow-hidden border border-transparent transition-all duration-300 hover:border-spa-gold/30 hover:shadow-[0_8px_40px_rgba(201,151,58,0.12)] flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[4/3]">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,7,4,0.6)] to-transparent" />
        {/* Badge */}
        {service.badge && <Badge type={service.badge} />}
        {/* Duration pill */}
        <span className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-spa-cream text-[11px] font-sans px-3 py-1 rounded-full">
          <Clock className="w-3 h-3 text-spa-gold" />
          {service.duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col flex-1">
        {/* Name + Price row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-playfair text-lg md:text-xl text-spa-cream leading-snug">
            {service.name}
          </h3>
          <span className="text-gold-gradient font-playfair text-lg md:text-xl font-semibold whitespace-nowrap">
            {formatPrice(service.price)}
          </span>
        </div>

        {/* Tagline */}
        <p className="mt-1.5 text-spa-muted text-xs md:text-sm italic leading-relaxed">
          {service.tagline}
        </p>

        {/* Benefits */}
        <ul className="mt-3 space-y-1.5 flex-1">
          {service.benefits.slice(0, MAX_BENEFITS).map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-[11px] md:text-xs text-spa-cream/80"
            >
              <Check className="w-3 h-3 text-spa-gold mt-0.5 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
          {service.benefits.length > MAX_BENEFITS && (
            <li className="text-[10px] md:text-[11px] text-spa-muted pl-5">
              +{service.benefits.length - MAX_BENEFITS} more benefits
            </li>
          )}
        </ul>

        {/* CTA */}
        <a
          href={bookingUrl(service.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 w-full bg-wa hover:bg-wa-hover text-white rounded-full py-2.5 md:py-3 font-sans uppercase tracking-[0.1em] text-[11px] md:text-sm font-semibold transition-colors duration-300"
          aria-label={`Book ${service.name} on WhatsApp`}
        >
          <WhatsAppIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
          Book Now
        </a>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

export default function TreatmentsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filtered =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      className="bg-spa-section py-20 md:py-28 px-4 md:px-8"
    >
      {/* Header */}
      <header className="text-center max-w-2xl mx-auto">
        <p className="text-spa-gold text-xs font-sans uppercase tracking-[0.3em] font-medium">
          Our Services
        </p>
        <h2 className="mt-4 font-playfair text-4xl sm:text-5xl md:text-6xl text-spa-cream">
          Curated Indulgence
        </h2>
        <p className="mt-4 text-spa-muted text-sm md:text-base leading-relaxed">
          Discover 14+ premium spa therapies — each crafted to restore your body, calm your mind, and rejuvenate your spirit.
        </p>
      </header>

      {/* Category filter tabs */}
      <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-2 md:gap-3 max-w-3xl mx-auto">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-sans text-[11px] md:text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 border ${
                isActive
                  ? "bg-spa-gold text-black border-spa-gold shadow-[0_4px_20px_rgba(201,151,58,0.25)]"
                  : "bg-transparent text-spa-cream/70 border-spa-cream/20 hover:border-spa-gold/50 hover:text-spa-gold"
              }`}
            >
              <span className="mr-1.5">{cat.emoji}</span>
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Service cards grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-14 max-w-7xl mx-auto"
        >
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom note */}
      <p className="mt-12 text-center text-spa-muted text-[11px] md:text-xs font-sans flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-spa-gold" />
        All therapies performed by certified professionals in private luxury suites
      </p>
    </section>
  );
}
