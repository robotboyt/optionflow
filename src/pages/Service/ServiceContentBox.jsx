import React from "react";
import CustomLink from "../../components/common/CustomLink";

const ServiceContentBox = ({
  serviceTitle,
  serviceImg,
  serviceLink,
  serviceIcon,
  serviceCategory,
}) => {
  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-service-style-6">
        <div className="pbminfotech-post-item">
          <div className="pbmit-service-image-wrapper">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img src={serviceImg} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="pbminfotech-box-content">
            <div className="pbminfotech-box-content-inner">
              <div className="pbmit-service-icon-wrapper">
                <i className={serviceIcon}></i>
              </div>
              <div className="pbmit-service-title-wrapper">
                <div className="pbmit-service-cat">
                  <CustomLink propsHref="/service-single" rel="tag">
                    {serviceCategory}
                  </CustomLink>
                </div>
                <h3 className="pbmit-service-title">
                  <CustomLink propsHref={serviceLink}>
                    {serviceTitle}
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

export default ServiceContentBox;
