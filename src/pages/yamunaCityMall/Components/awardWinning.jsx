import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function AwardWinning(props) {
    return (
        <>
           <section className='ycm-award'>
            <div className="container">
                <h5 className='sub-heading text-center'>We build. We Craft</h5>
                <h3 className='main-heading text-center'>award winning<br/>architectural design</h3>
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
            </div>
            <img src={IMAGES.ycmPage.ycmSecondBanner} className='img-fluid zoom-in-img' />
            </section> 
        </>
    );
}
