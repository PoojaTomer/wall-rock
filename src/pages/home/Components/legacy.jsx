import React from 'react';
import CountUp from 'react-countup';
import { IMAGES } from '../../../constants/Image-Constant';

export default function Legacy(props) {
    return (
        <>
        <section className='legacy'>
            <div className='container text-center'>
                
                <h5 className='sub-heading'>Wall Rock Developers</h5>
                <h3 className='main-heading'>Shaping Today’s Real Estate Landscape</h3>
                <p>We at Wall Rock Developers pride ourselves in creating exceptional residential and commercial space that redefines luxury and affordability in the real estate world. With our commitment to delivering the highest standard of construction quality in every project, we have earned a reputation to be one of the most trustworthy real estate developers. So, are you ready to embark on a journey towards exceptional living or business success? Get in touch with our team today!
                </p>
                <div className='row mt-5'>
                    {/* <Parallax  className='col-md-3'  translateX={['-100px', '0px']}
  scale={[0.5, 1]}
  rotate={[-90, 0]}
  easing="easeInQuad"> */}
                        <div className='col-md-3'>
                        <div className='count-box'>
                            <img src={IMAGES.homepage.experienceIcon} className='img-fluid' alt="" />
                            <h4><CountUp end={9} />+ </h4>
                            <p>Years Of Experience</p>
                        </div>
                        </div>
                        <div className='col-md-3'>
                        <div className='count-box'>
                            <img src={IMAGES.homepage.developIcon} className='img-fluid' alt="" />
                            <h4><CountUp end={6.5} /> Lac </h4>
                            <p>Sq-ft Developed & Delivered</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='count-box'>
                            <img src={IMAGES.homepage.growthIcon} className='img-fluid' alt="" />
                            <h4><CountUp end={1.5} /> Lac</h4>
                            <p>Sq-Ft in process</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='count-box'>
                            <img src={IMAGES.homepage.customerIcon} className='img-fluid' alt="" />
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
