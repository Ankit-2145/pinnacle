import { ServicesCard } from "@/components/sections/services/services-card";
import { Header } from "@/components/shared/headers/header";

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
