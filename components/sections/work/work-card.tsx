"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Book } from "lucide-react";
import { projects } from "@/data/projects-data";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/ui/magnetic";

export const WorkCard = () => {
  const springOptions = { bounce: 0.1 };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-workSans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-xl overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative h-72 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Category Badge - Top */}
              <div className="absolute top-4 left-4 z-10">
                <Badge
                  variant="secondary"
                  className="bg-background/90 text-foreground backdrop-blur-sm border border-border/50 shadow-sm"
                >
                  {project.category}
                </Badge>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Title and Client */}
              <div className="mb-3">
                <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex justify-between mt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Magnetic
                    intensity={0.2}
                    springOptions={springOptions}
                    actionArea="global"
                    range={200}
                  >
                    <Button className="group text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                      View Live <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Magnetic>
                </a>
                <Link href={`work/${project.slug}`}>
                  <Magnetic
                    intensity={0.2}
                    springOptions={springOptions}
                    actionArea="global"
                    range={200}
                  >
                    <Button className="group text-blue-500 dark:text-blue-500 bg-transparent hover:bg-transparent border border-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                      View Case Study <Book className="w-4 h-4" />
                    </Button>
                  </Magnetic>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
