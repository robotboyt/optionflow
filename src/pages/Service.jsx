import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const Service = () => {
  useEffect(() => {
    const scriptsScript = document.createElement("script");
    scriptsScript.src = "./js/scripts.js";
    scriptsScript.async = true;

    document.body.appendChild(scriptsScript);

    return () => {
      if (document.body.contains(scriptsScript)) {
        document.body.removeChild(scriptsScript);
      }
    };
  }, []);

  return (
    <div>
      <div className="page-wrapper">
        <Navbar />
        <div className="pbmit-title-bar-wrapper">
          <div className="container">
            <div className="pbmit-title-bar-content">
              <div className="pbmit-title-bar-content-inner">
                <div className="pbmit-tbar">
                  <div className="pbmit-tbar-inner container">
                    <h1 className="pbmit-tbar-title">Services</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content blog-grid">
          <section className="section-lg service-section">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <article className="pbmit-service-style-6">
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-service-image-wrapper">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/coworking/services/service-01.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-content">
                        <div className="pbminfotech-box-content-inner">
                          <div className="pbmit-service-icon-wrapper">
                            <i className="pbmit-xido-icon-website"></i>
                          </div>
                          <div className="pbmit-service-title-wrapper">
                            <div className="pbmit-service-cat">
                              <a href="#" rel="tag">
                                Corporate
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="services-details-two.html">
                                People Management
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-sm-12 col-md-4">
                  <article className="pbmit-service-style-6">
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-service-image-wrapper">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/coworking/services/service-02.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-content">
                        <div className="pbminfotech-box-content-inner">
                          <div className="pbmit-service-icon-wrapper">
                            <i className="pbmit-xido-icon-investment"></i>
                          </div>
                          <div className="pbmit-service-title-wrapper">
                            <div className="pbmit-service-cat">
                              <a href="#" rel="tag">
                                coworking
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="#">Growth Strategy</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-sm-12 col-md-4">
                  <article className="pbmit-service-style-6">
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-service-image-wrapper">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/coworking/services/service-03.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-content">
                        <div className="pbminfotech-box-content-inner">
                          <div className="pbmit-service-icon-wrapper">
                            <i className="pbmit-xido-icon-financial-consultant"></i>
                          </div>
                          <div className="pbmit-service-title-wrapper">
                            <div className="pbmit-service-cat">
                              <a href="#" rel="tag">
                                Leadership
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="#">Systems Maintenance</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <article className="pbmit-service-style-6">
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-service-image-wrapper">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/coworking/services/service-04.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-content">
                        <div className="pbminfotech-box-content-inner">
                          <div className="pbmit-service-icon-wrapper">
                            <i className="pbmit-xido-icon-atm-machine"></i>
                          </div>
                          <div className="pbmit-service-title-wrapper">
                            <div className="pbmit-service-cat">
                              <a href="#" rel="tag">
                                Lifestyle
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="#">Innovativeness</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-sm-12 col-md-4">
                  <article className="pbmit-service-style-6">
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-service-image-wrapper">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/coworking/services/service-05.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-content">
                        <div className="pbminfotech-box-content-inner">
                          <div className="pbmit-service-icon-wrapper">
                            <i className="pbmit-xido-icon-team"></i>
                          </div>
                          <div className="pbmit-service-title-wrapper">
                            <div className="pbmit-service-cat">
                              <a href="#" rel="tag">
                                Marketing
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="#">Admin Department</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-sm-12 col-md-4">
                  <article className="pbmit-service-style-6">
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-service-image-wrapper">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/coworking/services/service-06.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-content">
                        <div className="pbminfotech-box-content-inner">
                          <div className="pbmit-service-icon-wrapper">
                            <i className="pbmit-xido-icon-rating"></i>
                          </div>
                          <div className="pbmit-service-title-wrapper">
                            <div className="pbmit-service-cat">
                              <a href="#" rel="tag">
                                Strategies
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="#">Works Progress</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <article className="pbmit-service-style-6">
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-service-image-wrapper">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/coworking/services/service-07.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-content">
                        <div className="pbminfotech-box-content-inner">
                          <div className="pbmit-service-icon-wrapper">
                            <i className="pbmit-xido-icon-statistics"></i>
                          </div>
                          <div className="pbmit-service-title-wrapper">
                            <div className="pbmit-service-cat">
                              <a href="#" rel="tag">
                                Corporate
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="#">coworking Spaces</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-sm-12 col-md-4">
                  <article className="pbmit-service-style-6">
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-service-image-wrapper">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/coworking/services/service-08.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-content">
                        <div className="pbminfotech-box-content-inner">
                          <div className="pbmit-service-icon-wrapper">
                            <i className="pbmit-xido-icon-seo"></i>
                          </div>
                          <div className="pbmit-service-title-wrapper">
                            <div className="pbmit-service-cat">
                              <a href="#" rel="tag">
                                Leadership
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="#">Global Movement</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-sm-12 col-md-4">
                  <article className="pbmit-service-style-6">
                    <div className="pbminfotech-post-item">
                      <div className="pbmit-service-image-wrapper">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/coworking/services/service-09.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pbminfotech-box-content">
                        <div className="pbminfotech-box-content-inner">
                          <div className="pbmit-service-icon-wrapper">
                            <i className="pbmit-xido-icon-online-marketing-1"></i>
                          </div>
                          <div className="pbmit-service-title-wrapper">
                            <div className="pbmit-service-cat">
                              <a href="#" rel="tag">
                                Marketing
                              </a>
                            </div>
                            <h3 className="pbmit-service-title">
                              <a href="#">Work Alternatives</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
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
                      Our expertise, as well as our passion for web design sets
                      us apart from other agencies
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
                      Copyright © 2022 <a href="#">Xido</a>, All Rights
                      Reserved.
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
    </div>
  );
};

export default Service;
