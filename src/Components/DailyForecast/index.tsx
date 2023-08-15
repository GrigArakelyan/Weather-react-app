import React, {FC} from "react";
import "./DailyForecast.scss"
import { PropsData } from "../../types/GetWeatherData";
import { ReactComponent as Logo } from "../../img/icons/bizzard.svg";

const DailyForecast:FC<PropsData> = ({data}) => {

   return (
      <div key={data?.city.id} className="DailyForecast">
         <h3 className="h3_title">Daily Forecast</h3>
         <div className="days_card">
            <div className="day_card">
               <div className="day">Today</div>
               <div className="temperature">
                  <p className="temp">
                     {/* {data?.main?.temp && Math.floor(data.main.temp - 273.15)} */}
                  </p>
                  <p className="temp_o">o</p>
                  <p className="temp_C">C</p>
               </div>
               <div className="min_temperature">25</div>
               <div className="img_div">
                  <Logo className="svg"/>
               </div>
               <div className="rain_percent">5%</div>
            </div>
         </div>
      </div>
   )
}

export default DailyForecast