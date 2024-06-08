import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import CareerContentBox from "./CareerContentBox";
import Loader from "../../animation/Loader";
import FetchModule from "../../components/module/FetchModule";

const Career = () => {
  const [careerData, setCareerData] = useState(null);
  const { careerNewData, setFetchedCareerData } = useContext(DataContext);
  let careerLink = "https://optionflow.pro/api/Main/Career";
  useEffect(() => {
    if (careerNewData !== null && careerData === null) {
      setCareerData(careerNewData);
    } else if (careerData === null) {
      FetchModule(setCareerData, setFetchedCareerData, careerLink);
    }
  }, [careerData, setCareerData, setFetchedCareerData]);

  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Карьера</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content blog-grid">
        <section className="section-lg">
          <div className="container">
            <div className="row">
              {careerData ? (
                careerData.map((item) => (
                  <CareerContentBox careerObject={item} key={item.id} />
                ))
              ) : (
                <Loader />
              )}
              {/* <Loader /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;
