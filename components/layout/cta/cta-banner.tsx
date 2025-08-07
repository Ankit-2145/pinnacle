"use client";
import Silk from "@/components/silk";
import { ChevronRight } from "lucide-react";
import { AppPrimaryButton } from "../app-button";
import Iridescence from "@/components/iridescence";

export const CTABanner = () => {
  return (
    <div className="max-w-6xl mx-auto overflow-hidden rounded-lg relative border font-workSans h-fit">
      {/* Text Content */}
      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Iridescence
            color={[1, 1, 1]}
            mouseReact={true}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        <div className="z-10 backdrop-blur-sm bg-white/10 rounded-lg p-8 h-full w-full">
          <h3 className="text-2xl font-medium text-black">
            Still figuring out how to build your website?
          </h3>
          <p className="text-base max-w-xl mt-2 text-black">
            You could spend another weekend Googling tutorials — or partner with
            a team that gets it right the first time. We&apos;re here to make it
            easier, faster, and better.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
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
