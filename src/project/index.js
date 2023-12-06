import React from "react";
import HomePage from "./userMainPage";
import Login from "./user/login";
import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import ProductDetail from "./ProductDetail";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BuyerSignup from "./user/buyer";
import SellerSignup from "./user/seller";
import UserMainPageSearch from "./userMainPageSearch/search";
import Account from "./user/account";

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
          <Route path="/buyersignup" element={<BuyerSignup />} />
          <Route path="/sellersignup" element={<SellerSignup/>} />
          <Route path="/search" element={<UserMainPageSearch/>} />
          <Route path="/Account" element={<Account/>} />





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
