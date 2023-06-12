import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots: false,
    arrows:false,
    infinite: false,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    // centerPadding: '60px',
    slidesToShow: 3,
    speed:1500,
//    index: 1,
    cssEase: "linear",
    pauseOnHover: true,
    centerMode: true,
   

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1,
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
          slidesToScroll: 1
        }
      }
    ]
  };


export default  function YcmArticle(props) {
    return (
        <>
            <section className='ycmarticle-sec'>
                {/* <div className='container'> */}
                    <Slider {...settings} spaceBetween={50}>
               
                        {
                            props.YcmArticleSlider.map((value, index)=>
                            {
                                return(
                                    <>
                                        <div className='article-box' key={index}>
                                            <div className='article-img'>
                                                <img src={value.Image} className='img-fluid' alt="Article Image" />
                                            </div>
                                            <div className='article-content'>
                                             <h4>{value.Title}</h4>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </Slider>
                {/* </div> */}
            </section>
        </>
    );
}
