import { GetWeatherData } from "./GetWeatherData";

export type InitialState = {
   data: GetWeatherData | undefined;
   loading: boolean;
   error: string | undefined;
}