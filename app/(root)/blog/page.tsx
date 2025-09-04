import { Header } from "@/components/shared/headers/header";
import { Metadata } from "next";

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
    </main>
  );
};

export default Blog;
