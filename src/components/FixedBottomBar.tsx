"use client";

import { Phone } from "lucide-react";
import { BUSINESS, PHONE_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function FixedBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden h-20 border-t border-spa-gold/20">
      <a
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-wa active:bg-wa-hover flex flex-col items-center justify-center py-3 text-white"
      >
        <span className="flex items-center gap-2 font-sans uppercase tracking-[0.1em] text-xs font-semibold">
          <WhatsAppIcon className="w-4 h-4" />
          Book on WhatsApp
        </span>
        <span className="text-[10px] text-white/70 mt-0.5">
          {BUSINESS.phone}
        </span>
      </a>
      <a
        href={PHONE_URL}
        className="flex-1 bg-gradient-to-r from-spa-gold to-spa-goldDim text-black flex flex-col items-center justify-center py-3 border-l border-spa-gold/30 active:brightness-95"
      >
        <span className="flex items-center gap-2 font-sans uppercase tracking-[0.1em] text-xs font-semibold">
          <Phone className="w-4 h-4" />
          Call Now
        </span>
      </a>
    </div>
  );
}
