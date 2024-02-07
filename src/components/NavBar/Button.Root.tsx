import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

import "./NavBar.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  page?: string;
}

export const ButtonRoot = ({ children, onClick, page }: ButtonProps) => {
  return (
    <button className={`btn-page ` + `${page}-btn`} onClick={onClick}>
      {children}
    </button>
  );
};
