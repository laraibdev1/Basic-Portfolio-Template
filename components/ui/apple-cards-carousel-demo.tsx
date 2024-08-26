"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Mohtasham's Development Skills

      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Skills
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
           
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "React js ",
    title: "You can do more with AI.",
    src: "https://knackforge.com/wp-content/uploads/2022/11/Benefits-of-ReactJS.jpg",
    content: "lorem jobasp9ud hf auibde h ipubdfjjnef uhlw",
  },
  {
    category: "Next js",
    title: "Enhance your productivity.",
    src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
    content:  <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
    <span className="font-bold text-neutral-700 dark:text-neutral-200">
      Skills
    </span>{" "}
    Component-Based Architecture:

React allows developers to build encapsulated components that manage their own state. Components can be composed to build complex UIs.
Virtual DOM:

React uses a virtual DOM to improve performance. When the state of an object changes, React updates the virtual DOM first, compares it with the real DOM, and then updates the real DOM only where changes occurred.
JSX Syntax:

JSX stands for JavaScript XML. It allows developers to write HTML-like syntax within JavaScript, making the code more readable and easier to write.
Unidirectional Data Flow:

React enforces a one-way data flow, which makes the app more predictable and easier to debug.
  </p>,
  },
  {
    category: "My SQL",
    title: "Launching the new Apple Vision Pro.",
    src: "https://as1.ftcdn.net/v2/jpg/02/76/69/12/1000_F_276691258_ztHqtPnY14WtXv8Bri5TyFxITTgVGQ45.jpg",
    content: <DummyContent />,
  },

  {
    category: "postgres Sql",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://raw.githubusercontent.com/getoutreach/stacked/master/svg_variable/postgresql-lockup.svg",
    content: <DummyContent />,
  },
  {
    category: "Python",
    title: "Photography just got better.",
    src: "https://i.pinimg.com/originals/2f/9c/11/2f9c11f9e55efbf1791f12c06d60729b.jpg",
    content: <DummyContent />,
  },
  {
    category: "Django",
    title: "Hiring for a Staff Software Engineer",
    src: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/django-icon.svg",
    content: <DummyContent />,
  },
  {
    category: "Docker",
    title: "Hiring for a Staff Software Engineer",
    src: "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/docker.svg",
    content: <DummyContent />,
  },
];
