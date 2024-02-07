import { ElementType } from "react";

import "./NavBar.css";

interface ButtonIconProps {
  icon: ElementType;
  className?: string;
}

export const ButtonIcon = ({ icon: Icon, className }: ButtonIconProps) => {
  return <Icon className={`${className}`} />;
};
