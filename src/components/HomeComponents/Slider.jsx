import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSliderBlock from "../../pages/Home/HomeSliderBlock";

const SliderComponent = ({ sliderData }) => {
  const [amountSlider, setAmountSlider] = useState(null);
  useEffect(() => {
    if (window.innerWidth > 1000) {
      setAmountSlider(3);
    } else if (window.innerWidth < 673) {
      setAmountSlider(1);
    } else {
      setAmountSlider(2);
    }
    return () => {};
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: amountSlider,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      {sliderData.length > 0 ? (
        <Slider {...settings}>
          {sliderData.map((item) => (
            <HomeSliderBlock
              sliderTitle={item.title}
              sliderIcon={item.icon}
              sliderContent={item.subtitle}
              sliderLink={item.href}
              key={item.id.toString()}
            />
          ))}
        </Slider>
      ) : null}
    </div>
  );
};

export default SliderComponent;
