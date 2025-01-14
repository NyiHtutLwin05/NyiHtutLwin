"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiAstro,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      text: "JS",
      Icon: SiJavascript,
    },
    {
      text: "TS",
      Icon: SiTypescript,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "React Native",
      Icon: SiReact,
    },
    {
      text: "Vue",
      Icon: SiVuedotjs,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Astro",
      Icon: SiAstro,
    },

    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },

    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Postgres",
      Icon: SiPostgresql,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8 ">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center "
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
