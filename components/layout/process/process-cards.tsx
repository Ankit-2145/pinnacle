import { ProcessChat } from "./process-chat";
import { CodeBlockWithHeader } from "./process-code";
import { ProcessTiltedScroll } from "./process-design";
import { ProcessLaunch } from "./process-launch";
import { ProcessTimelineWorkflow } from "./process-workflow";

export default function ProcessCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full font-workSans">
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-8"
      >
        <h2 className="text-lg font-medium text-foreground">
          01. You Talk, We Listen (Yes, Really)
        </h2>
        <p className="text-sm text-muted-foreground mt-4">
          You&apos;ve got an idea, a vision, maybe even a napkin sketch — and
          we&apos;re all ears. We don&apos;t just nod and say “cool” — we
          actually understand what you need (even if you explain it in emoji or
          broken tech lingo).
        </p>
        <ProcessChat />
      </div>

      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-8"
      >
        <h2 className="text-lg font-medium text-foreground">
          02. We Plan Like Overthinkers
        </h2>
        <p className="text-sm text-muted-foreground mt-4">
          Wireframes. Timelines. Tech stacks. We map everything out like
          we&apos;re planning a heist — except instead of stealing, we deliver a
          clean, functional, and fast web experience.
        </p>
        <ProcessTiltedScroll />
      </div>

      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 lg:col-span-2 w-full flex flex-col lg:flex-row lg:justify-between group overflow-hidden relative h-full p-8"
      >
        <div>
          <h2 className="text-lg font-medium text-foreground">
            03. Design That Doesn&apos;t Make You Cry
          </h2>
          <p className="lg:max-w-sm text-sm text-muted-foreground mt-4">
            No generic templates. No “Oops, I copied this from 2012.” Just
            clean, modern, user-focused designs your customers will love (and
            your competitors will screenshot).
          </p>
        </div>
        <ProcessTimelineWorkflow />
      </div>

      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-8"
      >
        <h2 className="text-lg font-medium text-foreground">
          04. We Code It Like We Mean It
        </h2>
        <p className="text-sm text-muted-foreground mt-4">
          This is where the dev magic happens. No duct tape solutions or Stack
          Overflow bandaids — we write production-ready code that loads fast,
          scales well, and doesn&apos;t break on launch day.
        </p>
        <CodeBlockWithHeader />
      </div>

      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-8"
      >
        <h2 className="text-lg font-medium text-foreground">
          05. Launch, Celebrate, Support
        </h2>
        <p className="text-sm text-muted-foreground mt-4">
          We don&apos;t just hit “deploy” and disappear into the void. We stick
          around, fix bugs, answer your late-night questions, and make sure
          everything runs smoother. Because, shockingly, support is part of the
          job.
        </p>
        <ProcessLaunch />
      </div>
    </div>
  );
}
