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
    <a href={href}>
      <Button
        className={cn(
          "group mr-2 mb-2 rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-400/50 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-blue-800/80",
          className,
        )}
      >
        <span className="relative overflow-hidden">
          <div className="absolute origin-bottom [transform:translateX(-150%)_skewX(9deg)] transition duration-[1.125s] group-hover:[transform:translateX(0)_skewX(0deg)]">
            {label}
          </div>
          <div className="[transform:translateX(0%)_skewX(0deg)] transition duration-[1.125s] group-hover:[transform:translateX(150%)_skewX(9deg)]">
            {label}
          </div>
        </span>
        <Icon
          className={cn(
            "h-4 w-4 transition-transform group-hover:translate-x-1",
            iconClassName,
          )}
        />
      </Button>
    </a>
  );
};

export const AppSecondaryButton = ({
  label,
  href,
}: appSecondaryButtonProps) => {
  return (
    <Link href={href}>
      <Button className="group mr-2 mb-2 rounded-lg border border-blue-500 bg-transparent px-5 py-2.5 text-center text-sm font-medium text-blue-500 hover:bg-transparent dark:text-blue-500">
        <div className="relative overflow-hidden">
          <p className="duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
            {label}
          </p>
          <p className="absolute top-7 left-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
            {label}
          </p>
        </div>
      </Button>
    </Link>
  );
};
