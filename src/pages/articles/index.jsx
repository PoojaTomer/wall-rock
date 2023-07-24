import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import ArticleBox from './Components/ArticleBox';

export default function Articles(props) {
   
    return (
        <>
             <Helmet>
             <title>{props.title || "Wall Rock"}</title>
             <link rel="canonical" href="https://wallrock.in/articles" />
            </Helmet>
            <Breadcrumb Title="Articles" Image="/images/media-banner.webp" /> 
            <ArticleBox />
       
        </>
    );
}