import { HTMLAttributes, ReactNode } from "react";

interface IBotaoOnClick extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  onClick?: () => void;
}

export const BotaoOnClick = ({ onClick, children, className }: IBotaoOnClick) => {

  return (
    <button
      onClick={onClick}
      className={`
      botao
      botao-claro
      ${className}
      `}
    >
      {children}
    </button>
  );
};
