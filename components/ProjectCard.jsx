import React from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
const ProjectCard = () => {
  const projectArr = [
    {
      name: "Anti-Strap UI",
      desc: "An easy going component library for your side projects",
      github: "https://github.com/hussiantabha/Anti-Strap-UI",
      live: "https://anti-strap-ui.netlify.app/",
    },
    {
      name: "Chai Store",
      desc: "An e-commerece app for chai lovers☕",
      github: "https://github.com/hussiantabha/chai-storer-react",
      live: "https://chaistorereact.netlify.app/",
    },
    {
      name: "Ad Tube",
      desc: "A youtube clone.",
      github: "https://github.com/hussiantabha/AdTube",
      live: "https://adtube.netlify.app/",
    },
    {
      name: "NoteMan",
      desc: "A note keeping app for all your needs🗒",
      github: "https://github.com/hussiantabha/noteman",
      live: "https://noteman-neog.netlify.app/",
    },
    {
      name: "CuroQuiz",
      desc: "A quiz app to make you curious about different topics",
      github: "https://github.com/hussiantabha/curoquiz-test-typescript",
      live: "https://curoquiz-new.netlify.app/",
    },
  ];
  return (
    <section className="projectDiv">
      {projectArr.map((item) => {
        return (
          <div class="block min-w-[50%] mb-[1.5rem] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {item.desc}
            </p>
            <div className="flex gap-x-6 mt-[1.5rem]">
              <a
                href={item.github}
                className="text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a
                href={item.live}
                className="text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CgWebsite />
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectCard;
