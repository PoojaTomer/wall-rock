import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';

export default function About(props) {
    return (
        <>
             <Helmet>
                <title>{props.title}</title>
                <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
                <meta name="keyword" content="Nvd usa" />
            </Helmet>
            <Breadcrumb Title="About Us" Image={IMAGES.homepage.Banner} /> 
            <section className='about-1'>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-6'>
                            <div className='hover-img'>
                                <img src={IMAGES.homepage.aishwaryam} className="img-fluid" />
                            </div>
                            <div className='our-story'>
                            <h3 className='main-heading mt-5'>Our Story</h3>
                            <p>WALL ROCK DEVELOPERS LLP is a Limited Liability Partnership incorporated on 20 September, 2021. Its registered office is at B 33 SECTOR 63, NOIDA, Gautam Buddha Nagar, Uttar Pradesh and capital contribution of INR 50.0 lacs. The company has 2 Designated Partners and 1 other partners.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            
                        <h3 className='main-heading mt-5'>About<br/>WALL ROCK DEVELOPERS LLP</h3>
                        <p>Wall Rock Developers Llp is a Limited Liability Partnership firm incorporated on 20 September 2021. It is registered at Registrar of Companies, Kanpur. Its total obligation of contribution is Rs. 5,000,000.</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6479632254045!2d77.21426897463434!3d28.6403111837289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd475271ed2d%3A0x8a41328b1b03db05!2sWall%20Rock%20Infratech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1685034417985!5m2!1sen!2sin" width="600" height="450" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section className='about-2'>
                <div className='container'>
                <h3 className='main-heading text-center'>Our Foundation</h3>
                    <div className="row mt-5">
                    <div className='col-md-4'>
                        <div class="shadow-box">
                            <img src={IMAGES.homepage.experienceIcon} class="img-fluid" alt="Value" />
                            <h4>Our Values</h4>
                            <p>We are adding and updating information about hundreds of thousands of companies every day</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="shadow-box">
                            <img src={IMAGES.homepage.growthIcon} class="img-fluid" alt="Value" />
                            <h4>Our Mission</h4>
                            <p>We are adding and updating information about hundreds of thousands of companies every day</p>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div class="shadow-box">
                            <img src={IMAGES.homepage.developIcon} class="img-fluid" alt="Value" />
                            <h4>Our Vision</h4>
                            <p>We are adding and updating information about hundreds of thousands of companies every day</p>
                        </div>
                    </div>

                    </div>
                </div>
            </section>
            <section className='about-3'>
            <div className='container'>
                    <div className="row">
                    <div className='col-md-6'>
                        <div className='hover-img'>
                        <img src={IMAGES.homepage.yamunacityMall} className='img-fluid' alt="" />
                        </div>
                        </div>
                        <div className='col-md-6'>
                            <h3 className='main-heading mt-5'>We Are A Socially Responsible Organisation</h3>
                            <p>We are adding and updating information about hundreds of thousands of companies every day, and periodically add companies to the queue for being updated. You can ask for a company to be added to the front of the queue for updating, especially useful if the address, directors, or other critical information has changed. Just click on the 'Update Information' button below to start the process.</p>
                        </div>
                        
                    </div>
                </div>
            </section>

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