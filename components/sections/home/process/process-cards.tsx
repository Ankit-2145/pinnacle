import { ProcessChat } from "./process-chat";
import { CodeBlockWithHeader } from "./process-code";
import { ProcessTiltedScroll } from "./process-design";
import { ProcessLaunch } from "./process-launch";
import { ProcessTimelineWorkflow } from "./process-workflow";

export default function ProcessCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 font-workSans lg:grid-cols-2">
      <div className="group relative col-span-1 flex h-full w-full flex-col overflow-hidden rounded-xl p-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
        <h2 className="text-xl font-medium text-foreground">
          01. You Talk, We Listen (Yes, Really)
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          You&apos;ve got an idea, a vision, maybe even a napkin sketch — and
          we&apos;re all ears. We don&apos;t just nod and say “cool” — we
          actually understand what you need (even if you explain it in emoji or
          broken tech lingo).
        </p>
        <ProcessChat />
      </div>

      <div className="group relative col-span-1 flex h-full w-full flex-col overflow-hidden rounded-xl p-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
        <h2 className="text-xl font-medium text-foreground">
          02. We Plan Like Overthinkers
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Wireframes. Timelines. Tech stacks. We map everything out like
          we&apos;re planning a heist — except instead of stealing, we deliver a
          clean, functional, and fast web experience.
        </p>
        <ProcessTiltedScroll />
      </div>

      <div className="group relative col-span-1 flex h-full w-full flex-col overflow-hidden rounded-xl p-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:col-span-2 lg:flex-row lg:justify-between dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
        <div>
          <h2 className="text-xl font-medium text-foreground">
            03. Design That Doesn&apos;t Make You Cry
          </h2>
          <p className="mt-4 text-sm text-muted-foreground lg:max-w-sm">
            No generic templates. No “Oops, I copied this from 2012.” Just
            clean, modern, user-focused designs your customers will love (and
            your competitors will screenshot).
          </p>
        </div>
        <ProcessTimelineWorkflow />
      </div>

      <div className="group group relative col-span-1 flex h-full w-full flex-col overflow-hidden rounded-xl p-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
        <div className="relative z-10 max-w-xs">
          <h2 className="text-xl font-medium text-foreground">
            04. We Code It Like We Mean It
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            This is where the dev magic happens. No duct tape solutions or Stack
            Overflow bandaids — we write production-ready code that loads fast,
            scales well, and doesn&apos;t break on launch day.
          </p>
        </div>
        <div className="absolute top-4 left-8/12 hidden transition-all duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-4 lg:block">
          <CodeBlockWithHeader />
        </div>
      </div>

      <div className="group group relative col-span-1 flex h-full w-full flex-col overflow-hidden rounded-xl p-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
        <div className="absolute top-4 left-8/12 hidden transition-all duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-4 lg:block">
          <ProcessLaunch />
        </div>
        <div className="relative z-10 max-w-xs">
          <h2 className="text-xl font-medium text-foreground">
            05. Launch, Celebrate, Support
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            We don&apos;t just hit “deploy” and disappear into the void. We
            stick around, fix bugs, answer your late-night questions, and make
            sure everything runs smoother. Because, shockingly, support is part
            of the job.
          </p>
        </div>
      </div>
    </div>
  );
}
