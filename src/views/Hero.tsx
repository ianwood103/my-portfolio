// assets
import homePageImg from "../assets/home-page.svg";
import downloadIcon from "../assets/download-btn-icon.svg";
import heroDesign from "../assets/hero-design.png";

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// react-scroll
import { Link } from "react-scroll";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="w-full xl:w-fit">
          <motion.h1
            className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl font-bold text-textPrimary uppercase"
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Ian Wood
            <br />
            <span className="text-secondary">
              <Typewriter
                words={["Developer", "Designer", "Student"]}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={150}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <Link to="contact" smooth>
              <Button secondary>Contact me</Button>
            </Link>
            <a href="resume.pdf" download="resume.pdf" target="resume">
              <Button icon={downloadIcon}>Download CV</Button>
            </a>
          </motion.div>
        </div>

        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={heroDesign}
          alt=""
          className="max-w-[300px] xl:max-w-[401px] xl:mr-24"
        />
      </div>
    </div>
  );
};

export default Hero;
