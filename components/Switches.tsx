import { Weather } from "@/types/weather";
import clsx from "clsx";

export type Props = {
  data: { peak: Weather; valley: Weather };
};

export default function Switches({ data }: Props) {
  return (
    <div className="flex flex-wrap justify-between">
      <Switch
        label="Wind Direction"
        active={
          data.peak.current.wind_deg >= 90 && data.peak.current.wind_deg <= 270
        }
      />
      <Switch label="Wind Speed" active={data.peak.current.wind_speed >= 10} />
      // look at last 12 hours to see if gusts were above 32?
      <Switch
        label="Wind Gust Speed"
        active={data.peak.current.wind_gust >= 32}
      />
      // get last 5 hours of temp to see if it's gone up
      <Switch label="Air Temperature" />
      // get last 5 hours of humidity to see if its dropped
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
