import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb(props) {
    return (
        <>
        <section className="bread-c-sec" style={{backgroundImage: `url(${props.Image})`,}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="bread-in">
                        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">{props.Title}</h1>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="breadcrumb-trail">
       <div className="container">
        <div className="bread-in">
            <ul>
                <li data-aos="zoom-in" data-aos-delay="100" data-aos-offset="0"><Link to="/">Home</Link></li>
                <li>|</li>
                <li data-aos="zoom-in" data-aos-delay="300" data-aos-offset="0" className="active"><a href="#">{props.Title}</a></li>
            </ul>
        </div>
       </div>
       </section>
       </>
    );
}
