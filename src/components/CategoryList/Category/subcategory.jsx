import React from 'react';
import { Link } from 'react-router-dom';

const SubCategory = (props) => {
    const { subId,subName } = props.data;
    return(
        <li class="list-group-item"><Link to={'/products/'+subId} >{subName}</Link></li>
    )
}
export default SubCategory;