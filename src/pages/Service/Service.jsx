import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ServiceData from "./ServiceData";
import ServiceContentBox from "./ServiceContentBox";

const Service = () => {
  useEffect(() => {
    const scriptsScript = document.createElement("script");
    scriptsScript.src = "./js/scripts.js";
    scriptsScript.async = true;

    document.body.appendChild(scriptsScript);

    return () => {
      if (document.body.contains(scriptsScript)) {
        document.body.removeChild(scriptsScript);
      }
    };
  }, []);

  return (
    <div>
      <div className="page-wrapper">
        <Navbar />
        <div className="pbmit-title-bar-wrapper">
          <div className="container">
            <div className="pbmit-title-bar-content">
              <div className="pbmit-title-bar-content-inner">
                <div className="pbmit-tbar">
                  <div className="pbmit-tbar-inner container">
                    <h1 className="pbmit-tbar-title">Services</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content blog-grid">
          <section className="section-lg service-section">
            <div className="container">
              <div className="row">
                {ServiceData.map((serviceItem) => (
                  <ServiceContentBox
                    serviceTitle={serviceItem.title}
                    serviceCategory={serviceItem.category}
                    serviceLink={serviceItem.link}
                    serviceImg={serviceItem.imageSrc}
                    serviceIcon={serviceItem.iconClass}
                    key={serviceItem.id}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Service;
