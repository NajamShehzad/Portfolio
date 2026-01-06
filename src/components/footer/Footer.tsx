import React, { FC, useContext } from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

const Footer: FC = () => {
  const { isDark } = useContext(StyleContext) || { isDark: false };
  return (
    <motion.div
      initial={{ y: 5, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Najam Shehzad")}
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
