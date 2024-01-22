import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

export interface ILinkX extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  rota?: string;
  target?: string;
}

export const LinkX = ({ rota, children, target }: ILinkX) => {
  return (
    <Link
      to={rota!}
      target={target}
      className={`
      link-claro
      w-fit
      font-normal
      transition
      duration-300
      ease-in-out
      hover:opacity-80
      `}
    >
      {children}
    </Link>
  );
};
