import React, { FC } from "react"
import "./DaysWeather.scss"
import { DayWeatherData } from "../../types/GetWeatherData"


type PropDays = {
   day: DayWeatherData[];
   daysName: string[];
}

const DayCard:FC<PropDays> = ({day, daysName}) => {


    return ( 
      <div  className="day_card">
      <div className="day">
         {daysName[new Date(day[0]?.dt_txt).getDay()]}
      </div>
      <div className="temperature">
         <p className="temp">
            {Math.floor(day[0]?.main.temp_max - 273.15)}
         </p>
         <p className="temp_o">o</p>
         <p className="temp_C">C</p>
      </div>
      <div className="min_temperature">
         {Math.floor(day[0]?.main.temp_min - 273.15)}
      </div>
      <div className="img_div">
         {day[0] && <img className="svg" src={`https://openweathermap.org/img/wn/${day[0].weather[0].icon}@2x.png`}/>}
      </div>
      <div className="rain_percent">
         {`${day[0]?.main.humidity} %`}
      </div>
   </div>
   )
}

export default DayCard