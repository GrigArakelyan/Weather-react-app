import axios from "axios"
import  AxiosInstance  from "../../lib/instance"
import { FC } from "react";
import React from "react";
import { useAppSelector } from "../../hook/useAppSelector";
import { selectLondonWeatherData } from "../../store/selectores/CitiesSelector";
import { LondonGetWeather } from "../../urls/LondonGetWeather";


const London:FC = () => {

   const {data} = useAppSelector(selectLondonWeatherData)
   console.log(data, "london Data");

   // AxiosInstance.get(LondonGetWeather)
   // .then(({data}) => {console.log(data, "data london london.tsx")})
   // .catch(error => console.error(error))


   return (
      <div>
         London
      </div>
      )
   
}

export default London