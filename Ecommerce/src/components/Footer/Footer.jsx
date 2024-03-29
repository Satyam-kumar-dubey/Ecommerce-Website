import React from "react";
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Payment from '../../assets/payments.png';

const Footer = () => {
  return (
    <>
    <div className="foot">
      <div className="foot-top">
        <div className="foot-first">
          <h3>About</h3>
          <span className="foot-para">
            Welcome to my website, This is the one stop solution for your
            <br /> all search on internet.Get the best deal at very affordable
            price.
            <br /> Get the hot deal offer everyday.
          </span>
        </div>
        <div className="foot-second">
          <h3>Contact</h3>
          <div className="contact-section">
            <div className="add contact">
              <FaLocationDot />
              <span>
                Rajeev Nagar Road No -24G,
                <br /> PATNA BIHAR ,800024
              </span>
            </div>
            <div className="phone contact">
              <BsPhone />
              <span>Phone : 8651328785</span>
            </div>
            <div className="email contact">
              <AiOutlineMail />
              <span>Email : shouryabhardwaj572@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="foot-third">
          <h3>Categories</h3>
          <div className="cate-list">
                <span>Headphones</span>
                <span>Bluetooth Speakers</span>
                <span>SmartWatches</span>
                <span>Wireless Earbuds</span>
                <span>Home Theaters</span>
                <span>Projectors</span>
          </div>
          
        </div>
        <div className="foot-four">
          <h3>Pages</h3>
          <div className="page-list">
                <span>Home</span>
                <span>About</span>
                <span>Privacy Policy</span>
                <span>Returns </span>
                <span>Tems and Conditions </span>
                <span>Contact Us</span>
          </div>
          
        </div>
      </div>
    </div>
    <div className="foot-bottom">
        <div className="bottom-text">
            All right reserved. Copyright claim SATYAMCART @2024
        </div>
        <img src={Payment} alt="" className="payment-img"/>
      </div>
     </>
  );
};
export default Footer;
