import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const NotFoundPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">404</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content ">
        <section className="section-lg">
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "400px",
                color: "white",
              }}
            >
              <h3>{"PAGE NOT FOUND :("}</h3>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
