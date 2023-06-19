import React, { useEffect, useState } from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function Brands(props) {
    const [brandList, setBrandList] = useState([]);
    useEffect(() => {
setBrandList(IMAGES.ycmPage.YcmBrands)
    },[])
    return (
        <>
        <section className='brands-sec'>
            <div className="container">
                <h2 className='main-heading text-center'>Brands Onboard</h2>
         
            <ul>
                {
            brandList.map((items, index)=>{
                return(
                <li className='brand-box' key={index}>
                    <img src={items} className='img-fluid' alt="client logo" />
                </li>
                )
                    })
            }
            
            </ul>
            </div>
        </section>
            
        </>
    );
}
