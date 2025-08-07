import { TestimonialsCards } from "@/components/sections/home/testimonials/testimonials-cards";

export const Testimonials = () => {
  return (
    <section className="font-workSans py-24 px-4">
      <div>
        <div className="max-w-6xl mx-auto text-2xl md:text-4xl text-center text-foreground tracking-wide">
          <h1>Turns Out, People Like Working With Us</h1>
          <p className="text-muted-foreground text-base pt-4">
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
