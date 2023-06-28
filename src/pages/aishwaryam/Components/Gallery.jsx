import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IMAGES } from '../../../constants/Image-Constant';


function Gallery(props) {
    const images = [
        {
          original:"/ashi-banner-1.webp",
          thumbnail:"/ashi-banner-1.webp",
        },
        {
          original:"/ashi-banner-2.webp",
          thumbnail:"/ashi-banner-2.webp",
        },
        {
          original:"/ashi-banner-3.webp",
          thumbnail:"/ashi-banner-3.webp",
        }
      ];
    return (
        <>
        <section className='aish-gallery'>
            <div className="container">
            <img src="/sold-out.webp" className="img-fluid sold-out" alt='Sold Out' />
            <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={2000}
        slideOnThumbnailOver={true}
        showIndex={false}
        // onPlay={() => {
        //   alert("slideshow is now playing!");
        // }}
      />
         <p>The building features state-of-the-art facilities, including a fully equipped fitness centre, a swimming pool, landscaped gardens, children's play areas, and a dedicated community clubhouse. In fact, the nearby areas boast a positive atmosphere, with restaurants, malls, and parks just a stone's throw away. So, if you want to secure your future, contact us today!</p>  
            </div>
        </section>
         
        </>
    );
}

export default Gallery;