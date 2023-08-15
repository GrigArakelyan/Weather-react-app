import React, { FC } from "react"
import { PropsData } from "../../types/GetWeatherData"
import { ReactComponent as Temp } from "../../img/icons/highTemperature.svg"
import "./MinMaxTemp.scss"

const MinMaxTemp:FC<PropsData> = ({data}) => {

   return (
      <div className="weather_item">
      <div className="temp_max_min">
         <div className="icon_div">
            <Temp className="icon"/>
         </div>
         <div className="subtitle">Min. / Max.</div>
      </div>
      <div className="temp">
         <div className="temp_min_max">
            <p className="temperature">
               {data?.list[0].main.temp_min && Math.floor(data?.list[0].main.temp_min - 273.15)}
            </p>
            <p className="temper_o">o</p>
         </div>
         <p>/</p>
         <div className="temp_min_max">
            <p className="temperature">
               {data?.list[0].main.temp_max && Math.floor(data?.list[0].main.temp_max - 273.15)}
            </p>
            <p className="temper_o">o</p>
         </div>
      </div>
   </div>
   )
}

export default MinMaxTemp