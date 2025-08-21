import { Metadata } from "next";
import { Header } from "@/components/shared/headers/header";

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
          heading="Talk to Us"
          subHeading="Clear pricing. No surprises. Just results."
        />
      </div>
    </main>
  );
};

export default Contact;
