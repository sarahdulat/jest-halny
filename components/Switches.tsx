import { Weather } from "@/types/weather";
import clsx from "clsx";

const switches = [
  "Wind Direction",
  "Wind Speed",
  "Wind Gust Speed",
  "Air Temperature",
  "Decrease in Humidity",
];

export type Props = {
  data: { peak: Weather; valley: Weather };
};

export default function Switches({ data }: Props) {
  return (
    <div className="flex flex-wrap justify-between">
      <Switch
        label="Wind Direction"
        active={data.peak.wind_deg >= 90 && data.peak.wind_deg <= 270}
      />
      <Switch label="Wind Speed" active={data.peak.wind_speed >= 10} />
      <Switch label="Wind Gust Speed" active={data.peak.wind_gust >= 32} />
      <Switch label="Air Temperature" />
      <Switch label="Decrease in Humidity" />
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
