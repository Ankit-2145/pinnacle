import { TiltedScroll } from "@/components/ui/tilted-scroll";

export const ProcessTiltedScroll = () => {
  const customItems = [
    { id: "1", text: "Detailed Discovery Calls" },
    { id: "2", text: "Strategic Wireframing" },
    { id: "3", text: "Tech Stack Optimization" },
    { id: "4", text: "Timeline & Milestone Mapping" },
    { id: "5", text: "Risk-Free Launch Plans" },
  ];

  return (
    <div className="space-y-8">
      <TiltedScroll items={customItems} className="mt-8" />
    </div>
  );
};
