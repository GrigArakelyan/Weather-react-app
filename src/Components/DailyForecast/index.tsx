import React, {FC, useState} from "react";
import "./DailyForecast.scss"
import { GetWeatherData, PropsData } from "../../types/GetWeatherData";
import ArrowLeftIcon  from "../../img/arrowLeftIcon.png";
import ArrowRightIcon  from "../../img/arrowRightIcon.png";
import { addZero } from "../../helpers/functions";

const DailyForecast:FC<PropsData> = ({data}) => {

   const [sliceN, setSliceN] = useState(0);
   const [sliceM, setSliceM] = useState(5);
   const [daysData, setDaysData] = useState(data?.list.slice(sliceN, sliceM))

   const right = () => {
      if(data && sliceN <= data.list.length - 5 && sliceM <= data.list.length){
         setSliceN(sliceN + 5);
         setSliceM(sliceM + 5);
         setDaysData(data?.list.slice(sliceN, sliceM))
      } 
   }
   const left = () => {
      if(data && sliceN >= 0 && sliceM >= 5){
         setSliceN(sliceN - 5);
         setSliceM(sliceM - 5);
         setDaysData(data?.list.slice(sliceN, sliceM))
      } 
   }
 
   return (
      <div key={data?.city.id} className="DailyForecast">
         <h3 className="h3_title">Hourly Forecast</h3>
         <div className="days_card">
            <div className="arrow_div"
               onClick={left}
            >
               <img className="arrow_icon" src={ArrowLeftIcon} />
            </div>
            {daysData?.map((day, index) => 
               <div key={index} className="day_card">
               <div className="day">
                  {new Date(day.dt_txt).toDateString()}
               </div>
               <div className="day_time">
                  {addZero(new Date(day.dt_txt).getHours()) + ":" + addZero(new Date(day.dt_txt).getMinutes())}
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
            <div className="arrow_div"
               onClick={right}
            >
               <img className="arrow_icon" src={ArrowRightIcon} />
            </div>
         </div>
      </div>
   )
}

export default DailyForecast