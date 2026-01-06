import React, { FC, useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { motion } from "framer-motion";
import StyleContext from "../../contexts/StyleContext";

const StartupProject: FC = () => {
  function openProjectInNewWindow(url: string): void {
    const win = window.open(url, "_blank");
    win?.focus();
  }
  const { isDark } = useContext(StyleContext) || { isDark: false };
  if (!bigProjects.display) {
    return null;
  }
  return (
    <div className="startup-projects-container">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ x: i % 2 === 0 ? -20 : 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    {project.image ? (
                      <div className="project-image">
                        <img src={project.image} alt={project.projectName} className="card-image" />
                      </div>
                    ) : null}
                    <div className="project-detail">
                      <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                        {project.projectName}
                      </h5>
                      <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                        {project.projectDesc}
                      </p>
                      {project.footerLink ? (
                        <div className="project-card-footer">
                          {project.footerLink.map((link, i) => {
                            return (
                              <span
                                key={i}
                                className={isDark ? "dark-mode project-tag" : "project-tag"}
                                onClick={() => openProjectInNewWindow(link.url)}
                              >
                                {link.name}
                              </span>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupProject;
