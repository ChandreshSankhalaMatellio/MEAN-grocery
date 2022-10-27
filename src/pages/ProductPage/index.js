import React from "react";
import SubCategoryList from "../../components/CategoryList/SubCategory";
import Navbar from "../../components/NavBar";
import ProductList from "../../components/ProductList";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="row mt-5">
          <div className="col col-lg-3">
                <SubCategoryList />
          </div>
          <div className="col">
                <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
