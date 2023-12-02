import React from 'react';
import Header from '../HeaderFooter/Header';
import MainContent from './MainContent';
import Footer from '../HeaderFooter/Footer';


function HomePage() {
  return (
    <div className="container-fluid">
      {/* <Header/> */}
      <MainContent />
      {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
