import { TestimonialsCards } from "@/components/sections/home/testimonials/testimonials-cards";

export const Testimonials = () => {
  return (
    <section className="px-4 py-24 font-workSans">
      <div>
        <div className="mx-auto max-w-6xl text-center text-2xl tracking-wide text-foreground md:text-4xl">
          <h1>Turns Out, People Like Working With Us</h1>
          <p className="pt-4 text-base text-muted-foreground">
            Because delivering great work isn&apos;t optional — it&apos;s
            expected.
          </p>
        </div>
        <TestimonialsCards testimonials={TestimonialsData} />
      </div>
    </section>
  );
};

const TestimonialsData = [
  {
    name: "Research Goal",
    text: `Working with Pinnacle Smart Solutions was an outstanding experience. The team was highly professional, well-organized, and delivered the project on time with great attention to detail. Their structured approach and commitment to quality made the entire process smooth and rewarding. I would gladly recommend them for any tech or creative project.`,
  },
  {
    name: "Shoolini University",
    text: `Pinnacle completely redefined how our conference is experienced online. The new site is fast, modern, and incredibly user-friendly. From speaker lineups to ticketing, everything just works—and looks amazing doing it. We've never received this much positive feedback from attendees before. Working with Pinnacle was the best decision we made this year.`,
  },
];
