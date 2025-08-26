import type React from "react";
import {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  Settings,
  Search,
  Code,
  FileText,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Service, servicesData } from "@/data/services-data";

export const ServicesCard = () => {
  // Map icons to services
  const iconMap: { [key: string]: React.ReactNode } = {
    "Website Development": <Globe className="h-4 w-4" />,
    "Web App Development": <Code className="h-4 w-4" />,
    "Mobile App Development": <Smartphone className="h-4 w-4" />,
    "UI/UX Design": <Palette className="h-4 w-4" />,
    "E-commerce Development": <ShoppingCart className="h-4 w-4" />,
    "Website Maintenance & Support": <Settings className="h-4 w-4" />,
    "SEO & Performance Optimization": <Search className="h-4 w-4" />,
    "Custom Software Solutions": <Code className="h-4 w-4" />,
    "CMS Development": <FileText className="h-4 w-4" />,
    "Branding & Creative Direction": <Sparkles className="h-4 w-4" />,
  };

  // Convert to our service structure
  const services: Service[] = servicesData.map((service, index) => ({
    id: index + 1,
    title: service.title,
    description: service.description,
    offerings: service.offerings,
    cta: service.cta,
    icon: iconMap[service.title],
    color: service.color,
    lightColor: service.lightColor,
    textColor: service.textColor,
  }));

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-workSans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className="group relative overflow-hidden transition-all duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)] hover:translate-y-[-4px] border-0 flex flex-col"
          >
            <CardHeader className="pb-3 pt-6">
              <div className="flex items-start gap-3 mb-3">
                <CardTitle
                  className={`text-xl ${service.textColor} font-spaceGrotesk font-medium`}
                >
                  {service.title}
                </CardTitle>
              </div>
              <CardDescription className="text-sm text-muted-foreground mt-2">
                {service.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-3 flex-grow">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-foreground">
                  What we offer:
                </h4>
                <ul className="space-y-1.5">
                  {service.offerings.map((offering, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${service.color} mt-1.5 flex-shrink-0`}
                      />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter className="pt-3 border-t mt-auto">
              <Button
                className={`w-full text-white ${service.color} hover:${service.color} transition-all`}
              >
                {service.cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
