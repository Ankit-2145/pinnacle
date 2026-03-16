"use client";

import { ChevronRight } from "lucide-react";
import { AppPrimaryButton } from "../app-button";
import Iridescence from "@/components/theme/iridescence";

export const CTABanner = () => {
  return (
    <div className="relative mx-auto h-fit max-w-6xl overflow-hidden rounded-lg border font-workSans">
      {/* Text Content */}
      <div className="relative flex h-full flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Iridescence
            color={[1, 1, 1]}
            mouseReact={true}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        <div className="z-10 h-full w-full rounded-lg bg-white/10 p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-medium text-black">
            Still figuring out how to build your website?
          </h3>
          <p className="mt-2 max-w-xl text-base text-black">
            You could spend another weekend Googling tutorials — or partner with
            a team that gets it right the first time. We&apos;re here to make it
            easier, faster, and better.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
            <AppPrimaryButton
              label="Ready to get yours?"
              href="/"
              icon={ChevronRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
