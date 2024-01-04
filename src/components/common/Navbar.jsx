import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="site-header header-style-1">
      <div className="site-header-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-center justify-content-between">
                <div className="site-branding">
                  <a href="index.html">
                    <img
                      className="logo-img"
                      alt="coworking"
                      src="images/internet/logo.svg"
                    />
                  </a>
                </div>
                <div className="site-navigation ml-auto">
                  <nav className="main-menu navbar-expand-xl navbar-light">
                    <div className="navbar-header">
                      <button className="navbar-toggler" type="button">
                        <i className="pbmit-base-icon-menu-1"></i>
                      </button>
                    </div>
                    <div className="pbmit-mobile-menu-bg"></div>
                    <div
                      className="collapse navbar-collapse clearfix show"
                      id="pbmit-menu"
                    >
                      <div className="pbmit-menu-wrap">
                        <span className="closepanel">
                          <i className="pbmit-base-icon-close-circular-button-symbol"></i>
                        </span>
                        <ul className="navigation clearfix">
                          <li className="">
                            <Link to="/">Головна</Link>
                          </li>
                          <li
                            className={
                              location.pathname === "/service" ? "active" : null
                            }
                          >
                            <Link to="/service">Послуги</Link>
                          </li>
                          <li
                            className={
                              location.pathname === "/portfolio"
                                ? "active"
                                : null
                            }
                          >
                            <Link to="/portfolio">Портфоліо</Link>
                          </li>
                          <li
                            className={
                              location.pathname === "/blog" ? "active" : null
                            }
                          >
                            <Link to="/blog">Блог</Link>
                          </li>
                          <li className="dropdown">
                            <Link to="/about">Тощо</Link>
                            <ul>
                              <li>
                                <Link to="/about">Про нас</Link>
                              </li>
                              <li>
                                <Link to="our-history.html">Наша історія</Link>
                              </li>
                              <li>
                                <Link to="our-team-member.html">
                                  Наша команда
                                </Link>
                              </li>
                              <li>
                                <Link to="faq.html">Faq</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="contact-us.html">Контакти</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="pbmit-right-main-box">
                  <div className="pbmit-header-social-wrapper">
                    <ul className="pbmit-social-links">
                      <li className="pbmit-social-li pbmit-social-facebook">
                        <a href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-facebook-squared"></i>
                          </span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-twitter">
                        <a href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-twitter"></i>
                          </span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-instagram">
                        <a href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-youtube">
                        <a href="#" target="_blank">
                          <span>
                            <i className="pbmit-base-icon-youtube-play"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pbmit-button-box">
                    <div className="pbmit-header-button2">
                      <a href="contact-us.html">
                        <span className="pbmit-btn">get in touch</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
