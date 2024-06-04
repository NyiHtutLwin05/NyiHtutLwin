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
      </div>
      <div className="relative">
        <div className="space-y-2 rotate-[0deg] relative p-5">
          <div className="">
            <Image
              src="/photo_2024-03-04_19-44-27.jpg"
              alt="me"
              width={200}
              height={100}
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
