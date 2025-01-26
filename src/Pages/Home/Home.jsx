import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import RowList from "../../Components/Rows/RowList/RowList";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
