import { projects } from "@/data/projects-data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return <div>Page: {slug}</div>;
};

export default Page;
