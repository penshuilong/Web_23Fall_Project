import React from "react";
import HomePage from "./userMainPage";
import Login from "./login";
import { Route, Routes } from "react-router-dom";
function Project() {
    return (
      <div>

        <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
 
          
          <HomePage/>
        </div>
      </div>
    );
  }
  export default Project;
  