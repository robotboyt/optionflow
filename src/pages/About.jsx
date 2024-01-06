import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import { loadScript } from "../components/common/utils";

const About = () => {
  useEffect(() => {
    loadScript()
      .then(() => {})
      .catch((error) => {
        console.error("Error of loading script:", error);
      });
    return () => {};
  }, []);
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">About Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="section-lg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-12">
                <div className="about-us-section-bg">
                  <div className="about-us-section-wrap">
                    Become more productive with our services.
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="about-us-section-home">
                  <div className="pbmit-heading-subheading">
                    <h4 className="pbmit-subtitle-white">WHY CHOOSE US</h4>
                    <h2 className="pbmit-title">
                      We Offer Expert SEO and Marketing.
                    </h2>
                  </div>
                  <div>
                    We are a team of young, experienced developers who are
                    passionate about their work. Years of cooperation with both
                    corporations.
                  </div>
                  <div className="pbmit-list-style-1">
                    <ul className="icon-list-items">
                      <li className="icon-list-item">
                        <span className="icon-list-text">
                          Perfect for large sites agencies
                        </span>
                      </li>
                      <li className="icon-list-item">
                        <span className="icon-list-text">
                          We appreciate your trust greatly
                        </span>
                      </li>
                    </ul>
                  </div>
                  <a href="contact-us.html" className="pbmit-btn">
                    Conatct Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lg pbmit-bg-color-light">
          <div className="container">
            <div className="pbmit-heading-subheading text-center">
              <h4 className="pbmit-subtitle-white">OUR TEAM</h4>
              <h2 className="pbmit-title">Our Expert Advisor</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <article className="pbmit-team-style-3">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/coworking/team/team-01b.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-social-box">
                      <div className="pbminfotech-box-social-links">
                        <ul className="pbmit-social-links pbmit-team-social-links">
                          <li className="pbmit-social-li pbmit-social-facebook">
                            <a href="#" title="Facebook" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-facebook-squared"></i>
                              </span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-twitter">
                            <a href="#" title="Twitter" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-twitter"></i>
                              </span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-instagram">
                            <a href="#" title="Instagram" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-youtube">
                            <a href="#" title="Youtube" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-youtube-play"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <h3 className="pbmit-team-title">
                          <a href="team-member-detail.html">Michael Daniel</a>
                        </h3>
                        <div className="pbminfotech-team-position">
                          <div className="pbminfotech-box-team-position">
                            Project Manager
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                <article className="pbmit-team-style-3">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/coworking/team/team-02b.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-social-box">
                      <div className="pbminfotech-box-social-links">
                        <ul className="pbmit-social-links pbmit-team-social-links">
                          <li className="pbmit-social-li pbmit-social-facebook">
                            <a href="#" title="Facebook" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-facebook-squared"></i>
                              </span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-twitter">
                            <a href="#" title="Twitter" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-twitter"></i>
                              </span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-instagram">
                            <a href="#" title="Instagram" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-youtube">
                            <a href="#" title="Youtube" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-youtube-play"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <h3 className="pbmit-team-title">
                          <a href="team-member-detail.html">Eliana Ivy</a>
                        </h3>
                        <div className="pbminfotech-team-position">
                          <div className="pbminfotech-box-team-position">
                            General Manager
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                <article className="pbmit-team-style-3">
                  <div className="pbminfotech-post-item">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/coworking/team/team-03b.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-social-box">
                      <div className="pbminfotech-box-social-links">
                        <ul className="pbmit-social-links pbmit-team-social-links">
                          <li className="pbmit-social-li pbmit-social-facebook">
                            <a href="#" title="Facebook" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-facebook-squared"></i>
                              </span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-twitter">
                            <a href="#" title="Twitter" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-twitter"></i>
                              </span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-instagram">
                            <a href="#" title="Instagram" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li className="pbmit-social-li pbmit-social-youtube">
                            <a href="#" title="Youtube" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-youtube-play"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-box-content-inner">
                        <h3 className="pbmit-team-title">
                          <a href="team-member-detail.html">Richard Edward</a>
                        </h3>
                        <div className="pbminfotech-team-position">
                          <div className="pbminfotech-box-team-position">
                            Digital Strategist
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lg">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-6 col-md-12">
                <div className="pbmit-heading-subheading">
                  <h4 className="pbmit-subtitle-white">SUCCESS STORIES</h4>
                  <h2 className="pbmit-title">
                    We have Marvelous and digital experience.
                  </h2>
                </div>
                <div className="pe-4">
                  Digital marketing is marketing and advertising of a business
                  service using online channels, electronic devices, and digital
                  technologies. A few examples of social media, email.
                </div>
                <div className="pbmit-ihbox pbmit-ihbox-style-20 mt-5">
                  <div className="pbmit-ihbox-box d-flex align-items-center">
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper">
                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                          <i className="pbmit-xido-icon pbmit-xido-icon-email"></i>
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-contents">
                      <div className="pbmit-heading-desc">Send Email</div>
                      <h2 className="pbmit-element-title">
                        needhelp@company.com
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 progressbar-section-home">
                <div className="progressbar pbmit-progress-style-4">
                  <span className="progress-label">Experience</span>
                  <div className="progress progress-lg progress-percent-bg">
                    <div
                      className="progress-bar aos aos-init aos-animate"
                      data-aos="slide-right"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    >
                      <span className="progress-percent">90%</span>
                    </div>
                  </div>
                </div>
                <div className="progressbar pbmit-progress-style-4">
                  <span className="progress-label">Development</span>
                  <div className="progress progress-lg progress-percent-bg">
                    <div
                      className="progress-bar aos aos-init aos-animate"
                      data-aos="slide-right"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    >
                      <span className="progress-percent">80%</span>
                    </div>
                  </div>
                </div>
                <div className="progressbar pbmit-progress-style-4">
                  <span className="progress-label">Marketing</span>
                  <div className="progress progress-lg progress-percent-bg">
                    <div
                      className="progress-bar aos aos-init aos-animate"
                      data-aos="slide-right"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "70%" }}
                    >
                      <span className="progress-percent">70%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pbmit-bg-color-blackish">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-12 col-xl-6 testimonial-bg-left"></div>
              <div className="col-lg-12 col-xl-6 testimonial-bg-right">
                <div
                  className="swiper-slider swiper-btn-white swiper-btn-right-arrow"
                  data-autoplay="false"
                  data-dots="false"
                  data-arrows="true"
                  data-columns="1"
                  data-margin="30"
                  data-effect="slide"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <article className="pbmit-testimonial-style-3">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>
                                  I am so grateful for everything that I have
                                  learned from you. You have my immense thanks
                                  for all of the support you’ve given me.
                                </p>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-testimonial-wrapper d-flex align-items-center">
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/coworking/testimonial/testimonial-01.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="pbminfotech-author-wrapper">
                                <div className="pbminfotech-box-author">
                                  <h3 className="pbminfotech-box-title">
                                    Amelia Daniel
                                  </h3>
                                  <div className="pbminfotech-testimonial-detail">
                                    Market Analyst
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="swiper-slide">
                      <article className="pbmit-testimonial-style-3">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>
                                  I am so grateful for everything that I have
                                  learned from you. You have my immense thanks
                                  for all of the support you’ve given me.
                                </p>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-testimonial-wrapper d-flex align-items-center">
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/coworking/testimonial/testimonial-02.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="pbminfotech-author-wrapper">
                                <div className="pbminfotech-box-author">
                                  <h3 className="pbminfotech-box-title">
                                    Jordan Billy
                                  </h3>
                                  <div className="pbminfotech-testimonial-detail">
                                    Business Analysis
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="swiper-slide">
                      <article className="pbmit-testimonial-style-3">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>
                                  I am so grateful for everything that I have
                                  learned from you. You have my immense thanks
                                  for all of the support you’ve given me.
                                </p>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-testimonial-wrapper d-flex align-items-center">
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/coworking/testimonial/testimonial-03.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="pbminfotech-author-wrapper">
                                <div className="pbminfotech-box-author">
                                  <h3 className="pbminfotech-box-title">
                                    Ariella Olive
                                  </h3>
                                  <div className="pbminfotech-testimonial-detail">
                                    Manager
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="swiper-slide">
                      <article className="pbmit-testimonial-style-3">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>
                                  I am so grateful for everything that I have
                                  learned from you. You have my immense thanks
                                  for all of the support you’ve given me.
                                </p>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-testimonial-wrapper d-flex align-items-center">
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/coworking/testimonial/testimonial-04.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="pbminfotech-author-wrapper">
                                <div className="pbminfotech-box-author">
                                  <h3 className="pbminfotech-box-title">
                                    Andrew Paul
                                  </h3>
                                  <div className="pbminfotech-testimonial-detail">
                                    Andrew Paul
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="swiper-slide">
                      <article className="pbmit-testimonial-style-3">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbminfotech-box-desc">
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>
                                  I am so grateful for everything that I have
                                  learned from you. You have my immense thanks
                                  for all of the support you’ve given me.
                                </p>
                              </blockquote>
                            </div>
                            <div className="pbminfotech-testimonial-wrapper d-flex align-items-center">
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/coworking/testimonial/testimonial-05.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="pbminfotech-author-wrapper">
                                <div className="pbminfotech-box-author">
                                  <h3 className="pbminfotech-box-title">
                                    Emelia Ari
                                  </h3>
                                  <div className="pbminfotech-testimonial-detail">
                                    Co Founder
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pbmit-bg-color-blackish">
          <div className="container-fluid p-0">
            <div className="row row-cols-5 g-0">
              <div className="col">
                <article className="pbmit-client-style-2">
                  <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                    <h4 className="pbmit-hide">client 05</h4>
                    <div className="pbmit-client-hover-img">
                      <img
                        src="images/coworking/client/client-hover-05.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/coworking/client/client-05.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col">
                <article className="pbmit-client-style-2">
                  <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                    <h4 className="pbmit-hide">client 04</h4>
                    <div className="pbmit-client-hover-img">
                      <img
                        src="images/coworking/client/client-hover-04.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/coworking/client/client-04.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col">
                <article className="pbmit-client-style-2">
                  <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                    <h4 className="pbmit-hide">client 03</h4>
                    <div className="pbmit-client-hover-img">
                      <img
                        src="images/coworking/client/client-hover-03.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/coworking/client/client-03.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col">
                <article className="pbmit-client-style-2">
                  <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                    <h4 className="pbmit-hide">client 02</h4>
                    <div className="pbmit-client-hover-img">
                      <img
                        src="images/coworking/client/client-hover-02.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/coworking/client/client-02.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col">
                <article className="pbmit-client-style-2">
                  <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                    <h4 className="pbmit-hide">client 01</h4>
                    <div className="pbmit-client-hover-img">
                      <img
                        src="images/coworking/client/client-hover-01.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/coworking/client/client-01.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lg">
          <div className="container">
            <div className="pbmit-heading-subheading">
              <h4 className="pbmit-subtitle-white">RECENT NEWS</h4>
              <h2 className="pbmit-title">Read Our Latest News</h2>
            </div>
            <div className="row">
              <article className="pbmit-blog-style-2 col-md-12">
                <div className="post-item">
                  <div className="pbminfotech-box-content">
                    <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                      <div className="pbmit-meta-date">
                        <span className="pbmit-date-wrap">17</span>
                        <span> May , 2022 </span>
                      </div>
                    </div>
                    <div className="pbmit-content-wrapper">
                      <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                        <div className="pbmit-meta-category">
                          <a href="#" rel="category tag">
                            Agreements
                          </a>
                        </div>
                      </div>
                      <h3 className="pbmit-post-title">
                        <a href="#">
                          Easy ways to implement wellbeing programs
                        </a>
                      </h3>
                    </div>
                    <div className="pbmit-featured-container">
                      <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                          <img
                            src="images/coworking/blog/blog-01.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-read-more-link">
                      <a href="blog-single-details.html">
                        <span>Continue read</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="pbmit-blog-style-2 col-md-12">
                <div className="post-item">
                  <div className="pbminfotech-box-content">
                    <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                      <div className="pbmit-meta-date">
                        <span className="pbmit-date-wrap">25</span>
                        <span> April , 2022 </span>
                      </div>
                    </div>
                    <div className="pbmit-content-wrapper">
                      <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                        <div className="pbmit-meta-category">
                          <a href="#" rel="category tag">
                            coworking
                          </a>
                        </div>
                      </div>
                      <h3 className="pbmit-post-title">
                        <a href="#">
                          Things Can Help Any coworking Flourish Again
                        </a>
                      </h3>
                    </div>
                    <div className="pbmit-featured-container">
                      <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                          <img
                            src="images/coworking/blog/blog-01.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-read-more-link">
                      <a href="blog-single-details.html">
                        <span>Continue read</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="pbmit-blog-style-2 col-md-12">
                <div className="post-item">
                  <div className="pbminfotech-box-content">
                    <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                      <div className="pbmit-meta-date">
                        <span className="pbmit-date-wrap">08</span>
                        <span> April , 2022 </span>
                      </div>
                    </div>
                    <div className="pbmit-content-wrapper">
                      <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                        <div className="pbmit-meta-category">
                          <a href="#" rel="category tag">
                            Leadership
                          </a>
                        </div>
                      </div>
                      <h3 className="pbmit-post-title">
                        <a href="#">
                          Five Ways Elevate Your Employees Workplace
                        </a>
                      </h3>
                    </div>
                    <div className="pbmit-featured-container">
                      <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                          <img
                            src="images/coworking/blog/blog-01.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-read-more-link">
                      <a href="blog-single-details.html">
                        <span>Continue read</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      <footer className="pbmit-bg-color-secondary footer-style-1 footer site-footer">
        <div className="footer-wrap pbmit-footer-big-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-9 col-sm-12">
                <h3>
                  Don't be shy - drop us a line
                  <br />
                  We're looking forward to speaking to you!
                </h3>
                <a href="#">info@xido.com</a>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="pbmit-footer-logo">
                  <img
                    className="img-fluid"
                    src="images/internet/logo-white.svg"
                    alt="optionflow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pbmit-footer-widget-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <h3 className="widget-title">Our Company</h3>
                  <div className="textwidget">
                    <ul>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Report A Bug</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <h3 className="widget-title">Support</h3>
                  <div className="textwidget">
                    <ul>
                      <li>
                        <a href="#">Company</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Press media</a>
                      </li>
                      <li>
                        <a href="#">Our Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <h3 className="widget-title">Need Help?</h3>
                  <div className="pbmit-footer-contact">
                    <div className="pbmit-footer-contact-info">
                      <div className="pbmit-content-box">Customer Care</div>
                      <div className="pbmit-contact-box">
                        <a href="tel:(+1)555234-8765">(+1)555234-8765</a>
                      </div>
                    </div>
                    <div className="pbmit-footer-contact-info">
                      <div className="pbmit-content-box">
                        Need live support?
                      </div>
                      <div className="pbmit-contact-box">
                        <a href="mailto:hello@infoxido.com">
                          hello@infoxido.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <h3 className="widget-title">Subscribe</h3>
                  <div className="mc4wp-form-fields">
                    <div className="pbmit-footer-newsletter">
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Get news &amp; updates"
                      />
                      <button type="submit" value="Sign up">
                        <i className="pbmit-base-icon-arroba"></i>
                      </button>
                    </div>
                    Our expertise, as well as our passion for web design sets us
                    apart from other agencies
                  </div>
                  <ul className="pbmit-social-links">
                    <li className="pbmit-social-li pbmit-social-facebook">
                      <a href="#" target="_blank" rel="noopener">
                        <span>
                          <i className="pbmit-base-icon-facebook-squared"></i>
                        </span>
                      </a>
                    </li>
                    <li className="pbmit-social-li pbmit-social-twitter">
                      <a href="#" target="_blank" rel="noopener">
                        <span>
                          <i className="pbmit-base-icon-twitter"></i>
                        </span>
                      </a>
                    </li>
                    <li className="pbmit-social-li pbmit-social-instagram">
                      <a href="#" target="_blank" rel="noopener">
                        <span>
                          <i className="pbmit-base-icon-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li className="pbmit-social-li pbmit-social-youtube">
                      <a href="#" target="_blank" rel="noopener">
                        <span>
                          <i className="pbmit-base-icon-youtube-play"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pbmit-footer-bottom">
          <div className="container">
            <div className="pbmit-footer-text-inner">
              <div className="row">
                <div className="col-md-6">
                  <div className="pbmit-footer-copyright-text-area">
                    Copyright © 2022 <a href="#">Xido</a>, All Rights Reserved.
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pbmit-footer-menu-area">
                    <div className="menu-copyright-menu-container">
                      <ul className="pbmit-footer-menu">
                        <li className="menu-item">
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
