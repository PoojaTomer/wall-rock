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
import TestimonialSlider from '../../components/Testimonials';


const AboutSubContent = [
    {
    Title:"Commitment to Quality",
    Description:"We believe in delivering the highest quality standards in every project we undertake, ensuring your investment is built to last.",
    Image:IMAGES.homepage.article1,
    },
    
    {
    Title:"Customer Trust",
    Description:"Your trust is our top priority. We strive to meet your expectations and deliver more at every stage of the journey.",
    Image:IMAGES.homepage.article2,
    },
    {
    Title:"On-time Delivery",
    Description:"We understand the importance of timely possession and strive to deliver projects within the promised timelines.",
    Image:IMAGES.homepage.article3,
    },
    {
        Title:"Industry Experts",
        Description:"With 9+ years of experience in the real estate landscape, our goal is to deliver exceptional projects. ",
        Image:IMAGES.homepage.article4,
    },
]

const testiList = [
    {
      Image:IMAGES.homepage.testProfile1,
      Name:"Mr. Ramgopal Kumar",
      Description:"From the moment I stepped into my new apartment, I was completely satisfied by a sense of elegance and comfort. The attention to detail in the construction and design of the apartment is truly remarkable. The use of premium materials, modern finishes, and thoughtful layouts has created a space that is not only aesthetically pleasing but also functional and comfortable.",
    },
    {
      Image:IMAGES.homepage.testProfile2,
      Name:"Mr. Nirbhay Kataria",
      Description:"The facilities provided within the residential complex are awesome. From beautifully landscaped gardens to well-equipped fitness centers and even swimming pools, every aspect of recreation has been meticulously planned. Also, there is also a separate play garden for children, ensuring a safe and enjoyable environment for families.",
    },
    {
      Image:IMAGES.homepage.testProfile1,
      Name:"Mr. Harry",
      Description:"I am extremely happy with my decision to invest in the Wall Rock Developers Yamuna City project. The quality of construction is impeccable, and the attention to detail is commendable. They are doing a great job.",
    },
    {
      Image:IMAGES.homepage.testProfile2,
      Name:"Mr. Owen",
      Description:"Investing in Aishwaryam has been a wise decision, and I couldn't be happier with the outcome. The construction quality is outstanding, reflecting the builders' dedication to excellence.",
    },
    {
      Image:IMAGES.homepage.testProfile1,
      Name:"Mr. RamKumar",
      Description:"I bought a flat in Aishwaryam, and I am extremely pleased to invest in Wall Rock Developers. They delivered my apartment on time and working with their staff as a whole was wonderful. Wall Rock has my highest recommendation due to its dedication to quality.",
    },
    {
        Image:IMAGES.homepage.testProfile2,
        Name:"Mr. Mahesh Kumar",
        Description:"I am delighted to have an apartment in Aishwaryam. The construction and design of the apartment are unmatched, consisting of every crucial element that makes my apartment a comfortable and luxurious living space. The entire process, from booking to possession, was smooth, and I appreciate their commitment to timely delivery.",
      },
      {
        Image:IMAGES.homepage.testProfile1,
        Name:"Mr. kaushal Kumar",
        Description:"I was in contact with Wall Rock Developers to  buy a flat at Aishwaryam. They have fulfilled their promises of timely delivery, and I couldn't be happier with my investment. Wall Rock Developers is synonymous with trust, reliability, and quality.",
      },
  ]

export default function Home(props) {
    return (
        <>
             <Helmet>
                <title>{props.title}</title>
                {/* <meta name="description" content="" />
                <meta name="keyword" content="Nvd usa" /> */}
            </Helmet>
          
            {/* <Slider/> */}
            <Banner mobileScreen={props.mobileScreen} />
            <Legacy />
            <ShoppingMall />
            <Schedule />
            <LetestArticles AboutSubContent={AboutSubContent} />
            <section className="testimonial-sec">
                <TestimonialSlider TestiList={testiList} />
            </section>

          
        </>
    );
}