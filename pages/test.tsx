import Description from "@/components/Description";
import Meter from "@/components/Meter";
import Navbar from "@/components/Navbar";
import Switches from "@/components/Switches";
import { Weather } from "@/types/weather";
import { NextPageContext } from "next";

export default function TestPage({ data }: Props) {
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2">
        <div className="p-4">
          <Meter />
          <Switches data={data} />
        </div>
        <div className="p-4">
          <Description />
        </div>
      </div>
    </>
  );
}

// data
type Props = { data: { valley: Weather; peak: Weather } };

export async function getServerSideProps(context: NextPageContext) {
  const [valley, peak] = await Promise.all([
    fetchWeather({ lat: 49.2992, lon: 19.9496 }),
    fetchWeather({ lat: 49.2322, lon: 19.9818 }),
  ]);

  return {
    props: { data: { valley, peak } }, // will be passed to the page component as props
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
    `
https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=9c52bb70a33b299b2425efd1c553b28c&units=metric`
  );
  return res.json();
}
