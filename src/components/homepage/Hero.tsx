import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="lg:min-h-screen py-40">
      <div className="">
        <div className="">
          <Link
            href={""}
            className="flex items-center space-x-1 text-sm  hover:underline duration-300"
          >
            <p className="text-neutral-700 dark:text-neutral-300 font-light">
              Introducing the future of startups discovery!
            </p>
            <ArrowRight size={16} strokeWidth={1.2} />
          </Link>
          <h2 className="text-7xl max-w-3xl text-black dark:text-white">
            Discover real startup ideas backed by data
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg max-w-[720px] leading-snug py-6">
            Join early founders, investors, and builders using Kiwiko to stay
            ahead by discovering startup ideas backed by real data, traction,
            and clear market validation.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href={""}
              className="flex items-center hover:opacity-80 transition-opacity duration-300 space-x-1 font-medium px-6 py-3 bg-linear-to-b from-black to-zinc-700 dark:from-white dark:to-zinc-400 text-white dark:text-black rounded-lg"
            >
              <p className="">Join Waitlist</p>
              <ArrowRight size={16} className="" />
            </Link>
            <Link
              href={""}
              className="hover:opacity-80 transition-opacity duration-300 font-medium px-6 py-3 text-black dark:text-white border-2 border-zinc-400 dark:border-zinc-700 rounded-lg"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="mt-30 w-fit mx-auto border-3 border-black dark:border-white/30 rounded-xl relative group">
          <div className="w-300 h-[644.4px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-linear-to-b from-black to-zinc-700 dark:from-white dark:to-zinc-400 rounded-xl blur-[10rem] group-hover:opacity-70 opacity-50 duration-300 animate-herobg -z-1" />
          <div className=" group overflow-hidden">
            <Image
              src={"/hero-image.svg"}
              alt="hero-img"
              width={1200}
              height={1200}
              className="rounded-xl duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
