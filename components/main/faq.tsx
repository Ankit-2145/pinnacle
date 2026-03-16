import { FAQQuestions } from "@/components/sections/home/faq/faq-questions";

export const FAQs = () => {
  return (
    <section className="px-4 py-24 font-workSans">
      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-start lg:justify-between">
          <div className="mb-4 max-w-sm text-left text-2xl tracking-wide text-foreground md:max-w-lg md:text-4xl lg:max-w-xl">
            <h2>FAQs — Not Made Up, We Swear</h2>
            <p className="pt-4 text-base text-muted-foreground">
              Because confusion isn&apos;t part of the package.
            </p>
          </div>
        </div>
        <div className="pt-16 lg:pt-0">
          <FAQQuestions />
        </div>
      </div>
    </section>
  );
};
