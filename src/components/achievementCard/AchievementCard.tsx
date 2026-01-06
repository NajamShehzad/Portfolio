import React, { FC } from "react";
import "./AchievementCard.css";

interface FooterLink {
  name: string;
  url: string;
}

interface CardInfo {
  image: any;
  title: string;
  description: string;
  footer: FooterLink[];
}

interface AchievementCardProps {
  cardInfo: CardInfo;
  isDark: boolean;
}

const AchievementCard: FC<AchievementCardProps> = ({ cardInfo, isDark }) => {
  function openUrlInNewTab(url: string): void {
    const win = window.open(url, "_blank");
    win?.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>{cardInfo.title}</h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementCard;
