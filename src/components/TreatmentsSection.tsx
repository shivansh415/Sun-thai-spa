"use client";

import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

type Treatment = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const TREATMENTS: readonly Treatment[] = [
  {
    title: "Thai Massage",
    description:
      "Traditional stretching and pressure techniques to energize your body and restore balance to mind and spirit.",
    image: "/images/treatment-thai.jpg",
    alt: "Thai massage treatment at Sun Thai Spa Bhopal",
  },
  {
    title: "Deep Tissue Massage",
    description:
      "Intensive pressure targeting deeper muscle layers to release chronic tension and restore mobility.",
    image: "/images/treatment-deep-tissue.jpg",
    alt: "Deep tissue massage therapy at Sun Thai Spa Bhopal",
  },
  {
    title: "Aromatherapy Massage",
    description:
      "A sensory journey using warm, fragrant essential oils tailored to your mood and wellness needs.",
    image: "/images/treatment-aromatherapy.jpg",
    alt: "Aromatherapy massage with essential oils at Sun Thai Spa Bhopal",
  },
  {
    title: "Hot Oil Massage",
    description:
      "Heated premium amber oils delivering profound warmth, deep relaxation and nourishment.",
    image: "/images/treatment-hot-oil.jpg",
    alt: "Hot oil massage treatment at Sun Thai Spa Bhopal",
  },
  {
    title: "Couples Massage",
    description:
      "A shared journey of tranquility in our private double suites. Perfect for reconnection.",
    image: "/images/treatment-couples.jpg",
    alt: "Couples massage suite at Sun Thai Spa Aashima Mall Bhopal",
  },
  {
    title: "Moroccan Bath",
    description:
      "Ancient purification ritual leaving skin radiant, deeply cleansed and silky smooth.",
    image: "/images/treatment-moroccan.jpg",
    alt: "Moroccan bath ritual at Sun Thai Spa Bhopal",
  },
] as const;

export default function TreatmentsSection() {
  return (
    <section
      id="services"
      className="bg-spa-section py-20 md:py-28 px-4 md:px-8"
    >
      <header className="text-center">
        <p className="text-spa-gold text-xs font-sans uppercase tracking-[0.3em] font-medium">
          Our Treatments
        </p>
        <h2 className="mt-4 font-playfair text-4xl sm:text-5xl md:text-6xl text-spa-cream">
          Curated Indulgence
        </h2>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mt-12 md:mt-16 max-w-7xl mx-auto">
        {TREATMENTS.map((t) => (
          <article
            key={t.title}
            className="group bg-spa-card rounded-xl overflow-hidden border border-transparent transition-all duration-300 hover:border-spa-gold/30 md:hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(201,151,58,0.15)]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={t.image}
                alt={t.alt}
                fill
                loading="lazy"
                quality={80}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="p-3 md:p-5">
              <h3 className="font-playfair text-base md:text-xl text-spa-cream leading-snug">
                {t.title}
              </h3>
              <p className="mt-2 text-[11px] md:text-sm text-spa-muted leading-relaxed line-clamp-3 md:line-clamp-none">
                {t.description}
              </p>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 md:mt-4 flex items-center justify-center gap-2 w-full bg-wa hover:bg-wa-hover text-white rounded-full py-2 md:py-3 font-sans uppercase tracking-[0.1em] text-[11px] md:text-sm font-semibold transition-colors duration-300"
                aria-label={`Book ${t.title} on WhatsApp`}
              >
                <WhatsAppIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Book Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
