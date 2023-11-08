import React from "react";
import Order from "@/components/Order.jsx";
import { client } from "@/sanity/lib/client";

export async function generateMetadata({ params }, parent) {
  const product = await client.fetch(
    `*[_type=='order'&&_id=='${params.slug}'][0]`
  );

  return {
    title: `${product.method} by ${product.customer_name}`,
  };
}
const Page = () => {
  return <Order />;
};

export default Page;
