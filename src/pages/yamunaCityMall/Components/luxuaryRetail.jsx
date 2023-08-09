import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';


export default function LuxuaryRetail(props) {
    return (
        <>
        <section className='luxiary-retail'>
            <div className='container'>
                <h3 className='main-heading text-center'>It’s Time To Embrace Your Perfect <br/><span>Luxury Retail Space</span></h3>
                <div className='col-md-10 offset-md-1 text-center'>
                <p className='subtitle'>{props.subTitle}</p>
                </div>
              <h4 className='mt-5'>Project Highlights</h4>
              {props.LuxuaryListing}
              <div className='minute-10'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className='main-heading'>10 minute Drive <br />From the upcoming <br />Noida International <br/><span><b>Airport At Jewar</b></span></h2>
                        <img src="/images/aroplane.webp" className='img-fluid left-move' />
                    </div>
                    <div className='col-md-6'>
                        <div className='hover-img'>
                        <img src="/images/minute.webp" className='img-fluid border-round' />
                        </div>
                    </div>
                </div>
              </div>
              <p className='float-text'>Shopping Centre</p>
</div>
</section>
<section className='load-krishna-sec'>
<div className='container'>
              <div className='load-krishna'>
                <div className='row'>
                    <div className='col-md-5'>
                        <p>Yamuna Expressway is going to be blessed with India's Tallest Statue of Lord Shri Krishna, standing majestically at a height of 108 feet at Gaur Yamuna City.</p>
                        <img src="/images/global-school.webp" className='img-fluid border-round' />
                        <h3 className='main-heading'>Nearby<br /> global schools &<br /> UNIVERSITIES</h3>
                    </div>
                    <div className='col-md-7'>
                        <img src="/images/load-krishna.webp" className='img-fluid zoom-in' />
                        <div className='load-info'>
                            <div className='row align-items-center'>
                                <div className='col-md-6'>
                                <h3>108</h3>
                                </div>
                                <div className='col-md-6'>
                                <h3><span className='ft'>ft</span><br/><span className='tall'>TALL</span></h3>
                                </div>
                            </div>
                      
                            <h5>Statue of Lord Krishna</h5>
                            <h5><strong>At Gaur Yamuna City</strong></h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-10'>
                <ul>
                    <li>Sharda University</li>
                    <li>Noida International  University</li>
                    <li>Amity University</li>
                    <li>Gautam Buddha University</li>
                    <li>Galgotias University</li>
                </ul>
                </div>
                
              </div>

            </div>
        </section>
            
        </>
    );
}
