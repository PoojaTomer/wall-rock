import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';
import Slider from './Components/slider';
import Legacy from './Components/legacy';
import Schedule from './Components/schedule';
import LetestArticles from './Components/letestArticles';
import Testimonials from './Components/testimonials';
import ShoppingMall from './Components/shoppingMall';
import Banner from './Components/banner';


const AboutSubContent = [
    {
    Title:"Located on 6 lane Yamuna Expressway",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.",
    Image:IMAGES.homepage.article1,
    },
    
    {
    Title:"Consent for Revised Layout Plans",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.",
    Image:IMAGES.homepage.article2,
    },
    {
    Title:"State-of-the-art Amenities",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.",
    Image:IMAGES.homepage.article3,
    },
    {
        Title:"Located on 6 lane Yamuna Expressway",
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.",
        Image:IMAGES.homepage.article1,
    },
]

export default function Home(props) {
    return (
        <>
             <Helmet>
                <title>{props.title}</title>
                <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
                <meta name="keyword" content="Nvd usa" />
            </Helmet>
           <div className='page-wrapper'>
            {/* <Slider/> */}
            <Banner/>
            <Legacy />
            <ShoppingMall />
            <Schedule />
            <LetestArticles AboutSubContent={AboutSubContent} />
            <Testimonials />
            </div>
        </>
    );
}