// react
import { useState } from "react";

// assets
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";

// components
import { Button, LabelInput, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// emailjs
import emailjs from "@emailjs/browser";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [success, setSuccess] = useState<boolean>(false);
  const [incomplete, setIncomplete] = useState<boolean>(false);

  const onSubmit = () => {
    if (name === "" || email === "" || message === "") {
      setIncomplete(true);
      return;
    } else {
      setIncomplete(false);
    }

    emailjs
      .send(
        "service_2582hqp",
        "template_coau8jn",
        { name, email, message },
        "42nD9JFBKAdgT-YLa"
      )
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 3000);
          setName("");
          setEmail("");
          setMessage("");
        }
      });
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contactPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12">
        <div className="flex-1 flex flex-col gap-4 ">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              Need to get in <span className="text-secondary"> contact?</span>
            </h2>
          </Reveal>

          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={contactIllustration}
            alt=""
            className="max-h-[348px]"
          />
        </div>

        <motion.div
          className="flex-1 flex flex-col gap-6 w-full max-w-[696px]"
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput
              labelText="Your name"
              placeholderText="Name"
              value={name}
              setValue={setName}
            />
            <LabelInput
              labelText="Your email"
              placeholderText="Email"
              value={email}
              setValue={setEmail}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput
              labelText="Your message"
              placeholderText="Message"
              textarea
              value={message}
              setValue={setMessage}
            />
          </div>

          <div className="flex flex-row justify-start gap-8">
            <Button secondary tertiary={success} onClick={onSubmit}>
              <span
                className={`${
                  success ? "opacity-1" : "hidden opacity-0"
                } transition-all ease-in-out duration-1000 pr-1.5`}
              >
                Message Sent
              </span>
              <span
                className={`${
                  success ? "hidden opacity-0" : "opacity-1"
                } transition-all ease-in-out duration-1000`}
              >
                Send Message
              </span>
            </Button>
            {incomplete && (
              <p className="text-red-600">All fields must be completed.</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
