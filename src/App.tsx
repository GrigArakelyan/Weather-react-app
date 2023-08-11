import React, { FC } from "react";
import "./App.scss";
import { Route, Routes, useParams } from "react-router";
import PublicLayout from "./layouts/PublicLayout";
import London from "./pages/London/London";
import Berlin from "./pages/Berlin/Berlin";
import Tokyo from "./pages/Tokyo/Tokyo";
import Paris from "./pages/Paris/Paris";
import NewYork from "./pages/NewYork/NewYork";
import Cities from "./pages/Cities/Cities";



const App:FC = () => {

  // const {name} = useParams()
  // console.log(name)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/:name" element={<Cities />}/>
          {/* <Route path="London" element={<London />}/>
          <Route path="Berlin" element={<Berlin/>}/>
          <Route path="Tokyo" element={<Tokyo/>}/>
          <Route path="Paris" element={<Paris/>}/>
          <Route path="NewYork" element={<NewYork/>}/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
