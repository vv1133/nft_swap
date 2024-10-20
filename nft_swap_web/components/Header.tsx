"use client"
import MobilNav from "@/components/MobilNav";
import Nav from "@/components/Nav";
import Link from "next/link";

// import ConnectButton from "@/components/ConnectButton";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const ConnectButton = dynamic(() => import("@/components/ConnectButton"), {
  ssr: false,
});
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${
        isScrolled ? "bg-black" : "bg-transparent"
      } fixed top-0 z-50 border-b-2 pt-4 px-0 h-20 xl:h-16 text-white container mx-auto flex justify-between otems-center`}
    >
      {/* logo */}
      <Link href="/">
        <h1 className="text-4xl font-semibold ">
          <Image src={`/images/logo.png`} alt="" width="300" height="30" />
          {/* NFT-Swap <span className="text-white">.</span> */}
        </h1>
      </Link>
      {/* Nav */}
      <div className="z-50 hidden lg:flex items-center gap-8">
        <Nav />
        {/* RAINBOW */}
        <ConnectButton />
      </div>

      {/* mobile nav */}
      <div className="lg:hidden ">
        <MobilNav />
      </div>
    </div>
  );
};
export default Header;
