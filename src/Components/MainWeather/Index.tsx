import React, { FC } from "react"
import "./MainWeather.scss"
import { PropsData } from "../../types/GetWeatherData"
import { ReactComponent as Icon } from "../../img/icons/cloud.svg"

const MainWeather:FC<PropsData> = ({data}) => {

   const day = new Date();
   const time = day.getHours() + " : " + day.getMinutes();

   return(
      <div key={data?.city.id} className="weather_card">
         <div className="weather_card_title_time">
            <h4 className="h4_title">{data?.city.name}</h4>
            <div className="time">
               {time}
            </div>
         </div>
         <div className="weather_item">
            <div className="weather_data">
               <div className="temperature_div">
                  <p className="temperature">
                     {data?.list[0].main.temp && Math.floor(data?.list[0].main.temp - 273.15)}
                  </p>
                  <p className="temp">o</p>
                  <p className="temopC">C</p>
               </div>
                 <div className="weather_main" >
                  
                  </div>
               <div className="max_min_temp">
                  <div className="temperature_div">
                     <p className="day_temp">
                        <span className="temp_subTitle">Day</span>
                        <span className="temp_num">
                           {data?.list[0].main.temp_max && Math.floor(data?.list[0].main.temp_max - 273.15)}
                        </span>
                     </p>
                     <p className="temp">o</p>
                     <p className="temopC">C</p>
                  </div>
                  {/* <div className="temperature_div">
                     <p className="day_temp">
                        <span className="temp_subTitle">Night</span>
                        <span className="temp_num">
                        {data?.list[0].main.temp_min && Math.floor(data?.list[0].main.temp_min - 273.15)}
                        </span>
                     </p>
                     <p className="temp">o</p>
                     <p className="temopC">C</p>
                  </div> */}
               </div>
            </div>
         <div className="weathet_icon">
            <Icon className="icon"/>
         </div>
         </div>
      </div>
   )
}

export default MainWeather