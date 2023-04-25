export type Weather = {
  current: string;
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  snow: { "1h": number };
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
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};

type ApiResponse<T> = {
  status: number;
  response: T;
};

type UserResponse = ApiResponse<{ email: string }>;
type WeatherResponse = ApiResponse<{ weatherData: Weather }>;
