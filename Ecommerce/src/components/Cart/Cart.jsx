import './Cart.css';
import {AiOutlineClose} from 'react-icons/ai';
import {BsCartX} from 'react-icons/bs'
import CartItem from './CartItem/CartItem';
import { Context } from '../../Utils/Context';
import { useContext } from 'react';


const Cart = ({setshowCart}) =>{


    const {cartItems, cartSubTotal} = useContext(Context)

    

    return(
       <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-button" onClick={()=>setshowCart(false)}>
                    <AiOutlineClose />
                    <span className="text">Close</span>
                </span>
            </div>

            {!cartItems?.length && <div className="empty-cart">
                <BsCartX />
                <span>No Products in the Cart</span>
                <button className="return">RETURN TO SHOP</button>
            </div>}

           {!!cartItems?.length && <>
            <CartItem />
            <div className="cart-footer">
                <div className="subtotal">
                    <span className='text'>subtotal:</span>
                    <span className='text-total'>&#8377;{cartSubTotal}</span>
                </div>
                <div className="button">
                    <button className="checkout"onClick={()=>{alert("Feature will introduce Soon !!🤗")}} >Checkout</button>
                </div>
            </div>
            
            </>}
        </div>
       </div>
    )
}
export default Cart;