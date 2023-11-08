import { MdRestaurantMenu, MdOutlineContactless } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const MENU_URLS = [
  { name: "Menu", link: "/menu", key: "menu" },
  { name: "About", link: "/", key: "about" },
  { name: "Contact Us", link: "/", key: "contact" },
];

export const MOBILE_MENU = [
  {
    name: "Cart",
    link: "/cart",
    key: "cart",
    component: <AiOutlineShoppingCart size={30} />,
  },
  {
    name: "Menu",
    link: "/menu",
    key: "menu",
    component: <MdRestaurantMenu size={30} />,
  },
  {
    name: "Contact Us",
    link: "/contact",
    key: "contact",
    component: <MdOutlineContactless size={30} />,
  },
  {
    name: "About Us",
    link: "/about-us",
    key: "about",
    component: <FcAbout size={30} />,
  },
];
export const items = [
  {
    image: "/s1.png",
    key: 1,
    title: "Easy To Order",
    desc: "You only need a few steps in food ordering",
  },
  {
    image: "/s2.png",
    key: 2,
    title: "Fast Delivery",
    desc: "Delivery is always on time even faster",
  },
  {
    image: "/s3.png",
    key: 3,
    title: "Great Quality",
    desc: "Quality is as good as the fast delivery",
  },
];
