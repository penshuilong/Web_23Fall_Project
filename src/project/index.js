import React from "react";
import HomePage from "./userMainPage";
import Login from "./login";
import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import ProductDetail from "./ProductDetail";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";
import SellerMainPage from "./sellerMainPage";
import ManagerMainPage from "./managerMainPage";
function Project() {
  return (
    <div>
      <div >
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />



          <Route path="/managermainpage" element={<ManagerMainPage />} />
          <Route path="/sellermainpage" element={<SellerMainPage />} />
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
