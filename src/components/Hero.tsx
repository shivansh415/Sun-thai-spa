"use client";

import Image from "next/image";
import { MapPin, Phone, Star, Check, Clock } from "lucide-react";
import { BUSINESS, PHONE_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const SERVICES_LINE =
  "Thai · Swedish · Deep Tissue · Hot Stone · Couples · Moroccan Bath";

const HERO_ALT =
  "Sun Thai Spa Bhopal — Luxury Massage Centre at Aashima Mall";

function StarRating() {
  return (
    <span className="inline-flex items-center gap-1 text-spa-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-spa-gold text-spa-gold" />
      ))}
      <span className="ml-1 text-spa-cream/80">5.0</span>
    </span>
  );
}

function HeroContent({ centered }: { centered: boolean }) {
  const align = centered ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${align} max-w-[640px] ${centered ? "mx-auto" : ""}`}>
      {/* Location badge */}
      <span
        className={`inline-flex items-center gap-2 w-fit border border-spa-cream/30 rounded-full px-4 py-2 text-[11px] sm:text-xs font-sans text-spa-cream/80 ${
          centered ? "mx-auto" : ""
        }`}
      >
        <MapPin className="w-3.5 h-3.5 text-spa-gold" />
        AASHIMA MALL, BHOPAL · NEAR BAGMUGALIYA
      </span>

      {/* Sub-tagline */}
      <p className="mt-6 text-spa-gold text-xs font-sans uppercase tracking-[0.25em] font-medium">
        #1 Luxury Spa &amp; Massage in Bhopal
      </p>

      {/* Heading */}
      <h1 className="mt-4 font-playfair leading-[1.05]">
        <span className="block text-5xl sm:text-6xl lg:text-7xl text-spa-cream font-normal">
          An Escape Into
        </span>
        <span className="block italic text-5xl sm:text-6xl lg:text-7xl text-spa-goldLight font-normal">
          Absolute Serenity
        </span>
      </h1>

      {/* Gold divider */}
      <div className={`mt-3 mb-4 text-spa-gold text-sm tracking-[0.5em] ${centered ? "" : ""}`}>
        ——◆——
      </div>

      {/* Services */}
      <p className="text-spa-cream/80 text-sm font-sans tracking-wide">
        {SERVICES_LINE}
      </p>

      {/* Address */}
      <p className="mt-1 text-spa-muted text-xs font-sans">
        Aashima Mall, Bagmugaliya, Bhopal — Madhya Pradesh
      </p>

      {/* Social proof row */}
      <div
        className={`mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] sm:text-xs font-sans text-spa-cream/80 ${
          centered ? "justify-center" : ""
        }`}
      >
        <StarRating />
        <span className="text-spa-cream/30">|</span>
        <span>500+ Guests</span>
        <span className="text-spa-cream/30">|</span>
        <span className="inline-flex items-center gap-1">
          <Check className="w-3 h-3 text-spa-gold" /> Certified Therapists
        </span>
        <span className="text-spa-cream/30">|</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="w-3 h-3 text-spa-gold" /> {BUSINESS.hours}
        </span>
      </div>
      <div
        className={`mt-1 text-[11px] sm:text-xs font-sans text-spa-cream/80 ${
          centered ? "text-center" : ""
        }`}
      >
        💰 From ₹999
      </div>

      {/* CTAs */}
      <div
        className={`mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full ${
          centered ? "sm:justify-center" : ""
        }`}
      >
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-wa hover:bg-wa-hover text-white rounded-full px-8 py-4 font-sans uppercase tracking-[0.15em] text-sm font-semibold transition-colors duration-300 shadow-[0_4px_20px_rgba(34,197,94,0.3)]"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Book on WhatsApp
        </a>
        <a
          href={PHONE_URL}
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-spa-gold to-spa-goldDim text-black rounded-full px-8 py-4 font-sans uppercase tracking-[0.15em] text-sm font-semibold hover:brightness-110 transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
      </div>

      {/* Trust line */}
      <p
        className={`mt-4 text-[11px] sm:text-xs font-sans text-spa-muted ${
          centered ? "text-center" : ""
        }`}
      >
        ✓ Instant WhatsApp booking · ✓ No deposit needed · ✓ Walk-ins welcome
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-spa-deepest"
    >
      {/* Desktop layout */}
      <div className="hidden md:block">
        {/* Right-half image */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image
            src="/images/hero-bg.jpg"
            alt={HERO_ALT}
            fill
            priority
            fetchPriority="high"
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Left-edge gradient overlay fading to deepest */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0704] via-[#0A0704]/70 to-transparent" />
        </div>

        {/* Left-half content */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen pl-10 lg:pl-24 pr-8 max-w-[55%]">
          <HeroContent centered={false} />
        </div>
      </div>

      {/* Mobile layout — full-bleed image background */}
      <div className="md:hidden relative min-h-screen">
        <Image
          src="/images/hero-bg.jpg"
          alt={HERO_ALT}
          fill
          priority
          fetchPriority="high"
          quality={90}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0704]/70 via-[#0A0704]/55 to-[#0A0704]/95" />
        <div className="relative z-10 px-5 pt-32 pb-32 flex items-center min-h-screen">
          <HeroContent centered />
        </div>
      </div>
    </section>
  );
}
