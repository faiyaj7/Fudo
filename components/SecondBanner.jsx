"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { items } from "@/constants";
import { motion, useInView } from "framer-motion";
const SecondBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: "-100vw" },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };
  return (
    <section className="flex flex-col gap-16 my-40" ref={ref}>
      {/* Top Part */}
      <motion.div
        className="flex flex-col justify-center items-center w-full gap-2"
        transition={{
          type: "spring",
          damping: 5,
          stiffness: 10,
          // duration: 0.8,
        }}
      >
        <motion.span
          className="text-red-500 font-bold text-xl"
          animate={{ opacity: isInView ? 1 : 0, transition: { duration: 4 } }}
        >
          What we Serve
        </motion.span>
        <motion.h1
          className="font-bold text-4xl darkModeFont"
          animate={{ x: isInView ? 0 : "100vw" }}
        >
          Your Favourite Food
        </motion.h1>
        <motion.h2
          className="font-bold text-4xl darkModeFont"
          animate={{ x: isInView ? 0 : "-100vw" }}
        >
          {" "}
          Delivery Partner
        </motion.h2>
      </motion.div>

      {/* Bottom Part */}
      <div className="flex flex-col lg:flex-row justify-around items-center gap-16 w-full">
        {items.map((item) => (
          <motion.div
            className="flex flex-col gap-4 justify-center items-center"
            key={item.key}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <Image src={item.image} alt="order" width={150} height={150} />
            <h3 className="font-bold text-xl darkModeFont mt-10">
              {item.title}
            </h3>
            <p className="font-medium darkModeFont ">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecondBanner;
