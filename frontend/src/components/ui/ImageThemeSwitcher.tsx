"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageThemeSwitcher = {
  srclight: string;
  srcdark: string;
  alt: string;
  width: number;
  hieght: number;
};

const ImageThemeSwitcher = ({
  srclight,
  srcdark,
  alt,
  width,
  hieght,
}: ImageThemeSwitcher) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

 const imageSrc =  mounted && resolvedTheme === "dark"
      ? srcdark
      : srclight

  return <Image src={String(imageSrc)} alt={alt} width={width} height={hieght} />;
};

export default ImageThemeSwitcher;
