import React from "react";
import ImageThemeSwitcher from "../ui/ImageThemeSwitcher";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import Link from "next/link";
import UserProfileButton from "../ui/UserProfileButton";

const TopNavBar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-8 border-b border-zinc-200 dark:border-zinc-800">
      <h2 className="flex items-center gap-2">
        <ImageThemeSwitcher
          srcdark="/logo-dark-mode.svg"
          srclight="logo-lightmode.svg"
          hieght={25}
          width={25}
          alt="Logos"
        />
        <p className="font-medium serif text-xl">Kiwiko</p>
      </h2>
      <div className="flex items-center space-x-3">
        <div className="">
          <ThemeSwitcher />
        </div>
        <Link
          className="text-sm py-1.5 px-3 font-medium bg-black text-white dark:bg-white rounded-md dark:text-black hover:opacity-80 transition"
          href={"/upgrade"}
        >
          Upgrade
        </Link>
        <div className="">
          <UserProfileButton />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
