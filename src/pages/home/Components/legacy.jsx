import React from 'react';
import CountUp from 'react-countup';
import { IMAGES } from '../../../constants/Image-Constant';

export default function Legacy(props) {
    return (
        <>
        <section className='legacy'>
            <div className='container text-center'>
                
                <h5 className='sub-heading'>Wall Rock Developers</h5>
                <h1 className='main-heading'>Your Trusted Real Estate Developer in Noida</h1>
                <p>We at Wall Rock Developers pride ourselves in creating exceptional residential and commercial space that redefines luxury and affordability in the real estate world. With our commitment to delivering the highest standard of construction quality in every project, we have earned a reputation to be one of the most trustworthy <b>real estate developers in Noida</b>. So, are you ready to embark on a journey towards exceptional living or business success? Get in touch with our team today!
                </p>
                <div className='row mt-5'>
                 
                        <div className='col-md-3 experience'>
                        <div className='count-box'>
                            <img src="/images/experience.webp" className='img-fluid' alt="" />
                            <h4><CountUp end={9} />+ </h4>
                            <p>Years Of Experience</p>
                        </div>
                        </div>
                        <div className='col-md-3 legacy-box'>
                        <div className='count-box'>
                            <img src="/images/building.webp" className='img-fluid' alt="" />
                            <h4><CountUp end={6.5} /> Lacs </h4>
                            <p>Sq. Ft of Area Developed & Delivered</p>
                        </div>
                    </div>
                    <div className='col-md-3 legacy-box1'>
                        <div className='count-box'>
                            <img src="/images/growth.webp" className='img-fluid' alt="" />
                            <h4><CountUp end={1.5} /> Lac</h4>
                            <p> Sq. Ft of Area Under Development</p>
                        </div>
                    </div>
                    <div className='col-md-3 happy-customer'>
                        <div className='count-box'>
                            <img src="/images/customers.webp" className='img-fluid' alt="" />
                            <h4><CountUp end={5000} />+ </h4>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        </>
    );
}
