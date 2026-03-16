import { ArrowRight } from "lucide-react";
import StatsCounter from "@/components/sections/home/about/count-up";
import { AppPrimaryButton } from "@/components/shared/app-button";

export const About = () => {
  return (
    <section className="px-4 py-24 font-workSans">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div>
            <h2 className="text-lg tracking-wide text-foreground uppercase">
              We don&apos;t just design.
              <br />
              we deconstruct problems.
            </h2>
            <AppPrimaryButton
              href="/about"
              label="Inside Pinnacle"
              icon={ArrowRight}
              className="mt-6"
              iconClassName="group-hover:translate-x-0.5"
            />
          </div>
          <div className="max-w-2xl">
            <p className="text-left text-base text-muted-foreground">
              <span className="text-foreground">
                At Pinnacle, we craft digital experiences—not just websites.
              </span>{" "}
              We dive deep, analyze complexities, and craft digital experiences
              that make an impact. Whether it&apos;s AI-driven solutions,
              intuitive UI/UX, or high-performance web apps, we blend creativity
              with technology to build brands that stand out, our goal is simple
              <span className="text-foreground">
                —make brands unforgettable.
              </span>
            </p>
          </div>
        </div>

        <StatsCounter />
      </div>
    </section>
  );
};
