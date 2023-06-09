import React from 'react';
import { Link } from 'react-router-dom';

export default function Schedule(props) {
    return (
        <>
         <section className='legacy'>
            <div className='container text-center'>
                <h5 className='sub-heading'>Book Your <span>Visit Schedule</span></h5>
                <h3 className='main-heading'>Give a Missed Call @ <a href="tel:70370 39009">70370 39009</a></h3>
                <Link to="/contact" className='btn btn-default'>Book Now</Link>
            </div>
        </section>
            
        </>
    );
}
