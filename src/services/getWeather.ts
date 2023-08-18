import AxiosInstance from "../lib/instance";
import { AxiosResponse } from "axios";


export const getCitiesData = (lat:string, lon:string, API:string):Promise<AxiosResponse<any>> => 
      AxiosInstance.get(`forecast?lat=${lat}&lon=${lon}&appid=${API}`);