"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import MobileMenu from "@/components/MobileMenu";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PRICING", href: "#pricing" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
] as const;

function Logo({ size = "navbar" }: { size?: "navbar" | "footer" }) {
  const isFooter = size === "footer";
  return (
    <a
      href="#home"
      aria-label="Sun Thai Spa — home"
      className="flex flex-col leading-none select-none"
    >
      <span
        className={`font-playfair font-bold text-gold-gradient ${
          isFooter ? "text-2xl" : "text-xl"
        }`}
      >
        SUN&nbsp;THAI
      </span>
      <span
        className={`font-playfair tracking-[0.3em] text-gold-gradient ${
          isFooter ? "text-sm mt-1" : "text-xs mt-0.5"
        }`}
      >
        SPA
      </span>
    </a>
  );
}

export { Logo };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isMenuOpen
            ? "bg-[rgba(10,7,4,0.95)] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        {/* Desktop */}
        <div className="hidden md:flex h-[72px] items-center justify-between px-8 lg:px-12 max-w-[1600px] mx-auto">
          <Logo />

          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans uppercase tracking-[0.2em] text-xs text-spa-cream/70 hover:text-spa-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="text-spa-cream/70 hover:text-spa-gold transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-spa-gold text-spa-gold rounded-full px-5 py-2 text-xs font-sans uppercase tracking-[0.15em] hover:bg-spa-gold hover:text-black transition-all duration-300"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Book Now
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden h-16 flex items-center justify-between px-5">
          <Logo />
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="border border-spa-gold p-2 text-spa-gold hover:bg-spa-gold/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
