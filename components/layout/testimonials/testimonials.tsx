import { Card, CardFooter, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

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
                className="relative flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

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
                    {/* Decorative element */}
                    <div className="h-px bg-gradient-to-r from-primary/20 to-transparent flex-1 ml-4" />
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
