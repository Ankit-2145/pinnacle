import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { ServicesBentoGrid } from "@/components/layout/services-bento-grid";

export const WhatWeDoBest = () => {
  return (
    <section className="font-workSans py-24">
      <div className="">
        <div className="max-w-6xl mx-auto text-2xl md:text-4xl text-center text-foreground tracking-wide">
          Crafting Digital{" "}
          <PointerHighlight
            rectangleClassName="border-2 border-brand-blue dark:border-blue-500"
            containerClassName="inline-block"
          >
            <span className="relative z-10">Excellence</span>
          </PointerHighlight>
          <p className="text-muted-foreground text-base pt-2">
            From sleek websites to robust applications <br />— here&apos;s how
            we help brands grow.
          </p>
        </div>
      </div>
      <div className="py-16 mx-4">
        <ServicesBentoGrid />
      </div>
    </section>
  );
};
