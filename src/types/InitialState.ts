import { GetWeatherData } from "./GetWeatherData";

export interface InitialState  {
   data: GetWeatherData;
   loading: boolean;
   error: string | undefined;
}