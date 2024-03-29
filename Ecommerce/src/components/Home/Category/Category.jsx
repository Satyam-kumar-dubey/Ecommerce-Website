import React from "react";
import {useNavigate} from 'react-router-dom'

import "./Category.css";
import CatImg from "../../../assets/category/cat-1.jpg";

const Category = ( {categories} ) => {


    // if (!categories || !categories.data || !Array.isArray(categories.data)) {
        
    //     return null; 
    // }

  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.data?.map((item) => (
            
          <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)} >
            <img
              src={
                import.meta.env.VITE_ADMIN_URL +
                item.attributes.Image.data.attributes.url 
              }
              alt=""
            />
          </div>
        ))}
         {/* <div className="category">
                     <img src={CatImg} alt="" />
                 </div>
                 <div className="category">
                     <img src={CatImg} alt="" />
                 </div>
                 <div className="category">
                     <img src={CatImg} alt="" />
                 </div>
                 <div className="category">
                     <img src={CatImg} alt="" />
                 </div> */}
      </div>
    </div>
  );
};

export default Category;
