// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import upworkIcon from "../assets/upwork-icon.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              About <span className="text-secondary"> me</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              I am a current third-year computer science student at Georgia Tech
              that is seeking to pursue a career in the field of software
              engineering, ideally with an emphasis on full-stack web
              development and potentially devops engineering or project
              management. I primarily have experience in full-stack web
              development involving React.js and ASP.net, but I am seeking to
              continue expanding my skillset.
            </p>
          </Reveal>

          <motion.div
            className="flex items-center justify-center xl:justify-start gap-6"
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <SocialMediaIcon
              imgSrc={linkedinIcon}
              href="https://www.linkedin.com/in/ian-albert-wood"
              title="LinkedIn"
            />
            <SocialMediaIcon
              imgSrc={githubIcon}
              href="https://github.com/ianwood103"
              title="GitHub"
            />
            <SocialMediaIcon
              imgSrc={upworkIcon}
              href="https://www.upwork.com/freelancers/~01d18e0db0b8628004"
              title="Upwork"
            />
            <SocialMediaIcon
              imgSrc={instagramIcon}
              href="https://www.instagram.com/ian.woood/"
              title="Instagram"
            />
          </motion.div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
