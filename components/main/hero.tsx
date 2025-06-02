"use client";

import { Novatrix } from "uvcanvas";
import { Magnetic } from "@/components/ui/magnetic";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  AppPrimaryButton,
  AppSecondaryButton,
} from "@/components/layout/app-button";
import { Briefcase, ChevronRight } from "lucide-react";

export const Hero = () => {
  const springOptions = { bounce: 0.1 };
  return (
    <>
      <section className="font-workSans py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Left column: Main heading and subheading */}
            <div className="space-y-4 text-left font-spaceGrotesk">
              <h1 className="text-3xl md:text-5xl text-foreground tracking-wide uppercase">
                {/* Animated text for main heading */}
                We&apos;re Building,
                <br /> Cool Experiences
              </h1>
              {/* Subheading with animated text */}
              <TextAnimate
                as="h2"
                className="text-base text-muted-foreground"
                animation="slideLeft"
                by="word"
              >
                AI / WEB / APPS / UI-UX / BRANDING
              </TextAnimate>
            </div>

            {/* Right column: Description and CTA buttons */}
            <div className="flex flex-col gap-4 max-w-sm">
              {/* Animated description text */}
              <TextAnimate
                as="p"
                className="text-base text-left text-muted-foreground"
                animation="slideLeft"
                by="word"
              >
                Crafting awesome websites, killer designs, and powerful
                applications that makes your brand stand out.
              </TextAnimate>
              {/* Call-to-action buttons */}
              <div className="flex flex-wrap justify-start gap-4">
                {/* Primary button */}
                <AppPrimaryButton
                  href="/contact"
                  label="Book a Free Call"
                  icon={ChevronRight}
                  iconClassName="group-hover:translate-x-0.5"
                />

                {/* Secondary button */}
                <Magnetic
                  intensity={0.2}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  <AppSecondaryButton label="View Our Work" href="/work" />
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
        {/* Velustro Gradient Animation */}
        <div className="mt-10 max-w-6xl mx-auto h-64 md:h-96 overflow-hidden rounded-md">
          <Novatrix />
        </div>
      </section>
    </>
  );
};
