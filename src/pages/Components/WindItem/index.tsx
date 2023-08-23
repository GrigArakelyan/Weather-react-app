import React, { FC } from "react"
import "./WindItem.scss"
import { PropsData } from "../../../types/GetWeatherData"
import Wind  from "../../../img/icons/blowing_sand.svg"

const WindItem:FC<PropsData> = ({data}) => {

   return (
      <div className="wind_item">
         <div className="wind">
            <div className="icon_div">
               <img className="icon" src={Wind} />
            </div>
            <p className="subtitle">Wind</p>
         </div>
         <div className="wind_speed_div">
            <div className="wind_speed">
               {`${data?.list[0].wind.speed} km/h`} 
            </div>
         </div>
      </div>
   )
}

export default WindItem