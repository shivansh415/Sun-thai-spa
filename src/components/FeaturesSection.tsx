"use client";

import Image from "next/image";
import { ShieldCheck, Sparkles, MapPin, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = { Icon: LucideIcon; label: string };

const FEATURES: readonly Feature[] = [
  { Icon: ShieldCheck, label: "Certified Therapists" },
  { Icon: Sparkles, label: "Premium Products" },
  { Icon: MapPin, label: "Private Suites" },
  { Icon: Star, label: "5-Star Experience" },
];

export default function FeaturesSection() {
  return (
    <>
      {/* Icon features */}
      <section className="bg-spa-deepest py-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {FEATURES.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full border border-spa-gold/50 bg-spa-gold/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-spa-gold" aria-hidden="true" />
              </div>
              <p className="font-sans text-spa-cream text-sm tracking-wide">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dual full-bleed images */}
      <section className="flex flex-col md:flex-row w-full">
        <div className="relative md:w-1/2 h-[250px] md:h-[500px]">
          <Image
            src="/images/room-private.jpg"
            alt="Private luxury massage room at Sun Thai Spa Bhopal"
            fill
            loading="lazy"
            quality={80}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,7,4,0.85)] to-transparent" />
          <h3 className="absolute bottom-0 left-0 p-8 font-playfair text-2xl text-spa-cream">
            Intimate Private Rooms
          </h3>
        </div>
        <div className="relative md:w-1/2 h-[250px] md:h-[500px]">
          <Image
            src="/images/oils-silk.jpg"
            alt="Luxury massage oils and silk at Sun Thai Spa Bhopal"
            fill
            loading="lazy"
            quality={80}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,7,4,0.85)] to-transparent" />
          <h3 className="absolute bottom-0 left-0 p-8 font-playfair text-2xl text-spa-cream">
            Rich Amber Oils &amp; Silk
          </h3>
        </div>
      </section>
    </>
  );
}
