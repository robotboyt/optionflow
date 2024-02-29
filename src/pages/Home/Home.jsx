import React, { useEffect, useState } from "react";
import lottie from "lottie-web";
import animationData from "../../animation/internet-banner.json";
import anim2Data from "../../animation/internet-anim-01.json";
import anim3Data from "../../animation/internet-anim-02.json";
import { Link } from "react-router-dom";
import { loadScript } from "../../components/common/utils";
import sliderContent from "./HomeSliderContent";
import HomeSliderBlock from "./HomeSliderBlock";
// import HomeCommentSlide from "./HomeCommentSlide";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Home = () => {
  const [apiData, setApiData] = useState({ 0: {} });
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    const container = document.getElementById("internet-banner");
    const container2 = document.getElementById("internet-anim-01");
    const container3 = document.getElementById("internet-anim-02");

    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:5000/api/card");

      if (!response.ok) {
        console.error("Network response is not ok");
        return;
      }
      setApiData(await response.json());
      setDataLoading(true);
    };

    const anim1 = lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    const anim2 = lottie.loadAnimation({
      container: container2,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: anim2Data,
    });

    const anim3 = lottie.loadAnimation({
      container: container3,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: anim3Data,
    });

    fetchData();

    return () => {
      anim1.destroy();
      anim2.destroy();
      anim3.destroy();
    };
  }, []);

  console.log(apiData);

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="page-content pbmit-bg-color-light">
        <section className="banner-section-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-12">
                <div className="pbmit-text-style-6">
                  <h1 style={{ userSelect: "none" }}>&nbsp;</h1>
                  <h6 className="pbmit-subtitle">
                    <span className="text-style">
                      Welcome to
                      <span style={{ color: "#5f51e3" }}> Option Flow </span>
                      web-studio
                    </span>
                  </h6>
                  <h2 className="pbmit-title">
                    Цифрова ідентичність - як головна мета
                  </h2>
                  <p>
                    Наша пропозиція послуг об'єднує творчість та винятковість.
                  </p>
                  <div>
                    <Link to="contact-us.html" className="pbmit-btn">
                      Отримати консультацію
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="internet-lottie">
                  <div id="internet-banner" className="lottie-anim"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section-home6">
          <div className="container">
            <div className="row">
              {dataLoading
                ? apiData.map((item) => (
                    <div className="col-xl-4 col-md-6">
                      <div className="pbmit-ihbox-style-8">
                        <div className="pbmit-ihbox-box">
                          <div className="pbmit-ihbox-contents">
                            <div className="pbmit-ihbox-icon">
                              <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                                <img
                                  src={item.imageUrl}
                                  className="img-fluid-service"
                                  alt="web-service"
                                />
                              </div>
                            </div>
                            <h2 className="pbmit-element-title">{item.name}</h2>
                            <div className="pbmit-heading-desc">
                              <span>{item.category.category1}</span>
                              <br />
                              <span>{item.category.category2}.</span>
                              <br />
                              <span>{item.category.category3}</span>
                            </div>
                            <div className="pbmit-ihbox-btn">
                              <Link to="#">
                                <span>Читати більше</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center align-content-center">
              <div className="col-xl-6 col-md-12">
                <div>
                  <div id="internet-anim-01" className="lottie-anim"></div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 agency-right-section-home6">
                <div className="pbmit-heading-subheading-style-6">
                  <h4 className="pbmit-subtitle">IT-AGENCY</h4>
                  <h2 className="pbmit-title">
                    Ми забезпечуємо високий рівень дизайну та швидкості у
                    розробці додатків.
                  </h2>
                </div>
                <div className="mb-4">
                  The Internet helps us with facts and figures, information and
                  knowledge for personal, social and economic development. The
                  use of the internet in our daily life depends on individual
                  requirements and goals
                </div>
                <div className="pbmit-ihbox-style-9">
                  <div className="pbmit-ihbox-box d-flex align-items-center">
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper">
                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                          <i className="pbmit-xido-icon pbmit-xido-icon-cloud-computing"></i>
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">
                        Discover, Explore the Product
                      </h2>
                      <div className="pbmit-heading-desc">
                        An effective campaign demands Link great deal of time
                        and planning run Link marketing.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pbmit-ihbox-style-9">
                  <div className="pbmit-ihbox-box d-flex align-items-center">
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper">
                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                          <i className="pbmit-xido-icon pbmit-xido-icon-satellite"></i>
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">
                        Marketing Strategy & Campaigns
                      </h2>
                      <div className="pbmit-heading-desc">
                        An effective campaign demands Link great deal of time
                        and planning run Link marketing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lg pbmit-bg-color-secondary service-section-home6">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="pbmit-heading-subheading text-white">
                  <h4 className="pbmit-subtitle">OUR SERVICES</h4>
                  <h2 className="pbmit-title">Top Service of Intenrnet</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service6-arrow swiper-btn-white swiper-btn-circle swiper-btn-custom d-flex flex-row-reverse"></div>
              </div>
            </div>
            <div
              className="swiper-slider"
              data-arrows-class="service6-arrow"
              data-autoplay="false"
              data-dots="false"
              data-arrows="true"
              data-columns="4"
              data-margin="30"
              data-effect="slide"
            >
              <div className="swiper-wrapper">
                {sliderContent.map((sliderItem) => (
                  <HomeSliderBlock
                    sliderTitle={sliderItem.title}
                    sliderLink={sliderItem.link}
                    sliderContent={sliderItem.content}
                    sliderIcon={sliderItem.icon}
                    key={sliderItem.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Here i commend the video section of main page */}
        {/* <section className="section-lg">
          <div className="container">
            <div className="video-section-home6">
              <Link
                to="https://www.youtube.com/watch?v=Diq70ZhaQZE"
                className="coworing-video-btn pbmin-lightbox-video"
              >
                <i className="fa fa-play"></i>
              </Link>
            </div>
          </div>
        </section> */}
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-12">
                <div className="strategy-lottie-home6">
                  <div id="internet-anim-02" className="lottie-anim"></div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 strategy-section-home6">
                <div className="pbmit-heading-subheading-style-6">
                  <h4 className="pbmit-subtitle">OUR STRATEGY</h4>
                  <h2 className="pbmit-title">More Reliable Secure and Fast</h2>
                </div>
                <div className="block pbmit-tab-style-2">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link active"
                        data-bs-toggle="tab"
                        to="#tab-2-1"
                        aria-selected="true"
                        role="tab"
                      >
                        Header Builder
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="#tab-2-2"
                        aria-selected="false"
                        role="tab"
                        tabIndex="-1"
                      >
                        Safe and Private
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="#tab-2-3"
                        aria-selected="false"
                        role="tab"
                        tabIndex="-1"
                      >
                        Mobility Solutions
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane show active"
                      id="tab-2-1"
                      role="tabpanel"
                    >
                      <p>
                        Here, our authors share the latest trends and tendencies
                        in the world of marketing, digital products, and web
                        design, as well as useful tips.
                      </p>
                      <p>
                        Join our awesome community of creative people today to
                        stay ahead of all freshly-cooked marketing news!
                      </p>
                    </div>
                    <div className="tab-pane" id="tab-2-2" role="tabpanel">
                      <p>
                        The world authors share the latest trends and tendencies
                        in the world of marketing, digital products, and web
                        design, as well as useful tips.
                      </p>
                      <p>
                        Join our awesome community of creative people today to
                        stay ahead of all freshly-cooked marketing news!
                      </p>
                    </div>
                    <div className="tab-pane" id="tab-2-3" role="tabpanel">
                      <p>
                        Stay ahead authors share the latest trends and
                        tendencies in the world of marketing, digital products,
                        and web design, as well as useful tips.
                      </p>
                      <p>
                        Join our awesome community of creative people today to
                        stay ahead of all freshly-cooked marketing news!
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="our-plans.html" className="pbmit-btn mt-4">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Here IS COMMENT OF Main Page  */}
        {/* <section>
          <div className="container-fluid p-0">
            <div
              className="swiper-slider"
              data-loop="true"
              data-center="true"
              data-dots="true"
              data-arrows="false"
              data-columns="3.5"
              data-margin="30"
              data-effect="slide"
            >
              <div className="swiper-wrapper">
                {[1, 2, 3, 4].map((slideItem) => (
                  <HomeCommentSlide key={slideItem} />
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <section className="section-lg">
          <div className="container">
            <div className="row g-0">
              <div className="col-xl-5 col-md-12 p-0">
                <div className="pbmit-heading-subheading-style-6">
                  <h4 className="pbmit-subtitle">LATEST NEWS</h4>
                  <h2 className="pbmit-title">
                    What's new?
                    <br />
                    My Blog And News.
                  </h2>
                </div>
                <Link
                  to="blog-grid-view.html"
                  className="pbmit-btn pbmit-btn-hover-secondary"
                >
                  View All
                </Link>
              </div>
              <div className="col-xl-7 col-md-12 p-0">
                <article className="pbmit-blog-style-5 col-md-12">
                  <div className="post-item">
                    <div className="pbminfotech-box-content">
                      <div className="pbmit-meta-container">
                        <span className="pbmit-date-wrapper">
                          <span className="pbmit-post-date pbmit-meta-line">
                            May 17
                          </span>
                        </span>
                        <span className="pbmit-meta-category pbmit-meta-line">
                          <Link to="" rel="category tag">
                            Broadband
                          </Link>
                        </span>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <h3 className="pbmit-post-title">
                          <Link to="blog-single-details-two.html">
                            Easy ways to implement wellbeing programs
                          </Link>
                        </h3>
                      </div>
                      <div className="pbmit-read-more-link">
                        <Link to="blog-single-details-two.html">
                          <span className="pbmit-arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="pbmit-blog-style-5 col-md-12">
                  <div className="post-item">
                    <div className="pbminfotech-box-content">
                      <div className="pbmit-meta-container">
                        <span className="pbmit-date-wrapper">
                          <span className="pbmit-post-date pbmit-meta-line">
                            Apr 25
                          </span>
                        </span>
                        <span className="pbmit-meta-category pbmit-meta-line">
                          <Link to="" rel="category tag">
                            Internet
                          </Link>
                        </span>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <h3 className="pbmit-post-title">
                          <Link to="blog-single-details-two.html">
                            Things Can Help Any coworking Flourish Again
                          </Link>
                        </h3>
                      </div>
                      <div className="pbmit-read-more-link">
                        <Link to="blog-single-details-two.html">
                          <span className="pbmit-arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="pbmit-blog-style-5 col-md-12">
                  <div className="post-item">
                    <div className="pbminfotech-box-content">
                      <div className="pbmit-meta-container">
                        <span className="pbmit-date-wrapper">
                          <span className="pbmit-post-date pbmit-meta-line">
                            Apr 08
                          </span>
                        </span>
                        <span className="pbmit-meta-category pbmit-meta-line">
                          <Link to="" rel="category tag">
                            Mobile
                          </Link>
                        </span>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <h3 className="pbmit-post-title">
                          <Link to="blog-single-details-two.html">
                            Five Ways Elevate Your Employees Workplace
                          </Link>
                        </h3>
                      </div>
                      <div className="pbmit-read-more-link">
                        <Link to="blog-single-details-two.html">
                          <span className="pbmit-arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
