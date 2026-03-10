import { Metadata } from "next";

import { Header } from "@/components/shared/headers/header";

export const metadata: Metadata = {
  title: "Blog | Pinnacle Smart Solutions",
  description:
    "Insights, tips, and resources on web design, development, and digital growth — curated by Pinnacle Smart Solutions.",
};

const Blog = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 font-workSans">
      <div className="mt-10 h-64 overflow-hidden">
        <Header heading="Blogs" subHeading="We write our real experinces" />
      </div>

      <section className="my-16 mx-auto font-nunito">
        <p className="text-base text-muted-foreground leading-relaxed text-center">
          No Blogs yet! We are working on it and will be live soon. Stay tuned
          for updates and insights from our team of experts. We are excited to
          share our knowledge and experiences with you through our upcoming blog
          posts.
        </p>
      </section>
    </main>
  );
};

export default Blog;
