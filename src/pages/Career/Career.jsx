import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "../../Context/DataContext";
import CareerContentBox from "./CareerContentBox";
import Loader from "../../animation/Loader";

const Career = () => {
  const [careerData, setCareerData] = useState(null);
  const { careerNewData, setFetchedCareerData } = useContext(DataContext);
  useEffect(() => {
    const fetchService = async () => {
      try {
        const dataResponse = await axios.get(
          "https://optionflow.pro/api/Main/Career"
        );
        const data = dataResponse.data.reverse();
        setCareerData(data);
        setFetchedCareerData(data);
        console.log("requeest");
      } catch (error) {
        console.error(error);
      }
    };

    if (careerNewData !== null && careerData === null) {
      console.log("here is second");
      setCareerData(careerNewData);
    } else if (careerData === null) {
      fetchService();
    }
  }, [careerData, careerNewData, setFetchedCareerData]);

  console.log(careerData);

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
