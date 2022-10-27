import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Constants from "../../api/Constants";
import EndPoint from "../../api/Endpoint";

const ProductDetailElement = () => {
  const {productId} = useParams()
  const [product, setProduct] = useState({});
  const { productName,_id, image,quantity, unit, price, mrp,description } = product;
  useEffect(() => {
    fetchData();
  }, [productId]);

  const fetchData = () => {
    axios
      .get(EndPoint.PRODUCT_DETAIL_URL + productId)
      .then((response) => setProduct(response.data.data))
      .catch((e) => console.log(e));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{productName}</h3>
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-6">
              <div className="white-box text-center">
                <img
                  src={ Constants.IMAGE_URL+ image } 
                  className="width-100"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-6">
              <h4 className="box-title mt-5">Product description</h4>
              <p>{description}</p>
              <h2 className="mt-5">
                ${price}<small className="mrp">(${mrp})</small>
              </h2>
           
              <button className="btn btn-primary btn-rounded">Buy Now</button>
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailElement;
