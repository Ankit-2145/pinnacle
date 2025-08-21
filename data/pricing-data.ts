interface PricingPlans {
  title: string;
  priceINR: string;
  description: string;
  features: string[];
}

export const pricingPlans: PricingPlans[] = [
  {
    title: "Starter Website",
    priceINR: "9,999",
    description:
      "Perfect for professionals or local businesses who need a fast, clean online presence.",
    features: [
      "5 professionally crafted web pages",
      "Free domain + hosting (1 year)",
      "SSL, email & basic content writing",
      "Responsive design",
      "6-7 day delivery",
      "Unlimited revisions (within 14 days of delivery)",
    ],
  },
  {
    title: "Growth Website",
    priceINR: "19,999",
    description:
      "For service businesses or startups that need content control and brand polish.",
    features: [
      "Up to 10 professionally crafted web pages",
      "CMS dashboard (WordPress/Custom)",
      "Full content writing + basic SEO",
      "Free logo & branding colors",
      "Responsive design",
      "Unlimited revisions",
      "10-15 day delivery",
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
