import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IMAGES } from '../../../constants/Image-Constant';


function Gallery(props) {
    const images = [
        {
          original:IMAGES.homepage.article1,
          thumbnail:IMAGES.homepage.article1
        },
        {
          original:IMAGES.homepage.article2,
          thumbnail:IMAGES.homepage.article2
        },
        {
          original:IMAGES.homepage.article3,
          thumbnail: IMAGES.homepage.article3
        }
      ];
    return (
        <>
        <section className='aish-gallery'>
            <div className="container">
            <img src={IMAGES.aishwaryamPage.SoldOut} className="img-fluid sold-out" alt='Sold Out' />
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
         <p>Whether you're a fitness enthusiast, a sports lover, or someone who likes to relax and unwind, there is something for everyone here. With a basketball court, amphitheatre, and separate swimming pools for adults and kids, you can enjoy a variety of activi- ties within the comfort of your own home. The clubhouse equipped with a billiards table and gymnasium is the perfect place to unwind after a long day.
</p>  
            </div>
        </section>
         
        </>
    );
}

export default Gallery;