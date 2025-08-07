import { ArrowRight } from "lucide-react";
import { AppPrimaryButton, AppSecondaryButton } from "../shared/app-button";
import { PricingCards } from "@/components/shared/pricing/pricing-cards";

export const Pricing = () => {
  return (
    <section className="font-workSans py-24 px-4">
      <div>
        <div className="max-w-6xl mx-auto text-2xl md:text-4xl text-center text-foreground tracking-wide">
          <h1>Transparent Pricing for Real Results</h1>
          <p className=" text-muted-foreground text-base pt-4">
            From quick launches to fully custom platforms, we offer scalable
            solutions that fit your goals.
          </p>
        </div>
        <PricingCards />
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl text-foreground">
                Worried about the budget? Let&apos;s still talk.
              </h3>
              <p className="text-muted-foreground">
                We understand that every project comes with its own constraints.
                If our pricing doesn&apos;t quite align with your budget — no
                pressure. We&apos;re always open to a conversation and happy to
                explore options that work for both sides.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <AppPrimaryButton
                label="Book a Free Call"
                href="/pricing"
                icon={ArrowRight}
              />
              <AppSecondaryButton label="Drop a Message" href="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
