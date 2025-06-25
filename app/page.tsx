import { About } from "@/components/main/about";
import { Hero } from "@/components/main/hero";
import { OurProcess } from "@/components/main/our-process";
import OurProjects from "@/components/main/our-projects";
import { WhatWeDoBest } from "@/components/main/what-we-do-best";
// import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Main() {
  return (
    <main>
      {/* <SmoothCursor /> */}
      <Hero />
      <About />
      <WhatWeDoBest />
      <OurProcess />
      <OurProjects />
    </main>
  );
}
