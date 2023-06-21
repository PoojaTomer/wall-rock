import React from 'react';
import {Link} from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../../assets/css/slider-effects.css';
import { IMAGES } from '../../../constants/Image-Constant';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
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

function Banner(){
    
        return (
          <section className="banner">
         <Carousel responsive={responsive} infinite autoPlay> 
      <div className='slider-content'>
        <img src={IMAGES.homepage.Banner1} className="img-fluid" alt="Banner1" />
        <div className="content">
          <h5 className='sub-heading'>Committed to <strong>build</strong> a better world</h5>
          <h1 className="text-white">Wall Rock Developers</h1>
          <Link to="/about" className="btn btn-secondary">Know More</Link>
        </div>
      </div>
      <div className='slider-content'>
        <img src={IMAGES.homepage.Banner2} className="img-fluid" alt="Banner2" />
        <div className="content">
          <h5 className='sub-heading'>Committed to <strong>build</strong> a better world</h5>
          <h1 className="text-white">Wall Rock Developers</h1>
          <Link to="/yamuna-city-mall" className="btn btn-secondary">Know More</Link>
        </div>
      </div>
      <div className='slider-content'>
        <img src={IMAGES.homepage.Banner3} className="img-fluid" alt="Banner3" />
        <div className="content">
          <h5 className='sub-heading'>Committed to <strong>build</strong> a better world</h5>
          <h1 className="text-white">Wall Rock Developers</h1>
          <Link to="/aishwaryam" className="btn btn-secondary">Know More</Link>
      </div>
    </div>
    <div className='slider-content'>
        <img src={IMAGES.homepage.Banner4} className="img-fluid" alt="Banner3" />
        <div className="content">
          <h5 className='sub-heading'>Committed to <strong>build</strong> a better world</h5>
          <h1 className="text-white">Wall Rock Developers</h1>
          <Link to="/about" className="btn btn-secondary">Know More</Link>
      </div>
    </div>
    </Carousel>
  </section>
      )
};
export default Banner;


