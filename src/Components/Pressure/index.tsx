import React, { FC } from "react"
import { ReactComponent as Temp } from "../../img/icons/highTemperature.svg"
import { PropsData } from "../../types/GetWeatherData"

const Pressure:FC<PropsData> = ({data}) => {

   return(
      <div className="wind_item">
         <div className="wind">
            <div className="icon_div">
                  <Temp className="icon"/>
            </div>
            <p className="subtitle">Wind</p>
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