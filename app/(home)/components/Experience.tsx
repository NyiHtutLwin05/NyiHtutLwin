"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Title from "./Title";

export function Experience() {
  return (
    <>
      <Title
        text="Experience "
        className="flex flex-col items-center justify-center rotate-0 mt-5"
      />
      <TracingBeam className="px-10 mt-10">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-xl mb-4">{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {/* {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )} */}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const dummyContent = [
  {
    title: "Intern Acquisition Team at Shop.com.mm",
    description: (
      <>
        <p>
          In 2019, I was part of the acquisition team at Shop.com.mm. My role
          involved finding sellers and persuading them to upload their products
          to our e-commerce platform. This experience was challenging yet
          rewarding, as I had to effectively communicate the benefits of our
          platform and build strong relationships with potential sellers.
        </p>
        <p>
          After the acquisition phase, the COVID-19 outbreak occurred, which
          significantly impacted the business. However, this period of
          uncertainty led me to discover a new passion: programming.
          Transitioning to the programming field has been a pivotal moment in my
          career, allowing me to develop new skills and pursue a fulfilling path
          in technology.
        </p>
      </>
    ),
    badge: "Acquisition",
  },
  {
    title: "Intern Frontend at CirclesX for 3 Months",
    description: (
      <>
        <p>
          I was an intern at CirclesX for three months and learned so much
          during my time there. The experience helped me grow both
          professionally and personally, providing valuable insights into the
          frontend development field. I collaborated with senior developers,
          worked on real-world projects, and gained hands-on experience with the
          latest technologies.
        </p>
        <br />
        <p>
          My primary responsibilities included assisting in the development of
          user interfaces, debugging and fixing issues, and participating in
          code reviews. This internship solidified my passion for frontend
          development and equipped me with the skills needed to excel in a
          fast-paced environment.
        </p>
      </>
    ),
    badge: "React, Tailwind",
  },
  {
    title: "Full Time Frontend Developer at CirclesX (2022-2024)",
    description: (
      <>
        <p>
          CirclesX was my first company as a junior developer, and it played a
          crucial role in launching my career. The team’s guidance and support
          helped me grow rapidly in a professional environment. I gained
          hands-on experience in frontend development, and the mentorship I
          received provided me with the skills and confidence needed to advance
          in my career.
        </p>
        <br />
        <p>
          In this role, I was responsible for designing and implementing
          user-friendly interfaces, optimizing web performance, and ensuring
          cross-browser compatibility. I also mentored junior developers and
          contributed to improving the overall code quality within the team.
          This experience was invaluable in shaping my career.
        </p>
      </>
    ),
    badge: "React.JS, NEXT.JS, Postgres, SQL",
  },
  {
    title: "Mid Level Frontend Developer at ConceptX (2024 - Present)",
    description: (
      <>
        <p>
          <p>
            Currently, I am working on the LMS and SMS projects at ConceptX,
            using Vue.js to build responsive, scalable applications. I focus on
            developing key features, ensuring smooth user experiences, and
            collaborating with cross-functional teams to meet project goals.
            Additionally, I handle the integration of APIs, optimize app
            performance, and troubleshoot issues to ensure a seamless experience
            for end users. This role allows me to continuously expand my skills
            while contributing to the success of the projects.
          </p>
        </p>
        <br />
      </>
    ),
    badge: "Vue.JS, VueX, Tailwind.css",
  },
];
