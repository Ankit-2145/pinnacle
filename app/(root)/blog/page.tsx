import { Metadata } from "next";

import { Header } from "@/components/shared/headers/header";

export const metadata: Metadata = {
  title: "Blog | Pinnacle Smart Solutions",
  description:
    "Insights, tips, and resources on web design, development, and digital growth — curated by Pinnacle Smart Solutions.",
};

const Blog = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 font-workSans">
      <div className="mt-10 h-64 overflow-hidden">
        <Header heading="Blogs" subHeading="We write our real experinces" />
      </div>

      <section className="mx-auto my-16 font-nunito">
        <p className="text-center text-base leading-relaxed font-semibold text-muted-foreground italic">
          No Blogs yet!
        </p>
      </section>
    </main>
  );
};

export default Blog;
