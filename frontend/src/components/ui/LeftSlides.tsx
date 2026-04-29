"use client";
import React, { useEffect, useState } from "react";
import ImageThemeSwitcher from "./ImageThemeSwitcher";
import Link from "next/link";
import Image from "next/image";

const LeftSlides = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const timedelay = 3000;

  const slideData = [
    {
      title: "Prove your Concept",
      summary:
        "Proof of concept is shown through real work and execuetion in your startup.",
    },
    {
      title: "Real Analytics",
      summary:
        "See change and growth in real time! As the trends set, you can manage them or ask the Kiwiko Agent",
    },
    {
      title: "Data Sharing",
      summary:
        "Your startup data is pasted on your startup portfolio in real time. You choose the data you want to be public",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev === slideData.length ? 1 : prev + 1));
    }, timedelay);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slideData[currentPage - 1];

  return (
    <div className="relative border-r border-zinc-300 dark:border-zinc-800 bg-black overflow-hidden">
      <div className="">
        <Link
          href={"/"}
          className="absolute top-4 left-6 flex items-center space-x-2"
        >
          <ImageThemeSwitcher
            srcdark="/logo-lightmode.svg"
            srclight="/logo-dark-mode.svg"
            width={24}
            hieght={24}
            alt="logo"
          />
          <p className="serif text-lg text-white">Kiwiko</p>
        </Link>
        <Image src={`/Slide-${currentPage}.svg`} height={100} width={100} alt={`slide-${currentPage}`} className="h-screen w-full opacity-20 scale-200" />
        <div className="absolute px-12 py-6 left-0 bottom-0">
          <div className="">
            <div className="flex items-center space-x-2">
              {slideData.map((_, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 h-1 w-8 rounded-full ${
                    currentPage === index + 1 ? "bg-white" : "bg-zinc-700"
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Slide */}
          <div className="transition-opacity duration-500">
            <h4 className="text-6xl py-2 text-white">{currentSlide.title}</h4>
            <p className="text-zinc-300 max-w-lg text-xl">
              {currentSlide.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSlides;
