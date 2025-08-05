import { FAQQuestions } from "../layout/faq/faq-questions";

export const FAQs = () => {
  return (
    <section className="font-workSans py-24">
      <div className="max-w-6xl mx-4 2xl:mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className=" flex flex-col lg:justify-between items-start">
          <div className="max-w-sm md:max-w-lg lg:max-w-xl text-2xl md:text-4xl text-left text-foreground tracking-wide mb-4">
            <h2>FAQs — Not Made Up, We Swear</h2>
            <p className="text-muted-foreground text-base pt-4">
              Because confusion isn&apos;t part of the package
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
