import React, {FC} from "react"
import { PropsData } from "../../../types/getWeatherData"
import HumidityIcon  from "../../../img/icons/wet.svg"


const Humidity:FC<PropsData> = ({data}) => {


   return (
      <div className="wind_item">
         <div className="wind">
            <div className="icon_div">
               <img className="icon" src={HumidityIcon}/>
            </div>
            <p className="subtitle">Humidity</p>
         </div>
         <div className="wind_speed_div">
            <div className="wind_speed">
               {`${data?.list[0].main.humidity} %`} 
            </div>
         </div>
      </div>
   )
}

export default Humidity
