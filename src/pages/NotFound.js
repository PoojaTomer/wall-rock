import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Helmet from "react-helmet"; 
import Breadcrumb from "../components/Breadcrumb";
import { IMAGES } from "../constants/Image-Constant";
import { FaFrown } from "react-icons/fa";


const NotFound = (props) =>{
    return(
        <div className="serchengne01">
            <Helmet>
            <meta name="robots" content="index, follow" />
                <title>{props.title || "Wall Rock"}</title>                
            </Helmet>
          <Breadcrumb Title="Not Found" Image="/images/about-banner.webp" />
          {/* <!-- not-found start --> */}
            <div className="not-found-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="svr-content">
                                <h2 className="men-heading">4 <FaFrown /> 4</h2>
                                <p>The page you were looking for was moved or doesn't exist.<br />Let's get you back.</p>
                                <NavLink className="nav-link" to="/"><button type="button" className="btn btn-default">Back to Home</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* https://codepen.io/knyttneve/pen/YgZbLO */}
{/* <!-- not-found start end --> */}
            {/* <div className="truenpashion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3><span>Oop's</span> you are on the wrong way</h3>
                            <p>We are sorry. But the page you are looking for is not available. Still no warries, we will help you further. You can search what's is your  mind or visit homepage to know more about us</p>
                            <div className="homserve01">
                            </div>
                        </div>
                    </div>
                </div>
           </div> */}
        </div>
    )
}

export default NotFound;