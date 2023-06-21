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
            <div className="col-md-10 offset-md-1 text-center">
                    <h5 className='video-text'>This project is a testament to Wall Rock Developers<br />
commitment to creating innovative and world-class commercial spaces
that meet the needs of today's customers</h5>

                </div>
                <h2 className='text-center'>Why Yamuna Expressway?</h2>
                <p className='text-center'>
                The Yamuna Expressway is a state-of-art expressway that has significantly improved connectivity between Greater Noida and Agra. It is a 166 KM long access-controlled expressway that reduces travel time between cities. With the approved Noida International Airport, people living in many cities of western UP will save approximately 2 hours of time travelling to Delhi Airport. Furthermore, the Airport will increase the area's density, making the place more advantageous for home buyers. Apart from this, the Airport will bring out many jobs, resulting in more employment to grow the market eventually.  </p>

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
