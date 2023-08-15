import React, { FC } from "react"
import { PropsData } from "../../types/GetWeatherData"
import "./DaysWeather.scss"
import { ReactComponent as Sunset } from "../../img/icons/sunset.svg"
import WindItem from "../WindItem"
import MinMaxTemp from "../MinMaxTemp"

const DaysWeather:FC<PropsData> = ({data}) => {

   return (
      <div key={data?.city.id} className="Days_weather">
         <div className="days_weather_title">
            <h4 className="h4_title">Weather for today</h4>
         </div>
         <div className="days_weather_card">
            <div className="temperature">
               <p className="subtitle">Feels like</p>
               <div className="temperature_div">
                  <p className="temperature">
                     {data?.list[0].main.temp && Math.floor(data?.list[0].main.temp - 273.15)}
                  </p>
                  <p className="temp">o</p>
                  <p className="temopC">C</p>
               </div>
            </div>
            <div className="sunset_div_Img">
               <div className="sunSet_img">
                  <Sunset />
               </div>
               <div className="sunset_div">
                  <div className="sunrise">
                     {data?.city.sunrise}
                  </div>
                  <div className="sunset">
                     {data?.city.sunset}
                  </div>
               </div>
            </div>
         </div>
         <div className="weather_items">
            <MinMaxTemp data={data} />
            <WindItem data={data}/>
         </div>
      </div>
   )
}

export default DaysWeather