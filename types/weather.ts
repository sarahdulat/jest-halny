export type Weather = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    grnd_level: number;
    humidity: number;
    sea_level: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: { speed: number; deg: number; gust: number };
};

type ApiResponse<T> = {
  status: number;
  response: T;
};

type UserResponse = ApiResponse<{ email: string }>;
type WeatherResponse = ApiResponse<{ weatherData: Weather }>;
