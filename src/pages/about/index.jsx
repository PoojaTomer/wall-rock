import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';
import AboutSec from './Components/about';
import OurFoundations from './Components/ourFoundations';
import SociallyResponsible from './Components/sociallyResponsible';

const FoundationList = [
    {
        Image:"/our-values.webp",
        Title:"Our Values",
        Des:"Commitment and communication are the core values that come from our work. We're proud to deliver exceptional results without compromising quality."
    },
    {
        Image:"/our-mission.webp",
        Title:"Our Mission",
        Des:"Our mission is to deliver the highest grade construction, gain customer trust, and stand tall on the timely delivery of projects. "
    },
    {
        Image:"/our-vision.webp",
        Title:"Our Vision",
        Des:"To become an epitome of excellence in the real estate industry by shaping the future of development through quality construction, satisfaction of end users, and transparent dealing with all the stakeholders. "
    },

]

export default function About(props) {
    return (
        <>
             <Helmet>
                <title>{props.title}</title>
                {/* <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
                <meta name="keyword" content="Nvd usa" /> */}
            </Helmet>
            <Breadcrumb Title="About Us" Image="/about-banner.webp" /> 
            <AboutSec />
            <OurFoundations foundationList={FoundationList} />
            <SociallyResponsible />
            <section className='about-4'>
                <div className='container'>
                    <div className='quote-box'>
                    <div className="row align-items-center">
                        <div className='col-md-5'>
                            <img src="/right-quote.webp" className='img-fluid' alt="" />
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