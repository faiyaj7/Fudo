"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const MenuHead = () => {
  const ref = useRef(null);
  const isInViewMenu = useInView(ref);

  return (
    <section ref={ref}>
      <motion.h5
        className="text-red-500 font-semibold text-sm mb-9"
        animate={{ opacity: isInViewMenu ? 1 : 0, transition: { delay: 1.1 } }}
      >
        OUR MENU
      </motion.h5>
      <motion.h1
        className="font-extrabold text-3xl darkModeFont"
        animate={{ x: isInViewMenu ? 0 : "100vw" }}
      >
        MENU THAT ALWAYS{" "}
      </motion.h1>
      <motion.h1
        className="font-extrabold text-3xl mb-10 darkModeFont"
        animate={{ x: isInViewMenu ? 0 : "-100vw" }}
      >
        MAKE YOU FALL IN LOVE
      </motion.h1>
    </section>
  );
};

export default MenuHead;
