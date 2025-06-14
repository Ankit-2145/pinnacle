/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Nextjs",
    img: "./next-js.svg",
  },
  {
    name: "Nodejs",
    img: "./nodejs-icon.svg",
  },
  {
    name: "React",
    img: "./react.svg",
  },
  {
    name: "JavaScript",
    img: "./javascript.svg",
  },
  {
    name: "TailwindCSS",
    img: "./tailwind-css.svg",
  },
  {
    name: "TypeScript",
    img: "./typescript.svg",
  },
  {
    name: "PostgreSQL",
    img: "./postgresql.svg",
  },
  {
    name: "HTML",
    img: "./html.svg",
  },
  {
    name: "MongoDB",
    img: "./mongodb-icon.svg",
  },
  {
    name: "Prisma",
    img: "./prisma.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const WebCard = ({
  technologyLogo,
  technologyName,
}: {
  technologyLogo: string;
  technologyName: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img width="20" height="20" alt={technologyName} src={technologyLogo} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-muted-foreground dark:text-white font-workSans">
            {technologyName}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeVertical() {
  return (
    <div className="relative flex h-[210px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <WebCard
            key={review.name}
            technologyName={review.name}
            technologyLogo={review.img}
          />
        ))}
      </Marquee>

      <Marquee reverse vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <WebCard
            key={review.name}
            technologyName={review.name}
            technologyLogo={review.img}
          />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
