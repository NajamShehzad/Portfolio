import React, { FC, useContext } from "react";
import "./Podcast.css";
import { podcastSection } from "../../portfolio";
import { motion } from "framer-motion";
import StyleContext from "../../contexts/StyleContext";

const Podcast: FC = () => {
  const { isDark } = useContext(StyleContext) || { isDark: false };
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode podcast-header-subtitle" : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastLink, index) => {
            return (
              <div key={index}>
                <iframe
                  className="podcast"
                  src={podcastLink}
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Podcast;
