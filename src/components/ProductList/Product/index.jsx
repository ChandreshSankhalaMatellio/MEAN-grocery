import React from "react";
import { Link } from "react-router-dom";
import Constants from "../../../api/Constants";

const Product = (props) => {
  const { productName,_id, image,quantity, unit, price, mrp } = props.data;
  return (
   

          <div class="col-md-8 col-lg-6 col-xl-4 mb-5">
            <div class="card">
              <div
                class="bg-image hover-overlay  text-center ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light"
              >
                <img
                  src={ Constants.IMAGE_URL+ image } 
                  class="img-fluid"
                  alt={_id}
                />
                <a href="#!">
                  <div class="mask"></div>
                </a>
              </div>
              <div class="card-body pb-0">
                <div class="d-flex justify-content-between">
                  <div>
                    <p>
                      <Link to={'/product/detail/'+_id} class="text-dark">
                       {productName}
                      </Link>
                    </p>
                    
                  </div>
                 
                </div>
              </div>
              <hr class="my-0" />
              <div class="card-body pb-0">
                <div class="d-flex justify-content-between">
                  <p>
                    <a href="#!" class="text-dark">
                      {unit} (Qty {quantity} )
                    </a>
                  </p>
               
                </div>
              </div>
              <hr class="my-0" />
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                  <div>
                  <span>${price}</span> <span className="mrp">${mrp}</span>
                  </div>
                  <button type="button" class="btn btn-primary">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        
      
  );
};
export default Product;
