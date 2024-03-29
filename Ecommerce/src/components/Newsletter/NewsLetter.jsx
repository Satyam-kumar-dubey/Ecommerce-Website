import React from "react";
import {FaFacebook} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {FaLinkedin} from 'react-icons/fa';
import './NewsLetter.css'
import { useHref } from "react-router-dom";

const NewsLetter =() => {
    return (
        <div className="news-main">
            <div className="news-head">NEWSLETTER</div>
            <div className="news-text">SIGN UP FOR LATEST UPDATES AND OFFERS</div>
            <div className="news-form">
                <form>
                    < input type="text" placeholder="Email Address" className="form-input"/> 
                    <button className="news-btn">Subscribe</button>              
                </form>
            </div>
            <div className="news-foot">Will be used in accordance with our Privacy Policy</div>
            <div className="news-icon">
            {/* < FaFacebook className="news-icon" /> */}
            < FaFacebook className="news-icon" />
            < AiFillTwitterCircle className="news-icon"/> 
            < AiFillInstagram className="news-icon"/>
            < FaLinkedin className="news-icon"/>
            </div>
        </div>
    )
}
export default NewsLetter ;