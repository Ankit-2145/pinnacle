import WorkCard from "@/components/sections/work/work-card";
import { Header } from "@/components/shared/headers/header";

const Work = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 font-workSans">
      <div className="mt-10 h-64 overflow-hidden">
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
