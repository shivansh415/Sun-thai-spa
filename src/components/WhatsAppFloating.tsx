"use client";

import { BUSINESS } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppFloating() {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-8 right-8 z-40 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-wa shadow-[0_4px_20px_rgba(34,197,94,0.5)] hover:scale-110 hover:shadow-[0_6px_25px_rgba(34,197,94,0.6)] transition-all duration-300"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-wa opacity-75 animate-pulse-ring"
      />
      <WhatsAppIcon className="relative w-7 h-7 text-white" />
    </a>
  );
}
