import React, { FC, useContext } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { motion } from "framer-motion";
import StyleContext from "../../contexts/StyleContext";
import developerWorking from "../../assets/images/developerActivity.svg";

const Skills: FC = () => {
  const { isDark } = useContext(StyleContext) || { isDark: false };
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="skills-image-div">
            <img alt="Najam Working" src={developerWorking}></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="skills-text-div">
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, index) => {
                return (
                  <p
                    key={index}
                    className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
