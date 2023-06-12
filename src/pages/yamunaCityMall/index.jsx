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
