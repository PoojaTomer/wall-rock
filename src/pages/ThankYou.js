import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Helmet } from 'react-helmet';
import Breadcrumb from "../components/Breadcrumb";
import { IMAGES } from "../constants/Image-Constant";

export default function ThankYou (props) {
    return(
        <>
        <Helmet>
        <title>Thank You| Global Biz Digital</title>
    <meta name="description" content="thank You| Global Biz Digital" />
    <meta name="keyword" content="" />

</Helmet>
  <Breadcrumb Image={IMAGES.aboutPage.AboutBanner} Title="Thank You" />
      
        <div className="thank-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="svr-content">
                            <h2 className="men-heading">Thank You</h2>
                            <p>Thank you for contacting us. <br/>We will be in touch with you very soon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
    )
}


 