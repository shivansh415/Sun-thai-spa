"use client";

import { Star } from "lucide-react";

type Review = {
  initial: "P" | "R" | "A";
  name: string;
  body: string;
};

const REVIEWS: readonly Review[] = [
  {
    initial: "P",
    name: "PRIYA S.",
    body: "Absolutely incredible experience. The therapists are professional and the rooms are so private and peaceful. Best spa in Bhopal!",
  },
  {
    initial: "R",
    name: "RAHUL K.",
    body: "Clean, luxurious, and relaxing. The hot oil massage was heavenly. Highly recommended!",
  },
  {
    initial: "A",
    name: "ANJALI T.",
    body: "Came for the couples massage and we were blown away. Easy to book on WhatsApp, friendly staff. Will come back!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-spa-section py-24 px-4">
      <header className="text-center">
        <p className="text-spa-gold text-xs font-sans uppercase tracking-[0.3em] font-medium">
          Testimonials
        </p>
        <h2 className="mt-4 font-playfair text-4xl sm:text-5xl text-spa-cream">
          Words from our Guests
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 max-w-6xl mx-auto">
        {REVIEWS.map((review) => (
          <article
            key={review.name}
            className="bg-spa-card border border-spa-gold/15 hover:border-spa-gold/30 rounded-xl p-8 transition-all duration-300"
          >
            <div className="flex gap-1 text-spa-gold" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-spa-gold text-spa-gold"
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="mt-4 font-sans italic text-spa-muted text-base leading-relaxed">
              &ldquo;{review.body}&rdquo;
            </p>

            <div className="mt-6 pt-6 border-t border-spa-cream/10 flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-full bg-spa-gold/20 text-spa-gold font-bold flex items-center justify-center"
                aria-hidden="true"
              >
                {review.initial}
              </span>
              <span className="font-sans uppercase tracking-wide text-spa-cream text-sm">
                {review.name}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
