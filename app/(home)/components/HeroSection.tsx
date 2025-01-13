import { MovingButtonBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse lg:gap-0 gap-14 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋 <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            I&apos;m Nyi Htut Lwin
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          Based in Myanmar, I&apos;m Frontend Developer passionate about
          building a mordern web application that users love.
        </p>
        {/* <Link href={"nyihtutlwin0205@gmail.com"} className="inline-block group">
          <Title text="Contact Me 📬" />
        </Link> */}
        <a
          href="/NyiHtutLwin.pdf"
          download
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white transition-all duration-200 bg-green-500 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </div>
      <div className="relative">
        <div className="space-y-2 rotate-[0deg] relative p-5">
          <div className="rounded-[100%]">
            <Image
              src="/photo_2024-07-02 13.18.08.jpeg"
              alt="me"
              width={400}
              height={200}
              className="rounded-2xl"
            />
          </div>
          {/* <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div> */}
          <div className="glow absolute top-[40%] right-1/2 -z-10 hidden"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingButtonBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>📢 Available for Work</p>
          </MovingButtonBtn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
