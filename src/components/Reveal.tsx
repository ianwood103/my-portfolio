// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";

// react
import { FC, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

const Reveal: FC<RevealProps> = ({ children }) => {
  return (
    <div className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={transition}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.75, ease: "easeIn" }}
        className="absolute inset-0 bg-secondary z-10"
      ></motion.div>
    </div>
  );
};

export default Reveal;
