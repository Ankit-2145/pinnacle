import { ProjectsCards } from "@/components/layout/projects-animations/projects-cards";

const OurProjects = () => {
  return (
    <section className="font-workSans py-24">
      <div>
        <div className="max-w-6xl mx-auto text-2xl md:text-4xl text-center text-foreground tracking-wide">
          <h1>What We&apos;ve Actually Shipped</h1>
          <p className="text-muted-foreground text-base pt-4">
            Not just Design mockups — real users, real deadlines, real launches.
          </p>
        </div>
        <ProjectsCards />
      </div>
    </section>
  );
};

export default OurProjects;
