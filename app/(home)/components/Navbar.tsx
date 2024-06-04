import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";
const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/nyi-htut-lwin-81414524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      Label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      id: 2,
      link: "https://www.facebook.com/nyihtut.lwin.9?mibextid=LQQJ4d",
      Label: "FaceBook",
      Icon: SiFacebook,
    },
    {
      id: 3,
      link: "https://github.com/NyiHtutLwin05",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      id: 4,
      link: "https://www.instagram.com/nyihtut_02?igsh=MTh6dzc2MHc1bWthbg%3D%3D&utm_source=qr",
      Label: "Instagram",
      Icon: SiInstagram,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="text-sm md:text-xl lg:text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Nyi Htut Lwin👨‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.Label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
