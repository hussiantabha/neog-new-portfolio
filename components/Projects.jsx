import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="flex-col mt-[4rem] justify-end gap-y-4">
      <h1 className="text-[2.5rem] mb-[2rem] text-center font-bold">
        Projects
      </h1>
      <ProjectCard />
    </section>
  );
};

export default Projects;
