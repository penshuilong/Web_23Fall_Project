import React from 'react';
import LoginPage from './LoginPage';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';


function Login() {
  return (
    <div className="container-fluid">
      <Header/>
      <LoginPage />
      <Footer/>
    </div>
  );

}


export default Login;
