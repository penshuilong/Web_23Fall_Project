import React from "react";
import HomePage from "./userMainPage/MainContent";
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
import UserTable from "./user/table";
import CurrentUser from "./user/currentUser";
import { Provider } from "react-redux";
import store from "./store";
import UserDetails from "./user/details";


import SellerMainPage from "./sellerMainPage";
import ManagerMainPage from "./managerMainPage";
function Project() {
  const [key, setKey] = React.useState("home");
  return (
<<<<<<< HEAD
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
          <Route path="/Account" element={<Account />} />
          <Route path="/Account/:id" element={<Account />} />
          {/* 这玩意是给manager删除非法用户以及更改非法用户名的的 */}
          <Route path="/admin/users" element={<UserTable />} />

          <Route path="/managermainpage" element={<ManagerMainPage />} />
          <Route path="/sellermainpage" element={<SellerMainPage />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
=======
    <Provider store={store}>
>>>>>>> fd5ba47a73a33f02a50ce87647baabe604968404

      <CurrentUser>
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
              <Route path="/Account" element={<Account />} />
              <Route path="/Account/:id" element={<Account />} />
              <Route path="/admin/users" element={<UserTable />} />
              <Route path="/userdetail/:id" element={<UserDetails />} />


              <Route path="/productdetail/:mealId" element={<ProductDetail />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>

            <div>
              <Footer />
            </div>


            {/* <HomePage /> */}
          </div>
        </div>

      
    </CurrentUser>

    </Provider >
  );
}
export default Project;
