"use client";

import { Sparkles, Phone } from "lucide-react";
import { BUSINESS, PHONE_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function CTASection() {
  return (
    <>
      {/* Mobile-only inline booking card (between Blog and main CTA) */}
      <div className="block md:hidden px-4 py-8">
        <div className="bg-spa-card border border-spa-gold/20 rounded-xl p-8 text-center">
          <Sparkles
            className="mx-auto w-7 h-7 text-spa-gold"
            aria-hidden="true"
          />
          <h3 className="mt-4 font-playfair text-2xl text-spa-cream">
            Ready to unwind?
          </h3>
          <p className="mt-3 text-spa-muted text-sm leading-relaxed">
            Book your session now via WhatsApp and our team will confirm your
            appointment within minutes.
          </p>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 w-full bg-wa hover:bg-wa-hover text-white rounded-full py-3 font-sans uppercase tracking-[0.15em] text-sm font-semibold transition-colors duration-300"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Book on WhatsApp
          </a>
        </div>
      </div>

      {/* Main final CTA */}
      <section
        id="contact"
        className="bg-spa-section bg-[radial-gradient(ellipse_at_center,rgba(201,151,58,0.08)_0%,transparent_70%)] py-24 md:py-32 px-4"
      >
        <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-spa-cream text-center leading-tight">
          Ready to Melt Your Stress Away?
        </h2>
        <p className="mt-6 text-spa-muted text-base text-center max-w-xl mx-auto">
          Book your escape today and experience the pinnacle of luxury wellness
          in Bhopal.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center px-4">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-wa hover:bg-wa-hover text-white rounded-full px-10 py-4 min-w-[220px] font-sans uppercase tracking-[0.15em] text-sm font-semibold transition-colors duration-300 shadow-[0_4px_20px_rgba(34,197,94,0.3)]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Book on WhatsApp
          </a>
          <a
            href={PHONE_URL}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-spa-gold to-spa-goldDim text-black rounded-full px-10 py-4 min-w-[220px] font-sans uppercase tracking-[0.15em] text-sm font-semibold hover:brightness-110 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </section>
    </>
  );
}
