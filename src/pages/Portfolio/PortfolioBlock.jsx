import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../components/common/CustomLink";

const PortfolioBlock = ({ itemName, itemText, id }) => {
  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-portfolio-style-4">
        <div className="pbminfotech-post-content">
          <div className="pbmit-image-wrapper">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img
                  src="images/coworking/project/project-04.jpg"
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
                  <CustomLink propsHref="/portfolio-single">
                    {itemName}
                  </CustomLink>
                </h3>
                <div className="pbmit-port-cat">
                  <a href="portfolio-style-1.html" rel="tag">
                    {itemText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PortfolioBlock;
