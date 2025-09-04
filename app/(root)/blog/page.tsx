import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRightCircle } from "lucide-react";
import { type SanityDocument } from "next-sanity";

import { urlFor } from "@/utils/sanityImageUrl";

import { client } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";

import { Header } from "@/components/shared/headers/header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const options = { next: { revalidate: 30 } };

export const metadata: Metadata = {
  title: "Blog | Pinnacle Smart Solutions",
  description:
    "Insights, tips, and resources on web design, development, and digital growth — curated by Pinnacle Smart Solutions.",
};

const Blog = async () => {
  const blogs = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="max-w-6xl mx-auto px-4 font-workSans">
      <div className="mt-10 h-64 overflow-hidden">
        <Header heading="Blogs" subHeading="We write our real experinces" />
      </div>

      <section className="my-16 font-nunito">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Card
              key={blog._id}
              className="group overflow-hidden transition-all duration-300 bg-background py-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)] rounded-xl border-none"
            >
              <Link href={`/blog/${blog.slug.current}`} className="block">
                {/* Card Header with Image */}
                {blog.mainImage && (
                  <CardHeader className="p-0">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <Image
                        src={urlFor(blog.mainImage)
                          .width(600)
                          .height(375)
                          .quality(80)
                          .auto("format")
                          .url()}
                        alt={blog.title}
                        width={600}
                        height={375}
                        className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                )}

                {/* Card Content */}
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <h2 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                      {blog.title}
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {blog.description}
                    </p>
                  </div>
                </CardContent>

                {/* Card Footer */}
                <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <time className="text-xs text-muted-foreground font-medium">
                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs font-medium group-hover:text-primary transition-colors duration-200 p-0 h-auto"
                  >
                    <span>Read More</span>
                    <ArrowRightCircle className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
