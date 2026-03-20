"use client";

import { useTheme } from "next-themes";
import { CheckIcon } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { pricingPlans } from "@/data/pricing-data";

export const PricingCards = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="mx-auto flex w-full items-center justify-center pt-16">
        <div className="flex max-w-6xl flex-col flex-wrap justify-between gap-8 lg:flex-row">
          {pricingPlans.map((plan, index) => (
            <MagicCard
              key={index}
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="flex-1 overflow-hidden rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]"
            >
              <div className="flex h-full flex-col justify-between gap-6 p-[30px] font-workSans">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4 p-0">
                    <div className="text-xl leading-5 font-medium">
                      {plan.title}{" "}
                    </div>
                    <p className="text-sm leading-[22px] font-normal opacity-80">
                      {plan.description}
                    </p>
                    <div className="text-lg leading-3 font-normal">
                      <span>Starting at </span>
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-2xl leading-4 font-medium text-transparent">
                        <span className="text-xs font-medium">INR</span>
                        {plan.priceINR}/-
                      </span>
                    </div>
                  </div>
                  <hr />

                  <div className="flex h-full flex-col justify-between">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-1.5 py-2"
                      >
                        <CheckIcon className="h-[15px] w-[15px]" />
                        <span className="text-sm leading-[15.4px] font-normal">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-4xl text-center">
        * In addition to our packages, we also offer project consultancy and
        custom work at an hourly rate to meet unique business needs.
      </p>
    </>
  );
};
