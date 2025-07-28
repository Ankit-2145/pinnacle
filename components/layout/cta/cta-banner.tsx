import { ChevronRight } from "lucide-react";
import { AppPrimaryButton, AppSecondaryButton } from "../app-button";

export const CTABanner = () => {
  return (
    <div className="flex justify-center items-center border rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)] p-6">
      <div className="text-center">
        <h3 className="text-2xl">
          You could spend another weekend Googling,
          <br /> how to build a website.
        </h3>
        <p className="text-base mt-2 text-muted-foreground">
          —or just let us do it right the first time.
        </p>

        <div className="mt-6">
          <AppPrimaryButton
            label="Let's build Together"
            href="/"
            icon={ChevronRight}
          />
          <AppSecondaryButton label="Reach Out to Us" href="/contact" />
        </div>
      </div>
    </div>
  );
};
