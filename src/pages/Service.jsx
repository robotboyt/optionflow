import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

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
        <Footer />
      </div>
    </div>
  );
};

export default Service;
