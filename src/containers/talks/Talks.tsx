import React, { FC, useContext } from "react";
import "./Talks.css";
import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import { motion } from "framer-motion";
import StyleContext from "../../contexts/StyleContext";

const Talks: FC = () => {
  const { isDark } = useContext(StyleContext) || { isDark: false };
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p
            className={isDark ? "dark-mode talk-header-subtitle" : "subTitle talk-header-subtitle"}
          >
            {talkSection.subtitle}
          </p>
          {talkSection.talks.map((talk, index) => {
            return (
              <TalkCard
                key={index}
                talkDetails={{
                  title: talk.title,
                  subtitle: talk.subtitle,
                  slides_url: talk.slides_url,
                  event_url: talk.event_url,
                  isDark,
                }}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Talks;
