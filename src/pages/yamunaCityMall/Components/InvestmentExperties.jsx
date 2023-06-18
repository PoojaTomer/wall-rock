import React,{useEffect, useRef, useState} from 'react';
import playVideo from '../../../assets/images/play-video.png';
import { IMAGES } from '../../../constants/Image-Constant';

export default function InvestmentExperties(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef();
    const togglePlaying = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? videoRef.current.pause() : videoRef.current.play();
      };
 
    return (
        <>
            <section className='investment-sec'>
                <div className="container">
                    <div className='col-md-10 offset-md-1 text-center'>
                        <h2 className='main-heading'>Experience. Investment. Expertise.</h2>
                        <h5>Enjoy A Luxury Experience</h5>
                        <p>Spanning over 5000 square meters of land, this project is an impressive and spacious option that is both reasonably priced and purely elegant. Strategically facing the 60 meters wide Yamuna Expressway, the mall provides an ideal location for businesses looking to attract a large investor and consumer base.</p>
                        <p>The mall's modern façade provides ample branding space for potential retailers, ensuring maximum visibility and exposure. In addition, the Yamuna City Mall will feature the First Multiplex in the Yamuna City Region, making it a perfect investment destination for high returns.</p>
                        <button className='btn custom-btn'>Book Now</button>
                    </div>
                </div>
                <div className='container'>
                    <div className="row">
                    <div className='col-md-8'></div>
                   <div className='col-md-4'>
                   <div className='videoplay-button'>
                    {/* <img onClick={togglePlaying} src={playVideo} /> */}
                    <span  onClick={togglePlaying}>
                    {
                        isPlaying ? (
                            <svg fill='#FFFFFF' height='40' viewBox='0 0 24 24' width='40'>
                                <path d='M0 0h24v24H0z' fill='none'/>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
                            </svg> 
                        )
                        : (
                           <svg fill='#FFFFFF' height='40' viewBox='0 0 24 24' width='40'>
                                    <path d='M0 0h24v24H0z' fill='none'/>
                                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
                            </svg>
                        )
                    }
                   </span>
                  </div>
                </div>
                </div>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                    <video ref={videoRef} startTime={100} onClick={(e) => e.target.play()} playsInline loop muted>
                        <source src={IMAGES.ycmPage.Ycmvideo} type="video/mp4">
                        </source>
                    </video>
                </div>
               
            </section>
        </>
    );
}
