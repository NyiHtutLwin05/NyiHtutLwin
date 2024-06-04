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
    title: "Full Time Frontend Developer",
    description: (
      <>
        <p>
          When I became a full-time frontend developer, I had the opportunity to
          work with amazing seniors who shared their extensive knowledge and
          experience. Their guidance was instrumental in my development as a
          skilled frontend developer. I took on significant projects, improved
          my problem-solving abilities, and enhanced my understanding of complex
          frontend frameworks.
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
];
