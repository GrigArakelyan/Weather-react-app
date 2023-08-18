import React, { FC } from "react"
import { PropsData } from "../../types/GetWeatherData"

const DaysWeatherCard:FC<PropsData> = ({data, addZero}) => {

   const timezon = data&& data?.city.timezone / 3600;
const msToTime = (duration: number | undefined) => {
   if(duration && timezon){
      let minutes = Math.floor((duration / (1000 / 60)) % 60),
         hours = Math.floor((duration / (1000 / 60 / 60)) % 24);
      return addZero(hours) + ":" + addZero(minutes);
   }
 }

   return (
      <>
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
            <img className="icon" src={`https://openweathermap.org/img/wn/${data?.list[0].weather[0].icon}@2x.png`}/>
            </div>
            <div className="sunset_div">
               <div className="sunrise">
                  {`${msToTime(data?.city.sunrise)} - ${msToTime(data?.city.sunset)}`}
               </div>
            </div>
         </div>
      </>
   )
}

export default DaysWeatherCard