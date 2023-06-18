import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';
import AboutSec from './Components/about';
import OurFoundations from './Components/ourFoundations';
import SociallyResponsible from './Components/sociallyResponsible';

const FoundationList = [
    {
        Image:IMAGES.homepage.experienceIcon,
        Title:"Our Values",
        Des:"We are adding and updating information about hundreds of thousands of companies every day"
    },
    {
        Image:IMAGES.homepage.growthIcon,
        Title:"Our Mission",
        Des:"We are adding and updating information about hundreds of thousands of companies every day"
    },
    {
        Image:IMAGES.homepage.developIcon,
        Title:"Our Vision",
        Des:"We are adding and updating information about hundreds of thousands of companies every day"
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
            <Breadcrumb Title="About Us" Image={IMAGES.homepage.Banner} /> 
            <AboutSec />
            <OurFoundations foundationList={FoundationList} />
            <SociallyResponsible />
            <section className='about-4'>
                <div className='container'>
                    <div className='quote-box'>
                    <div className="row align-items-center">
                        <div className='col-md-5'>
                            <img src={IMAGES.aboutpage.quoteLight} className='img-fluid' alt="" />
                        </div>
                        <div className='col-md-7'>
                            <h4>We are a team of high-energyindividuals who believe businesspotential lies in human connection</h4>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
       
        </>
    );
}