"use client";

import { useEffect } from "react";
import { X, Phone } from "lucide-react";
import { BUSINESS, PHONE_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PRICING", href: "#pricing" },
  { label: "BRANCHES", href: "#branches" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
] as const;

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll while drawer is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
      />

      {/* Drawer */}
      <aside
        className="fixed top-0 right-0 z-50 h-full w-[75%] max-w-sm bg-[rgba(15,10,5,0.98)] backdrop-blur-xl animate-slide-in-right shadow-[0_0_60px_rgba(0,0,0,0.6)] md:hidden flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="flex justify-end p-5">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            aria-expanded={isOpen}
            className="border border-spa-gold p-2 text-spa-gold hover:bg-spa-gold/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block py-5 px-8 font-sans uppercase tracking-[0.2em] text-sm text-spa-cream border-b border-spa-cream/10 hover:text-spa-gold transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 space-y-3 border-t border-spa-cream/10">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-wa hover:bg-wa-hover text-white rounded-full py-4 font-sans uppercase tracking-[0.15em] text-sm font-semibold transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Book on WhatsApp
          </a>
          <a
            href={PHONE_URL}
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-gold-gradient text-black rounded-full py-4 font-sans uppercase tracking-[0.15em] text-sm font-semibold hover:brightness-110 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </aside>
    </>
  );
}
