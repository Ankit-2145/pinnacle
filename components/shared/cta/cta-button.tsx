import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const CTAButton = () => {
  return (
    <a href="https://cal.com/pinnacle-smart-solutions-33">
      <button className="group group relative inline-block cursor-pointer rounded-lg bg-slate-800 p-px font-workSans text-xs leading-6 font-semibold text-white no-underline shadow-md shadow-zinc-900 drop-shadow-md">
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative z-10 flex items-center space-x-2 rounded-lg bg-zinc-950 px-4 py-2 ring-1 ring-white/10">
          <span>Book a Free Call</span>
          <ChevronRight className="h-4 w-4 transition-all group-hover:translate-x-1.5" />
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </a>
  );
};
