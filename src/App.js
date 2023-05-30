import React, {lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { ParallaxProvider } from 'react-scroll-parallax';
import Preloader from './components/preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import Scroll from "./components/smoothScroll";
// import Homepage from './pages/home';
 const Homepage = lazy(() => import("./pages/home"));
 const About = lazy(() => import("./pages/about"));
 const Contact = lazy(() => import("./pages/contact"));
 const Articles = lazy(() => import("./pages/articles"));
 const ThankYou = lazy(() => import("./pages/ThankYou"));
 const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  //   useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  // }, []);
  return (
   <BrowserRouter basename="/">
    <ParallaxProvider fallback={Preloader()}>
      {/* <Scroll /> */}
    <Header/>
    <Routes>
      <Route exact path="/" element={<Homepage  title="Home page" />} />
      <Route path="/about" element={<About  title="about page" />} />
      <Route path="/contact" element={<Contact  title="contact page" />} />
      <Route path="/articels" element={<Articles  title="articel page" />} />
      <Route path="/thank-you" element={<ThankYou title="Thank You page"/>} />
      <Route path="*" element={<NotFound title="no record found"/>} />
    </Routes>
    <Footer/>
    <CookieConsent
    enableDeclineButton flipButtons
  location="bottom"
  buttonText="Accept & Continue"
  cookieName="myAwesomeCookieName3"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "white", fontSize: "13px", background:"green", }}
  declineButtonText="Cancel"
  // declineButtonStyle={{ color: "Green", fontSize: "13px", background:"white", }}
  expires={150}

>
We use Cookies for a number of reasons such as keeping NVD sites reliable and secure, personalising content and ads, providing social media features and to analyse how our sites are used.
</CookieConsent>
    </ParallaxProvider>
   </BrowserRouter>
  );
}

export default App;
