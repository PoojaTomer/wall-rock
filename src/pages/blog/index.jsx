import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import BlogBox from './Components/BlogBox';

export default function Blog(props) {
    return (
        <>
        <Helmet>
        <title>{props.title || "Wall Rock"}</title>
        <link rel="canonical" href="https://wallrock.in/blog" />
       </Helmet>
       <Breadcrumb Title="Blog" Image="/images/media-banner.webp" /> 
      <BlogBox />
  
   </>
    );
}
