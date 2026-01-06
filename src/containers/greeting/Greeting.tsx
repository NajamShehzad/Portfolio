import React, { FC, useContext } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import manOnStable from "../../assets/images/manOnTable.svg";

const Greeting: FC = () => {
  const { isDark } = useContext(StyleContext) || { isDark: false };
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {" "}
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="Najam sitting on table" src={manOnStable}></img>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Greeting;
