import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface appPrimaryButtonProps {
  label: string;
  href: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

interface appSecondaryButtonProps {
  label: string;
  href: string;
}

export const AppPrimaryButton = ({
  label,
  href,
  icon: Icon,
  className,
  iconClassName,
}: appPrimaryButtonProps) => {
  return (
    <Link href={href}>
      <Button
        className={cn(
          "group text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
          className
        )}
      >
        <span className="relative overflow-hidden">
          <div className="absolute origin-bottom transition duration-[1.125s] [transform:translateX(-150%)_skewX(9deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
            {label}
          </div>
          <div className="transition duration-[1.125s] [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(9deg)]">
            {label}
          </div>
        </span>
        <Icon className={cn("h-4 w-4 transition-all", iconClassName)} />
      </Button>
    </Link>
  );
};

export const AppSecondaryButton = ({
  label,
  href,
}: appSecondaryButtonProps) => {
  return (
    <Link href={href}>
      <Button className="group text-blue-500 dark:text-blue-500 bg-transparent hover:bg-transparent border border-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        <div className="relative overflow-hidden">
          <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {label}
          </p>
          <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {label}
          </p>
        </div>
      </Button>
    </Link>
  );
};
