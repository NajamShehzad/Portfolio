import React, { FC, createRef, useContext } from "react";
import { motion } from "framer-motion";
import "./EducationCard.css";
import StyleContext from "../../contexts/StyleContext";

interface School {
  logo: any;
  schoolName: string;
  subHeader: string;
  duration: string;
  desc: string;
  descBullets?: string[];
}

interface EducationCardProps {
  school: School;
}

interface GetDescBulletsProps {
  descBullets?: string[];
}

const EducationCard: FC<EducationCardProps> = ({ school }) => {
  const imgRef = createRef<HTMLImageElement>();

  const GetDescBullets: FC<GetDescBulletsProps> = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, index) => (
          <li key={index} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const { isDark } = useContext(StyleContext) || { isDark: false };
  return (
    <div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="education-card">
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark ? "dark-mode education-text-subHeader" : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p className={`${isDark ? "dark-mode" : ""} education-text-duration`}>
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <div className="education-card-border"></div>
      </motion.div>
    </div>
  );
};

export default EducationCard;
