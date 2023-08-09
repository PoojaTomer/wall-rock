
import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsappSquare, FaWhatsapp, FaMapMarkedAlt, FaPhone, FaEnvelope, FaAngleUp, FaPhoneAlt, FaMarker, FaMapMarker, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { SOCIAL_LINK } from '../constants/Constants';
import { IMAGES } from '../constants/Image-Constant';

function Footer(props) {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    window.addEventListener('scroll', toggleVisible);

    const { pathname } = useLocation();
    useEffect(() =>{
        // console.log("pathname",pathname);
        // window.scrollTo(0,0);
        var element = document.getElementById("headerPanel");
        element.scrollIntoView();
        return props.children;
    }, [pathname])

    return (
        <>
        <footer>
        <div className="top-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-logo">
                            <Link to="/">
                                <img src="/images/logo.png" alt="header-logo" className="img-fluid" />
                            </Link>
                        </div>
                        <div className="footer-con">
                            <p>With an experience of 9 years, Wall Rock Developers stand tall in the industry as renowned commercial & residential property developers. From luxurious to affordable, our commercial & residential spaces are curated for every segment.</p>
                           
                            
                        </div>
                    </div>

                    <div className="col-md-2 offset-md-1">
                        <h5>Useful Links</h5>
                        <div className="quick-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/yamuna-city-mall">Yamuna City Mall</Link></li>
                            <li><Link to="/aishwaryam">Aishwaryam</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/articles">Articles</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                          
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-3">
                        <h5>Follow us</h5>
                        <div className="follow-us">
                        <ul>
                            <li>
                                <a href={SOCIAL_LINK.FACEBOOK} target="_blank"><FaFacebookF /></a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINK.YOUTUBE} target="_blank"><FaYoutube /></a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINK.INSTAGRAM} target="_blank"><FaInstagram /></a>
                            </li>

                            {/* <li>
                                <a href={SOCIAL_LINK.LINKEDIN} target="_blank"><FaLinkedinIn /></a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINK.TWITTER} target="_blank"><FaTwitter /></a>
                            </li> */}
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact  Information</h5>
                        <div className="reach-us">
                            <ul> 
                                <li><FaPhoneAlt /> <a href="tel:7037039009">70370 39009</a></li>
                                <li><FaEnvelope /> <a href="mailto:sales@wallrock.in">sales@wallrock.in</a></li>
                                <li><FaMapMarkerAlt /> <a href="https://goo.gl/maps/zdPqVfX3tnB6fNL96" target='_blank'>B-33, Sector 63, Noida , Uttar Pradesh 201303</a></li>
                             
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="container">
                <p>© 2023 All rights reserved. Design and Developed by <a href="https://www.newvisiondigital.co/" target='_blank'><img src="/images/nvd-logo.png" className='img-fluid' alt="nvd logo" /></a></p>  
            </div>
        </div>  
    </footer>
    <a id="back-to-top" className="btn btn-light btn-lg back-to-top" role="button" style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>  <FaAngleUp /></a>
    <div className="whr">
        <div className="amppulse"></div>
        <div className="amppulse"></div>
        <div className="amppulse"></div>
        
        <a href={`https://wa.me/7037039009`} data-action="share/whatsapp/share"  target="_blank" className="whatsapp-info amppulse" rel="noopener noreferrer">
        <FaWhatsapp className="whatsapp-icon" color="#fff" />
        </a>
    </div>
   
    </>
    );
}

export default Footer;