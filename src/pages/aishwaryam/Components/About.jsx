import React from 'react';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';

export default function About(props) {
    return (
        <>
             <section className='aish-achieved'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6">
                        <h1 className='main-heading mt-5 pr-4'>{props.title}</h1> 
                        <h5 className='sub-heading mt-5 red-text'>{props.subTitle}</h5> 
                        </div>
                        <div className="col-md-6">
                            <p>Welcome to Aishwaryam, the luxurious and affordable residential project developed by Wall Rock Developers. Nested in a prime location like Noida Extension, this residential project is well connected to Delhi NCR, allowing residents to enjoy a wide range of facilities. Aishwaryam offers residential flats of <b>2BHK and 3BHK in Noida</b> with exceptional amenities. This project has 450 apartments, and all are sold out. One of the best things about Aishwaryam is its construction quality. Wall Rock Developers prides itself in delivering projects before time with no compromise in quality.</p>
                            <p>Furthermore, homeowners will have peace of mind because Aishwaryam apartments embrace the principle of Vastu Shastra. The layout of every room is well-designed, each equipped with modern amenities and functions that cater to modern needs. Indeed, this <Link to='/'><b>residential project in Noida</b></Link> showcases our dedication to fulfilling the expectations of our customers.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

