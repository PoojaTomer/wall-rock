import React from 'react';

export default function About(props) {
    return (
        <>
             <section className='aish-achieved'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6">
                        <h3 className='main-heading mt-5'>{props.title}</h3> 
                        <h5 className='sub-heading mt-5 red-text'>{props.subTitle}</h5> 
                        </div>
                        <div className="col-md-6">
                            <p>{props.des1}</p>
                            <p>{props.des2}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

