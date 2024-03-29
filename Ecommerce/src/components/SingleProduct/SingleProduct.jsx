import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useState , useContext } from "react";
import "./SingleProduct.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaCartPlus,
} from "react-icons/fa";
import SingleProd from "../../assets/products/watch-prod-2.webp";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../Utils/Context";


const SingleProduct = () => {

  const [quantity, setQuantity] = useState(1);
  const {handleAddToCart , handleRemoveFromCart} = useContext(Context)
  
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  if (!data) return;
  const product = data?.data[0]?.attributes;

  

  const increament = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decreament = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                import.meta.env.VITE_ADMIN_URL +
                product?.Image?.data?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.Title}</span>
            <span className="price">&#8377; {product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-button">
              <div className="quantity-button">
                <span onClick={decreament}>-</span>
                <span>{quantity}</span>
                <span onClick={increament}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={()=>{
                handleAddToCart(data.data[0], quantity)
                setQuantity(1)
              }}>
                <FaCartPlus size={18} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.Title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} />
                  <FaPinterestP size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};
export default SingleProduct;
