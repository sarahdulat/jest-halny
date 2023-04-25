export type Weather = {
  current: WeatherDetail;
} & WeatherLocation;

export type HistoricalWeather = {
  data: Array<WeatherDetail>;
} & WeatherLocation;

export type WeatherDetail = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  snow?: { "1h": number };
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};

export type WeatherLocation = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};
