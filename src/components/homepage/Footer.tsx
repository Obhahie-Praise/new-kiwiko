import React from "react";
import ImageThemeSwitcher from "../ui/ImageThemeSwitcher";
import Link from "next/link";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <section id="footer" className="py-20 bg-black dark:bg-white px-20">
      <div   className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="">
              <h5 className="flex items-center space-x-2">
                <ImageThemeSwitcher
                  srcdark="/logo-lightmode.svg"
                  srclight="/logo-dark-mode.svg"
                  alt="Feature 2"
                  width={30}
                  hieght={30}
                />
                <p className="serif text-xl text-white dark:text-black">Kiwiko</p>
              </h5>
            </div>
            <div className="flex items-center space-x-2">
              {" "}
              <div className="h-px w-10 bg-zinc-600 dark:bg-neutral-400" />
              <p className="serif text-sm text-zinc-400 dark:text-neutral-600">
                Startup ideas, backed by proof.
              </p>{" "}
            </div>
          </div>
          <div className="">
            <div className="space-x-2">
                <Link href={"https://github.com/Obhahie-Praise/kiwiko"} className="px-6 py-2 border border-zinc-700 dark:border-zinc-200 rounded-full text-white dark:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white transition-colors duration-300">Github</Link>
                <Link href={"https://x.com/praizedevx"} className="px-6 py-2 border border-zinc-700 dark:border-zinc-200 rounded-full text-white dark:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white transition-colors duration-300">Twitter</Link>
                <Link href={""} className="px-6 py-2 border border-zinc-700 dark:border-zinc-200 rounded-full text-white dark:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white transition-colors duration-300">WhatsApp</Link>
            </div>
          </div>
        </div>
        <div className="text-white dark:text-black w-fit mx-auto flex items-center gap-2">
            <Copyright size={16} strokeWidth={1.3} />
            <p className="text-sm font-light">{new Date().getFullYear()} Kiwiko Inc</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
