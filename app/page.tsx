import { About } from "@/components/main/about";
import { Hero } from "@/components/main/hero";
import { WhatWeDoBest } from "@/components/main/what-we-do-best";

export default function Main() {
  return (
    <main>
      <Hero />
      <About />
      <WhatWeDoBest />
    </main>
  );
}
