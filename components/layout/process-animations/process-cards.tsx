import { ProcessChat } from "./process-chat";
import { TimelineWorkflow } from "./process-workflow";

export default function ProcessCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full font-workSans">
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-8"
      >
        <div>
          <h2 className="text-lg font-medium text-foreground">
            You Talk, We Listen (Yes, Really)
          </h2>
          <p className="text-sm text-muted-foreground mt-4">
            You&apos;ve got an idea, a vision, maybe even a napkin sketch — and
            we&apos;re all ears. We don&apos;t just nod and say “cool” — we
            actually understand what you need (even if you explain it in emoji
            or broken tech lingo).
          </p>
        </div>
        <div>
          <ProcessChat />
        </div>
      </div>

      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-8"
      >
        <h2 className="text-lg font-medium text-foreground">
          We Plan Like Overthinkers
        </h2>
        <p className="text-sm text-muted-foreground mt-4">
          Wireframes. Timelines. Tech stacks. We map everything out like
          we&apos;re planning a heist — except instead of stealing, we deliver a
          clean, functional, and fast web experience.
        </p>
        <TimelineWorkflow />
      </div>
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 lg:col-span-2 w-full flex flex-col group overflow-hidden relative h-full p-8"
      >
        <h2 className="text-lg font-medium text-foreground">
          Design That Doesn’t Make You Cry
        </h2>
        <p className="text-sm text-muted-foreground max-w-xs mt-4">
          No generic templates. No “Oops, I copied this from 2012.” Just clean,
          modern, user-focused designs your customers will love (and your
          competitors will screenshot).
        </p>
      </div>
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-8"
      >
        <h2 className="text-lg font-medium text-foreground">
          We Code It Like We Mean It
        </h2>
        <p className="max-w-xs text-sm text-muted-foreground mt-4">
          This is where the dev magic happens. No duct tape solutions or Stack
          Overflow bandaids — we write production-ready code that loads fast,
          scales well, and doesn’t break on launch day. (We test... a lot.)
        </p>
      </div>
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-8"
      >
        <h2 className="text-lg font-medium text-foreground">
          Launch, Celebrate, Support
        </h2>
        <p className="text-sm text-muted-foreground max-w-xs mt-4">
          We launch with confidence, pop the virtual champagne, and stick around
          for post-launch support. Because ghosting after delivery? Not our
          style.
        </p>
      </div>
    </div>
  );
}
