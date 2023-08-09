import React from 'react';
import { Helmet } from 'react-helmet';
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
        Des:"The upcoming commercial hub at Gaur Yamuna City,  Yamuna Expressway, will cater to all commercial needs of more than 35,000+ people. Yamuna City Mall is the most awaited Commercial Project, with the first Multiplex at Gaur Yamuna City, Yamuna Expressway. ",
        Image:"/images/award-population.webp",
    },
    {
        Title:"2 Lac",
        SubTitle:"Sq. Ft of Retail & Entertainment Space",
        Des:"Yamuna City Mall is a hub for business and entertainment, bringing a world of indulgence for visitors.",
        Image:"/images/award-developed.webp",
    },
    {
        Title:"250 Acres",
        SubTitle:"Part of Gaur Yamuna City",
        Des:"An integral part of 250 acre Gaur Yamuna City has a huge catchment area with incredible market potential. Yamuna City Mall is a landmark of new opportunities for investors to get strong returns due to the upcoming Noida International Airport & Film City.",
        Image:"/images/award-gaur.webp",
    },
]

const YcmArticleSlides =[
    {
        Title:"Entertainment Zone",
        Image:"/images/ycm-articel1.webp",
    },
    {
        Title:"Super Market",
        Image:"/images/ycm-articel2.webp",
    },
    {
        Title:"Food Court",
        Image:"/images/ycm-articel3.webp",
    },
]

const luxuaryListing = <ul className="mt-3">
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">First Multiplex In Yamuna City Region</li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">Earthquake-Resistant And Wi-Fi Enabled Building</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Two-Side Open Corner Plot</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Well Connected With <span>Yamuna Expressway</span></li>
<li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">A <span>3-Minute Drive</span> From The Upcoming Film City</li>
<li data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">A 10-Minute Drive From The Upcoming <span>Noida International Airport</span>, Jewar, UP </li>

<li data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">Fully Paid Land</li>
<li data-aos="fade-up" data-aos-delay="800" data-aos-offset="0">Comprises Both The Escalators As Well As Lift</li>
<li data-aos="fade-up" data-aos-delay="900" data-aos-offset="0">Surrounded By The Density Of <span>35,000+ Population</span></li>
<li data-aos="fade-up" data-aos-delay="1000" data-aos-offset="0">An Integral Part Of <span>250 Acres</span> Gaur Yamuna City </li>
<li data-aos="fade-up" data-aos-delay="1100" data-aos-offset="0"><span>1000 Families</span> Are Living In A Radius Of 500 Metres</li>
<li data-aos="fade-up" data-aos-delay="1200" data-aos-offset="0">Strategically Located On the 60 mt Wide-Road Facing To Yamuna Expressway</li>


</ul>

export default function YamunaCityMall(props) {
    return (
        <>
          <Helmet>
                <meta name="robots" content="index, follow" />
                <title>Best Commercial Projects in Noida | Shops in Gaur Yamuna City - Wall Rock Developers</title>
                <meta name="title" content="Best Commercial Projects in Noida | Shops in Gaur Yamuna City - Wall Rock Developers"/>
                <meta name="description" content="Secure Yamuna Expressway commercial shops at our ongoing project Yamuna City Mall. It is one of our best commercial projects in Noida. Contact us today!" />
               
                <link rel="canonical" href="https://wallrock.in/yamuna-city-mall" />
                {/* <meta name="keyword" content="Wall Rock" /> */}
            </Helmet>
            
            <Banner  Title="Yamuna City Mall" Image="/images/ycm-banner-1.jpg"/>
            <AwardWinning awardWinningContent={AwardWinningContent}  />
            <YcmGallery />

            <LuxuaryRetail
            subTitle="Yamuna City Mall is an ongoing commercial project by Wall Rock Developers which is under construction. This mall is set to be a hub for businesses and entertainment. It can be the best commercial investment in Noida
            for anyone looking to safeguard their future assets."
            LuxuaryListing={luxuaryListing}
             />
            <Brands />
            <InvestmentExperties />
            <WhyYamunaExpress />

            <YcmArticle YcmArticleSlider={YcmArticleSlides} />
            
            <MirajChinema 
            Title="Miraj Cinema"
            SubTitle="Multiplex"
            SubTitle2="at Yamuna City Mall"
            Des="A well-known name in the entertainment sector, Miraj Cinemas, has unveiled its new multiplex, providing moviegoers with a cutting-edge cinematic experience. The newest multiplex from Miraj Cinemas has the latest amenities and technology to guarantee a fantastic experience. As you enter the theatre, you are welcomed by a contemporary and stylish environment, which sets the scene for an immersive movie experience. The multiplex also hosts exclusive screenings, premieres, and special events, providing a platform for film enthusiasts to come together and celebrate the magic of cinema. Every movie lover will have an unmatched audiovisual experience because of the theatre's comfortable seats, large auditoriums, and cutting-edge sound equipment.
            "/>
            
            <GetInTouch subject="Query For Yamuna City Mall" message="I request Wall Rock Developers to contact me for sales enquiry and share all the relevent details" />
            
        </>
    );
}
