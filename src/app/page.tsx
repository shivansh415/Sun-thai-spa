import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

// Lazy-load everything below the fold so the LCP (hero) ships in the
// initial bundle without competing JS work.
const TreatmentsSection = dynamic(
  () => import("@/components/TreatmentsSection")
);
const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"));
const PricingSection = dynamic(() => import("@/components/PricingSection"));
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"));
const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection")
);
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppFloating = dynamic(
  () => import("@/components/WhatsAppFloating")
);
const FixedBottomBar = dynamic(() => import("@/components/FixedBottomBar"));
const SeoContent = dynamic(() => import("@/components/SeoContent"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <AboutSection />
        <TreatmentsSection />
        <BenefitsSection />
        <PricingSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
      <SeoContent />
      <Footer />
      <WhatsAppFloating />
      <FixedBottomBar />
    </>
  );
}
