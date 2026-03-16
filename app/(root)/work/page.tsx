import type { Metadata } from "next";
import { Header } from "@/components/shared/headers/header";
import WorkCard from "@/components/sections/work/work-card";

export const metadata: Metadata = {
  title: "Our Work | Pinnacle Smart Solutions",
  description:
    "See how we've helped businesses transform their digital presence with modern websites, apps, and tailored solutions.",
};

const Work = () => {
  return (
    <main className="px-4 font-workSans">
      <div className="mx-auto mt-10 h-64 max-w-6xl overflow-hidden">
        <Header
          heading="Our Work"
          subHeading="Yes, we really made these. No, we didn't just download pretty templates and call it a day"
        />
      </div>

      <section className="py-24">
        <WorkCard />
      </section>
    </main>
  );
};

export default Work;
