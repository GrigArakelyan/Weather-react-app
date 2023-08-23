import AxiosInstance from "../lib/instance";
import { AxiosResponse } from "axios";


export const getCitiesData = (lat:string, lon:string):Promise<AxiosResponse<any>> => 
      AxiosInstance.get(`forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`);