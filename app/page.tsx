import { BenefitsSection } from '@/components/layout/sections/benefits';
import CasesSection from "@/components/layout/sections/cases";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Editec Sistemas Desenvolvimento",
  description: "Editec Sistemas Desenvolvimento de Software",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <CasesSection />
      <TestimonialSection />
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
