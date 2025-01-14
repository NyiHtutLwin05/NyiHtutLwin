import Link from "next/link";
import React from "react";
import Title from "./Title";
import Image from "next/image";
import { MovingButtonBtn } from "@/components/ui/moving-border";

const HeroSection = () => {
  return (
    <div className="min-h-[85vh]  relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col-reverse lg:gap-0 gap-14 lg:flex-row items-center justify-between">
          <div className="space-y-10 text-center lg:text-left relative z-10">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-100">
                Nice to meet you! 👋 <br />
                <span className="md:absolute left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-200 transform -skew-x-12"></span>
              </h1>

              <p className="md:w-[700px] pt-5  text-lg text-gray-300 leading-relaxed">
                <span className="text-2xl">
                  I&apos;m Nyi Htut Lwin (James){" "}
                </span>{" "}
                <br />
                Based in Myanmar 🇲🇲, I&apos;m a Frontend Developer passionate
                about creating user-friendly web and mobile applications. I
                focus on building responsive, visually engaging solutions that
                deliver seamless experiences across all devices.
              </p>
            </div>
            <div className="md:flex gap-5 items-center">
              <div className="flex flex-col text-center sm:flex-row gap-4 justify-center lg:justify-start ">
                <a
                  href="/NyiHtutLwin.pdf"
                  download
                  className="inline-flex items-center text-center px-6 py-3 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
              <div className="md:mt-0 md:relative absolute -top-[100px] md:top-0 flex justify-center md:floating">
                <MovingButtonBtn
                  borderRadius="0.5rem"
                  className="p-4 font-semibold "
                >
                  <p>📢 Available for Work</p>
                </MovingButtonBtn>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="floating space-y-2 relative">
              <div className="image-wrapper">
                <Image
                  src="/photo_2024-07-02 13.18.08.jpeg"
                  alt="me"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="glow-effect absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse [animation-delay:2s]"></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-grid"></div>
    </div>
  );
};

export default HeroSection;
