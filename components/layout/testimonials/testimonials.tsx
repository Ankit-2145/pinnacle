import { Card, CardFooter, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export interface Testimonial {
  name: string;
  text: string;
}

interface TestimonialsCardsProps {
  testimonials: Testimonial[];
}

export function TestimonialsCards({ testimonials }: TestimonialsCardsProps) {
  return (
    <section className="w-full pt-16 font-workSans">
      <div className="px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <Card
                key={i}
                className="bg-transparent relative flex flex-col h-full duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]"
              >
                <CardContent className="p-4">
                  <div className="relative">
                    <p className="text-muted-foreground leading-relaxed text-base relative z-10">
                      &quot;{t.text}&quot;
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="mt-auto">
                  <div className="flex items-center gap-4 w-full">
                    <Avatar className="h-12 w-12 border-2 border-primary/10">
                      <AvatarFallback className="bg-brand-blue/10 text-brand-blue font-semibold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-base text-brand-blue">
                        {t.name}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
