"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface StatItem {
  value: number;
  label: string;
}

export default function StatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const stats: StatItem[] = [
    { value: 20, label: "Projects Delivered" },
    { value: 2, label: "Years of Experience" },
    { value: 1000, label: "Lines of Code Written" },
  ];

  return (
    <div
      className="mt-24 flex flex-col justify-between gap-8 lg:flex-row-reverse"
      ref={ref}
    >
      <div className="lg:self-center">
        <h2 className="text-lg tracking-wide text-foreground uppercase">
          Our Journey So Far
        </h2>
      </div>
      <div className="grid grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex h-20 items-end">
              {(inView || hasAnimated) && (
                <div className="flex items-baseline border-t">
                  <span className="pt-2 text-4xl leading-none tabular-nums">
                    <CountUp
                      start={0}
                      end={stat.value}
                      separator=","
                      duration={2}
                      useEasing={true}
                      preserveValue={true}
                    />
                  </span>
                  <span className="ml-1 text-2xl lg:text-4xl">+</span>
                </div>
              )}
            </div>
            <span className="font-SpaceGrotesk mt-2 text-base">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
