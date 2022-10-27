import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import EndPoint from "../../api/Endpoint";
import Loading from "../Loading";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const {catId} = useParams();
  const [products, setProducts] = useState([]);
  const [loadingFlag, setLoadingFlag] = useState(true);

  useEffect(() => {
    fetchData();
  }, [catId]);

  const fetchData = () => {
    axios
      .get(EndPoint.PRODUCTS_URL+catId)
      .then((response) => {setProducts(response.data.data); setLoadingFlag(false); })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h4 className="text-center">All Products</h4>
      <div class="row">
        { loadingFlag?<Loading />: products.length >0?products.map(item => <Product data={ item } />):<div>No Result</div>}
      </div>
    </div>
  );
};
export default ProductList;
