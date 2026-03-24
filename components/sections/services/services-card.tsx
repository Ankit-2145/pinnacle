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
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    id: (index + 1).toString(),
    title: service.title,
    description: service.description,
    offerings: service.offerings,
    color: service.color,
    lightColor: service.lightColor,
    textColor: service.textColor,
  }));

  return (
    <div className="mx-auto w-full max-w-6xl px-4 font-workSans sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.id}
            className="group relative flex flex-col overflow-hidden border-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-300 hover:translate-y-[-4px] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]"
          >
            <CardHeader className="pt-6 pb-3">
              <div className="mb-3 flex items-start gap-3">
                <CardTitle
                  className={`text-xl ${service.textColor} font-spaceGrotesk font-medium`}
                >
                  {service.title}
                </CardTitle>
              </div>
              <CardDescription className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow pb-3">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">
                  What we offer:
                </h4>
                <ul className="space-y-1.5">
                  {service.offerings.map((offering, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div
                        className={`h-1.5 w-1.5 rounded-full ${service.color} mt-1.5 flex-shrink-0`}
                      />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
