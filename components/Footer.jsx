import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-col mt-[200px] gap-12 text-center justify-center sticky bottom-0 w-full mb-4">
      <span className="font-bold darkModeFont">All rights Reserved</span>
      <div className="flex justify-center gap-3 cursor-pointer text-orange-500 ">
        <Link href="mailto:faiyajahmed710@gmail.com">
          <BiLogoFacebook size={25} />
        </Link>
        <Link href="/">
          <AiOutlineTwitter size={25} />
        </Link>
        <Link href="/">
          <BsInstagram size={22} />
        </Link>
      </div>
      <div className="flex justify-center items-center flex-row gap-4">
        <Image src="/Logo.png" alt="Logo" width={50} height={50} />
        <span className="font-bold text-[1.5rem] darkModeFont">Fudo</span>
      </div>
    </footer>
  );
};

export default Footer;
