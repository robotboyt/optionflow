import React from "react";
import CareerData from "./CareerData";
import CareerContentBox from "./CareerContentBox";

const Career = () => {
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
              {CareerData.map((item) => (
                <CareerContentBox
                  title={item.title}
                  link={item.link}
                  date={item.date}
                  categories={item.categories}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;
