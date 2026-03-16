import { ProcessPillars } from "@/components/sections/home/process/process-pillars";
import ProcessCards from "@/components/sections/home/process/process-cards";

export const OurProcess = () => {
  return (
    <section className="px-4 py-24 font-workSans">
      <div className="mx-auto flex max-w-6xl flex-col items-start lg:flex-row lg:justify-between">
        <div className="mb-4 max-w-sm text-left text-2xl tracking-wide text-foreground md:max-w-lg md:text-4xl lg:max-w-xl">
          <h2>How We Turn Your Idea Into Something That Works</h2>
          <p className="max-w-sm pt-4 text-base text-muted-foreground lg:max-w-md">
            We listen, Plan, design, build, test, break, fix, and somehow make
            it live.
          </p>
        </div>
        <ProcessPillars />
      </div>
      <div className="mx-auto max-w-6xl pt-16">
        <ProcessCards />
      </div>
    </section>
  );
};
