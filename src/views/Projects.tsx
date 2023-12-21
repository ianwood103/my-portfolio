// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import { Button, Card, Reveal } from "../components";

// data
import { projects } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "other" | "web";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("web");

  const filteredProjects = () => {
    if (activeCategory === "web") {
      return projects.filter((item) => item.category === "web");
    } else {
      return projects.filter((item) => item.category === "other");
    }
  };

  return (
    <div
      id="projects"
      className="min-h-screen relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              My recent <span className="text-secondary"> projects</span>
            </h2>
          </Reveal>

          <motion.div
            className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <Button
              secondary={activeCategory === "web" ? true : false}
              onClick={() => setActiveCategory("web")}
            >
              Web Development
            </Button>
            <Button
              secondary={activeCategory === "other" ? true : false}
              onClick={() => setActiveCategory("other")}
            >
              Other Software
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-12 mt-12 flex-wrap justify-center"
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {filteredProjects().map((item) => (
              <Card
                imgSrc={item.img}
                title={item.title}
                link={item.link}
              ></Card>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
