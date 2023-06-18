import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';
import Gallery from './Components/Gallery';
import TestimonialSlider from '../../components/Testimonials';
import GetInTouch from '../../components/GetInTouch';
import Layout from './Components/Layout';
import About from './Components/About';
import ProjectHighlights from './Components/projectHighlights';

const ProjectHighlightsList = [
    "HDFC & Punjab National Bank have Approved Home Loans for Aishwaryam.", 
    "State-of-the-art Clubhouse with World-Class Amenities like Swimming Pool, Billiards, Gymnasium & Lounge for Residents.",
    "Basketball Court, Jogging Track, and Sports area a long with 24x7 Security.",
    "Ample Open Green Spaces Along with Fountains and Seating Areas to Relax & Rejuvenate."
];

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

           <About 
           title="FIRST MILESTONE ACHIEVED"
           subTitle="450 Apartments Delivered On Time !"
           des1="Welcome to Aishwaryam, the luxurious and affordable residential project by Wallrock Developers. Offering 2BHK and 3BHK apartments, this project was designed to provide its residents with a      comfortable and convenient living experience that they will cherish for years to come. Located at Noida Extension, Aishwaryam is well connected with Delhi NCR and boasts of a range of facilities that cater to the diverse needs of its residents."
           des2="The project offers 450 spacious and Vastu Compliant well-designed apartments, each equipped with modern amenities and features that cater to the diverse needs of its residents. Due to its superior construction quality, the project was delivered before committed time and is currently sold out."
           />

            <Gallery />

           <ProjectHighlights projectHighlightsList={ProjectHighlightsList} />

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
