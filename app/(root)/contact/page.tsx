import { Metadata } from "next";
import { Header } from "@/components/shared/headers/header";
import { ContactForm } from "@/components/sections/contact/contactForm";

export const metadata: Metadata = {
  title: "Contact Us | Pinnacle Smart Solutions",
  description:
    "Have a project in mind? Get in touch with Pinnacle Smart Solutions for web design, development, and digital consultancy.",
};

const Contact = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 font-workSans">
      <div className="mt-10 h-64 overflow-hidden">
        <Header
          heading="Ready When You Are"
          subHeading="Projects, partnerships, or just a quick chat—we'll respond faster than you expect."
        />
      </div>

      <section className="py-24">
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
