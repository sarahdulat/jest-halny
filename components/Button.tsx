import { ReactNode, MouseEventHandler } from "react";

export function Button({ children, onClick, type }: Props) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

type Props = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};
