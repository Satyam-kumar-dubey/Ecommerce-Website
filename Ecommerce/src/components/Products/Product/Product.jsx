import "./Product.css";
import {useNavigate} from 'react-router-dom'

const Product = ({ id, data }) => {

  const navigate = useNavigate();

  console.log("Product data:", data);


  return (
    <div className="product-section" onClick={() => navigate("/product/"+ id)}>
      <div className="thumbnail">
        <img
          src={ import.meta.env.VITE_ADMIN_URL + data.Image.data.attributes.url }
          alt=""
        //   className="thumb-img"
        />
      </div>
      <div className="product-details">
        <span className="name">{data.Title} </span>
        <span className="price"> &#8377; {data.price} </span>
      </div>
    </div>
  );
};

export default Product;
