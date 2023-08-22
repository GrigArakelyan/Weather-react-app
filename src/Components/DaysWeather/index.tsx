import React, { FC } from "react"
import "./DaysWeather.scss"
import { DayWeatherData, PropsData } from "../../types/GetWeatherData";
import DayCard from "./Day1Card";


const DaysWeather:FC<PropsData> = ({data}) => {

   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
   const day1Date = new Date(); day1Date.setDate(day1Date.getDate() + 1);
   const day2Date = new Date(); day2Date.setDate(day2Date.getDate() + 2);
   const day3Date = new Date(); day3Date.setDate(day3Date.getDate() + 3);
   const day4Date = new Date(); day4Date.setDate(day4Date.getDate() + 4);

   const day1:Array<DayWeatherData> = [];
   const day2:Array<DayWeatherData> = [];
   const day3:Array<DayWeatherData> = [];
   const day4:Array<DayWeatherData> = [];
   const day5:Array<DayWeatherData> = [];

   data?.list.forEach((elem:DayWeatherData) => {
      if(new Date(elem.dt_txt).toDateString() === new Date().toDateString()){
         day1.push(elem);
      }
      if(new Date(elem.dt_txt).toDateString() === day1Date.toDateString()){
         day2.push(elem)
      }
      if(new Date(elem.dt_txt).toDateString() === day2Date.toDateString()){
         day3.push(elem)
      }
      if(new Date(elem.dt_txt).toDateString() === day3Date.toDateString()){
         day4.push(elem)
      }
      if(new Date(elem.dt_txt).toDateString() === day4Date.toDateString()){
         day5.push(elem)
      }
   }) 

   return (
      <div key={data?.city.id}  className="DailyForecast">
      <h3 className="h3_title">5 Days Weather</h3>
      <div className="days_card">
         <DayCard day={day1} daysName={dayNames}/>
         <DayCard day={day2} daysName={dayNames}/>
         <DayCard day={day3} daysName={dayNames}/>
         <DayCard day={day4} daysName={dayNames}/>
         <DayCard day={day5} daysName={dayNames}/>
      </div>
   </div>
   )
}

export default DaysWeather