import React, { FC } from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import PublicLayout from "./layouts/PublicLayout";
import Cities from "./pages/Cities/Cities";



const App:FC = () => {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/:name" element={<Cities />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
