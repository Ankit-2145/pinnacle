import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface appPrimaryButtonProps {
  label: string;
  icon: LucideIcon;
}

interface appSecondaryButtonProps {
  label: string;
  href: string;
}

export const AppPrimaryButton = ({
  label,
  icon: Icon,
}: appPrimaryButtonProps) => {
  return (
    <Button className="group text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
      {label}{" "}
      <Icon className="h-4 w-4 group-hover:translate-x-1.5 transition-all" />
    </Button>
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
