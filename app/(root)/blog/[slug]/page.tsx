import Link from "next/link";
import Image from "next/image";
import { PortableText, type SanityDocument } from "next-sanity";

import { urlFor } from "@/utils/sanityImageUrl";

import { client } from "@/lib/sanity/client";
import { SINGLE_POST_QUERY } from "@/lib/sanity/queries";
import { ArrowRightCircle } from "lucide-react";

const options = { next: { revalidate: 30 } };

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const blog = await client.fetch<SanityDocument>(
    SINGLE_POST_QUERY,
    await params,
    options
  );

  return (
    <div className="bg-background font-nunito">
      <main className="max-w-4xl mx-auto px-6 py-12">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {blog.publishedAt && (
              <div className="flex items-center gap-2 text-gray-500">
                <time className="text-sm text-gray-500 font-medium">
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-normal prose-a:text-blue-500 hover:prose-a:text-blue-600">
            {Array.isArray(blog.body) && <PortableText value={blog.body} />}
          </div>
        </article>

        <footer className="mt-16 pt-8 border-t">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground transition-colors"
          >
            Return to Blogs
            <ArrowRightCircle className="w-4 h-4" />
          </Link>
        </footer>
      </main>
    </div>
  );
}
