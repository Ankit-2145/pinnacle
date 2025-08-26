interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return <div>Page: {slug}</div>;
};

export default Page;
