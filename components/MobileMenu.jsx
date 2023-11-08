import { MOBILE_MENU } from "@/constants";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MobileMenu = ({ handleMenuToggle }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 bg-red-300 z-10 
    flex flex-col justify-center items-center gap-24"
      initial={{ y: "-1000vw", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vw", opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      {MOBILE_MENU.map((item) => (
        <Link
          href={item.link}
          key={item.key}
          className="flex flex-row items-center gap-5"
          onClick={handleMenuToggle}
        >
          <span className="">{item.component}</span>
          <span className="tracking-wider font-semibold text-3xl">
            {item.name}
          </span>
        </Link>
      ))}
    </motion.div>
  );
};

export default MobileMenu;
