"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  CheckCircle,
  Clock,
  Calendar,
  Code,
  Book,
  Code2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";

// Technology image mapping
const getTechIcon = (tech: string) => {
  const iconMap: Record<string, string> = {
    "Next.js": "/next-js.svg",
    TypeScript: "/typescript.svg",
    "Tailwind CSS": "/tailwind-css.svg",
    Prisma: "/prisma.png",
    NextAuth: "/nextauth.png",
    Razorpay: "/razorpay.svg",
    Zustand: "/zustand.svg",
    React: "/react.svg",
    "Node.js": "/nodejs-icon.svg",
    MongoDB: "/mongodb-icon.svg",
    PostgreSQL: "/postgresql.svg",
    HTML: "/html.svg",
    CSS: "/css.svg",
    JavaScript: "/javascript.svg",
    webpack: "/webpack.svg",
    Vite: "vite.js.svg",
    Flowbite: "/flowbite-logo.png",
    "Framer Motion": "framer-motion.svg",
    nextra: "/nextra.svg",
  };

  return iconMap[tech] || null;
};

const workProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack web application with payment integration and admin dashboard Full-stack web application with payment integration and admin dashboard",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
    color: "bg-blue-500",
    textColor: "text-blue-600",
    status: "Completed",
    duration: "3 months",
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://myecommerce.com",
    image: "/aaiic.png",
    metrics: { users: "10K+", revenue: "$50K+" },
  },
  {
    id: 2,
    title: "Mobile Task Manager",
    description:
      "Cross-platform mobile app for team collaboration and project management",
    technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
    color: "bg-green-500",
    textColor: "text-green-600",
    status: "In Progress",
    duration: "2 months",
    githubUrl: "https://github.com/username/taskmanager",
    liveUrl: null,
    image: "/aaiic.png",
    metrics: { downloads: "5K+", rating: "4.8★" },
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "Machine learning powered tool for generating marketing content and copy",
    technologies: ["Python", "OpenAI API", "FastAPI", "React", "Docker"],
    color: "bg-purple-500",
    textColor: "text-purple-600",
    status: "Completed",
    duration: "4 months",
    githubUrl: "https://github.com/username/ai-content",
    liveUrl: "https://aicontentgen.com",
    image: "/aaiic.png",
    metrics: { content: "100K+", accuracy: "95%" },
  },
  {
    id: 4,
    title: "Real Estate Dashboard",
    description:
      "Analytics dashboard for real estate agents with market insights and lead tracking",
    technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js", "Tailwind CSS"],
    color: "bg-orange-500",
    textColor: "text-orange-600",
    status: "Completed",
    duration: "5 months",
    githubUrl: "https://github.com/username/realestate",
    liveUrl: "https://realestatedash.com",
    image: "/aaiic.png",
    metrics: { properties: "50K+", agents: "500+" },
  },
];

export const WorkCard = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-workSans">
      <div className="space-y-12">
        {workProjects.map((project, index) => (
          <div
            key={project.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            <div
              className={`relative group ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  width={500}
                  height={350}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-0"
            >
              <Card className="group relative overflow-hidden transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.technologies.map((tech) => {
                      const techIcon = getTechIcon(tech);
                      return (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs flex items-center gap-1.5 px-2.5 py-1"
                        >
                          {techIcon ? (
                            <Image
                              src={techIcon || "/placeholder.svg"}
                              alt={`${tech} icon`}
                              width={12}
                              height={12}
                              className="w-4 h-4"
                            />
                          ) : (
                            <Code2 className="w-4 h-4" />
                          )}
                          <span>{tech}</span>
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>

                <CardFooter>
                  <div className="flex gap-3 w-full">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 bg-transparent hover:bg-secondary/50 transition-all duration-200"
                      asChild
                    >
                      <Link href="/">
                        View Case Study
                        <Book className="mr-2 h-4 w-4" />
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        className={`flex-1 text-white ${project.color} hover:opacity-90 transition-all duration-200 shadow-lg`}
                        size="lg"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </MagicCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
