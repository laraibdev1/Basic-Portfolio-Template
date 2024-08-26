"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Next js ",
    link: "https://nextjs.org/",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg",
  },
  {
    title: "Python",
    link: "https://www.python.org/",
    thumbnail: "https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc",
  },
  {
    title: "MySql",
    link: "https://www.mysql.com/",
    thumbnail: "https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png",
  },
  {
    title: "docker",
    link: "https://www.amazon.com",
    thumbnail: "https://pbs.twimg.com/card_img/1813457638920720384/1MSwrJNr?format=jpg&name=4096x4096",
  },
];
