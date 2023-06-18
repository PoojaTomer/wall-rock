import React, { useEffect, useState } from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function YcmGallery(props) {
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        setGallery(IMAGES.ycmPage.Gallery)
    },[])
   
    return (
        <>
            <section className='ycm-gallery'>
                <div className='container'>
                    <h2>Yamuna city mall</h2>
                    <div className='row'>
                        {
                            gallery.map((value, index) => {
                                return(
                                    <div className='col-md-4' key={index}>
                                        <div className='hover-img'>
                                            <img src={value} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}