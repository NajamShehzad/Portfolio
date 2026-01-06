import React, { FC } from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  className?: string;
  href: string;
  newTab?: boolean;
}

const Button: FC<ButtonProps> = ({ text, className, href, newTab }) => {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab ? "_blank" : undefined}>
        {text}
      </a>
    </div>
  );
};

export default Button;
