import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Service, servicesData } from "@/data/services-data";
import { ArrowRight } from "lucide-react";

export const ServicesCard = () => {
  const services: Service[] = servicesData.map((service, index) => ({
    id: index + 1,
    title: service.title,
    description: service.description,
    offerings: service.offerings,
    cta: service.cta,
    color: service.color,
    lightColor: service.lightColor,
    textColor: service.textColor,
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="space-y-20">
        {services.map((service) => (
          <div
            key={service.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          >
            {/* Main Service Card */}
            <Card className="shadow-md bg-background">
              <CardHeader className="pb-6">
                <CardTitle
                  className={`text-3xl font-bold tracking-tight ${service.textColor} leading-tight`}
                >
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-slate-600 leading-relaxed mt-4 font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="pt-0">
                <Button
                  size="lg"
                  className={`w-full ${service.color} hover:opacity-90 transition-all duration-200 font-semibold text-base py-6 group shadow-lg`}
                >
                  {service.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardFooter>
            </Card>

            {/* Offerings Card */}
            <Card className="shadow-md bg-background">
              <CardContent className="p-4">
                <h4 className="font-bold text-lg text-slate-900 mb-6 tracking-tight">
                  What we offer
                </h4>
                <ul className="space-y-4">
                  {service.offerings.map((offering, index) => (
                    <li
                      key={index}
                      className="text-slate-700 flex items-start gap-3 text-base leading-relaxed"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${service.color.replace(
                          "bg-",
                          "bg-"
                        )}`}
                      />
                      <span className="font-medium">{offering}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
