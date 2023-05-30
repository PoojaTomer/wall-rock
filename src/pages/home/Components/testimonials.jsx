import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FaStar } from 'react-icons/fa';
import { IMAGES } from '../../../constants/Image-Constant';
// var settings = {
//     dots: true,
//     arrows:true,
//     infinite: false,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: false,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     centerPadding: "10px",
//     lazyLoad: 'progressive',
//     nextArrow: (
//         <div>
//           <div className="next-slick-arrow"> ⫸ </div>
//         </div>
//       ),
//       prevArrow: (
//         <div>
//           <div className="prev-slick-arrow"> ⫷ </div>
//         </div>
//       ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

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

export default function Testimonials(props) {
    return (
        <>
        <section className="testimonial-sec">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-md-12">
                    <div className="case-study review-s" >
                        {/* <!--start-slide--> */}
                        <Carousel responsive={responsive} infinite autoPlay speed= "2000"
                                  autoplaySpeed= "2000"
                                  cssEase= "linear"
                                  dots= {true}
                                  > 
                        <div className="review-con">
                                <div className="review-details">
                                <div className="rev-thumb"><img src={IMAGES.homepage.testProfile1} className="img-fluid" /></div>
                                <div className="rev-info">
                                    <ul>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                    </ul>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                    <h6><strong>Mr. Nirbhay Kataria</strong></h6>
                                </div>
                            </div>
                        </div>
                        <div className="review-con"> 
                            <div className="review-details">
                                <div className="rev-thumb"><img src={IMAGES.homepage.testProfile2} className="img-fluid" /></div>
                                <div className="rev-info">
                                    <ul>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                    </ul>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. </p>
                                    <h6><strong>Mr. Ramgopal Kumar</strong></h6>
                                </div>
                            </div>
                        </div>
                        <div className="review-con">
                            <div className="review-details">
                                <div className="rev-thumb"><img src={IMAGES.homepage.testProfile1} className="img-fluid" /></div>
                                <div className="rev-info">
                                    <ul>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                    </ul>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                    <h6><strong>Mr. Harry</strong></h6>
                                </div>
                            </div>
                        </div>
                        <div className="review-con">
                            <div className="review-details">
                                <div className="rev-thumb"><img src={IMAGES.homepage.testProfile2} className="img-fluid" /></div>
                                <div className="rev-info">
                                    <ul>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                        <li><FaStar/></li>
                                    </ul>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                    <h6><strong>Mr. Owen</strong></h6>
                                </div>
                            </div>
                        </div>
                    
                        </Carousel>
                    </div>
                </div>
             
            </div>
        </div>
    </section>

    </>
    );
}

