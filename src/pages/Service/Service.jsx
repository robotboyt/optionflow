import React, { useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ServiceData from "./ServiceData";
import ServiceContentBox from "./ServiceContentBox";
import { loadScript } from "../../components/common/utils";

const Service = () => {
  useEffect(() => {
    loadScript()
      .then(() => {})
      .catch((error) => {
        console.error("Error of loading script:", error);
      });

    return () => {};
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
