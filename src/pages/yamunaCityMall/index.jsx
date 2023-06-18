import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';
import Banner from './Components/banner';
import AwardWinning from './Components/awardWinning';
import GetInTouch from '../../components/GetInTouch';
import MirajChinema from './Components/mirajChinema';
import YcmArticle from './Components/YcmArticle';
import WhyYamunaExpress from './Components/whyYamunaExpress';
import YcmGallery from './Components/ycmGallery';
import LuxuaryRetail from './Components/luxuaryRetail';
import Brands from './Components/brands';
import InvestmentExperties from './Components/InvestmentExperties';

const AwardWinningContent =[
    {
        Title:"35000+",
        SubTitle:"Surrounded Population",
        Des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        Image:IMAGES.ycmPage.award1,
    },
    {
        Title:"800000+",
        SubTitle:"LAC SQ-FT ARE DEVELOPED",
        Des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        Image:IMAGES.ycmPage.award2,
    },
    {
        Title:"250 Acres",
        SubTitle:"Part of Gaur yamuna City",
        Des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        Image:IMAGES.ycmPage.award3,
    },
]

const YcmArticleSlides =[
    {
        Title:"Entertainment Zone",
        Image:IMAGES.ycmPage.YcmArticle1,
    },
    {
        Title:"Super Market",
        Image:IMAGES.ycmPage.YcmArticle2,
    },
    {
        Title:"Food Court",
        Image:IMAGES.ycmPage.YcmArticle3,
    },
]

const luxuaryListing = <ul className="mt-3">
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">First multiplex in Yamuna City region</li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">Earthquake resistant and Wi-Fi enabled building</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Two side open corner plot</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Well connected with <span>Yamuna Expressway</span></li>
<li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">A <span>3-minute drive</span> from the forthcoming Film City</li>
<li data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">A 10-minute drive from the upcoming <span>Noida International Airport</span>, Jewar, UP</li>

<li data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">Fully Paid Land</li>
<li data-aos="fade-up" data-aos-delay="800" data-aos-offset="0">Comprises of both the escalators as well as lift </li>
<li data-aos="fade-up" data-aos-delay="900" data-aos-offset="0">Surrounded by the density of <span>35000+ population</span></li>
<li data-aos="fade-up" data-aos-delay="1000" data-aos-offset="0">An integral part of <span>250 acres</span> of Gaur Yamuna City </li>
<li data-aos="fade-up" data-aos-delay="1100" data-aos-offset="0"><span>1000 families</span> are living in a radius of 500 mtr</li>
<li data-aos="fade-up" data-aos-delay="1200" data-aos-offset="0">Strategically located on the <span>60-meter-wide road</span>
facing to Yamuna Expressway</li>


</ul>

export default function YamunaCityMall(props) {
    return (
        <>
          <Helmet>
                <title>{props.title}</title>
                {/* <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
                <meta name="keyword" content="Nvd usa" /> */}
            </Helmet>
            <Banner  Title="Yamuna City Mall" Image={IMAGES.ycmPage.ycmBanner}/>
            <AwardWinning awardWinningContent={AwardWinningContent}  />
            <YcmGallery />

            <LuxuaryRetail
            subTitle="Yamuna City Mall is the newest commercial real estate project by Wall Rock Developers Currently under construction, this luxurious and 
            modern mall is set to be a hub for both business and entertainment, boasting a classic and lavish theme that will transport 
            visitors to a world of luxury and indulgence."
            LuxuaryListing={luxuaryListing}
             />
            <Brands />
            <InvestmentExperties />
            <WhyYamunaExpress />

            <YcmArticle YcmArticleSlider={YcmArticleSlides} />
            <MirajChinema 
            Title="Miraj Cinemas"
            SubTitle="New Multiplex"
            Des="Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
             />
            <GetInTouch />
            
        </>
    );
}
