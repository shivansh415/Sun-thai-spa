import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-google",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0704",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sunthaispa.in"),
  title: {
    default: "Sun Thai Spa Bhopal | #1 Luxury Spa & Massage in Aashima Mall",
    template: "%s | Sun Thai Spa Bhopal",
  },
  description:
    "Sun Thai Spa — #1 luxury spa & massage centre in Bhopal at Aashima Mall, Bagmugaliya. Thai massage, deep tissue, aromatherapy, couples massage, hot oil & Moroccan bath. Certified therapists. Open daily 11 AM – 9 PM. Book instantly on WhatsApp.",
  keywords: [
    "spa in bhopal",
    "massage in bhopal",
    "thai massage bhopal",
    "luxury spa bhopal",
    "best spa bhopal",
    "spa near me bhopal",
    "couples massage bhopal",
    "deep tissue massage bhopal",
    "aromatherapy bhopal",
    "hot oil massage bhopal",
    "moroccan bath bhopal",
    "spa aashima mall bhopal",
    "spa bagmugaliya bhopal",
    "body massage bhopal",
    "massage centre bhopal",
    "relaxation spa bhopal",
    "wellness centre bhopal",
    "spa mp nagar bhopal",
    "full body massage bhopal",
    "bhopal spa massage",
  ],
  authors: [{ name: "Sun Thai Spa" }],
  creator: "Sun Thai Spa",
  publisher: "Sun Thai Spa",
  formatDetection: { email: false, address: false, telephone: false },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.sunthaispa.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sunthaispa.in",
    siteName: "Sun Thai Spa Bhopal",
    title: "Sun Thai Spa Bhopal | #1 Luxury Spa & Massage in Aashima Mall",
    description:
      "Experience luxury spa treatments in Bhopal. Thai massage, couples massage, aromatherapy & more at Aashima Mall. Open daily 11 AM – 9 PM.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1920,
        height: 1080,
        alt: "Sun Thai Spa Bhopal — Luxury Massage & Wellness Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun Thai Spa Bhopal | #1 Luxury Spa & Massage",
    description:
      "Luxury spa & massage in Bhopal at Aashima Mall. Thai, Deep Tissue, Couples, Aromatherapy. Open daily.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: replace with the verification token from Google Search Console.
    google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE",
  },
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Bhopal",
    "geo.position": "23.2929;77.4097",
    ICBM: "23.2929, 77.4097",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.jpg"
          fetchPriority="high"
        />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-spa-bg text-spa-cream font-sans">
        {children}
      </body>
    </html>
  );
}
