import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function SociallyResponsible(props) {
    return (
        <>
        <section className='about-3'>
            <div className='container'>
                    <div className="row">
                    <div className='col-md-6'>
                        <div className='hover-img'>
                        <img src={IMAGES.aboutpage.aboutMsg} className='img-fluid' alt="" />
                        </div>
                        </div>
                        <div className='col-md-6'>
                            <h3 className='main-heading mt-5'>We Are A Socially Responsible Organisation</h3>
                            <p>We are adding and updating information about hundreds of thousands of companies every day, and periodically add companies to the queue for being updated. You can ask for a company to be added to the front of the queue for updating, especially useful if the address, directors, or other critical information has changed. Just click on the 'Update Information' button below to start the process.</p>
                        </div>
                        
                    </div>
                </div>
        </section>
        </>
    );
}
