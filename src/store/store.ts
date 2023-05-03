import { WeatherDetail } from "../types/weather";

/**
 * The conditions for halny, at least three of the five need to be true.
 */
export type HalnyConditions = {
  isLeewardWind: boolean;
  isWindOver10: boolean;
  isWindGustOver32: boolean;
  isAirTempIncreasing: boolean;
  isHumidityDecreasing: boolean;
};

export function getHalnyConditions(
  peak: WeatherDetail,
  valley: WeatherDetail,
  historicalValley: WeatherDetail
): HalnyConditions {
  return {
    isLeewardWind: getLeewardWind(peak.wind_deg),
    isWindGustOver32: getWindGustOver32(peak.wind_gust),
    isWindOver10: getWindOver10(peak.wind_speed),
    isAirTempIncreasing: getAirTempIncreasing(
      valley.temp,
      historicalValley.temp
    ),
    isHumidityDecreasing: getHumidityDecreasing(
      valley.humidity,
      historicalValley.humidity
    ),
  };
}

export function getLeewardWind(wind_deg: number) {
  return wind_deg >= 90 && wind_deg <= 270;
}

export function getWindOver10(wind_speed: number) {
  return wind_speed >= 10;
}

export function getWindGustOver32(wind_gust: number) {
  return wind_gust >= 32;
}

export function getAirTempIncreasing(
  current_temp: number,
  historical_temp: number
) {
  return current_temp > historical_temp;
}

export function getHumidityDecreasing(
  current_humidity: number,
  historical_humidity: number
) {
  return current_humidity / historical_humidity <= 0.7;
}

/**
 * The probability in % of Halny
 */
export type HalnyProbability = number;

export function getHalnyProbability(halnyConditions: HalnyConditions) {
  return (
    Object.values(halnyConditions).filter((item) => item === true).length /
    Object.keys(halnyConditions).length
  );
}
