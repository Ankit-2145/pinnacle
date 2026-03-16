"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { projects } from "@/data/projects-data";

export const ProjectsCards = () => {
  const springOptions = { bounce: 0.1 };
  return (
    <div className="mx-auto max-w-6xl px-4 pt-16 font-workSans lg:px-0">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <div
            key={project.id}
            className="group cursor-pointer overflow-hidden rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-300 dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]"
          >
            {/* Image Section */}
            <div className="relative h-72 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Category Badge - Top */}
              <div className="absolute top-4 left-4 z-10">
                <Badge
                  variant="secondary"
                  className="border border-border/50 bg-background/90 text-foreground shadow-sm backdrop-blur-sm"
                >
                  {project.category}
                </Badge>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Title and Client */}
              <div className="mb-3">
                <h3 className="mb-1 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

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
                  <Button className="group mt-6 rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-400/50 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-blue-800/80">
                    View Live <ExternalLink className="h-4 w-4" />
                  </Button>
                </Magnetic>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
