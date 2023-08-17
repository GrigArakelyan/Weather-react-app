import React, { FC } from "react"
import { DayWeatherData, PropsData } from "../../types/GetWeatherData"
import "./HourlyForecast.scss"
import { ReactComponent as Sunset } from "../../img/icons/sunset.svg"
import WindItem from "../WindItem"
import MinMaxTemp from "../MinMaxTemp"

const HourlyForecast:FC<PropsData> = ({data, dayData, addZero}) => {

// console.log(dayData, "day data") /////// console.log

const timezon = data&& data?.city.timezone / 3600;
const msToTime = (duration: number | undefined) => {
   if(duration != undefined && timezon){
      let minutes = Math.floor((duration / (1000 / 60)) % 60),
         hours = Math.floor((duration / (1000 / 60 / 60)) % 24);
         // console.log(hours, "jam")
         // console.log(timezon, "timezon")
      return addZero(hours) + ":" + addZero(minutes);
   }
 }

//  console.log(msToTime(data?.city.sunrise), "asdasd")


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
                     {`${msToTime(data?.city.sunrise)} - ${msToTime(data?.city.sunset)}`}
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

export default HourlyForecast