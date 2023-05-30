import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';

export default function Articles(props) {
    return (
        <>
             <Helmet>
                <title>{props.title}</title>
                <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
                <meta name="keyword" content="Nvd usa" />
            </Helmet>
            <Breadcrumb Title="Articles" Image={IMAGES.homepage.Banner} /> 
       
        </>
    );
}