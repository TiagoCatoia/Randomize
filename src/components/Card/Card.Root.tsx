import { ReactNode } from "react";

import Tilt from "react-parallax-tilt";

import "./Card.css";

type CardRootProps = {
  children?: ReactNode;
  page?: string;
};

export const CardRoot = ({ children, page }: CardRootProps) => {
  const glareColor = (page: string | undefined) => {
    if (page === "plants") {
      return `var(--medium-green-300)`;
    } else if (page === "space") {
      return "#845FC8";
    } else if (page === "recipe") {
      return "#FFCBA4";
    }
  };

  return (
    <Tilt
      className="tilt-glare-effect"
      glareEnable={true}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      glareMaxOpacity={0.2}
      glarePosition="all"
      glareColor={glareColor(page)}
    >
      <div className={`card-container ` + `${page}-card`}>{children}</div>
    </Tilt>
  );
};
