'use client';

import React from 'react';
import Image from "next/image";
import { HeroParallaxDemo } from "@/components/ui/hero-parallax-demo";
import {AppleCardsCarouselDemo} from "@/components/ui/apple-cards-carousel-demo"
import {NavbarDemo} from "@/components/ui/navbar-menu-demo"
import {CardDemo} from "@/components/ui/CardDemo"
import { CardDemo2 } from '@/components/ui/CardDemo2';


export default function Home() {
  return (
    <main>
      <div>
        <NavbarDemo />
        <HeroParallaxDemo />
        <AppleCardsCarouselDemo />
        <CardDemo/>
        <CardDemo2/>
      </div>
    </main>
  );
}
