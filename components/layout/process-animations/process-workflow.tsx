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
  {
    id: 1,
    title: "Wireframe",
  },
  {
    id: 2,
    title: "Design",
  },
  {
    id: 3,
    title: "Code",
  },
  {
    id: 4,
    title: "Test",
  },
  {
    id: 5,
    title: "Launch",
  },
];

export const ProcessTimelineWorkflow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % timelineSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = ((currentStep + 1) / timelineSteps.length) * 100;

  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* Timeline Container */}
      <div className="relative flex-1 flex flex-col justify-center p-4 max-w-4xl mx-auto w-full">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] mt-4"
          )}
        />
        {/* Timeline Line with SVG */}
        <div className="relative">
          <svg
            className="absolute hidden lg:block top-1/2 left-0 w-full h-2 -translate-y-1/2"
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
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="25%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="75%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#10b981" />
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
              fill="url(#progressGradient)"
              rx="2"
              filter="url(#glow)"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </svg>

          {/* Timeline Steps */}
          <div className="relative flex flex-wrap gap-2 lg:gap-0 justify-between items-center pt-2">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center group">
                {/* Step Circle */}
                <motion.div
                  className="relative bg-foreground rounded-lg gap-1.5 px-2.5 py-1.5 flex items-center justify-center z-10 cursor-pointer transition-all duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale:
                      index === currentStep
                        ? 1.1
                        : index <= currentStep
                        ? 1
                        : 0.9,
                    opacity: index <= currentStep ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onClick={() => setCurrentStep(index)}
                >
                  <motion.span
                    initial={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="text-base text-background"
                  >
                    {step.title}
                  </motion.span>

                  {/* Completion checkmark */}
                  {index < currentStep && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 500,
                      }}
                    >
                      ✓
                    </motion.div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
