import { GetWeatherData } from "./getWeatherData";

export interface InitialState  {
   data: GetWeatherData;
   loading: boolean;
   error: string | undefined;
}