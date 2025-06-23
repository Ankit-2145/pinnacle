import { ProcessPillars } from "@/components/layout/process-animations/process-pillars";
import ProcessCards from "@/components/layout/process-animations/process-cards";

export const OurProcess = () => {
  return (
    <section className="font-workSans py-24">
      <div className="max-w-7xl mx-4 2xl:mx-auto flex flex-col lg:flex-row lg:justify-between items-start">
        <div className="max-w-sm md:max-w-lg lg:max-w-xl text-2xl md:text-4xl text-left text-foreground tracking-wide mb-4">
          <h2>How We Turn Your Idea Into Something That Works</h2>
          <p className="max-w-sm text-muted-foreground text-base pt-4">
            We listen, design, build, test, break, fix, and somehow make it
            live.
          </p>
        </div>
        <ProcessPillars />
      </div>
      <div className="pt-16 max-w-7xl mx-4 lg:mx-auto">
        <div>
          <ProcessCards />
        </div>
      </div>
    </section>
  );
};
