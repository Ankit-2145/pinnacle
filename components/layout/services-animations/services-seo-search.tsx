import {
  AnimatedSpan,
  SearchPage,
  TypingAnimation,
} from "@/components/ui/search-page";
import { Search } from "lucide-react";

export function SEOCardSearch() {
  return (
    <SearchPage>
      <div
        className="flex items-center gap-2 p-2 dark:bg-gray-50/[.10] rounded-full text-sm text-muted-foreground font-workSans
      shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      "
      >
        <Search className="h-3 w-3" />{" "}
        <TypingAnimation>Your Website</TypingAnimation>
      </div>

      <AnimatedSpan
        delay={1500}
        className="text-muted-foreground text-xs mt-2 mb-1 ml-2 font-workSans"
      >
        <span>
          search results for{" "}
          <span className="text-orange-600 dark:text-orange-400 font-medium">
            Your Website
          </span>
        </span>
      </AnimatedSpan>

      <div className="space-y-2">
        <AnimatedSpan delay={2000} className="text-muted-foreground">
          <div className="flex flex-col items-start space-y-1 p-2 m-0.5 rounded-md font-workSans dark:bg-gray-50/[.10] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <span className="text-[10px]">www.topwebsites.com</span>
            <span className="text-foreground text-sm">
              <span className="font-medium text-orange-600 dark:text-orange-400">
                Your Website
              </span>{" "}
              shows up when people search
            </span>
            <span className="text-xs">
              We made it crawlable, readable, and optimized — Google likes that
              sort of thing.
            </span>
          </div>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-muted-foreground">
          <div className="flex flex-col items-start space-y-1 p-2 m-0.5 rounded-md font-workSans dark:bg-gray-50/[.10] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <span className="text-[10px]">www.organicwebsites.com</span>
            <span className="text-foreground text-sm">
              <span className="font-medium text-orange-600 dark:text-orange-400">
                Your Website
              </span>{" "}
              ranks better and loads faster
            </span>
            <span className="text-xs">
              We fix slow, unseen, underperforming websites with SEO and
              performance that actually deliver.
            </span>
          </div>
        </AnimatedSpan>
      </div>
    </SearchPage>
  );
}
