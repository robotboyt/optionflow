import React, { useEffect, useState, useContext } from "react";
// import ServiceData from "./ServiceData";
import ServiceContentBox from "./ServiceContentBox";
import axios from "axios";
import { DataContext } from "../../Context/DataContext";

const Service = () => {
  const [serviceData, setServiceData] = useState(null);
  const { serviceNewData, setFetchedServiceData } = useContext(DataContext);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const serviceResponse = await axios.get(
          "http://127.0.0.1:5000/service"
        );
        setServiceData(serviceResponse.data);
        setFetchedServiceData(serviceResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (serviceNewData !== null) {
      setServiceData(serviceNewData);
    } else {
      fetchService();
    }
  }, [serviceNewData, setFetchedServiceData]);

  return (
    <div>
      <div className="page-wrapper">
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
                {serviceData
                  ? serviceData.map((serviceItem) => (
                      <ServiceContentBox
                        serviceTitle={serviceItem.title}
                        serviceCategory={serviceItem.subtitle}
                        serviceLink={`/service-single/${serviceItem.id}`}
                        serviceImg={serviceItem.imageUrl}
                        // serviceIcon={serviceItem.iconClass}
                        key={serviceItem.id}
                      />
                    ))
                  : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Service;
