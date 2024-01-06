import React, { useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import PortfolioBlock from "./PortfolioBlock";
import Footer from "../../components/common/Footer";
import { loadScript } from "../../components/common/utils";

const Portfolio = () => {
  useEffect(() => {
    loadScript()
      .then(() => {})
      .catch((error) => {
        console.error("Error of loading script:", error);
      });
    return () => {};
  }, []);
  let portfolioContent = [
    {
      name: "Design Strategies",
      text: " Specific",
      id: 1,
    },
    {
      name: "Sociology Coliving",
      text: " Private",
      id: 2,
    },
    {
      name: "Working Together",
      text: "Lifestyle",
      id: 3,
    },
    {
      name: "Armazem Cowork",
      text: "Corporate",
      id: 4,
    },
    {
      name: "Innovation Center",
      text: "Venture",
      id: 5,
    },
    {
      name: "Future Workspace",
      text: "Vision",
      id: 6,
    },
    {
      name: "Unique coworking",
      text: "Corporate",
      id: 7,
    },
    {
      name: "Typographia Cowork",
      text: "Lifestyle",
      id: 8,
    },
    {
      name: "Running Practice",
      text: "Private",
      id: 9,
    },
  ];
  return (
    <div className="page-wrapper">
      <Navbar />
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
              {portfolioContent.map((item) => (
                <PortfolioBlock
                  itemName={item.name}
                  itemText={item.text}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
