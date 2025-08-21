interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <div>Page: {params.slug}</div>;
};

export default Page;
