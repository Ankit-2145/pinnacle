"use client";

import { ArrowRight } from "lucide-react";
import {
  AppPrimaryButton,
  AppSecondaryButton,
} from "@/components/layout/app-button";
import { PricingCards } from "@/components/layout/pricing/pricing-cards";
import { cn } from "@/lib/utils";

const Pricing = () => {
  return (
    <main>
      <div className="mt-10 max-w-6xl mx-auto h-64 overflow-hidden font-workSans">
        <div className="relative flex h-[16rem] w-full items-center justify-center">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-background"></div>
          <div className="flex justify-center items-center h-full z-10">
            <div className="text-center">
              <h1 className="text-5xl font-medium bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text tracking-wide">
                Our Pricing
              </h1>
              <p className="max-w-md text-muted-foreground text-base pt-4">
                Clear pricing. No surprises. Just results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="font-workSans py-24 px-4">
        <div>
          <div className="max-w-6xl mx-auto text-2xl md:text-4xl text-center text-foreground tracking-wide">
            <h1>Transparent Pricing for Real Results</h1>
            <p className=" text-muted-foreground text-base pt-4">
              From quick launches to fully custom platforms, we offer scalable
              solutions that fit your goals
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
                  We understand that every project comes with its own
                  constraints. If our pricing doesn&apos;t quite align with your
                  budget — no pressure. We&apos;re always open to a conversation
                  and happy to explore options that work for both sides.
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
    </main>
  );
};

export default Pricing;
