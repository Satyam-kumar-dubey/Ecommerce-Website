import React, { useContext } from 'react'
import './Header.css'
import {useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {AiOutlineHeart} from 'react-icons/ai'
import {TbSearch} from 'react-icons/tb';
import {BsCart2} from 'react-icons/bs';
import Cart from '../Cart/Cart';
import Search from './Search/Search';
import { Context } from '../../Utils/Context';
import { Link } from 'react-router-dom';


const Header = () => {

    const {cartCount} = useContext(Context)

    const navigate = useNavigate();
    
    const [Scrolled , setScrolled] =useState(false)

    const [showCart, setshowCart] =useState(false)
    const [showSearch, setshowSearch] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 150){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }
      useEffect(() => {
        window.addEventListener("scroll", handleScroll)
      })

    return (
        <>
        <div className={`main ${Scrolled? 'sticky-header' : ""}`} >
            <div className="nav">
                <div className="nav-left">
                    <ul className='list-item'>
                        <li onClick={()=>navigate("/")}>Home</li>
                        <li onClick={()=>{alert("Created by SATYAM with 💕" )}}>About</li> 
                        <li onClick={()=>alert("COMING SOON !! 🫡 ")}>partner program</li>
                    </ul>
                </div>
                <div className="nav-center" onClick={()=>navigate("/")}>SatyamCart</div>
                <div className="nav-right">
                    <span> <TbSearch onClick={()=>setshowSearch(true)}/> </span>
                    <span> <AiOutlineHeart onClick={()=>{alert("Working On it !! 😎")}}/> </span>
                    <span className='cart-icon' onClick={()=>setshowCart(true)}> 
                        <BsCart2 />
                            {!!cartCount && <span className='cart-no'>{cartCount}</span>}
                       
                     </span>
                </div>
            </div>
         </div>

         {showCart && <Cart setshowCart={setshowCart} />}
         {showSearch && <Search setshowSearch={setshowSearch} />}
         </>
    )
}

export default Header;