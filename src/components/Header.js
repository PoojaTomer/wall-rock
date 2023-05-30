import React, {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link, NavLink} from "react-router-dom";
import "../assets/css/navbar.css";
import "../assets/css/custom.css"
import { IMAGES } from '../constants/Image-Constant';
// import GetAQuote from "./GetAQuote.js";
import {FaChevronDown, FaTimes, FaBars } from 'react-icons/fa';


function Header(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
        const handleClose = () => {
        setAnchorEl(null);
        }
    return (
        <>
        <header>
        <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 navbar-s">
            <div className="menu-icon" onClick={handleClick}>
              {click?<FaTimes />:<FaBars />}
                    {/* <FontAwesomeIcon icon={click ? faTimes : faBars} /> */}
                </div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-scroll shadow-5-strong">
                <div className="navbar-collapse collapse navbar-container">
                      <div className="nav navbar-nav navbar-left">
                        <Link className="navbar-brand" to="/"><img src={IMAGES.headerImg.HeaderLogo} alt="logo"  data-aos="zoom-in" data-aos-delay="100" data-aos-offset="0" className="img-fluid" /></Link>
                      </div>  
                    <ul className={click ? "nav-menu active navbar-nav" : "nav-menu navbar-nav navbar-right"}>
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => isActive ? "current nav-link" : "nav-link"
                              } onClick={closeMobileMenu}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => isActive ? "current nav-link" : "nav-link"
                              } onClick={closeMobileMenu}>About Us</NavLink>
                        </li>
                       
                        <li className="nav-item">
                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "current nav-link" : "nav-link"
                              } onClick={closeMobileMenu}>Yamuna City Mall</NavLink>
                          
                        </li>
                    
                        <li className="nav-item">
                            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "current nav-link" : "nav-link"
                              } onClick={closeMobileMenu}>Aishwaryam</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "current nav-link" : "nav-link"
                              } onClick={closeMobileMenu}>Real Estate Developer Insights</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "current nav-link" : "nav-link"
                              } onClick={closeMobileMenu}>Latest Articles</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "current nav-link" : "nav-link"
                              } onClick={closeMobileMenu}>Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link get-quote" onClick={showModal} >Schedule A Visit</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
</header>


{/* <GetAQuote isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} {...props} /> */}
</>
    );
}

export default Header;