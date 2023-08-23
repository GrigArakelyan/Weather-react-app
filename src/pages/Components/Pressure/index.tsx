import React, { FC } from "react"
import  PressureIcon  from "../../../img/icons/fog.svg"
import { PropsData } from "../../../types/getWeatherData"

const Pressure:FC<PropsData> = ({data}) => {

   return(
      <div className="wind_item">
         <div className="wind">
            <div className="icon_div">
               <img className="icon" src={PressureIcon} />
            </div>
            <p className="subtitle">Pressure</p>
         </div>
         <div className="wind_speed_div">
            <div className="wind_speed">
               {`${data?.list[0].main.pressure} mBar`} 
            </div>
         </div>
      </div>
   )
}

export default Pressure