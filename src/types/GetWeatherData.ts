
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
      dt_txt: Date;
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

export type PropsData = {
   data: GetWeatherData | undefined
}



// base: string;
//    clouds:{
//       all: number;
//    };
//    cod: number;
//    coord: {
//       lon: number;
//       lat: number;
//    };
//    dt: number;
//    id: number;
//    main:{
//       temp: number;
//       feels_like: number;
//       humidity: number;
//       pressure: number;
//       temp_max: number;
//       temp_min: number;
//    };
//    name: string;
//    sys: {
//       country: string;
//       id: number;
//       sunrise: number;
//       sunset: number;
//       type: number;
//    };
//    timezone: number;
//    visibility: number;
//    weather:{
//       description: string;
//       icon: string;
//       id: number;
//       main: string;
//    }[];
//    wind: {
//       speed: number;
//       deg: number;
//    }