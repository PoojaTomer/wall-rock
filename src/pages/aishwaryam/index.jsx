import React from "react";
import { Helmet } from "react-helmet";
import Gallery from "./Components/Gallery";
import TestimonialSlider from "../../components/Testimonials";
import GetInTouch from "../../components/GetInTouch";
import Layout from "./Components/Layout";
import About from "./Components/About";
import ProjectHighlights from "./Components/projectHighlights";


const ProjectHighlightsList = [
  "HDFC & Punjab National Bank Have Approved Home Loans For Aishwaryam.",
  "State-Of-The-Art Clubhouse With World-Class Amenities Like Swimming Pool, Billiards, Basketball Court,  Jogging Track, Sports Area, Gymnasium & Lounge For Residents.",
  "Ample Open Green Spaces, Fountains And Seating Areas To Relax & Rejuvenate.",
];

const testiList = [
  {
    Image:"/images/client-icon-1.webp",
    Name: "Pankaj Goel",
    Description:
      "I'm delighted to call Aishwaryam home! The building was finished and delivered earlier than expected, and the construction quality is indeed excellent. My apartment's rooms are laid out harmoniously, according to Vastu Shastra.",
  },
  {
    Image: "/client-icon-2.webp",
    Name: "Reema Singh",
    Description:
      "I am a resident of Aishwaryam, and I can proudly say that the high-quality construction of the building is evident in every corner. The amenities provided are the best. Thank you!",
  },
  {
    Image: "/client-icon-2.webp",
    Name: "Rajeev Garg",
    Description:
      "I consider myself blessed to live in Aishwaryam. The construction shows incredible attention to detail. I heartily endorse Aishwarayam to anyone looking for a luxurious and beautiful home.",
  },
  {
    Image: "/client-icon-2.webp",
    Name: "Suman Srivastava",
    Description:
      "Moving to Aishwaryam has been a dream for me and my family. Our two-bedroom apartment is spacious, exquisitely constructed, and furnished with all modern necessities. ",
  },
  {
    Image: "/client-icon-2.webp",
    Name: "Kritika Joshi",
    Description:
      "Being a part of the Aishwaryam community makes me proud. Thanks to Wall Rock Developers' excellent construction, the entire structure emanates elegance and beauty. ",
  },
];
export default function Aishwaryam(props) {
  console.log("props.mobileScreen",props.mobileScreen);
  return (
    <>
      <Helmet>
      <meta name="robots" content="index, follow" />
      <title>Flat in Noida Extension | 2 BHK / 3 BHK in Noida - Wall Rock Developers</title>
      <meta name="title" content="Flat in Noida Extension | 2 BHK / 3 BHK in Noida - Wall Rock Developers"/>
      <meta name="description" content="Find your perfect 2 BHK / 3 BHK in Noida at Aishwaryam. Contact Wall Rock Developers now to book your dream flat in Noida Extension!" />

      <link rel="canonical" href="https://wallrock.in/aishwaryam" />

      {/* <meta name="keyword" content="Wall Rock" /> */}
        
      </Helmet>
      {props.mobileScreen ? (
        <section className="aish-mobilebanner">
          <img
            src="/images/ashi-mobile-banner.webp"
            className="img-fluid"
            alt="Ashiwaryam Mobile Banner"
            loading="lazy"
          />
        </section>
      ) : (
        <section className="aish-banner">
          <div className="container">
            <div className="col-md-6">
              <img
                src="/images/aishraryam-banner-left.webp"
                className="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="col-md-6"></div>
          </div>
        </section>
      )}

      <About
        title="Aishwaryam: Discover The Finest Flats in Noida Extension!"
        subTitle="Completed & Delivered"
      />

      <Gallery />

      <ProjectHighlights projectHighlightsList={ProjectHighlightsList} />

      <section className="aish-layout">
        <div className="container">
          <h3 className="main-heading text-center mb-5">Layouts</h3>
          <Layout />
        </div>
      </section>

      <section className="aish-testimonials">
        <TestimonialSlider TestiList={testiList} />
      </section>

      <GetInTouch subject="Query For Aishwaryam" Title="Experience the pinnacle of luxury, quality, and comfort at an affordable price !!" />
    </>
  );
}
