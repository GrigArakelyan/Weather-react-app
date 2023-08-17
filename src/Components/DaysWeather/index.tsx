import React, { FC } from "react"
import "./DaysWeather.scss"
import { ReactComponent as Logo } from "../../img/icons/bizzard.svg";
import { DaysTypeArray, PropsData } from "../../types/GetWeatherData";


const DaysWeather:FC<PropsData> = ({data}) => {

   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   const days:DaysTypeArray = {
      day1:[],
      day2:[],
      day3:[],
      day4:[],
      day5:[],
      day6:[],
   }
   

   const day1 = new Date(); day1.setDate(day1.getDate() + 1);
   const day2 = new Date(); day2.setDate(day2.getDate() + 2);
   const day3 = new Date(); day3.setDate(day3.getDate() + 3);
   const day4 = new Date(); day4.setDate(day4.getDate() + 4);
   const day5 = new Date(); day5.setDate(day5.getDate() + 5);
   const day6 = new Date(); day6.setDate(day6.getDate() + 6);


   data?.list.filter((elem) => {
      if(new Date(elem.dt_txt).toDateString() === new Date().toDateString()){
         days.day1 = [...days.day1, elem];
      }
      if(new Date(elem.dt_txt).toDateString() === day1.toDateString()){
         days.day2 = [...days.day2, elem];
      }
      if(new Date(elem.dt_txt).toDateString() === day2.toDateString()){
         days.day3 = [...days.day3, elem];
      }
      if(new Date(elem.dt_txt).toDateString() === day3.toDateString()){
         days.day4 = [...days.day4, elem];
      }
      if(new Date(elem.dt_txt).toDateString() === day4.toDateString()){
         days.day5 = [...days.day5, elem];
      }
      if(new Date(elem.dt_txt).toDateString() === day5.toDateString()){
         days.day6 = [...days.day6, elem];
      }
   })    
      
   console.log(days, "odjihadosuf");
   

   return (
      <div  className="DailyForecast">
      <h3 className="h3_title">5 Days Weather</h3>
      <div className="days_card">
         {/* {daysData?.map((day) =>  */}
            <div className="day_card">
            <div className="day">
               {/* {data &&
                  addZero(new Date(day.dt_txt).getHours()) 
                  + ":" + 
                  addZero(new Date(day.dt_txt).getMinutes())
               } */}
            </div>
            <div className="temperature">
               <p className="temp">
                  {/* {Math.floor(day?.main.temp - 273.15)} */}
               </p>
               <p className="temp_o">o</p>
               <p className="temp_C">C</p>
            </div>
            <div className="min_temperature">
               {/* {Math.floor(day?.main.temp_min - 273.15)} */}
            </div>
            <div className="img_div">
               <Logo className="svg"/>
            </div>
            <div className="rain_percent">
               {/* {`${day.main.humidity} %`} */}
            </div>
         </div>
         {/* )} */}
      </div>
   </div>
   )
}

export default DaysWeather