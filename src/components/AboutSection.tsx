"use client";

import { Wind } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-spa-bg py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Wind className="mx-auto w-8 h-8 text-spa-gold" aria-hidden="true" />

        <h2 className="mt-6 font-playfair text-4xl md:text-5xl lg:text-6xl text-spa-cream leading-tight">
          The Art of Relaxation
        </h2>

        <p className="mt-8 text-spa-muted text-base leading-loose">
          At Sun Thai Spa, we believe that true luxury is silence, privacy, and
          touch. Our treatments are designed not just to relieve muscle tension,
          but to quiet the mind. Using deep, moody atmospheres, warm amber oils,
          and the expert hands of certified therapists, we transport you far
          from the bustling city of Bhopal.
        </p>

        <p className="mt-6 text-sm text-spa-muted/80">
          Conveniently located in{" "}
          <span className="text-spa-gold underline">Aashima Mall, Bhopal</span>{" "}
          — at the heart of the city. Easily accessible from{" "}
          <span className="text-spa-gold underline">Bagmugaliya</span>,{" "}
          <span className="text-spa-gold underline">MP Nagar</span> and across
          Bhopal.
        </p>
      </div>

      <div
        className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-spa-gold/30 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
