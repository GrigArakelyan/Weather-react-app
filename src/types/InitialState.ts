import { GetWeatherData } from "./GetWeatherData";

export interface InitialState  {
   data: GetWeatherData | undefined;
   loading: boolean;
   error: string | undefined;
}