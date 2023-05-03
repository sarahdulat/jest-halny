import clsx from "clsx";
import { HalnyConditions } from "../store/store";

export type Props = {
  halnyConditions: HalnyConditions;
};

export default function Switches({ halnyConditions }: Props) {
  return (
    <div className="flex flex-wrap justify-between">
      <Switch label="Wind Direction" active={halnyConditions.isLeewardWind} />
      <Switch label="Wind Speed" active={halnyConditions.isWindOver10} />
      <Switch
        label="Wind Gust Speed"
        active={halnyConditions.isWindGustOver32}
      />
      <Switch
        label="Air Temperature"
        active={halnyConditions.isAirTempIncreasing}
      />
      <Switch
        label="Decrease in Humidity"
        active={halnyConditions.isHumidityDecreasing}
      />
    </div>
  );
}

function Switch({
  label,
  active,
}: {
  /**
   * label is a string
   */
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center flex-col">
      <div
        className={clsx(
          "rounded-full h-14 w-14",
          active ? "bg-green-500" : "bg-red-500"
        )}
      ></div>
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}
