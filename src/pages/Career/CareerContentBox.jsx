import React from "react";
import CustomLink from "../../components/common/CustomLink";

const CareerContentBox = ({ careerObject }) => {
  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-career-style">
        <div className="career-item">
          <div className="pbminfotech-box-content">
            <div className="pbmit-box-content-wrapper">
              <h3 className="pbmit-career-title">
                <CustomLink propsHref={`/career-single/${careerObject.id}`}>
                  {careerObject.title}
                </CustomLink>
              </h3>
              <div className="pbmit-meta-container">
                {careerObject.technologies.map((categoryItem) => {
                  return categoryItem ? (
                    <span
                      className="pbmit-meta-category"
                      key={categoryItem.toString()}
                    >
                      {categoryItem}
                    </span>
                  ) : null;
                })}
              </div>
              <div className="pbmit-meta-container">
                <span className="pbmit-meta pbmit-date-wrapper">
                  <span className="pbmit-post-date">
                    <i className="pbmit-base-icon-calendar-1 pbmit-base-icon">
                      {careerObject.dateCreate}
                    </i>
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
