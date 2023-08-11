import React, { FC } from "react"
import { Outlet, useNavigate } from "react-router"
import "./layout.scss"

const PublicLayout:FC = () => {
   const cities = ["London", "Tokyo", "Paris", "Berlin", "NewYork"];
   const navigate = useNavigate();
   return (
      <>
         <header className="header">           
           <div className="h1_div">
            <h1 className="h1_title">5 Days Weather Forecast</h1> 
           </div>
            <div className="cities_div">
               {/* <h3 className="h3_subTitle">Please Choose Country</h3> */}
               <div className="cities">{cities.map((city) => (
                  <h4 key={city} onClick={() => navigate(`/${city}`)} className="h4_city">{city}</h4>
               ))}
            </div>  
            </div>       
         </header>
         <div className="container">
            <Outlet />
         </div>
         <footer className="footer"></footer>
      </>
   )
   
}

export default PublicLayout