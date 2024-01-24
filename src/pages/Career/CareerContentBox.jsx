import React from "react";
import CustomLink from "../../components/common/CustomLink";

const CareerContentBox = ({ title, date, categories, link }) => {
  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-career-style">
        <div className="career-item">
          <div className="pbminfotech-box-content">
            <div className="pbmit-box-content-wrapper">
              <h3 className="pbmit-career-title">
                <CustomLink propsHref="/career-single">{title}</CustomLink>
              </h3>
              <div className="pbmit-meta-container">
                {categories.map((categoryItem) => (
                  <span
                    className="pbmit-meta-category"
                    key={categoryItem.toString()}
                  >
                    <a href="career.html" rel="category tag">
                      {categoryItem}
                    </a>
                  </span>
                ))}
              </div>
              <div className="pbmit-meta-container">
                <span className="pbmit-meta pbmit-date-wrapper">
                  <span className="pbmit-post-date">
                    <i className="pbmit-base-icon-calendar-1 pbmit-base-icon"></i>
                    {date}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CareerContentBox;
