import { HalnyConditions } from "../store/store";
import { HistoricalWeather, Weather } from "../types/weather";
import Widget from "./Widget";

export type Props = {
  halnyConditions: HalnyConditions;
  data: {
    valley: Weather;
    peak: Weather;
    valleyHistorical: HistoricalWeather;
  };
};

export default function Conditions({ halnyConditions, data }: Props) {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <Widget
        label="Wind Direction"
        info={<span>{data.peak.current.wind_deg}°</span>}
        active={halnyConditions.isLeewardWind}
      />
      <Widget
        label="Wind Speed"
        info={<span>{data.peak.current.wind_speed} m/s</span>}
        active={halnyConditions.isWindOver10}
      />
      <Widget
        label="Wind Gust Speed"
        info={<span>{data.peak.current.wind_gust} m/s</span>}
        active={halnyConditions.isWindGustOver32}
      />
      <Widget
        label="Air Temperature"
        info={
          <span>
            {data.valleyHistorical.data[0].temp} C° - {data.valley.current.temp}{" "}
            C°
          </span>
        }
        active={halnyConditions.isAirTempIncreasing}
      />
      <Widget
        label="Decrease in Humidity"
        info={
          <span>
            {data.valleyHistorical.data[0].humidity}% -{" "}
            {data.valley.current.humidity}%
          </span>
        }
        active={halnyConditions.isHumidityDecreasing}
      />
    </div>
  );
}
