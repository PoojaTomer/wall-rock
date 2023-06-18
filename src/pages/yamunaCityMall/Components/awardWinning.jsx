import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';
import {FaDownload} from 'react-icons/fa';

export default function AwardWinning(props) {
    return (
        <>
           <section className='ycm-award'>
            <div className="container">
                <h5 className='sub-heading text-center'><span>We build. We Craft</span></h5>
                <h2 className='main-heading text-center'>award winning<br/>architectural design</h2>
                <div className="row mt-5">
                    {
                       props.awardWinningContent.map((value, index) =>{
                        return(
                            <>
                        <div className="col-md-4" key={index}>
                            <div className='award-box'>
                                <img src={value.Image} className='img-fluid' />
                                <div className='info'>
                                    <h4>{value.Title}</h4>
                                    <h5>{value.SubTitle}</h5>
                                    <p>{value.Des}</p>
                                </div>
                            </div>
                        </div>
                            </>
                        )
                       })
                    }
                  
                </div>
                <div className='col-md-12 text-center'><a href="#" className='btn btn-default' >Download E-Brochure <FaDownload /></a></div>
                <p className='float-text'>About  yamuna City Mall</p>
            </div>
           
            <img src={IMAGES.ycmPage.ycmSecondBanner} className='img-fluid zoom-in-img' />
            </section> 
        </>
    );
}
