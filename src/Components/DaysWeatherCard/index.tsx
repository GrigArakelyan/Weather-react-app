import React, { FC } from "react"
import { PropsData } from "../../types/GetWeatherData"
import { ReactComponent as Sun } from "../../img/icons/suny.svg";
import { addZero } from "../../helpers/functions";
import moment from "moment"

const DaysWeatherCard:FC<PropsData> = ({data}) => {

   const timezon = data&& data?.city.timezone / 3600;
   const sunRise = moment().set("millisecond", data?.city.sunrise).format("HH:mm").toString();
   const sunSet = moment().set("millisecond",data?.city.sunrise + data?.city.sunset).format("HH:mm").toString();

   // console.log(sunRise, 'sunrise')
   // console.log(sunSet, 'sunrise')

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
            <Sun className="icon" />
            </div>
            <div className="sunset_div">
               <div className="sunrise">
                  {sunRise + " - " + sunSet}
               </div>
            </div>
         </div>
      </>
   )
}

export default DaysWeatherCard