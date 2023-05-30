import React from 'react';
import CountUp from 'react-countup';
import { Parallax } from 'react-scroll-parallax';
import { IMAGES } from '../../../constants/Image-Constant';

export default function Legacy(props) {
    return (
        <>
        <section className='legacy'>
            <div className='container text-center'>
                
                <h5 className='sub-heading'>Best Real Estate Developer in <span>Delhi NCR</span></h5>
                <h3 className='main-heading'>LEGACY MOVING FORWARD</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
but also the leap into electronic typesetting, remaining essentially unchanged. 
                </p>
                <div className='row mt-5'>
                    <Parallax  className='col-md-3'  translateX={['-100px', '0px']}
  scale={[0.5, 1]}
  rotate={[-90, 0]}
  easing="easeInQuad">
                        <div className='count-box'>
                            <img src={IMAGES.homepage.experienceIcon} className='img-fluid' alt="" />
                            <h4><CountUp end={8} />+ </h4>
                            <p>Years of Experience</p>
                        </div>
                    </Parallax >
                    <Parallax  className='col-md-3' >
                        <div className='count-box'>
                            <img src={IMAGES.homepage.developIcon} className='img-fluid' alt="" />
                            <h4><CountUp end={97.22} />+ </h4>
                            <p>Lac Sq-ft are Developed</p>
                        </div>
                    </Parallax >
                    <div className='col-md-3'>
                        <div className='count-box'>
                            <img src={IMAGES.homepage.growthIcon} className='img-fluid' alt="" />
                            <h4><CountUp end={692} />% </h4>
                            <p>Inverstor’s Growth</p>
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
