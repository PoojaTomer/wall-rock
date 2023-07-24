import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { FaHome, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Breadcrumb from "../components/Breadcrumb";
import { SOCIAL_LINK } from '../constants/Constants';
import { IMAGES } from "../constants/Image-Constant";

export default function ThankYou(props) {
    return (
        <>
            <Helmet>
                <title>{props.title || "Wall Rock"}</title>

            </Helmet>
            <Breadcrumb Image="/images/about-banner.webp" Title="Thank You" />

            <div className="thank-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center">
                            <div className="shadow-box">
                                <h2 className="men-heading">Thank You</h2>
                                <p>Thank you for contacting us. <br />We will be in touch with you very soon.</p>
                                <Link to="/" className="btn btn-default">Go Home &nbsp;<FaHome /></Link>
                                <div className="social-menu">
                                    <ul>
                                        <li>
                                            <a href={SOCIAL_LINK.FACEBOOK} target="_blank"><FaFacebookF /></a>
                                        </li>
                                        {/* <li>
                                        <a href={SOCIAL_LINK.TWITTER} target="_blank"><FaTwitter /></a>
                                    </li> */}
                                        <li>
                                            <a href={SOCIAL_LINK.INSTAGRAM} target="_blank"><FaInstagram /></a>
                                        </li>
                                        {/* <li>
                                        <a href={SOCIAL_LINK.LINKEDIN} target="_blank"><FaLinkedinIn /></a>
                                    </li> */}
                                        <li>
                                            <a href={SOCIAL_LINK.LINKEDIN} target="_blank"><FaYoutube /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


