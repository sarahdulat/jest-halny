import Description from "@/src/components/Description";
import Meter from "@/src/components/Meter";
import Navbar from "@/src/components/Navbar";
import Conditions from "@/src/components/Conditions";
import { HistoricalWeather, Weather } from "@/src/types/weather";
import { NextPageContext } from "next";
import { getUnixTime, sub } from "date-fns";
import { Photo, createClient } from "pexels";
import {
  getHalnyConditions,
  getHalnyProbability,
  HalnyConditions,
  HalnyProbability,
} from "@/src/store/store";
export default function Index({
  photo,
  data,
  halnyConditions,
  halnyProbability,
}: Props) {
  return (
    <div className="bg-[url('/images/pexels-miguel-á-padriñán-19670.jpg')] bg-no-repeat bg-cover bg-blend-multiply">
      <Navbar />
      <div className="grid grid-cols-2">
        <div className="p-16 pt-0 overflow-auto h-[calc(100vh_-_175px)]">
          <Meter halnyProbability={halnyProbability} />
          <Conditions data={data} halnyConditions={halnyConditions} />
        </div>
        <div className="p-16 pt-0 overflow-auto h-[calc(100vh_-_175px)]">
          <Description photo={photo} />
        </div>
      </div>
    </div>
  );
}

// types
type Props = {
  halnyConditions: HalnyConditions;
  halnyProbability: HalnyProbability;
  photo: Photo;
  data: {
    valley: Weather;
    peak: Weather;
    valleyHistorical: HistoricalWeather;
  };
};

// fetching data
export async function getServerSideProps(context: NextPageContext) {
  const pexels = createClient(
    "wy0v8raoQwmInGWdV7LXKqXZApGek4W9o9fuEvcxNoBVQ87a6sjpoICm"
  );

  const [valley, peak, valleyHistorical, photo] = await Promise.all([
    fetchWeather({ lat: 49.2992, lon: 19.9496 }),
    fetchWeather({ lat: 49.2322, lon: 19.9818 }),
    fetchHistoricalWeather({
      lat: 49.2992,
      lon: 19.9496,
      time: getUnixTime(sub(new Date(), { hours: 1 })),
    }),
    pexels.photos.show({ id: 1311445 }),
  ]);

  // calling store functions
  const halnyConditions = getHalnyConditions(
    peak.current,
    valley.current,
    valleyHistorical.data[0]
  );

  const halnyProbability = getHalnyProbability(halnyConditions);

  return {
    props: {
      halnyConditions,
      halnyProbability,
      photo,
      data: {
        valley,
        peak,
        valleyHistorical,
      },
    }, // will be passed to the page component as props
  };
}

// data fetching
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
