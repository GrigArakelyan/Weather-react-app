
export interface GetWeatherData {
   city: {
      cord: {
         lat: number;
         lon:number;
      };
      country: string;
      name: string;
      population: number;
      sunrise: number;
      sunset: number;
      timezone: number;
      id: number;
      cnt: number;
      cod: string;
   };
   list: {
      clouds: {all: number};
      dt: number;
      dt_txt: number;
      main:{
         feels_like: number;
         grnd_level: number;
         humidity: number;
         pressure: number;
         sea_level: number;
         temp: number;
         temp_kf: number;
         temp_max: number;
         temp_min: number;
      }
      pop: number;
      sys: {pod: string}
      visibility: number;
      weather: {
         id: number;
         main: string;
         description: string;
         icon: string;
      }[];
      wind:{
         speed: number;
         deg: number;
         gust: number;
      }
   }[]
}

export interface PropsData {
   data: GetWeatherData;
   dayData?: DayWeatherData[];
   dateNow?: string;
   addZero?: any;
}


export interface DayWeatherData {
   clouds: {
      all: number
   };
   dt: number;
   dt_txt: number;
   main:{
      feels_like: number;
      grnd_level: number;
      humidity: number;
      pressure: number;
      sea_level: number;
      temp: number;
      temp_kf: number;
      temp_max: number;
      temp_min: number;
   }
   pop: number;
   sys: {pod: string}
   visibility: number;
   weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
   }[];
   wind:{
      speed: number;
      deg: number;
      gust: number;
   }
};

export type DaysTypeArray = {
   day1: DayWeatherData[];
   day2: DayWeatherData[];
   day3: DayWeatherData[];
   day4: DayWeatherData[];
   day5: DayWeatherData[];
}

// export type DaysTypeArray = Array<DayWeatherData[]>