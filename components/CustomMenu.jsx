import React from "react";
import { motion } from "framer-motion";

const CustomMenu = ({ isOpen }) => {
  const menuTopPartVariant = {
    open: {
      y: 5,
      rotate: 40,
    },
    close: { x: 0 },
  };

  const menuBottomPartVariant = {
    open: {
      y: -4,
      rotate: -40,
      width: "30px",
    },
    close: { x: 0 },
  };
  const menuBottom2PartVariant = {
    open: {
      y: -9,
      x: 5,
      rotate: -40,
    },
    close: { x: 0 },
  };
  return (
    <motion.div
      className={`flex flex-col gap-1  ${isOpen && "crossWhenOpened"}`}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="w-[30px] h-[5px] bg-slate-800 dark:bg-red-400"
        animate={isOpen ? "open" : "closed"}
        variants={menuTopPartVariant}
      ></motion.div>
      <motion.div
        className="w-[20px] h-[5px]  bg-slate-800 dark:bg-red-400"
        animate={isOpen ? "open" : "closed"}
        variants={menuBottomPartVariant}
      ></motion.div>
      <motion.div
        className="w-[10px] h-[5px]  bg-slate-800 dark:bg-red-400"
        animate={isOpen ? "open" : "closed"}
        variants={menuBottom2PartVariant}
        transition={{ duration: 0.1 }}
      ></motion.div>
    </motion.div>
  );
};

export default CustomMenu;
