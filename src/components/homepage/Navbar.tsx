"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import { ArrowDown } from "lucide-react";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/logo-dark-mode.svg"
      : "/logo-lightmode.svg";

  const githubLogo =
    mounted && resolvedTheme === "dark" ? "/github.svg" : "/github-light.svg";
  return (
    <nav className="fixed top-0 left-0 min-w-screen py-3 backdrop-blur-lg z-1">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href={"/"} className="flex items-center space-x-2">
          <Image src={logoSrc} height={24} width={24} alt="logo" className="" />
          <p className="serif text-lg">Kiwiko</p>
        </Link>
        <div className="">
          <ul className="flex items-center space-x-1">
            <li>
              <Link
                className="text-sm font-medium hover:text-neutral-700 dark:hover:text-neutral-300 px-2 py-2 transition-colors duration-300 rounded-full"
                href="#features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium hover:text-neutral-700 dark:hover:text-neutral-300 px-2 py-2 transition-colors duration-300 rounded-full"
                href="#how-it-works"
              >
                How it works
              </Link>
            </li>
            <li className="pr-3">
              <Link
                href={"https://github.com/Obhahie-Praise/kiwiko"}
                className="flex items-center space-x-1 text-xs  hover:bg-neutral-500/10 dark:hover:bg-white/10 px-4 py-2 transition-colors duration-300 rounded-full"
              >
                <Image
                  src={githubLogo}
                  alt="github logo"
                  className=""
                  width={16}
                  height={16}
                />
                <p className="">46.8k</p>
              </Link>
            </li>
            <li className="pr-3">
              {" "}
              <ThemeSwitcher />
            </li>

            <Link
              className="text-sm flex items-center hover:opacity-80 transition-opacity duration-300 space-x-1 font-medium px-6 py-3 bg-linear-to-b from-black to-zinc-700 dark:from-white dark:to-zinc-400 text-white dark:text-black rounded-lg"
              href={"#waitlist"}
            >
              <p className="">Join Waitlist</p>
              <ArrowDown size={16} className="" />
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
