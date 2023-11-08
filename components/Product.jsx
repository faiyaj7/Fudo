"use client";
import { useStore } from "@/context/store";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";
import HydrationAvoid from "./HydrationAvoid";

const Product = ({ singleProduct }) => {
  const [size, setSize] = useState("small");
  const [index, setIndex] = useState(0);
  const qty = useStore((state) => state.qty);
  const incQty = useStore((state) => state.incQty);
  const decQty = useStore((state) => state.decQty);
  const addToCart = useStore((state) => state.addToCart);

  const handleSizeAndPrice = (value, index) => {
    setSize(value);
    setIndex(index);
  };

  return (
    <HydrationAvoid>
      <div className=" w-full flex flex-col lg:flex-row justify-around items-center mt-20 gap-10">
        {/* Left part */}
        <div className="w-full lg:w-1/2 h-[350px]">
          <Image
            src={urlForImage(singleProduct.image).url()}
            alt={singleProduct.name}
            width={500}
            height={500}
            className=" object-cover rounded-lg h-full w-full"
          />
        </div>
        {/* Right part */}
        <div className="flex flex-col justify-center items-center gap-10 w-2/5">
          <span className="font-extrabold text-4xl tracking-widest text-center darkModeFont">
            {singleProduct.name}
          </span>
          <span className="font-semibold text-2xl tracking-wider text-center darkModeFont">
            {singleProduct.details}
          </span>
          {/* Price */}
          <h1 className="text-lg font-medium flex gap-4">
            <span className="font-bold text-xl darkModeFont">Price</span>
            <span className="darkModeFont">
              {singleProduct.price[index]} TK
            </span>
          </h1>
          <div className="flex flex-row gap-5 justify-start items-center">
            <span className="font-bold text-xl darkModeFont">Size</span>
            <button
              className={`btn darkModeFont ${size === "small" ? "active" : ""}`}
              onClick={() => handleSizeAndPrice("small", 0)}
            >
              Small
            </button>
            <button
              className={`btn darkModeFont ${
                size === "medium" ? "active" : ""
              }`}
              onClick={() => handleSizeAndPrice("medium", 1)}
            >
              Medium
            </button>
            <button
              className={`btn darkModeFont ${size === "large" ? "active" : ""}`}
              onClick={() => handleSizeAndPrice("large", 2)}
            >
              Large
            </button>
          </div>
          {/* Quantity */}
          <div className="flex flex-row gap-5 justify-start items-center">
            <span className="font-bold text-xl darkModeFont">Quantity</span>
            <button className="w-3">
              <Image
                src="/arrowLeft.png"
                alt="arrowLeft"
                width={20}
                height={20}
                onClick={decQty}
                className="w-full "
              />
            </button>
            <span className="darkModeFont">{qty}</span>
            <button className="w-3">
              <Image
                src="/arrowRight.png"
                alt="arrowRight"
                width={20}
                height={20}
                onClick={incQty}
                className="w-full"
              />
            </button>
          </div>

          <button
            className="btn bg-red-500 hover:bg-red-600 text-white font-light darkModeFont"
            onClick={() => {
              qty > 0 &&
                addToCart(singleProduct, singleProduct.price[index], qty, size);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </HydrationAvoid>
  );
};

export default Product;
