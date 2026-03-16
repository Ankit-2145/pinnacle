import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export function ProcessLaunch() {
  return (
    <Terminal className="mt-4 bg-[#24292e]">
      <TypingAnimation className="my-2 text-white">
        &gt; npm run build
      </TypingAnimation>

      <AnimatedSpan delay={1000} className="text-green-500">
        <span>✔ Building your production-ready app...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Generating static pages and assets</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Deploying to production environment</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Custom domain configured: www.yourbrand.com</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>🎉 Launch successful. Everything is live!</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>📈 Real-time monitoring and uptime checks activated</span>
      </AnimatedSpan>

      <TypingAnimation delay={4000} className="my-2 text-white">
        Don&apos;t worry, We&apos;re here for post-launch support. Always.
      </TypingAnimation>
    </Terminal>
  );
}
