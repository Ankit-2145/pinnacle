import { Hero } from "@/components/main/hero";
import { About } from "@/components/main/about";
import { OurServices } from "@/components/main/our-services";
import { OurProcess } from "@/components/main/our-process";
import { OurProjects } from "@/components/main/our-projects";
import { Pricing } from "@/components/main/pricing";
import { FAQs } from "@/components/main/faq";
import { Testimonials } from "@/components/main/testimonials";
import { CTA } from "@/components/main/cta";

export default function Main() {
  return (
    <main>
      <Hero />
      <About />
      <OurServices />
      <OurProcess />
      <OurProjects />
      <Pricing />
      <FAQs />
      <Testimonials />
      <CTA />
    </main>
  );
}
