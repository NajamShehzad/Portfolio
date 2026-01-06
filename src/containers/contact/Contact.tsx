import React, { FC, useContext } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { motion } from "framer-motion";
import StyleContext from "../../contexts/StyleContext";
import contactMailWhite from "../../assets/images/contactMail.webp";
import contactMailDark from "../../assets/images/contactMailDark.svg";

const Contact: FC = () => {
  const { isDark } = useContext(StyleContext) || { isDark: false };
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className={isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"}>
              {contactInfo.subtitle}
            </p>

            <div className={isDark ? "dark-mode contact-text-div" : "contact-text-div"}>
              <a className="contact-detail" href={"tel:" + (contactInfo as any).number}>
                {(contactInfo as any).number}
              </a>
              <br />
              <br />
              <a className="contact-detail-email" href={"mailto:" + contactInfo.email_address}>
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <img alt="Najam Working" src={isDark ? contactMailDark : contactMailWhite}></img>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
