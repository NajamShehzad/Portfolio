import React, { FC, useState, useEffect, createRef } from "react";
import "./ExperienceCard.css";
import ColorThief from "colorthief";

interface CardInfo {
  company: string;
  companylogo: any;
  role: string;
  date: string;
  desc: string;
  descBullets?: string[];
}

interface ExperienceCardProps {
  cardInfo: CardInfo;
  isDark: boolean;
}

interface GetDescBulletsProps {
  descBullets?: string[];
  isDark: boolean;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ cardInfo, isDark }) => {
  const [colorArrays, setColorArrays] = useState<number[]>([]);
  const imgRef = createRef<HTMLImageElement>();

  function getColorArrays(): void {
    const colorThief = new ColorThief();
    if (imgRef.current) {
      setColorArrays(colorThief.getColor(imgRef.current));
    }
  }

  function rgb(values: number[]): string | null {
    return typeof values === "undefined" ? null : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets: FC<GetDescBulletsProps> = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, index) => (
          <li key={index} className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{ background: rgb(colorArrays) || undefined }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5 className={isDark ? "experience-text-role dark-mode-text" : "experience-text-role"}>
          {cardInfo.role}
        </h5>
        <h5 className={isDark ? "experience-text-date dark-mode-text" : "experience-text-date"}>
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
