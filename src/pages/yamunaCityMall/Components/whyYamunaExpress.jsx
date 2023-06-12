import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '../../../constants/Image-Constant';

var settings = {
    dots: false,
    arrows:false,
    infinite: false,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    slidesToShow: 5,
    speed:1500,
    cssEase: "linear",
    pauseOnHover: true,
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
  var settingBottom = {
    dots: true,
    arrows:false,
    infinite: false,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    slidesToShow: 5,
    speed:1500,
    cssEase: "linear",
    pauseOnHover: true,
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

 const TopSlide =[
    {
        Image:IMAGES.ycmPage.WhyYamunaExpressWay,
        Title:"Approved Noida International Airport",
    },
    {
        Image:IMAGES.ycmPage.WhyYamunaExpressWay,
        Title:"Approved Metro Connectivity",
    },
    {
        Image:IMAGES.ycmPage.WhyYamunaExpressWay,
        Title:"Eastern Peripheral Expressway",
    },
    {
        Image:IMAGES.ycmPage.WhyYamunaExpressWay,
        Title:"Proposed Isbt",
    },
    {
        Image:IMAGES.ycmPage.WhyYamunaExpressWay,
        Title:"Delhi Mumbai Expressway",
    },
 ]

 const BottomSlide =[
    {
        Image:IMAGES.ycmPage.WhyYamunaExpressWay,
        Title:"Buddh InternationalCircuit",
    },
    {
        Image:IMAGES.ycmPage.WhyYamunaExpressWay,
        Title:"World Class Universities",
    },
    {
        Image:IMAGES.ycmPage.WhyYamunaExpressWay,
        Title:"Cricket Stadium",
    },
    {
        Image:IMAGES.ycmPage.WhyYamunaExpressWay,
        Title:"Hospitals",
    },
    {
        Image:IMAGES.ycmPage.WhyYamunaExpressWay,
        Title:"Mono Rail",
    },
    {
        Image:IMAGES.ycmPage.WhyYamunaExpressWay,
        Title:"Mono Rail",
    },
 ]

export default function WhyYamunaExpress(props) {
    return (
        <>
        <section className='expressway-sec'>
            <div className='container'>
                <h2 className='text-center'>Why Yamuna Expressway</h2>
                <p className='text-center'>
                Yamuna Expressway offers a billion-dollar infrastructure leap for generations to come, promising an unmatched living experience in NCR's 
fast- est-growing real estate market With its prime location & exceptional connectivity, it has emerged as a preferred destination for developers, investors, and home buyers a like This is an excellent opportunity to invest in the future of real estate and secure a 
prosperous future for yourself and your family </p>

<Slider {...settings}>
{
    TopSlide.map((value,index)=>{
        return(
            <div className='box-hover' key={index}>
                <div className='box-img'>
                <img src={value.Image} className='img-fluid' alt="Expressway Image" />
                </div>
                <p>{value.Title}</p>
            </div>
        )
    })
}
</Slider>
<Slider {...settingBottom}>
{
    BottomSlide.map((value,index)=>{
        return(
            <div className='box-hover' key={index}>
            <div className='box-img'>
            <img src={value.Image} className='img-fluid' alt="Expressway Image" />
            </div>
                <p>{value.Title}</p>
            </div>
        )
    })
}
</Slider>
               

            </div>
        </section>
            
        </>
    );
}
