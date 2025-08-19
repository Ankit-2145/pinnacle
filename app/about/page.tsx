import { Header } from "@/components/shared/headers/header";

const About = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 font-workSans">
      <div className="mt-10 h-64 overflow-hidden">
        <Header
          heading="Our Story"
          subHeading="Delivering impossible deadlines and unbelievable results since 2019"
        />
      </div>
    </main>
  );
};

export default About;
