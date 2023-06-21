import React, { Fragment } from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function OurFoundations(props) {
    return (
        <>
              <section className='about-2'>
                <div className='container'>
                <h3 className='main-heading text-center'>Our Foundation</h3>
                    <div className="row mt-5">
                        {
                            props.foundationList.map((value, index)=>{
                                return(
                                    <Fragment key={index}>
                                    <div className='col-md-4 d-flex align-items-stretch'>
                                        <div className="shadow-box">
                                            <img src={value.Image} className="img-fluid" alt="Value" />
                                            <h4>{value.Title}</h4>
                                            <p>{value.Des}</p>
                                        </div>
                                    </div>
                                    </Fragment>
                                )
                            })
                        }
                    

                    </div>
                </div>
            </section>
        </>
    );
}
