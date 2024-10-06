"use client";

import { Rochester } from "next/font/google";
import Image from "next/image";
import NavbarLinks from "./NavbarLinks";

const rochester = Rochester({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image
            src="/logo.png"
            width={256}
            height={256}
            className="h-12 w-12 m-0 mr-1"
            alt="Logo"
          />
          <span
            className={`${rochester.className} font-semibold tracking-tight text-black text-xl`}
          >
            KayaButterNews
          </span>
        </div>
        <NavbarLinks />
      </nav>
    </>
  );
};
export default Navbar;
