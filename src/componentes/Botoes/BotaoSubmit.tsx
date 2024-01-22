// BotaoSubmit.tsx
import { HTMLAttributes, ReactNode } from "react";

interface IBotaoSubmit extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  disabled?: boolean;
}

export const BotaoSubmit = ({ className, children, disabled }: IBotaoSubmit) => {

  return (
    <button
      disabled={disabled}
      className={`
        botao
        botao-claro
        ${className}`}
    >
      {children}
    </button>
  );
};
