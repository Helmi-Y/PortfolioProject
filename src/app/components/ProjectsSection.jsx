"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "Created this portfolio using Next.Js and React",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/images/projects/portfolio.png",
  },
  {
    id: 2,
    title: "Blog Website",
    description: "Created a Blog application using Express, Node.js and MongoDB",
    image: "/images/projects/blog.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/blog.png",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Created a portfolio using React",
    image: "/images/projects/portfolio1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/portfolio1.png",
  },
  {
    id: 4,
    title: "MERN Book Store",
    description: "Created a Book Store Application using MongoDB, Express, React and Node.js",
    image: "/images/projects/bookstoreactual.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/bookstoreactual.png",
  },
  {
    id: 5,
    title: "OpenAI API Chatbot",
    description: "Created an OpenAI API Chatbot",
    image: "/images/projects/bookstore.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/bookstore.png", 
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
