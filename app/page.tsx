import { About } from "@/components/main/about";
import FAQs from "@/components/main/faq";
import { Hero } from "@/components/main/hero";
import { OurProcess } from "@/components/main/our-process";
import OurProjects from "@/components/main/our-projects";
import { OurServices } from "@/components/main/our-services";
// import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Main() {
  return (
    <main>
      {/* <SmoothCursor /> */}
      <Hero />
      <About />
      <OurServices />
      <OurProcess />
      <OurProjects />
      <FAQs />
    </main>
  );
}
