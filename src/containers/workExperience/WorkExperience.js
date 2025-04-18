import React, {useContext} from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
    const {isDark} = useContext(StyleContext)
    if(workExperiences.viewExperiences){
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">Experiences</h1>
                        <div className="experience-cards-div">
                        {workExperiences.experience.map((card,index) => {
                            return (
                                <Fade bottom duration={700} delay={index * 150}>

                                <ExperienceCard
                                    isDark={isDark}
                                    cardInfo={{
                                        company: card.company,
                                        desc: card.desc,
                                        date: card.date,
                                        companylogo: card.companylogo,
                                        role: card.role,
                                        descBullets: card.descBullets
                                    }}
                                />
                                </Fade>
                            );
                        })}
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}
