import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

var settings = {
    dots: true,
    arrows:false,
    infinite: false,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    spaceBetween:20,
    margin: 15,
    centerPadding: "10px",
    cssEase: "linear",
    pauseOnHover: true,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          spaceBetween:40,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
export default function LetestArticles(props) {
    return (
        <section className='article-sec'>
            <div className='container'>
            <Slider {...settings}>
                {
                    props.AboutSubContent.map((value,index)=>{
                        return(
                            <>
                            <div className='article-box'>
                                        <div className='article-img'>
                                            <img src={value.Image} className='img-fluid' />
                                        </div>
                                        <div className='article-content'>
                                            <h4>{value.Title}</h4>
                                            <p>{value.Description}</p>
                                            {/* <div className="view-article"><div className="view-article-line extend-line"></div><div className="view-article-link"><Link to="/">View Article</Link></div></div> */}
                                        </div>
                                    </div>
                            </>
                        )}
                    )
                }
               
            </Slider>
            </div>
        </section>
    );
}
