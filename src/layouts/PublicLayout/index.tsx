import React, { FC } from "react"
import { Outlet, useNavigate } from "react-router"
import "./layout.scss"
import { NavLink } from "react-router-dom";

const PublicLayout:FC = () => {
   const cities = ["London", "Tokyo", "Paris", "Berlin", "NewYork"];
   const navigate = useNavigate();
   const classActive: (isActive: any) => string = ({isActive}) => isActive ? "active" : "h4_city" 
   return (
      <>
         <header className="header">           
           <div className="h1_div">
            <h1 className="h1_title">5 Days Weather Forecast</h1> 
           </div>
            <div className="cities_div">
               <div className="cities">{cities.map((city) => (
                  <NavLink to={`/${city}`} className={classActive}>
                     <h4 key={city} >{city}</h4>
                  </NavLink>
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