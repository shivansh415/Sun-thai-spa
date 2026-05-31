"use client";

import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const BENEFITS = [
  "Significantly reduce stress and anxiety",
  "Relieve chronic muscle pain and stiffness",
  "Improve blood circulation and sleep quality",
  "Boost energy levels and overall mood",
  "Enhance skin texture and natural radiance",
] as const;

export default function BenefitsSection() {
  return (
    <section className="bg-spa-bg">
      <div className="flex flex-col md:flex-row">
        {/* Image column */}
        <div className="relative w-full md:w-1/2 h-[350px] md:min-h-[600px]">
          <Image
            src="/images/benefits-oil.jpg"
            alt="Premium golden massage oil used at Sun Thai Spa Bhopal"
            fill
            loading="lazy"
            quality={80}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content column */}
        <div className="w-full md:w-1/2 bg-spa-section flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-spa-cream leading-tight">
            Elevate Your Wellbeing
          </h2>

          <ul className="mt-10 space-y-6">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="w-2.5 h-2.5 rounded-full bg-spa-gold mt-1.5 flex-shrink-0"
                />
                <span className="text-spa-cream text-base leading-relaxed">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block w-fit text-spa-gold font-sans uppercase tracking-[0.2em] text-xs border-b border-spa-gold pb-1 hover:text-spa-goldLight transition-colors"
          >
            Experience the Benefits
          </a>
        </div>
      </div>
    </section>
  );
}
