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
                            <h3 className='main-heading mt-5'>Our Story</h3>
                            <p>WALL ROCK DEVELOPERS LLP is a Limited Liability Partnership incorporated on 20 September, 2021. Its registered office is at B 33 SECTOR 63, NOIDA, Gautam Buddha Nagar, Uttar Pradesh and capital contribution of INR 50.0 lacs. The company has 2 Designated Partners and 1 other partners.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                        <h3 className='main-heading mt-5'><span className='red-text'>About</span><br/>WALL ROCK DEVELOPERS LLP</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
