import Link from "next/link";
import React from "react";

type GradientButtonProp = {
    children: string
    href?: string
    download?: string
    className?: string
}

const Button = ({children, href, className, download}: GradientButtonProp) => {
  if (href) {
    return (
      <Link href={href} download={download}>
        <div className={`${className} font-medium w-fit bg-black dark:bg-white text-white dark:text-black tracking-wide uppercase group relative py-3 px-6 rounded-full overflow-hidden cursor-pointer hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all`}>
          <div className="absolute -top-10 rotate-45 -left-40 group-hover:left-50 transition-all duration-400 bg-linear-to-l from-white via-black to-white w-25 blur-2xl h-40"/>
          {children}
        </div>
      </Link>
    )
  }

  return (
    <button className={`${className} font-medium w-fit h-fit bg-black dark:bg-white text-white dark:text-black tracking-wide uppercase group relative py-3 px-6 rounded-full overflow-hidden cursor-pointer hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all`}>
      <div className="absolute -top-10 rotate-45 -left-40 group-hover:left-50 transition-all duration-400 bg-linear-to-l from-black via-white to-black dark:from-white dark:via-black dark:to-white w-30 rounded-[120%] blur-2xl h-40"/>
      {children}
    </button>
  );
};

export default Button;
