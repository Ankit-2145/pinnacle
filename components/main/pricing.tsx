import { PricingCards } from "../layout/pricing/pricing-cards";

export const Pricing = () => {
  return (
    <section className="font-workSans py-24">
      <div>
        <div className="max-w-6xl mx-auto text-2xl md:text-4xl text-center text-foreground tracking-wide">
          <h1>Transparent Pricing for Real Results</h1>
          <p className=" text-muted-foreground text-base pt-4">
            From quick launches to fully custom platforms, we offer scalable
            solutions that fit your goals
          </p>
        </div>
        <PricingCards />
      </div>
    </section>
  );
};
