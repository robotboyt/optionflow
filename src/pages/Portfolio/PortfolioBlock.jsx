import React from "react";
import CustomLink from "../../components/common/CustomLink";

const PortfolioBlock = ({ portfolioObject, id }) => {
  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-portfolio-style-4">
        <div className="pbminfotech-post-content">
          <div className="pbmit-image-wrapper">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img
                  src={`https://optionflow.pro/${portfolioObject.portfolioImage}`}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pbminfotech-box-content pbminfotech-overlay">
            <div className="pbminfotech-box-content-wrapper">
              <div className="pbminfotech-titlebox">
                <h3 className="pbmit-portfolio-title">
                  <CustomLink
                    propsHref={`/portfolio-single/${portfolioObject.id}`}
                  >
                    {portfolioObject.title}
                  </CustomLink>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PortfolioBlock;
