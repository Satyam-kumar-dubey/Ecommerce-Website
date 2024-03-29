import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.css";
import { Context } from "../../../Utils/Context";
import { useContext } from "react";

const CartItem = () => {

  const { cartItems, handleRemoveFromCart , handleCartProductQuantity} = useContext(Context);

  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img src={import.meta.env.VITE_ADMIN_URL +
                item?.attributes?.Image?.data?.attributes?.url} alt="" />
          </div>
          <div className="prod-details">
            <span className="cart-item-name">{item.attributes.Title}</span>
            <MdClose className='close-btn' onClick={()=> handleRemoveFromCart(item)}/>
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">&#8377; {item.attributes.price}</span>
            </div>
          </div>
        </div>
      ))};
    </div>
  );
};
export default CartItem;
