"use client";

import { ChevronRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import Iridescence from "@/components/theme/iridescence";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  AppPrimaryButton,
  AppSecondaryButton,
} from "@/components/shared/app-button";

export const Hero = () => {
  const springOptions = { bounce: 0.1 };
  return (
    <>
      <section className="px-4 py-24 font-workSans">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
            {/* Left column: Main heading and subheading */}
            <div className="space-y-4 text-left font-spaceGrotesk">
              <h1 className="text-3xl tracking-wide text-foreground uppercase md:text-5xl">
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
            <div className="flex max-w-sm flex-col gap-4">
              {/* Animated description text */}
              <TextAnimate
                as="p"
                className="text-left text-base text-muted-foreground"
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
        <div className="mx-auto mt-10 h-64 max-w-6xl overflow-hidden rounded-md md:h-96">
          <Iridescence
            color={[1, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
      </section>
    </>
  );
};
