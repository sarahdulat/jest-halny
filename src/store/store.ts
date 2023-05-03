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
    isLeewardWind: isLeewardWind(peak.wind_deg),
    isWindGustOver32: isWindGustOver32(peak.wind_gust),
    isWindOver10: isWindOver10(peak.wind_speed),
    isAirTempIncreasing: isAirTempIncreasing(
      valley.temp,
      historicalValley.temp
    ),
    isHumidityDecreasing: isHumidityDecreasing(
      valley.humidity,
      historicalValley.humidity
    ),
  };
}

export function isLeewardWind(wind_deg: number) {
  return wind_deg >= 90 && wind_deg <= 270;
}

export function isWindOver10(wind_speed: number) {
  return wind_speed >= 10;
}

export function isWindGustOver32(wind_gust: number) {
  return wind_gust >= 32;
}

export function isAirTempIncreasing(
  current_temp: number,
  historical_temp: number
) {
  return current_temp > historical_temp;
}

export function isHumidityDecreasing(
  current_humidity: number,
  historical_humidity: number
) {
  return current_humidity / historical_humidity <= 0.7;
}
