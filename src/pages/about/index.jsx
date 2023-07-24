import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import AboutSec from './Components/about';
import OurFoundations from './Components/ourFoundations';
import SociallyResponsible from './Components/sociallyResponsible';

const FoundationList = [
    {
        Image:"/images/our-values.webp",
        Title:"Our Values",
        Des:"Commitment and communication are the core values that come from our work. We're proud to deliver exceptional results without compromising quality."
    },
    {
        Image:"/images/our-mission.webp",
        Title:"Our Mission",
        Des:"Our mission is to deliver the highest grade construction, gain customer trust, and stand tall on the timely delivery of projects. "
    },
    {
        Image:"/images/our-vision.webp",
        Title:"Our Vision",
        Des:"To become an epitome of excellence in the real estate industry by shaping the future of development through quality construction, satisfaction of end users, and transparent dealing with all the stakeholders. "
    },

]

export default function About(props) {
    return (
        <>
             <Helmet>
             <title>{props.title || "Wall Rock"}</title>
             <link rel="canonical" href="https://wallrock.in/about" />
            </Helmet>
            <Breadcrumb Title="About Us" Image="/images/about-banner.webp" /> 
            <AboutSec />
            <OurFoundations foundationList={FoundationList} />
            <SociallyResponsible />
            <section className='about-4'>
                <div className='container'>
                    <div className='quote-box'>
                    <div className="row align-items-center">
                        <div className='col-md-5'>
                            <img src="/images/right-quote.webp" className='img-fluid' alt="" />
                        </div>
                        <div className='col-md-7'>
                            <h4>We look forward to creating exceptional spaces that fulfil your dreams and exceed your expectations.</h4>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
       
        </>
    );
}