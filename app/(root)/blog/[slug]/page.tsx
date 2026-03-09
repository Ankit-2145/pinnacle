import Link from "next/link";
import Image from "next/image";
import { PortableText, type SanityDocument } from "next-sanity";

import { urlFor } from "@/utils/sanityImageUrl";

import { client } from "@/lib/sanity/client";
import { SINGLE_POST_QUERY } from "@/lib/sanity/queries";
import { ArrowRightCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const options = { next: { revalidate: 30 } };

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const blog = await client.fetch<SanityDocument>(
    SINGLE_POST_QUERY,
    await params,
    options,
  );

  return (
    <div className="bg-background font-nunito">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Button
          variant="default"
          className="group text-sm font-medium bg-foreground hover:bg-foreground duration-300 py-2 h-auto cursor-pointer transition-all mb-8"
          asChild
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground transition-colors"
          >
            Return to Blog
            <ArrowRightCircle className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:-rotate-45" />
          </Link>
        </Button>
        <article>
          {blog.mainImage && (
            <div className="mb-12">
              <Image
                src={urlFor(blog.mainImage)?.width(1200).height(600).url()}
                alt={blog.title}
                className="w-full h-80 object-cover rounded-lg"
                width={1200}
                height={600}
                priority
              />
            </div>
          )}

          <header className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              {blog.title}
            </h1>

            {blog.publishedAt && (
              <div className="flex items-center gap-2 font-medium text-muted-foreground border-b pb-4">
                <Calendar className="w-3 h-3 ml-1" />
                <time className="text-sm text-muted-foreground font-medium">
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            )}
          </header>

          <div className="prose prose-lg font-medium max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-blockquote:text-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-p:leading-normal prose-a:text-blue-500 hover:prose-a:text-blue-600">
            {Array.isArray(blog.body) && (
              <PortableText value={blog.body} />
            )}{" "}
          </div>
        </article>

        <footer className="mt-16 pt-8 border-t">
          <Button
            variant="default"
            className="group text-sm font-medium bg-foreground hover:bg-foreground duration-300 py-2 h-auto cursor-pointer transition-all"
            asChild
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-foreground transition-colors"
            >
              Return to Blog
              <ArrowRightCircle className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:-rotate-45" />
            </Link>
          </Button>
        </footer>
      </main>
    </div>
  );
}
