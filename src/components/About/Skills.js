import React from "react";

const SkillList = [
  "web design",
  "React",
  "nextJS",
  "tailwind CSS",
  "figma",
  "javaScript",
  "typescript",
  "firebase",
  "SEO",
  "framer motion",
  "WordPress",
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-20 text-dark">
      <span className="font-semibold text-4xl text-accent">Skillset</span>
      <ul className="flex flex-wrap mt-8 justify-start gap-4">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize border broder-dark rounded p-3 hover:scale-105 transition-all duration-200"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
