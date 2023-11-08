"use client";
import CustomSpinner from "@/components/CustomSpinner";
import { useStore } from "@/context/store";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";

const findOrder = async (slug) => {
  return await client.fetch(`*[_type=='order' && _id=='${slug}'][0]`);
};

const Page = () => {
  const { slug } = useParams();
  const [order, setOrder] = useState(null);
  const emptyCart = useStore((state) => state.emptyCart);
  const emptytotalPrice = useStore((state) => state.emptytotalPrice);
  const emptytotalQuantities = useStore((state) => state.emptytotalQuantities);
  useEffect(() => {
    async function order() {
      const order = await findOrder(slug);
      setOrder(order);
    }
    order();
    localStorage.clear();
    emptyCart();
    emptytotalQuantities();
    emptytotalPrice();
  }, []);
  if (order === null) return null;
  return (
    <section className="flex flex-col justify-center items-center mt-12 gap-24">
      {/* First part */}
      <h1 className="text-3xl font-extrabold darkModeFont">Order in Process</h1>

      {/* Second part */}
      <div
        className="flex flex-col lg:flex-row justify-center lg:justify-around 
      items-center w-full mb-10"
      >
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/3 h-[400px] mb-10">
          <Image
            src="/order_confirmed.png"
            alt="Order Passed"
            width={500}
            height={500}
            className="w-full h-full "
          />
        </div>

        <div className="flex flex-col gap-10 w-full lg:w-[30%] px-5">
          <div className="flex flex-row gap-10 justify-between items-center w-full">
            <span className="font-semibold text-lg darkModeFont">Order Id</span>
            <span className="font-medium text-sm darkModeFont">
              {order._id}
            </span>
          </div>
          <div className="flex flex-row gap-10 justify-between items-center w-full">
            <span className="font-semibold text-lg darkModeFont">
              Customer Name
            </span>
            <span className="font-medium text-sm darkModeFont">
              {order.customer_name}
            </span>
          </div>
          <div className="flex flex-row gap-10 justify-between items-center w-full">
            <span className="font-semibold text-lg darkModeFont">Phone</span>
            <span className="font-medium text-sm darkModeFont">
              {order.phone}
            </span>
          </div>
          <div className="flex flex-row gap-10 justify-between items-center w-full">
            <span className="font-semibold text-lg darkModeFont">Method</span>
            <span className="font-medium text-sm darkModeFont">
              {order.method}
            </span>
          </div>
          <div className="flex flex-row gap-10 justify-between items-center w-full">
            <span className="font-semibold text-lg darkModeFont">Address</span>
            <span className="font-medium text-sm darkModeFont">
              {order.address}
            </span>
          </div>
          <div className="flex flex-row gap-10 justify-between items-center w-full">
            <span className="font-semibold text-lg darkModeFont">Total</span>
            <span className="font-medium text-sm darkModeFont">
              {order.total} BDT
            </span>
          </div>
        </div>
      </div>
      {/* Third Part */}
      <h1 className="tracking-wider text-2xl font-medium darkModeFont text-center">
        Below Check Your Food Current Stage
      </h1>
      {/* Fourth Part */}
      <div className="flex flex-col lg:flex-row items-center justify-around w-full mt-5 mb-20">
        <div className="flex flex-col items-center mb-10">
          <div className="w-[100px]">
            <Image
              src="/payment_done.png"
              alt="payment"
              width={200}
              height={200}
              className="w-full"
            />
          </div>

          <span className="mt-10 text-lg font-medium darkModeFont">
            Payment
          </span>
          {order.method === "Pay on Delivery" && (
            <h1 className="bg-green-500 p-1 rounded-lg font-bold darkModeFont">
              Payment on Delivery
            </h1>
          )}
        </div>
        <div className="flex flex-col items-center mb-5">
          <div className="w-[100px]">
            {order.present_stage === "cooking" && <CustomSpinner />}
            <Image
              src="/cooking.png"
              alt="payment"
              width={200}
              height={200}
              className="w-full"
            />
          </div>
          <span className="mt-10 text-lg font-medium darkModeFont">
            Cooking
          </span>
        </div>
        <div className="flex flex-col items-center mb-5">
          <div className="w-[100px]">
            {order.present_stage === "way" && <CustomSpinner />}

            <Image
              src="/on_way.png"
              alt="payment"
              width={200}
              height={200}
              className="w-full"
            />
          </div>
          <span className="mt-10 text-lg font-medium darkModeFont">
            On The Way
          </span>
        </div>

        <div className="flex flex-col items-center mb-5">
          <div className="w-[100px]">
            {order.present_stage === "delivered" && <CustomSpinner />}

            <Image
              src="/delivered.png"
              alt="payment"
              width={200}
              height={200}
              className="w-full"
            />
          </div>
          <span className="mt-10 text-lg font-medium darkModeFont">
            Delivered
          </span>
        </div>
      </div>
    </section>
  );
};

export default Page;
