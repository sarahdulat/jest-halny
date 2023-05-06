import classes from "./Meter.module.css";
import { HalnyProbability } from "../store/store";

export type Props = {
  halnyProbability: HalnyProbability;
};

export default function Meter({ halnyProbability }: Props) {
  return (
    <div className="p-8 mb-8 rounded-lg bg-white drop-shadow-md">
      <div
        className={classes.gauge}
        style={{
          // @ts-expect-error
          "--rotation": `${halnyProbability * 180}deg`,
        }}
      >
        <div className={classes.percentage}></div>
        <div className={classes.mask}></div>
        <span className={classes.value}>
          {new Intl.NumberFormat("en", { style: "percent" }).format(
            halnyProbability
          )}
        </span>
      </div>
    </div>
  );
}
