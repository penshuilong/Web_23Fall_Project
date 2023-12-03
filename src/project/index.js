import React from "react";
import HomePage from "./userMainPage";
import Login from "./login";
import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import ProductDetail from "./ProductDetail";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Project() {
  const  [key, setKey] = React.useState("home");
  return (
    <div>
      <div >
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />





          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>

        <div>
          <Footer />
        </div>


        {/* <HomePage /> */}
      </div>
    </div>
  );
}
export default Project;
