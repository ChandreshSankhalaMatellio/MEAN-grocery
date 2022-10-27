import React from "react";
import Category from "../../components/CategoryList";
import Header from "../../components/Header";
import Navbar from "../../components/NavBar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <Category />
      </div>
    </>
  );
};
export default HomePage;
