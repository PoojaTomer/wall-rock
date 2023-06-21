import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function AboutSec(props) {
    return (
        <>
             <section className='about-1'>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-6'>
                            <div className='hover-img'>
                                <img src={IMAGES.homepage.aishwaryam} className="img-fluid" />
                            </div>
                            <div className='our-story'>
                            <h3 className='main-heading mt-5'>Our Philosophy</h3>
                            <p>We want to redefine excellence in real estate development through our ideology. We work hard to design remarkable spaces that surpass expectations, improve quality of life, and add enduring value. Our initiatives continually produce outstanding results for our clients and stakeholders because of our dedication to quality, trust, and innovation.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                        <h3 className='main-heading mt-5'><span className='red-text'>About</span><br/>Wall Rock Developers LLP</h3>
                        <p>With over 9 years of experience in the real estate industry, Wall Rock Developers has made its name as a leading commercial and residential property developer. We believe in delivering top-notch construction quality and ensuring the timely completion of our projects. We have a team of experts who comprehensively understand the value of finding your ideal home or the perfect space to start your business. </p>

                       <p>Aishwaryam, one of our completed & delivered projects, stands as a pillar of commitment and hard work. Aishwaryam is a residential apartment complex consisting of 450 flats. We are quite proud of finishing this Project earlier than promised so that our clients could move into their dream houses ASAP. </p>

                       <p>Also, we are currently engaged in our next exciting commercial project, Yamuna City Mall(currently under construction). It is the most awaited Commercial Project that will feature the first multiplex in the Yamuna City Region, making it a perfect investment destination for high returns. Spanning over 5,000 square metres of land, this project is a unique and spacious option that is both reasonably priced and purely elegant. </p>

                       <p>When you choose Wall Rock Developers, you can be certain that you are partnering with a company that is committed to transparency, trust, and customer satisfaction. We believe in developing strong relationships with our clients and encouraging open communication throughout the journey. So, if you're looking for a smooth real estate experience, contact us today.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
