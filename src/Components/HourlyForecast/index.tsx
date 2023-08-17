import React, { FC } from "react"
import {  PropsData } from "../../types/GetWeatherData"
import "./HourlyForecast.scss"
import WindItem from "../WindItem"
import MinMaxTemp from "../MinMaxTemp"
import Humidity from "../Humidity"
import Pressure from "../Pressure"
import DaysWeatherCard from "../DaysWeatherCard"

const HourlyForecast:FC<PropsData> = ({data, addZero}) => {


   return (
      <div key={data?.city.id} className="Days_weather">
         <div className="days_weather_title">
            <h4 className="h4_title">Weather for today</h4>
         </div>
         <div className="days_weather_card">
            <DaysWeatherCard data={data} addZero={addZero}/>
         </div>
         <div className="weather_items">
            <MinMaxTemp data={data} />
            <WindItem data={data}/>
            <Humidity data={data} />
            <Pressure data={data} />
         </div>
      </div>
   )
}

export default HourlyForecast