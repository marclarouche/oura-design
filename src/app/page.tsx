import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { WorkSection } from "@/components/WorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MarqueeSection />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <PhilosophySection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}

