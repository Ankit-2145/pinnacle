import { About } from "@/components/main/about";
import { Hero } from "@/components/main/hero";
import { OurProcess } from "@/components/main/our-process";
import { WhatWeDoBest } from "@/components/main/what-we-do-best";

export default function Main() {
  return (
    <main>
      <Hero />
      <About />
      <WhatWeDoBest />
      <OurProcess />
    </main>
  );
}
