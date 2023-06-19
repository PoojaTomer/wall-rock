import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '../../../constants/Image-Constant';
import { Link } from 'react-router-dom';

export default function ShoppingMall(props) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [imageSlider, setImageSlider] = useState([])

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
 
  },[]);
  useEffect(() => {
    setImageSlider(IMAGES.homepage.yamunacityMall)
    console.log("hello",imageSlider);
  },[])
 

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    lazyLoad: 'progressive'
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
    lazyLoad: 'progressive'
  };


    return (
        <>
<section className='shapping-sec'>
<div className='container-fluid'>
<div className='row'>
    <div className='col-md-6 d-flex align-items-stretch'>
      <div className='biggest-shopping'>
          <h2>yamuna city mall</h2>
          <h4>THE BIGGEST <strong>SHOPPING MALL</strong> IN GAUR YAMUNA CITY</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          <Link to='/' className='btn btn-secondary'>Know More</Link>
        </div>
    </div>
    <div className='col-md-6 d-flex align-items-stretch'>
      {/* <div className="slider-wrapper">

        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >

          {
          imageSlider?.map((slide) =>{
        return(
          <div className="slick-slide">
            
          <img className="slick-slide-image"
          src={slide} 
          />

        </div>
        )
        }  

          )}

        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {imageSlider?.map((slide) =>{
              return(
                <div className="slick-slide">
                <img className="slick-slide-image" 
                src={slide} 
                />
              </div>
              )
            }

            

            )}

          </Slider>
        </div>
        </div> */}
        <div className="mall-img">
        <img src={IMAGES.homepage.yamunacityMall} className='img-fluid' alt="yamuna city mall"/>
        </div>
        
    </div>
    <div className='col-md-6 d-flex align-items-stretch'>
    <div className="mall-img">
    <img src={IMAGES.homepage.aishwaryam} className='img-fluid' alt="Aishwaryam"/>
    </div>
      {/* <div className="slider-wrapper">

        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >

          {
          imageSlider?.map((slide) =>{
        return(
          <div className="slick-slide">
            
          <img className="slick-slide-image" src={slide}  />

        </div>
        )
        }  

          )}

        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {imageSlider?.map((slide) =>{
              return(
                <div className="slick-slide">
                <img className="slick-slide-image" 
                src={slide} 
                />
              </div>
              )
            }

            

            )}

          </Slider>
        </div>
        </div> */}
    </div>
    <div className='col-md-6 d-flex align-items-stretch'>
        <div className='mall-content'>
        <img src={IMAGES.homepage.aishwaryamLogo} className='img-fluid' alt="Aishwaryam logo" />
        <h4>450 Apartments Deliverd on time!</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. it to make a type specimen book. It has survived not only five centuries.</p>
        <Link to="/" className='btn btn-default'>Know More</Link>
        </div>
    </div>
</div>
</div>
            </section>
        </>
    );
}
