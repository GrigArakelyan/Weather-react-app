import React, {FC} from "react";
import "./DailyForecast.scss"
import { PropsData } from "../../types/GetWeatherData";
import { ReactComponent as Logo } from "../../img/icons/bizzard.svg";

const DailyForecast:FC<PropsData> = ({data, addZero}) => {

   const daysData = data?.list.slice(0, 5);
   // console.log(daysData) /////console.log


      
   
   return (
      <div key={data?.city.id} className="DailyForecast">
         <h3 className="h3_title">Hourly Forecast</h3>
         <div className="days_card">
            {daysData?.map((day) => 
               <div className="day_card">
               <div className="day">
                  {new Date().getDay() === new Date(day.dt_txt).getDay()? "Today" : "Tomorrow"}
               </div>
               <div className="day_time">
                  { 
                  addZero(new Date(day.dt_txt).getHours()) 
                     + ":" + 
                  addZero(new Date(day.dt_txt).getMinutes())
                  }
               </div>
               <div className="temperature">
                  <p className="temp">
                     {Math.floor(day?.main.temp - 273.15)}
                  </p>
                  <p className="temp_o">o</p>
                  <p className="temp_C">C</p>
               </div>
               <div className="img_div">
                  <Logo className="svg"/>
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