import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HydrationAvoid from "./HydrationAvoid";

const fetchProduct = async () => {
  const products = await client.fetch(`*[_type=='pizza']`);
  return products;
};

const Products = async () => {
  const allProducts = await fetchProduct();

  return (
    <HydrationAvoid>
      {allProducts.map((item) => (
        <div className=" flex flex-col gap-4 cursor-pointer" key={item._id}>
          <Link
            href={`/product/${item.slug.current}`}
            className="hover:scale-105 duration-300 w-full"
          >
            <div className="w-full h-[200px]">
              <Image
                src={urlForImage(item.image).url()}
                alt={item.name}
                width={220}
                height={220}
                className="w-full h-full object-cover rounded-xl "
              />
            </div>

            <h1 className="text-sm font-semibold darkModeFont mt-4">
              {item.name}
            </h1>
            <span className="text-xs font-light darkModeFont">
              {item.price[0]} TK
            </span>
          </Link>
        </div>
      ))}
    </HydrationAvoid>
  );
};

export default Products;
