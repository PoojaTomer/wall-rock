import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '../constants/Image-Constant';

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
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  var settings = {
    dots: true,
    arrows:true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    centerPadding: "10px",
    // nextArrow: <FaArrowRight />,
    // prevArrow: <FaArrowLeft />,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

 

  export default function TestimonialSlider(props) {
    return (
        <>
       <div className="container">
            <div className="row align-items-center">
            <div className="col-md-12">
                    <div className="case-study review-s" >
                        {/* <!--start-slide--> */}
                        <Slider {...settings}>
                        {/* <Carousel responsive={responsive} infinite autoPlay speed= "2000"
                                  autoplaySpeed= "2000"
                                  cssEase= "linear"
                                  dots= {true}
                                  >  */}
                                  {
                                    props.TestiList?.map((value, index)=>{
                                      return(
                                        <div className="review-con" key={index}>
                                                <div className="review-details">
                                                {/* <div className="rev-thumb"><img src={value.Image} className="img-fluid" /></div> */}
                                                <div className="rev-info">
                                                    <ul>
                                                        <li><FaStar/></li>
                                                        <li><FaStar/></li>
                                                        <li><FaStar/></li>
                                                        <li><FaStar/></li>
                                                        <li><FaStar/></li>
                                                    </ul>
                                                    <p>{value.Description}</p>
                                                    {/* <h6><strong>{value.Name}</strong></h6> */}
                                                </div>
                                            </div>
                                        </div>
                                      )
                                    })
                                  }
                    
                        </Slider>
                    </div>
                </div>
             
            </div>
        </div>
        </>
    );
}
