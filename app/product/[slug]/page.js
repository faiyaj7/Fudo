import Product from "@/components/Product";
import { client } from "@/sanity/lib/client";

const getProduct = async (slug) => {
  const product = await client.fetch(
    `*[_type=='pizza' && slug.current=='${slug}'][0]`
  );
  return product;
};

export async function generateStaticParams() {
  const product = await client.fetch(`*[_type == 'pizza']`);
  return product.map((item) => ({ slug: item.slug.current }));
}

export async function generateMetadata({ params }, parent) {
  const product = await client.fetch(
    `*[_type=='pizza' && slug.current=='${params.slug}'][0]`
  );

  return {
    title: product.name,
    description: product.description,
  };
}

const Page = async ({ params }) => {
  const singleProduct = await getProduct(params.slug);
  return <Product singleProduct={singleProduct} />;
};

export default Page;
