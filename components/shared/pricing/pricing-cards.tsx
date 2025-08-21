"use client";

import { useTheme } from "next-themes";
import { CheckIcon } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { pricingPlans } from "@/data/pricing-data";

export const PricingCards = () => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center w-full mx-auto pt-16">
      <div className="flex flex-col lg:flex-row justify-between flex-wrap max-w-6xl gap-8">
        {pricingPlans.map((plan, index) => (
          <MagicCard
            key={index}
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="overflow-hidden flex-1 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]"
          >
            <div className="p-[30px] flex flex-col h-full gap-6 justify-between font-workSans">
              <div className="flex flex-col gap-6">
                <div className="p-0 flex flex-col gap-4">
                  <div className="font-medium text-xl leading-5 ">
                    {plan.title}{" "}
                  </div>
                  <p className="opacity-80 font-normal text-sm leading-[22px]">
                    {plan.description}
                  </p>
                  <div className="font-normal text-lg leading-3">
                    <span>Starting at </span>
                    <span className="font-medium text-2xl leading-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
                      ₹{plan.priceINR}/-
                    </span>
                  </div>
                </div>
                <hr />

                <div className="flex flex-col h-full justify-between">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-1.5 py-2"
                    >
                      <CheckIcon className="w-[15px] h-[15px]" />
                      <span className="font-normal text-sm leading-[15.4px]">
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
  );
};
