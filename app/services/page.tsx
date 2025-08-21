import type { Metadata } from "next";
import { Header } from "@/components/shared/headers/header";
import { ServicesCard } from "@/components/sections/services/services-card";

export const metadata: Metadata = {
  title: "Our Services | Pinnacle Smart Solutions",
  description:
    "Explore our web design, development, branding, and digital consultancy services crafted to help your business grow online.",
};

const Services = () => {
  return (
    <main className="max-w-6xl mx-auto font-workSans">
      <div className="mt-10 h-64 overflow-hidden">
        <Header
          heading="Our Services"
          subHeading="Design, development, CMS, eCommerce, and everything in between — all in one place, no magic tricks involved."
        />
      </div>

      <section className="py-24">
        <ServicesCard />
      </section>
    </main>
  );
};

export default Services;
