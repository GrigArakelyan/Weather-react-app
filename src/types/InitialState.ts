import { GetWeatherData } from "./GetWeatherData";

export interface InitialState  {
   data: GetWeatherData | undefined;
   loading: boolean;
   error: string | undefined;
}


export interface InitialState2  {
   data: GetWeatherData;
   loading: boolean;
   error: string | undefined;
}