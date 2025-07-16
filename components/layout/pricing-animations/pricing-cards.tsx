import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PricingCards = () => {
  // Pricing plan data
  const pricingPlans = [
    {
      title: "Starter Website",
      priceINR: "9,999",
      description:
        "Perfect for professionals or local businesses who need a fast, clean online presence.",
      features: [
        "5 responsive pages",
        "Free domain + hosting (1 year)",
        "SSL, email & basic content",
        "Mobile-first design",
        "7-day turnaround",
        "1 revision included",
      ],
    },
    {
      title: "Growth Website",
      priceINR: "19,999",
      description:
        "For service businesses or startups that need content control and brand polish.",
      features: [
        "Up to 10 pages",
        "CMS dashboard (WordPress/Custom)",
        "Full content + basic SEO",
        "Free logo & branding colors",
        "2 revisions + responsive design",
        "Free domain + hosting (1 year)",
        "7-10 day delivery",
      ],
    },
    {
      title: "Custom Solutions",
      priceINR: "49,999",
      description:
        "Built for ambitious founders, funded startups, and enterprises who need tailored platforms — not templates.",
      features: [
        "Full-stack app development",
        "Web apps, dashboards, portals",
        "LMS / SaaS / AI-integrated systems",
        "Admin panels + API integrations",
        "UX/UI + product consultation",
        "Unlimited revisions",
        "Custom quote & timeline",
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center w-full mx-auto pt-16">
      <div className="flex flex-col lg:flex-row justify-between mx-4 flex-wrap max-w-6xl gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="relative overflow-hidden flex-1 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)] "
          >
            <div className="bg-blue-600 w-40 h-40 rounded-full absolute top-0 left-full -z-10 blur-2xl" />
            <div className="p-[30px] flex flex-col h-full gap-6 justify-between font-workSans">
              <div className="flex flex-col gap-6">
                <div className="p-0 flex flex-col gap-4">
                  <div className="font-medium text-xl leading-5">
                    {plan.title}{" "}
                  </div>
                  <p className="opacity-80 font-normal text-sm leading-[22px]">
                    {plan.description}
                  </p>
                  <div className="font-normal text-lg leading-3">
                    <span>Starting at </span>
                    <span className="font-medium text-2xl leading-4">
                      ₹{plan.priceINR}
                    </span>
                  </div>
                </div>
                <hr />

                <div className="flex flex-col h-full justify-between">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-1.5 py-2"
                    >
                      <CheckIcon className="w-[15px] h-[15px]" />
                      <span className="font-normal text-sm leading-[15.4px]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="flex justify-center items-center w-full">
                <Button className="w-full bg-blue-500 text-white">
                  Book a call
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
