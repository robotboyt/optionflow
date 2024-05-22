import React from "react";
import CustomLink from "../../components/common/CustomLink";

const HomeSliderBlock = ({
  sliderTitle,
  sliderIcon,
  sliderContent,
  sliderLink,
}) => {
  return (
    <div className="swiper-slide">
      <article className="pbmit-service-style-3">
        <div className="pbminfotech-post-item">
          <div className="pbmit-service-icon-wrapper">
            <i className={`pbmit-xido-icon-${sliderIcon}`}></i>
          </div>
          <div className="pbminfotech-box-content">
            <h3 className="pbmit-service-title">
              <CustomLink propsHref={`/service-single/${sliderLink}`}>
                {sliderTitle}
              </CustomLink>
            </h3>
            <div className="pbmit-service-content">
              <p>{sliderContent}</p>
            </div>
          </div>
          <div className="pbmit-service-btn">
            <CustomLink
              className="btn-arrow"
              propsHref={`/service-single/${sliderLink}`}
            >
              Read More
            </CustomLink>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomeSliderBlock;
