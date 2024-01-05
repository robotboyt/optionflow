import React from "react";

const ServiceContentBox = ({
  serviceTitle,
  serviceImg,
  serviceLink,
  serviceIcon,
  serviceCategory,
}) => {
  return (
    <div class="col-sm-12 col-md-4">
      <article class="pbmit-service-style-6">
        <div class="pbminfotech-post-item">
          <div class="pbmit-service-image-wrapper">
            <div class="pbmit-featured-img-wrapper">
              <div class="pbmit-featured-wrapper">
                <img src={serviceImg} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div class="pbminfotech-box-content">
            <div class="pbminfotech-box-content-inner">
              <div class="pbmit-service-icon-wrapper">
                <i class={serviceIcon}></i>
              </div>
              <div class="pbmit-service-title-wrapper">
                <div class="pbmit-service-cat">
                  <a href="#" rel="tag">
                    {serviceCategory}
                  </a>
                </div>
                <h3 class="pbmit-service-title">
                  <a href={serviceLink}>{serviceTitle}</a>
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
