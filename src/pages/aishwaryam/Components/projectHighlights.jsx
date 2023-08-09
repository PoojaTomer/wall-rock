import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function ProjectHighlights(props) {
    return (
        <>
             <section className='aish-highlight'>
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-stretch">
                        <div className='hover-img'>
                                <img src="/images/project-highlight.webp" className="img-fluid" alt='Project Highlight' />
                                <img src="/images/sold-out.webp" className="img-fluid sold-out" alt='Sold Out' />
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 d-flex align-items-stretch">
                            <div className='pro-hightlight'>
                                <h2 className='main-heading mb-5'>PROJECT HIGHLIGHTS</h2> 
                               <ul>
                                {
                                    props.projectHighlightsList.map((items,index)=>{
                                        return(
                                            <li key={index}>{items}</li>
                                        )
                                    })
                                }
                               </ul>
                            </div>
                        
                        </div>
                    </div>
            </section>
        </>
    );
}
