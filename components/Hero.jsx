import Image from "next/image";
import React from "react";
import { AiOutlinePhone } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full px-8">
      {/* Left Side */}
      <div className="lg:w-1/3 flex flex-col lg:justify-start text-center gap-20">
        {/* First part */}
        <div className=" flex flex-row justify-start mt-10">
          <span className="text-red-600 font-semibold text-sm font-para">
            More than Faster
          </span>
          <Image src="/Cherry.png" alt="banner" width={20} height={20} />
        </div>

        {/* Second Part */}
        <p className="font-para text-5xl font-extrabold text-start dark:text-white">
          Be the fastest in Delivering Your{" "}
          <span className="text-red-600">Pizza</span>
        </p>

        {/* Third Part */}
        <p className="text-start font-para dark:text-white">
          Our mission is to fill up your tummy with tasty and delicious food
          with fast and free delivery
        </p>

        <button className="font-para bg-red-500 justify-center items-center text-white rounded-xl p-3 w-[8rem]">
          Get Started
        </button>
      </div>

      {/* Right Side */}
      <div className="order-first lg:order-last relative">
        <div className="object-contain">
          <Image src="/HeroImage3.png" alt="hero" width={600} height={600} />
        </div>

        <div className=" flex flex-row items-center gap-2 p-6 rounded-3xl  shadow-lg w-15 absolute top-10 left-1 dark:shadow-slate-700">
          <p className="text-red-400 text-sm font-para dark:text-white">
            Contact Us
          </p>
          <AiOutlinePhone
            size={20}
            className="bg-green-500 rounded-full w-6 h-6 text-white"
          />
        </div>

        <div className="flex flex-row gap-1 absolute bottom-[10px] lg:bottom-20 right-4 shadow-xl dark:shadow-slate-700">
          <Image src="/p1.jpg" alt="food" width={80} height={80} />
          <div className="">
            <p className="text-xs font-bold font-para dark:text-white">
              Italian Pizza
            </p>
            <span className="text-xs font-para dark:text-white">300 Tk</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
