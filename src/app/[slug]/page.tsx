import Home from "../page";

const Page = ({ params }: { params: { slug: string } }) => {
  return <Home slug={params.slug} />;
};

export default Page;
