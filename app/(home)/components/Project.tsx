import React from "react";
import {
  SiAstro,
  SiCss3,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiMantine,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const Project = () => {
  const projects = [
    {
      title: "POS",
      tech: [SiNextdotjs, SiTailwindcss, SiCss3],
      link: "https://pos-system-puce.vercel.app/",
      cover: "/Screenshot 2025-01-13 at 9.43.49 PM.png",
      background: "bg-indigo-500",
    },
    {
      title: "Astro Echoes",
      tech: [SiAstro, SiTailwindcss, SiCss3],
      link: "https://astro-echoes.vercel.app/",
      cover: "/Screenshot 2025-01-13 at 9.41.15 PM.png",
      background: "bg-indigo-500",
    },
    {
      title: "Curely",
      tech: [SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://curely-dashboard.vercel.app/",
      cover: "/Screenshot 2025-01-13 at 9.32.25 PM.png",
      background: "bg-indigo-500",
    },
    {
      title: "Tesla Configurator",
      tech: [SiHtml5, SiCss3, SiTailwindcss, SiJavascript],
      link: "https://tesla-configurator-three.vercel.app/",
      cover: "/Screenshot 2025-01-13 at 9.47.33 PM.png",
      background: "bg-indigo-500",
    },
    {
      title: "Jplus - Job Owner",
      tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://jplus-frontend.vercel.app/",
      cover: "/Screenshot from 2024-06-04 11-39-27.png",
      background: "bg-indigo-500",
    },

    {
      title: "Jplus - Job Seeker",
      tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://jplus-frontend.vercel.app/jobseeker",
      cover: "/Screenshot from 2024-06-04 11-39-39.png",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-20 p-5 sm:p-0 my-20">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-0 mt-5"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, key) => {
                        return <Icon key={key} className="w-8 h-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
