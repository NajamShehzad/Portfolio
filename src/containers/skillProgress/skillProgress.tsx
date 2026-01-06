import React, { FC } from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { motion } from "framer-motion";
import skillSvg from "../../assets/images/skill.svg";

const StackProgress: FC = () => {
  if (techStack.viewSkillBars) {
    return (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, index) => {
              const progressStyle = {
                width: exp.progressPercentage,
              };
              return (
                <div key={index} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            <img alt="Skills" src={skillSvg} />
          </div>
        </div>
      </motion.div>
    );
  }
  return null;
};

export default StackProgress;
