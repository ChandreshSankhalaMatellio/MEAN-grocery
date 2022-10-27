import React, { useState, useEffect } from "react";
import axios from "axios";
import SubCategory from "../Category/subcategory";
import EndPoint from "../../../api/Endpoint";
import { useParams } from "react-router-dom";

const SubCategoryList = () => {
  const {catId} = useParams();
  const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, [catId]);

  const fetchData = () => {
    axios
      .get(EndPoint.SUBCATEGORY_URL+catId)
      .then((response) => setSubCategories(response.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div >
      <h4 className="text-center">Sub Categories</h4>
      <div>
      <ul class="list-group " >

        {
            subcategories.map(item => <SubCategory data={ item } />)
        }
        </ul>
      </div>
    </div>
  );
};
export default SubCategoryList;
