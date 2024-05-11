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
        const dataResponse = await axios.get(
          "https://optionflow.pro/api/Main/Services"
        );
        setServiceData(dataResponse.data);
        setFetchedServiceData(dataResponse.data);
        console.log("fesdf");
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

  console.log(serviceData);

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
                  ? serviceData
                      .reverse()
                      .map((serviceItem) => (
                        <ServiceContentBox
                          serviceTitle={serviceItem.title}
                          serviceCategory={serviceItem.category}
                          serviceLink={`/service-single/${serviceItem.id}`}
                          serviceImg={serviceItem.serviceImage}
                          serviceDescription={serviceItem.description}
                          serviceIcon={serviceItem.iconType}
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
