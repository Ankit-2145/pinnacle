import { ArrowRight } from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { ServicesBentoGrid } from "@/components/layout/services/services-bento-grid";
import {
  AppPrimaryButton,
  AppSecondaryButton,
} from "@/components/layout/app-button";

export const OurServices = () => {
  return (
    <section className="font-workSans py-24">
      <div>
        <div className="max-w-6xl mx-auto text-2xl md:text-4xl text-center text-foreground tracking-wide">
          Crafting Digital{" "}
          <PointerHighlight
            rectangleClassName="border-2 border-brand-blue dark:border-blue-500"
            containerClassName="inline-block"
          >
            <span className="relative z-10">Excellence</span>
          </PointerHighlight>
          <p className="text-muted-foreground text-base pt-4">
            From sleek websites to robust applications <br />— here&apos;s how
            we help brands grow.
          </p>
        </div>
      </div>
      <div className="pt-16 mx-4">
        <ServicesBentoGrid />
      </div>
      {/* Call to Action */}
      <div className="mt-20 text-center mx-4">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl text-foreground">
              Believe it or not, that wasn&apos;t everything.
            </h3>
            <p className="text-muted-foreground">
              We do more than just what you saw above — explore the full lineup
              of services we offer.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <AppPrimaryButton
              label="Explore All Services"
              href="/services"
              icon={ArrowRight}
            />
            <AppSecondaryButton label="Reach out to us" href="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
};
