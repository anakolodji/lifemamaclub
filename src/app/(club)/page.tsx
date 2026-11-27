import { ViewTransition } from "react";

import { ApplicationSection } from "@/components/club/home/application-section";
import { AudienceSection } from "@/components/club/home/audience-section";
import { ConnectionsSection } from "@/components/club/home/connections-section";
import { ContinuitySection } from "@/components/club/home/continuity-section";
import { ExperiencesSection } from "@/components/club/home/experiences-section";
import { FaqSection } from "@/components/club/home/faq-section";
import { FoundingClassSection } from "@/components/club/home/founding-class-section";
import { HeroSection } from "@/components/club/home/hero-section";
import { HomeFooter } from "@/components/club/home/home-footer";
import { IncludedSection } from "@/components/club/home/included-section";
import { ManifestoSection } from "@/components/club/home/manifesto-section";
import { Testimonials } from "@/components/club/home/testimonials";
import { WellnessGallery } from "@/components/club/home/wellness-gallery";
import { ROUTE_TRANSITION } from "@/components/club/route-transition";

export default function HomePage() {
  return (
    <ViewTransition {...ROUTE_TRANSITION}>
      <div className="bg-areia-100 font-sans text-cafe-900">
        <HeroSection />
        <ManifestoSection />
        <ConnectionsSection />
        <IncludedSection />
        <ExperiencesSection />
        <WellnessGallery />
        <Testimonials />
        <ContinuitySection />
        <AudienceSection />
        <ApplicationSection />
        <FoundingClassSection />
        <FaqSection />
        <HomeFooter />
      </div>
    </ViewTransition>
  );
}
