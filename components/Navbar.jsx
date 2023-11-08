"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MENU_URLS } from "@/constants";
import { useStore } from "@/context/store";
import HydrationAvoid from "./HydrationAvoid";
import CustomMenu from "./CustomMenu";
import { useState } from "react";

import MobileMenu from "./MobileMenu";
import DarkLightMode from "./DarkLightMode";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantities = useStore((state) => state.totalQuantities);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex justify-between p-[1rem] items-center">
      {/* Logo */}

      <Link href="/" className="flex items-center justify-start gap-[1.5rem] ">
        <Image src="/Logo.png" alt="Logo" width={50} height={50} />
        <span className="font-navbar font-bold text-[1.5rem] dark:text-white tracking-widest">
          Fudo
        </span>
      </Link>

      {/* Menu */}

      <ul className="hidden lg:visible lg:flex flex-1 gap-8 justify-center ">
        {MENU_URLS.map((item) => (
          <Link href={item.link} key={item.key}>
            <li className="font-para font-semibold tracking-wider hover:scale-90 cursor-pointer dark:hover:text-orange-500 hover:text-orange-500 dark:text-white">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      {/* Cart */}

      <div className="flex flex-row items-center justify-center gap-5 ">
        <div className="mr-0 invisible lg:visible">
          <DarkLightMode />
        </div>

        <div className="invisible lg:visible relative lg:flex cursor-pointer z-2">
          <Link href="/cart">
            {" "}
            <AiOutlineShoppingCart size={25} className="dark:text-white" />
            <HydrationAvoid>
              <span
                className="bg-red-600 rounded-full w-5 h-5 
          text-center absolute -top-2 -right-2 text-sm text-white"
              >
                {totalQuantities}
              </span>
            </HydrationAvoid>
          </Link>
        </div>
      </div>

      <div className="visible lg:hidden" onClick={handleMenuToggle}>
        <CustomMenu isOpen={isOpen} />
      </div>

      <AnimatePresence>
        {isOpen && <MobileMenu handleMenuToggle={handleMenuToggle} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
