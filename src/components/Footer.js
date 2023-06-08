
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsappSquare, FaWhatsapp, FaMapMarkedAlt, FaPhone, FaEnvelope, FaAngleUp, FaPhoneAlt, FaMarker, FaMapMarker, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";

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
    return (
        <>
        <footer>
        <div className="top-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-logo">
                            <Link to="/">
                                <img src={IMAGES.footerImg.FooterLogo} alt="header-logo" className="img-fluid" />
                            </Link>
                        </div>
                        <div className="footer-con">
                            <p>Wall Rock is one of the most promising real estate companies in North India. Promoters of this company are young, experienced, highly educated and enlightened new-age entepreneurs.</p>
                           
                            
                        </div>
                    </div>

                    <div className="col-md-2 offset-md-1">
                        <h5>Usefull Links</h5>
                        <div className="quick-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/yamuna-city-mall">Yamuna City Mall</Link></li>
                            <li><Link to="/aishwaryam">Aishwaryam</Link></li>
                            <li><Link to="/articels">Real Estate Developer Insights</Link></li>
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
                                <a href={SOCIAL_LINK.TWITTER} target="_blank"><FaTwitter /></a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINK.INSTAGRAM} target="_blank"><FaInstagram /></a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINK.LINKEDIN} target="_blank"><FaLinkedinIn /></a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINK.LINKEDIN} target="_blank"><FaYoutube /></a>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact  Imformation</h5>
                        <div className="reach-us">
                            <ul> 
                                <li><FaPhoneAlt /> <a href="tel:+91-9310786845">+91-9310786845</a></li>
                                <li><FaEnvelope /> <a href="mailto:info@yamunacitymall.co.in">info@yamunacitymall.co.in</a></li>
                                <li><FaMapMarkerAlt /> C-14, Gaur Yamuna City, Yamuna Expressway</li>
                             
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="container">
                <p>© 2023 All rights reserved. Design and Developed by <a href=""><img src={IMAGES.footerImg.NvdLogo} className='img-fluid' alt="nvd logo" /></a></p>  
            </div>
        </div>  
    </footer>
    <a id="back-to-top" className="btn btn-light btn-lg back-to-top" role="button" style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>  <FaAngleUp /></a>
    <div className="whr">
        <div className="amppulse"></div>
        <div className="amppulse"></div>
        <div className="amppulse"></div>
        <a href="https://wa.me/+9310786845<?text=" target="_blank" className="whatsapp-info amppulse">
        <FaWhatsapp className="whatsapp-icon" color="#fff" />
        </a>
    </div>
   
    </>
    );
}

export default Footer;