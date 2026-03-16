"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TimelineStep {
  id: number;
  title: string;
}

const timelineSteps: TimelineStep[] = [
  { id: 1, title: "Wireframe" },
  { id: 2, title: "Design" },
  { id: 3, title: "Code" },
  { id: 4, title: "Test" },
  { id: 5, title: "Launch" },
];

export const ProcessTimelineWorkflow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const updateStep = () => {
      setCurrentStep((prev) => (prev + 1) % timelineSteps.length);
      timer = setTimeout(updateStep, 1500);
    };

    timer = setTimeout(updateStep, 1500);

    return () => clearTimeout(timer);
  }, []);

  const progress = ((currentStep + 1) / timelineSteps.length) * 100;

  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="relative mx-auto mt-4 flex w-full max-w-4xl flex-1 flex-col justify-center p-4 lg:mt-0">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          )}
        />

        {/* Timeline with SVG */}
        <div className="relative">
          <svg
            className="absolute top-1/2 left-0 hidden h-2 w-full -translate-y-1/2 lg:block"
            viewBox="0 0 100 8"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="25%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="75%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background line */}
            <rect x="0" y="2" width="100" height="4" fill="#f1f5f9" rx="2" />

            {/* Animated progress line */}
            <motion.rect
              x="0"
              y="2"
              height="4"
              rx="2"
              fill="url(#progressGradient)"
              filter="url(#glow)"
              initial={false}
              animate={{ width: progress }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </svg>

          {/* Timeline Steps */}
          <div className="relative flex flex-wrap items-center justify-between gap-2 pt-2 lg:gap-0">
            {timelineSteps.map((step, index) => {
              const isActive = index === currentStep;
              const isComplete = index < currentStep;

              return (
                <div key={step.id} className="group flex flex-col items-center">
                  <motion.div
                    className={cn(
                      "relative z-10 flex cursor-pointer items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 will-change-transform",
                      isActive || isComplete ? "bg-foreground" : "bg-none",
                    )}
                    initial={false}
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      opacity: isActive || isComplete ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setCurrentStep(index)}
                  >
                    <span className="text-sm text-background">
                      {step.title}
                    </span>

                    {isComplete && (
                      <motion.div
                        className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-xs text-white"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.3,
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        ✓
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
