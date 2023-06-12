import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function MirajChinema(props) {
    return (
        <>
           <section className='miraj-cimema'>
                <div className="row align-items-center">
                <div className="col-md-6">
                    <div className='miraj-content'>
                        <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">{props.SubTitle}</h4>
                        <h2 data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">{props.Title}</h2>
                       <p>{props.Des}</p>
                      </div>
                </div>
                <div className="col-md-6 pl-0">
                    <div className="hover-img">
                          <img src={IMAGES.ycmPage.mirajChinema} className='img-fluid' alt="Miraj Chinema" />

                    </div>
                    <div className="amppulse1"></div>
                    <div className="amppulse1"></div>
                    <div className="amppulse1"></div>
                    <img src={IMAGES.ycmPage.mirajChinemaLogo} className='img-fluid miraj-logo amppulse1' alt="Miraj Chinema " />
                </div>
                </div>
            </section> 
        </>
    );
}
