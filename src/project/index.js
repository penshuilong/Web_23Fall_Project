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
import BuyerSignup from "./signup/buyer";
import SellerSignup from "./signup/seller";
import UserMainPageSearch from "./userMainPageSearch/search";



import store from "./store";
import { Provider } from "react-redux";
function Project() {
  const [key, setKey] = React.useState("home");
  return (
    <Provider store={store}>
      <div>
        <div >
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/buyersignup" element={<BuyerSignup />} />
            <Route path="/sellersignup" element={<SellerSignup />} />
            <Route path="/search" element={<UserMainPageSearch />} />





            <Route path="/productdetail/:mealId" element={<ProductDetail />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
          </Routes>

          <div>
            <Footer />
          </div>


          {/* <HomePage /> */}
        </div>
      </div>
    </Provider>
  );
}
export default Project;
