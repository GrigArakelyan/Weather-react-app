import React, { FC } from "react"
import { PropsData } from "../../../types/GetWeatherData"
import { ReactComponent as Sun } from "../../../img/icons/suny.svg";
import moment from "moment"

const DaysWeatherCard:FC<PropsData> = ({data}) => {
   const sunRise = moment(data?.city?.sunrise * 1000).format("HH:mm");
   const sunSet = moment(data?.city?.sunset * 1000).format("HH:mm");

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