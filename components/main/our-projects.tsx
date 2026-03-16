import { ProjectsCards } from "@/components/sections/home/projects/projects-cards";

export const OurProjects = () => {
  return (
    <section className="px-4 py-24 font-workSans">
      <div>
        <div className="mx-auto max-w-6xl text-center text-2xl tracking-wide text-foreground md:text-4xl">
          <h1>What We&apos;ve Actually Shipped</h1>
          <p className="pt-4 text-base text-muted-foreground">
            Not just Design mockups — real users, real deadlines, real launches.
          </p>
        </div>
        <ProjectsCards />
      </div>
    </section>
  );
};
