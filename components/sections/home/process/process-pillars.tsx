"use client";

import { motion } from "framer-motion";

export const ProcessPillars = () => {
  const pillars = [
    { label: "Idea", height: "h-12", delay: 0 },
    { label: "Design", height: "h-24", delay: 0.2 },
    { label: "Build", height: "h-48", delay: 0.4 },
    { label: "Test", height: "h-96", delay: 0.6 },
    { label: "Launch", height: "h-full", delay: 0.8 },
  ];

  return (
    <div className="pointer-events-none mx-auto my-16 flex items-end gap-2 lg:mx-0 lg:my-0">
      {pillars.map((pillar, index) => (
        <div
          key={pillar.label}
          className="flex h-30 w-14 flex-col rounded-lg border border-gray-950/[.1] md:w-16 lg:w-20 dark:border-gray-50/[.1]"
        >
          {index < 4 && (
            <div className="h-full rounded-lg bg-[url(/dashed-light.svg)] dark:bg-[url(/dashed-dark.svg)]"></div>
          )}
          <motion.div
            className={`bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 ${
              index < 4 ? "rounded-b-lg" : "h-full rounded-lg"
            } ${pillar.height}`}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: pillar.delay,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{ transformOrigin: "bottom" }}
          >
            <motion.p
              className={`text-center font-spaceGrotesk text-sm font-medium text-white ${
                index === 0
                  ? "pt-2"
                  : index === 1
                    ? "pt-4"
                    : index === 2
                      ? "pt-6"
                      : index === 3
                        ? "pt-8"
                        : "pt-10"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: pillar.delay + 0.4,
              }}
            >
              {pillar.label}
            </motion.p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
