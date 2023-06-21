import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function SociallyResponsible(props) {
    return (
        <>
        <section className='about-3'>
            <div className='container'>
                    <div className="row align-items-center">
                    <div className='col-md-6'>
                        <div className='hover-img'>
                        <img src={IMAGES.aboutpage.aboutMsg} className='img-fluid' alt="" />
                        </div>
                        </div>
                        <div className='col-md-6'>
                            <h3 className='main-heading'>Believe Us; We are Committed To Shape Future Through Excellence</h3>
                            <p>At Wall Rock Developers, our values are the foundation of everything we do - from delivering our customers with high-grade construction quality to building brand trust and transparency. So, as leading Real Estate developers, we show an unwavering commitment to excellence and attention to detail. We not only give shape to concrete, but we build a culture where people can live their lifestyles and get every required facility. The key principle for our work process is staying up-to-date with the latest industry trends and technology. This also enables us to include unique ideas in construction and design spaces that are modern and functional. Thank you for choosing Wall Rock Developers as your trusted partner in the real estate journey.</p>
                        </div>
                        
                    </div>
                </div>
        </section>
        </>
    );
}
