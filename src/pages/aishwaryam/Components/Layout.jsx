import React, {useState, useEffect} from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

function Layout(props) {
  
   
    return (
        <>
     
    <div className='row'>
      <div className='col-md-6'>
        <div className="row">
          <div className="col-md-12">
          <div className='hover-box'>
          <img src="/layout-1.webp" className='img-fluid' />
          <div className='info'>
          <h4>Layout 1</h4>
          </div>
        </div>
          </div>
          <div className="col-md-6">
          <div className='hover-box'>
          <img src="/layout-2.webp" className='img-fluid' />
          <div className='info'>
          <h4>Layout 2</h4>
          </div>
        </div>
          </div>
          <div className="col-md-6">
          <div className='hover-box'>
          <img src="/layout-3.webp" className='img-fluid' />
          <div className='info'>
          <h4>Layout 3</h4>
          </div>
        </div>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='hover-box'>
          <img src="/layout-4.webp" className='img-fluid' />
          <div className='info'>
          <h4>Layout 4</h4>
          </div>
        </div>
      </div>
      <div className="col-md-4">
      <div className='hover-box'>
          <img src="/layout-5.webp" className='img-fluid' />
          <div className='info'>
          <h4>Layout 5</h4>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-stretch">
        <div className='hover-box'>
          <img src="/layout-6.webp" className='img-fluid' />
          <div className='info'>
          <h4>Layout 6</h4>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-stretch">
      <div className='hover-box'>
          <img src="/layout-7.webp" className='img-fluid' />
          <div className='info'>
          <h4>Layout 7</h4>
          </div>
        </div>
      </div>


    </div>
        </>
    );
}

export default Layout;