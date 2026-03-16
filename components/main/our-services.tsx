import { ArrowRight } from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { ServicesBentoGrid } from "@/components/sections/home/services/services-bento-grid";
import {
  AppPrimaryButton,
  AppSecondaryButton,
} from "@/components/shared/app-button";

export const OurServices = () => {
  return (
    <section className="px-4 py-24 font-workSans">
      <div>
        <div className="mx-auto max-w-6xl text-center text-2xl tracking-wide text-foreground md:text-4xl">
          Crafting Digital{" "}
          <PointerHighlight
            rectangleClassName="border-2 border-brand-blue dark:border-blue-500"
            containerClassName="inline-block"
          >
            <span className="relative z-10">Excellence</span>
          </PointerHighlight>
          <p className="pt-4 text-base text-muted-foreground">
            From sleek websites to robust applications <br />— here&apos;s how
            we help brands grow.
          </p>
        </div>
      </div>
      <div className="pt-16">
        <ServicesBentoGrid />
      </div>
      {/* Call to Action */}
      <div className="mt-20 text-center">
        <div className="mx-auto max-w-xl space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl text-foreground md:text-2xl">
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
