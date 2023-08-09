import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '../../../constants/Image-Constant';
import { Link } from 'react-router-dom';

export default function ShoppingMall(props) {

    return (
        <>
<section className='shapping-sec'>
<div className='container-fluid'>
<div className='row'>
    <div className='col-md-6 d-flex align-items-stretch'>
      <div className='biggest-shopping'>
          <h2>Yamuna City Mall</h2>
          <h4>Invest Today,<strong> Stay Financially Secure</strong> Tomorrow.</h4>
          <p>Continuing our legacy of excellence, we are excited to introduce our ongoing commercial project, Yamuna City Mall (YCM), at Gaur Yamuna City. This meticulously designed commercial complex is an integrated hub for business and entertainment with varying themes. Spanning over 5,000 square metres of land, this project is an impressive and spacious estate that is both reasonably priced and purely elegant. Furthermore, YCM will have a modern facade with enough branding space, serving as an unparalleled opportunity for investors, retailers and entrepreneurs. Indeed, this is one of the most awaited <Link to='/yamuna-city-mall'><b className='text-ylw'>commercial projects in Noida</b></Link>, bringing facilities for the public for a better future.</p>
          <Link to='/yamuna-city-mall' className='btn btn-secondary'>Know More</Link>
        </div>
    </div>
    <div className='col-md-6 d-flex align-items-stretch'>
    
        <div className="mall-img">
        <img src="/images/yamunacity-mall.webp" className='img-fluid' alt="yamuna city mall"/>
        </div>
        
    </div>
    <div className='col-md-6 d-flex align-items-stretch'>
    <div className="mall-img">
    <img src="/images/aishwaryam.webp" className='img-fluid' alt="Aishwaryam"/>
    </div>
    
    </div>
    <div className='col-md-6 d-flex align-items-stretch'>
        <div className='mall-content'>
        <img src="/images/ashiwaryam-logo.webp" className='img-fluid' alt="Aishwaryam logo" />
        <h2 className='main-heading'>Completed & Delivered Before Time!</h2>
        <p>Aishwaryam - our flagship residential development, is a result of our dedication to providing residents with comfortable and convenient living that will be cherished for years to come. Located at Noida Extension, Aishwaryam is well connected to Delhi NCR, allowing residents to enjoy a wide range of amenities. This project is mainly designed by keeping Vaastu Shastra in mind consisting of 450 spacious apartments. With this residential project, Wall Rock Developers- a prominent <b>real Estate company in
Noida</b>, aims to bring luxury and affordability under one roof.</p>
        <Link to="/aishwaryam" className='btn btn-default'>Know More</Link>
        </div>
    </div>
</div>
</div>
            </section>
        </>
    );
}
