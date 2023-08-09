import React from 'react';

export default function Banner(props) {
    return (
        <>
        <section className="ycm-banner" style={{backgroundImage: `url(${props.Image})`,}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="banner-heading">
                    <p>Find Your Luxury space </p>
                        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">{props.Title}</h2>
                     
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}