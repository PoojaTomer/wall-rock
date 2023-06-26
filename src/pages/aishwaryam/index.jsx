import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/Breadcrumb";
import { IMAGES } from "../../constants/Image-Constant";
import Gallery from "./Components/Gallery";
import TestimonialSlider from "../../components/Testimonials";
import GetInTouch from "../../components/GetInTouch";
import Layout from "./Components/Layout";
import About from "./Components/About";
import ProjectHighlights from "./Components/projectHighlights";

const ProjectHighlightsList = [
  "Hdfc & Punjab National Bank Have Approved Home Loans For Aishwaryam.",
  "State-Of-The-Art Clubhouse With World-Class Amenities Like Swimming Pool, Billiards, Basketball Court,  Jogging Track, Sports Area, Gymnasium & Lounge For Residents.",
  "Ample Open Green Spaces, Fountains And Seating Areas To Relax & Rejuvenate.",
];

const testiList = [
  {
    Image: IMAGES.homepage.testProfile1,
    Name: "Mr. Ramgopal Kumar",
    Description:
      "I'm delighted to call Aishwaryam home! The building was finished and delivered earlier than expected, and the construction quality is indeed excellent. My apartment's rooms are laid out harmoniously, according to Vastu Shastra.",
  },
  {
    Image: IMAGES.homepage.testProfile2,
    Name: "Mr. Nirbhay Kataria",
    Description:
      "I am a resident of Aishwaryam, and I can proudly say that the high-quality construction of the building is evident in every corner. The amenities provided are the best. Thank you!",
  },
  {
    Image: IMAGES.homepage.testProfile1,
    Name: "Mr. Harry",
    Description:
      "I consider myself blessed to live in Aishwaryam. The construction shows incredible attention to detail. I heartily endorse Aishwarayam to anyone looking for a luxurious and beautiful home.",
  },
  {
    Image: IMAGES.homepage.testProfile2,
    Name: "Mr. Owen",
    Description:
      "Moving to Aishwaryam has been a dream for me and my family. Our two-bedroom apartment is spacious, exquisitely constructed, and furnished with all modern necessities. ",
  },
  {
    Image: IMAGES.homepage.testProfile1,
    Name: "Mr. RamKumar",
    Description:
      "Being a part of the Aishwaryam community makes me proud. Thanks to Wall Rock Developers' excellent construction, the entire structure emanates elegance and beauty. ",
  },
];
export default function Aishwaryam(props) {
  console.log("props.mobileScreen",props.mobileScreen);
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        
      </Helmet>
      {props.mobileScreen ? (
        <section className="aish-mobilebanner">
          <img
            src={IMAGES.aishwaryamPage.AishwaryamMobileBanner}
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
                src={IMAGES.aishwaryamPage.aishwaryamLeft}
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
        title="Redefining The Standards Of Modern Living - Aishwaryam"
        subTitle="Completed & Delivered"
        des1="Welcome to Aishwaryam, the luxurious and affordable residential projects developed by Wall Rock Developers. Nested in a prime location like Noida Extension, this residential apartment is well connected to Delhi NCR, allowing residents to enjoy a wide range of facilities. Aishwaryam offers 2BHK and 3BHK apartments with exceptional amenities. This project has 450 apartments, and all are sold out. One of the best things about Aishwaryam is its construction quality. Wall Rock Developers prides itself in delivering projects before time with no compromise in quality. "
        des2="Furthermore, homeowners will have peace of mind because Aishwaryam apartments embrace the principle of Vastu Shastra. The layout of every room is well-designed, each equipped with modern amenities and functions that cater to modern needs. Indeed, this project showcases our dedication to fulfilling the expectations of our customers."
      />

      <Gallery />

      <ProjectHighlights projectHighlightsList={ProjectHighlightsList} />

      <section className="aish-layout">
        <div className="container">
          <h3 className="main-heading text-center mb-5">Layout</h3>
          <Layout />
        </div>
      </section>

      <section className="aish-testimonials">
        <TestimonialSlider TestiList={testiList} />
      </section>

      <GetInTouch Title="Experience the pinnacle of luxury, quality, and comfort at an affordable price !!" />
    </>
  );
}
