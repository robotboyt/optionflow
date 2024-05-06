import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioBlock from "./PortfolioBlock";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  useEffect(() => {
    const fetchService = async () => {
      try {
        const serviceResponse = await axios.get(
          "https://optionflow.pro/api/Main/Portfolio"
        );
        setPortfolioData(serviceResponse.data);
        console.log("fesdf");
      } catch (error) {
        console.error(error);
      }
    };
    fetchService();
  }, []);

  console.log(portfolioData);
  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Portfolio Style 1</h1>
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
              {portfolioData
                ? portfolioData.map((item) => (
                    <PortfolioBlock portfolioObject={item} key={item.id} />
                  ))
                : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
