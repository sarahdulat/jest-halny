import clsx from "clsx";
import { ReactNode } from "react";

export type Props = {
  label: string;
  active: boolean;
  info: ReactNode;
};

export default function Widget({ label, active, info }: Props) {
  return (
    <div className="p-8 rounded-md bg-black/5 blur-[2] border border-black/20 border-r-black/10 border-l-black/10 shadow-[0_20px_30px_rgba(0,0,0,0.1)] w-[208px]">
      <div className="flex items-center flex-col">
        <div
          className={clsx(
            "rounded-full h-14 w-14",
            active ? "bg-green-500" : "bg-red-500"
          )}
        ></div>
        <span className="whitespace-nowrap">{label}</span>
        <span className="whitespace-nowrap">{info}</span>
      </div>
    </div>
  );
}
