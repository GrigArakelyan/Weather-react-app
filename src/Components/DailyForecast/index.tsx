import React, {FC} from "react";
import "./DailyForecast.scss"
import { PropsData } from "../../types/GetWeatherData";
import { ReactComponent as Logo } from "../../img/icons/bizzard.svg";
import { addZero } from "../../helpers/functions";

const DailyForecast:FC<PropsData> = ({data}) => {

   const daysData = data?.list.slice(0, 5);
 
   return (
      <div key={data?.city.id} className="DailyForecast">
         <h3 className="h3_title">Hourly Forecast</h3>
         <div className="days_card">
            {daysData?.map((day, index) => 
               <div key={index} className="day_card">
               <div className="day">
                  {new Date().getDay() === new Date(day.dt_txt).getDay()? "Today" : "Tomorrow"}
               </div>
               <div className="day_time">
                  {index === 0 ? addZero(new Date().getHours())+ ":" + addZero(new Date().getMinutes()) :
                  addZero(new Date(day.dt_txt).getHours()) + ":" + addZero(new Date(day.dt_txt).getMinutes())}
               </div>
               <div className="temperature">
                  <p className="temp">
                     {Math.floor(day?.main.temp - 273.15)}
                  </p>
                  <p className="temp_o">o</p>
                  <p className="temp_C">C</p>
               </div>
               <div className="img_div">
                  <img className="svg" src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
               </div>
               <div className="rain_percent">
                  {`${day.main.humidity} %`}
               </div>
            </div>
            )}
         </div>
      </div>
   )
}

export default DailyForecast