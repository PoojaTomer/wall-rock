import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';
// import Gallery from './Components/Gallery';
import TestimonialSlider from '../../components/Testimonials';
import GetInTouch from '../../components/GetInTouch';
import Layout from './Components/Layout';

export default function Aishwaryam(props) {
    return (
        <>
             <Helmet>
                <title>{props.title}</title>
                <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
                <meta name="keyword" content="Nvd usa" />
            </Helmet>
            <section className='aish-banner'>
                <div className='container'>
                    <div className="col-md-6">
                    <img src={IMAGES.aishwaryamPage.aishwaryamLeft} className='img-fluid' alt=""/>  
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </section>

            <section className='aish-achieved'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6">
                        <h3 className='main-heading mt-5'>FIRST MILESTONE ACHIEVED</h3> 
                        <h5 className='sub-heading mt-5 red-text'>450 Apartments Delivered On Time !</h5> 
                        </div>
                        <div className="col-md-6">
                            <p>Welcome to Aishwaryam, the luxurious and affordable residential project by Wallrock Developers. Offering 2BHK and 3BHK apartments, this project was designed to provide its residents with a      comfortable and convenient living experience that they will cherish for years to come. Located at Noida Extension, Aishwaryam is well connected with Delhi NCR and boasts of a range of facilities that cater to the diverse needs of its residents.</p>
                            <p>The project offers 450 spacious and Vastu Compliant well-designed apartments, each equipped with modern amenities and features that cater to the diverse needs of its residents. Due to its superior construction quality, the project was delivered before committed time and is currently sold out.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
            {/* <Gallery /> */}
            <section className='aish-highlight'>
                    <div className="row">
                        <div className="col-md-6">
                        <div className='hover-img'>
                                <img src={IMAGES.aishwaryamPage.projectHighlight} className="img-fluid" />
                            </div>
                       
                        </div>
                        <div className="col-md-6 pt-5">
                            <div className='pro-hightlight'>
                                <h3 className='main-heading mb-5'>PROJECT HIGHLIGHTS</h3> 
                                <ul>
                                    <li>HDFC & Punjab National Bank have Approved Home Loans for Aishwaryam.</li>
                                    <li>State-of-the-art Clubhouse with World-Class Amenities like Swimming Pool, Billiards, Gymnasium & Lounge for Residents.</li>
                                    <li>Basketball Court, Jogging Track, and Sports area a long with 24x7 Security.</li>
                                    <li>Ample Open Green Spaces Along with Fountains and Seating Areas to Relax & Rejuvenate.</li>
                                </ul>
                            </div>
                        
                        </div>
                    </div>
            </section>
            <section className='aish-layout'>
                <div className='container'>
                <h3 className='main-heading text-center mb-5'>Layout</h3> 
                  <Layout/>
                    
                </div>
            </section>
            <section className='aish-testimonials'>
                <TestimonialSlider />
            </section>
            <GetInTouch />
        </>
    );
}
