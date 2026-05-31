"use client";

import { MapPin, Clock } from "lucide-react";
import { BUSINESS, COPYRIGHT } from "@/lib/constants";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { Logo } from "@/components/Navbar";

export default function Footer() {
  return (
    <footer className="bg-spa-deepest border-t border-spa-gold/15">
      {/* Top block */}
      <div className="py-16 px-8 md:px-16 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10 max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Logo size="footer" />
          <p className="mt-3 text-spa-muted text-sm font-sans">
            {BUSINESS.tagline}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-start gap-3">
            <MapPin
              className="w-4 h-4 text-spa-gold mt-1 flex-shrink-0"
              aria-hidden="true"
            />
            <address className="not-italic text-spa-muted text-sm font-sans leading-loose">
              Grand Aashima Mall, Shop 115, First Floor,
              <br />
              Bagmugaliya, Bhopal, Madhya Pradesh 462043
            </address>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <Clock
              className="w-4 h-4 text-spa-gold flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-spa-muted text-sm font-sans">
              {BUSINESS.hours}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-spa-cream/10 px-8 md:px-16 py-8 flex flex-col md:flex-row items-center md:justify-between gap-4 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4">
          <span className="text-spa-muted text-xs uppercase tracking-[0.2em] font-sans">
            Follow Us
          </span>
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Sun Thai Spa on Instagram"
            className="p-2 rounded-full border border-spa-cream/20 hover:border-spa-gold text-spa-cream/70 hover:text-spa-gold transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-right">
          <span className="text-spa-muted text-xs font-sans">{COPYRIGHT}</span>
          <span className="flex gap-4">
            <a
              href="#privacy"
              className="text-spa-gold text-xs font-sans underline hover:text-spa-goldLight transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-spa-gold text-xs font-sans underline hover:text-spa-goldLight transition-colors"
            >
              Terms of Service
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
