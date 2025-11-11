import { BenefitsSection } from "@/components/benefits";
import { CallToAction } from "@/components/cta";
import { FAQSection } from "@/components/faq";
import { FeaturesSection } from "@/components/features";
import { HeroSection } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PricingSection } from "@/components/pricing";
import { TestimonialsSection } from "@/components/testimonials";
import { TrustedSection } from "@/components/trusted";
import { WorkflowSection } from "@/components/workflow";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,97,255,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(129,211,248,0.15),transparent_65%)]" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-24 sm:px-6 lg:px-8">
        <Navbar />
        <main className="flex flex-1 flex-col gap-20">
          <HeroSection />
          <TrustedSection />
          <FeaturesSection />
          <WorkflowSection />
          <BenefitsSection />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
          <CallToAction />
        </main>
      </div>
    </div>
  );
}
