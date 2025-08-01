"use client";
import { ChevronRight } from "lucide-react";
import { AppPrimaryButton, AppSecondaryButton } from "../app-button";

export const CTABanner = () => {
  return (
    <div
      className="max-w-7xl mx-auto overflow-hidden rounded-lg relative border py-8 font-workSans shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]"
    >
      {/* Text Content */}
      <div className="relative h-full flex flex-col items-start justify-start px-4">
        <h3 className="text-2xl font-medium text-foreground">
          Still figuring out how to build your website?
        </h3>
        <p className="text-base max-w-xl mt-2 text-muted-foreground">
          You could spend another weekend Googling tutorials — or partner with a
          team that gets it right the first time. We&apos;re here to make it
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
  );
};
