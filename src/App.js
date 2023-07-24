import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieConsent, { Cookies } from "react-cookie-consent";
import "./assets/css/Preloader.css";
import Preloader from "./components/preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Scroll from "./components/smoothScroll";

// import Homepage from './pages/home';
const Homepage = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Articles = lazy(() => import("./pages/articles"));
const YamunaCityMall = lazy(() => import("./pages/yamunaCityMall"));
const Aishwaryam = lazy(() => import("./pages/aishwaryam"));
const Blog = lazy(() => import("./pages/blog"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TestPage = lazy(() => import("./pages/TestNvd"));

function App() {
  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(() => {
    console.log("window", window.innerWidth);
    if (window.innerWidth <= 500) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  }, []);
  //   useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  // }, []);
  return (
    <BrowserRouter basename="/">
      <Header />

      <Suspense fallback={Preloader()}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage mobileScreen={mobileScreen} title="Wall Rock" />}
          />
          <Route exact path="/about" element={<About title="About | Wall Rock" />} />
          <Route
            exact
            path="/contact"
            element={<Contact title="Contact | Wall Rock" />}
          />
          <Route
            exact
            path="/articles"
            element={<Articles title="Articel | Wall Rock" />}
          />
          <Route
            exact
            path="/article/noida-internation-airport-as-a-game-changer-for-delhi-ncr-infrastructure-and-real-estate"
            element={<Articles title="Articel | Wall Rock" />}
          />
          <Route
            exact
            path="/yamuna-city-mall"
            element={<YamunaCityMall title="Yamuna City Mall | Wall Rock" />}
          />
          <Route
            exact
            path="/aishwaryam"
            element={
              <Aishwaryam mobileScreen={mobileScreen} title="Aishwaryam | Wall Rock" />
            }
          />
          <Route
            exact
            path="/thank-you"
            element={<ThankYou title="Thank You | Wall Rock" />}
          />
          <Route
           exact
            path="/blog"
            element={<Blog title="Blog | Wall Rock" />}
          />
          <Route
           exact
            path="/blog/what-makes-yamuna-expressway-the-perfect-location-for-your-next-investment"
            element={<Blog title="Blog | Wall Rock" />}
          />

          <Route path="*" element={<NotFound title="404 | Wall Rock" />} />
        </Routes>
      </Suspense>
      {/* <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText="Accept & Continue"
        cookieName="myAwesomeCookieName3"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "white", fontSize: "13px", background: "green" }}
        declineButtonText="Cancel"
        // declineButtonStyle={{ color: "Green", fontSize: "13px", background:"white", }}
        expires={150}
        SameSite="Lax"
      >
        We use Cookies for a number of reasons such as keeping NVD sites
        reliable and secure, personalising content and ads, providing social
        media features and to analyse how our sites are used.
      </CookieConsent> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
