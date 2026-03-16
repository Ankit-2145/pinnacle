import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import {
  AppPrimaryButton,
  AppSecondaryButton,
} from "@/components/shared/app-button";
import { Header } from "@/components/shared/headers/header";
import { PricingCards } from "@/components/shared/pricing/pricing-cards";

export const metadata: Metadata = {
  title: "Our Pricing | Pinnacle Smart Solutions",
  description:
    "Transparent pricing for websites, apps, and digital solutions. Choose from Starter, Growth, or Custom Solutions to match your business needs.",
};

const Pricing = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 font-workSans">
      <div className="mt-10 h-64 overflow-hidden">
        <Header
          heading="Our Pricing"
          subHeading="Clear pricing. No surprises. Just results."
        />
      </div>

      <section className="py-24">
        <div>
          <div className="text-center text-2xl tracking-wide text-foreground md:text-4xl">
            <h1>Transparent Pricing for Real Results</h1>
            <p className="pt-4 text-base text-muted-foreground">
              From quick launches to fully custom platforms, we offer scalable
              solutions that fit your goals
            </p>
          </div>
          <PricingCards />
          <div className="mt-20 text-center">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl text-foreground md:text-2xl">
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
                  href="/contact"
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
