import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


function Gallery(props) {
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/"
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/"
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/"
        }
      ];
    return (
        <>
        <section className='aish-gallery'>
            <div className="container">
            <ImageGallery
        items={images}
        // showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true}
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