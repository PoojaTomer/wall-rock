import React from 'react';
import { FaStar } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                                                    <h6><strong>{props.name === false ? "" : value.Name}</strong></h6>
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
