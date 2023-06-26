import React from "react";
import { Audio } from "react-loader-spinner";

const Preloader = () => {
  // return <div className="d-flex justify-content-center preLoaderPanel">
  //     <div className="spinner-border" role="status">
  //         <span className="visually-hidden"></span>
  //     </div>
  // </div>;

  // return <div id="loader-wrapper">
  //     <div id="loader"></div>
  //     <div className="loader-section section-left">
  //         <div className="preLoaderIcon" style={{ paddingTop: "10%", color: "red", position: "sticky" }}>
  //             loading...
  //         </div>
  //     </div>
  // </div>;

  return (
    <div
      className="page-wrapper"
      style={{
        minHeight: "600px",
        backgroundColor: "#1f5aaa",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Audio
        type="Oval"
        color="#00BFFF"
        height={40}
        width={40}
        ariaLabel="loading"
      />
    </div>
  );

  // return <div className="load-wrapper">
  //     <div className="load-spinner">
  //         <div className="spinner-1"></div>
  //         <div className="spinner-2"></div>
  //         <div className="spinner-3"></div>
  //     </div>
  // </div>
};

export default Preloader;
