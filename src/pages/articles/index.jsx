import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';
import ArticleBox from './Components/ArticleBox';

export default function Articles(props) {
    return (
        <>
             <Helmet>
                <title>{props.title}</title>
                {/* <meta name="description" content="" />
                <meta name="keyword" content="wall Rock" /> */}
            </Helmet>
            <Breadcrumb Title="Articles" Image="/media-banner.webp" /> 
            <ArticleBox />
       
        </>
    );
}