import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';


export default function LuxuaryRetail(props) {
    return (
        <>
        <section className='luxiary-retail'>
            <div className='container'>
                <h2 className='main-heading text-center'>It’s Time To Embrace Your Perfect <br/><span>Luxury Retail Space</span></h2>
                <div className='col-md-10 offset-md-1 text-center'>
                <p className='subtitle'>{props.subTitle}</p>
                </div>
              <h4 className='mt-5'>Project Highlights</h4>
              {props.LuxuaryListing}
              <div className='minute-10'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className='main-heading'>10 minute Drive <br />From the upcoming <br />Noida International<br/><span><b>Airport At Jewar</b></span></h2>
                        <img src={IMAGES.ycmPage.YcmAroplane} className='img-fluid left-move' />
                    </div>
                    <div className='col-md-6'>
                        <div className='hover-img'>
                        <img src={IMAGES.ycmPage.YcmMinute} className='img-fluid border-round' />
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
                        <p>Yamuna Expressway is blessed with india’s tallest<br /> statue of loard shri krishna standing majestically<br/> at 108 feet height a top a grand temple<br/> <b>( Under Development )</b></p>
                        <img src={IMAGES.ycmPage.YcmGlobalSchool} className='img-fluid border-round' />
                        <h2 className='main-heading'>Near by<br /> global schools &<br /> university</h2>
                    </div>
                    <div className='col-md-7'>
                        <img src={IMAGES.ycmPage.YcmLoadKrishana} className='img-fluid zoom-in' />
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
                    <li>SHarda University</li>
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
