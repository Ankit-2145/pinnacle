import { Metadata } from "next";
import { Header } from "@/components/shared/headers/header";

export const metadata: Metadata = {
  title: "About Us | Pinnacle Smart Solutions",
  description:
    "From the hills of Himachal to the top of Google — discover our story, mission, and the passionate team behind Pinnacle Smart Solutions.",
};

const About = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 font-workSans">
      <div className="mt-10 h-64 overflow-hidden">
        <Header
          heading="Our Story"
          subHeading="Delivering impossible deadlines and unbelievable results since 2019"
        />
      </div>
      <p className="text-base text-foreground leading-relaxed mt-6 font-nunito">
        Pinnacle Smart Solutions is more than just a web development agency —
        it&apos;s the result of real experiences, learning, and the passion to
        build meaningful digital solutions. As a team of developers who started
        our journey as students and problem-solvers, we understand how powerful
        the right technology can be when it&apos;s used with purpose.
      </p>
      <p className="text-base text-foreground leading-relaxed mt-4">
        Our journey began with a simple idea: use our skills to help others
        bring their ideas to life. What started as small projects and
        collaborative learning experiences soon evolved into a dedicated
        initiative to help businesses, startups, and creators establish a strong
        digital presence.
      </p>
      <p className="text-base text-foreground leading-relaxed mt-4">
        With time, that initiative became Pinnacle Smart Solutions — a place
        where creativity, technology, and strategy come together to build modern
        digital experiences.
      </p>
      <p className="text-base text-foreground leading-relaxed mt-4">
        At Pinnacle, we believe that every business deserves a strong and
        reliable online presence. From designing intuitive user interfaces to
        developing scalable web applications, we focus on creating solutions
        that are not only visually appealing but also practical, efficient, and
        growth-oriented.
      </p>
      <p className="text-base text-foreground leading-relaxed mt-4">
        Our team brings together technical expertise and a deep understanding of
        real-world challenges faced by businesses in the digital era. Whether
        it&apos;s building a website from scratch, redesigning an existing
        platform, or developing a custom web application, we approach every
        project with the same commitment: delivering value and building
        long-term relationships with our clients.
      </p>
      <p className="text-base text-foreground leading-relaxed mt-4">
        Beyond development, we see ourselves as partners in our clients&apos;
        digital journeys. We take pride in understanding their goals, solving
        problems creatively, and building products that help them grow and
        succeed.
      </p>
      <p className="text-base text-foreground leading-relaxed mt-4">
        At Pinnacle Smart Solutions, our mission is simple: to empower
        businesses with smart digital solutions and help them thrive in an
        increasingly connected world. We are constantly learning, evolving, and
        pushing the boundaries of what we can build — because technology never
        stops moving forward, and neither do we.
      </p>
    </main>
  );
};

export default About;
