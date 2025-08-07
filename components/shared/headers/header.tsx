import { cn } from "@/lib/utils";

interface headerProps {
  heading: string;
  subHeading: string;
}

export const Header = ({ heading, subHeading }: headerProps) => {
  return (
    <div className="relative flex h-[16rem] w-full items-center justify-center">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-background"></div>
      <div className="flex justify-center items-center h-full z-10">
        <div className="text-center">
          <h1 className="text-5xl font-medium text-foreground tracking-wide">
            {heading}
          </h1>
          <p className="max-w-lg text-muted-foreground text-base pt-4">
            {subHeading}
          </p>
        </div>
      </div>
    </div>
  );
};

// bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text
