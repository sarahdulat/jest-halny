import Description from "@/src/components/Description";
import Meter from "@/src/components/Meter";
import Navbar from "@/src/components/Navbar";
import Switches from "@/src/components/Switches";
import { HistoricalWeather, Weather } from "@/src/types/weather";
import { NextPageContext } from "next";
import { getUnixTime, sub } from "date-fns";
import { getHalnyConditions, HalnyConditions } from "@/src/store/store";
export default function TestPage({ data, halnyConditions }: Props) {
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2">
        <div className="p-4">
          <Meter />
          <Switches halnyConditions={halnyConditions} />
        </div>
        <div className="p-4">
          <Description />
        </div>
      </div>
    </>
  );
}

// data
type Props = {
  halnyConditions: HalnyConditions;
  data: {
    valley: Weather;
    peak: Weather;
    valleyHistorical: HistoricalWeather;
    lastFiveValley: Array<HistoricalWeather>;
    lastFivePeak: Array<HistoricalWeather>;
  };
};

export async function getServerSideProps(context: NextPageContext) {
  const [valley, peak, valleyHistorical, ...rest] = await Promise.all([
    fetchWeather({ lat: 49.2992, lon: 19.9496 }),
    fetchWeather({ lat: 49.2322, lon: 19.9818 }),
    fetchHistoricalWeather({
      lat: 49.2992,
      lon: 19.9496,
      time: getUnixTime(sub(new Date(), { hours: 1 })),
    }),
  ]);

  const halnyConditions = getHalnyConditions(
    peak.current,
    valley.current,
    valleyHistorical.data[0]
  );

  return {
    props: {
      halnyConditions,
      data: {
        valley,
        peak,
        valleyHistorical,
      },
    }, // will be passed to the page component as props
  };
}

async function fetchWeather({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}): Promise<Weather> {
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=9c52bb70a33b299b2425efd1c553b28c&units=metric`
  );
  return res.json();
}

async function fetchHistoricalWeather({
  lat,
  lon,
  time,
}: {
  lat: number;
  lon: number;
  time: number;
}): Promise<HistoricalWeather> {
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&exclude=minutely,hourly,daily,alerts&appid=9c52bb70a33b299b2425efd1c553b28c&units=metric`
  );
  return res.json();
}
