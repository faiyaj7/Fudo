"use client";
import HydrationAvoid from "@/components/HydrationAvoid";
import { useStore } from "@/context/store";
import getStripe from "@/lib/getStripe";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

const Page = () => {
  const router = useRouter();
  const cart = useStore((state) => state.cart);
  const totalPrice = useStore((state) => state.totalPrice);
  const totalQuantities = useStore((state) => state.totalQuantities);
  const toggleCartItems = useStore((state) => state.toggleCartItems);
  const removeItemsFromCart = useStore((state) => state.removeItemsFromCart);

  const handlePaymentByStripe = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();
    // console.log("This is the data coming from backend of stripe", data);
    // toast.loading("Redirecting...");
    console.log(data);
    stripe.redirectToCheckout({ sessionId: data.session.id });
  };
  const handlePaymentOnDelivery = async () => {
    const order = {
      _type: "order",
      customer_name: "faiyaj",
      method: "Pay on Delivery",
      phone: 123124,
      address: "eneyat",
      total: totalPrice,
      present_stage: "cooking",
    };
    const res = await client.create(order);
    router.push(`/order/${res._id}`);
  };

  return (
    <HydrationAvoid>
      <section className="flex flex-col lg:flex-row justify-around gap-10 mt-24">
        {cart.length > 0 ? (
          <>
            {/* Left Part */}
            <div className="overflow-x-auto">
              <table className="table-auto border-separate border-spacing-12  ">
                <thead>
                  <tr className="darkModeFont">
                    <th>Pizza</th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>{""}</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id} className="darkModeFont">
                      <td>
                        <div className="w-[80px] h-[80px]">
                          <Image
                            src={urlForImage(item.image).url()}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-lg object-cover w-full h-full"
                          />
                        </div>
                      </td>
                      <td className="w-20">{item.name}</td>
                      <td>{item.size}</td>
                      <td>{item.exactPrice}</td>
                      <td>{item.quantity}</td>
                      <td>{item.exactPrice * item.quantity}</td>

                      <td>
                        <div className="w-3">
                          <Image
                            src="/arrowLeft.png"
                            alt="arrowLeft"
                            width={20}
                            height={20}
                            className="w-full cursor-pointer"
                            onClick={() =>
                              toggleCartItems(item._id, item.size, "dec")
                            }
                          />
                        </div>
                      </td>
                      <td>
                        <div className="w-3">
                          <RxCross1
                            onClick={() =>
                              removeItemsFromCart(item._id, item.size)
                            }
                            className="w-full cursor-pointer"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="w-3">
                          <Image
                            src="/arrowRight.png"
                            alt="arrowRight"
                            width={20}
                            height={20}
                            onClick={() =>
                              toggleCartItems(item._id, item.size, "inc")
                            }
                            className="w-full cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Right Part */}
            <div
              className="w-4/5  lg:w-[25%] h-1/4 shadow-2xl dark:shadow-slate-700
             flex flex-col items-center justify-center gap-10 rounded-lg p-5 mx-auto"
            >
              <span className="text-4xl font-extrabold darkModeFont">Cart</span>
              <div className="w-full flex justify-between items-center gap-10">
                <span className="text-lg darkModeFont">Price</span>
                <h1 className="darkModeFont">{totalPrice}</h1>
              </div>
              <div className="w-full flex justify-between items-center gap-10">
                <span className="text-lg darkModeFont">Quantities</span>
                <span className="darkModeFont">{totalQuantities}</span>
              </div>

              <button
                className="btn darkModeFont"
                onClick={handlePaymentOnDelivery}
              >
                Pay on Delivery
              </button>
              <button
                className="btn darkModeFont"
                onClick={handlePaymentByStripe}
              >
                Pay by Stripe
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-screen p-2 ">
            <Image
              src="/empty cart.png"
              alt="empty cart"
              width={120}
              height={120}
            />
            <h2 className="font-bold text-2xl mt-10 mb-2 text-center darkModeFont">
              Your Cart is Empty
            </h2>
            <p className="font-light text-sm text-center darkModeFont">
              Looks like you have not added anytime to your cart. Go ahead &
              explore our pizzas
            </p>
          </div>
        )}

        {/* Right Part */}
      </section>
    </HydrationAvoid>
  );
};

export default Page;
