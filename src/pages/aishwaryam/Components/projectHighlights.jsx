import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function ProjectHighlights(props) {
    return (
        <>
             <section className='aish-highlight'>
                    <div className="row">
                        <div className="col-md-6">
                        <div className='hover-img'>
                                <img src={IMAGES.aishwaryamPage.projectHighlight} className="img-fluid" />
                            </div>
                       
                        </div>
                        <div className="col-md-6 pt-5">
                            <div className='pro-hightlight'>
                                <h3 className='main-heading mb-5'>PROJECT HIGHLIGHTS</h3> 
                               <ul>
                                {
                                    props.projectHighlightsList.map((items)=>{
                                        return(
                                            <li>{items}</li>
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
