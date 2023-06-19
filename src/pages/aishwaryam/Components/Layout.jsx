import React, {useState, useEffect} from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

function Layout(props) {
    const [galleryImage, setGalleryImage] = useState([]); 

   
    useEffect(() => {
        setGalleryImage(IMAGES.aishwaryamPage.aishlayouts)
      },[])
   
    return (
        <>
     
    <div className='row'>
      <div className='col-md-6'>
        <div className="row">
          <div className="col-md-12">
          <div className='hover-box'>
          <img src={IMAGES.aishwaryamPage.aishLayout1} className='img-fluid' />
          <div className='info'>
          <h4>Layout 1</h4>
          </div>
        </div>
          </div>
          <div className="col-md-6">
          <div className='hover-box'>
          <img src={IMAGES.aishwaryamPage.aishLayout2} className='img-fluid' />
          <div className='info'>
          <h4>Layout 2</h4>
          </div>
        </div>
          </div>
          <div className="col-md-6">
          <div className='hover-box'>
          <img src={IMAGES.aishwaryamPage.aishLayout3} className='img-fluid' />
          <div className='info'>
          <h4>Layout 3</h4>
          </div>
        </div>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='hover-box'>
          <img src={IMAGES.aishwaryamPage.aishLayout4} className='img-fluid' />
          <div className='info'>
          <h4>Layout 4</h4>
          </div>
        </div>
      </div>
      <div className="col-md-4">
      <div className='hover-box'>
          <img src={IMAGES.aishwaryamPage.aishLayout5} className='img-fluid' />
          <div className='info'>
          <h4>Layout 5</h4>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-stretch">
        <div className='hover-box'>
          <img src={IMAGES.aishwaryamPage.aishLayout6} className='img-fluid' />
          <div className='info'>
          <h4>Layout 6</h4>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-stretch">
      <div className='hover-box'>
          <img src={IMAGES.aishwaryamPage.aishLayout7} className='img-fluid' />
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