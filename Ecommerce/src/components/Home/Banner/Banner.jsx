import BannerImg from "../../../assets/banner-img.png";
import './Banner.css'

const Banner = () => {
  return (
    <div className="Banner">
      <div className="hero">
        <div className="hero-left">
          <span>SALES</span>
          <p className="hero-para">
            iClever Kids Headphones for Girls with Microphone,<br/> HD Stereo
            Children Over-Ear Wired Headphones,<br/> Volume Limiter 85/94dB, Sharing
            Function Foldable, <br/>Headphones for Online School/iPad/PC
          </p>
          <div className="button">
            <button className="btn" >READ MORE</button>
            <button className="btn1" >SHOP NOW</button>
          </div>
        </div>
        <div className="hero-right">
          <img className="BannerImg" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
