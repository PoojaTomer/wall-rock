import React from 'react';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IMAGES } from '../../../constants/Image-Constant';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#1f5aaa" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#1f5aaa" }}
      onClick={onClick}
    />
  );
}
var settings = {
  draggable: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  dots: true,
  fade: true,
  speed: 500,
  infinite: true,
  cssEase: 'linear',
  touchThreshold: 100,
  // nextArrow: <FaArrowRight />,
  // prevArrow: <FaArrowLeft />,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      }
    }
  ]
};


function Banner(props){
    
        return (
          <section className="banner">
         <Slider {...settings}>
      <div className='slider-content'>
      <Link to="/about">
        {
          props.mobileScreen?
          <img src="/images/mobilebanner-1.webp" className="img-fluid" alt="Banner1" />
          :
          <img src="/images/banner1.webp" className="img-fluid" alt="Banner1" /> 
       } 
        </Link>
      </div>
      <div className='slider-content'>
      <Link to="/yamuna-city-mall">
      {
          props.mobileScreen?
          <img src="/images/mobilebanner-2.webp" className="img-fluid" alt="Banner2" />
          : 
          
          <img src="/images/banner2.jpg" className="img-fluid" alt="Banner2" />
         
        } 
         </Link>
      </div>
      <div className='slider-content'>
      <Link to="/aishwaryam">
      {
          props.mobileScreen?
          <img src="/images/mobilebanner-3.webp" className="img-fluid" alt="Banner3" />
          : 
       
            <img src="/images/banner3.webp" className="img-fluid" alt="Banner3" />
        
        } 
          </Link>
    </div>
    {/* <div className='slider-content'>
    {
          props.mobileScreen?
          <img src={IMAGES.homepage.homeMonileBanner4} className="img-fluid" alt="Banner4" />
          :
          <img src={IMAGES.homepage.Banner4} className="img-fluid" alt="Banner4" />
        }
        <div className="content">
          <h5 className='sub-heading'>Delivering State-of-the-art Real Estate Projects</h5>
          <h1 className="text-white">Wallrock Developers</h1>
          <Link to="/contact" className="btn btn-secondary">Know More</Link>
      </div>
    </div> */}
    </Slider>
  </section>
      )
};
export default Banner;


