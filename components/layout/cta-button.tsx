import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const CTAButton = () => {
  return (
    <Link href="/contact">
      <button className="group bg-slate-800 no-underline group cursor-pointer relative shadow-lg drop-shadow-lg shadow-zinc-900 rounded-md p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-md bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
          <span>Book a Free Call</span>
          <ChevronRight className="h-4 w-4 group-hover:translate-x-1.5 transition-all" />
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </Link>
  );
};
