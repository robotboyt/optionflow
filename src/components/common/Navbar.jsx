import React from "react";
import { Link, useLocation } from "react-router-dom";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ? (
        <header className="site-header header-style-6">
          <div className="pbmit-header-overlay">
            <div className="pre-header-wrapper">
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div className="pbmit-pre-header-left">
                    <ul className="pbmit-contact-info">
                      <li>
                        <i className="pbmit-base-icon-phone-volume-solid"></i>
                        <Link to="tel:(+1)555234-8765">
                          Phone: <span>(+1)555234-8765</span>
                        </Link>
                      </li>
                      <li>
                        <i className="pbmit-base-icon-mail-alt"></i>
                        <Link to="mailto:hello@infoxido.com">
                          Email: <span>hello@infoxido.com</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="pbmit-pre-header-right">
                    <ul className="pbmit-contact-info">
                      <li>
                        <ul className="pbmit-social-links">
                          <li className="pbmit-social-li pbmit-social-linkedin">
                            <Link to="" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-linkedin-squared"></i>
                              </span>
                            </Link>
                          </li>
                          <li className="pbmit-social-li pbmit-social-instagram">
                            <Link to="" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-instagram"></i>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-header-menu">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center">
                      <div className="site-branding">
                        <Link to="/">
                          <img
                            className="logo-img"
                            alt="coworking"
                            src="images/internet/logo-white.svg"
                          />
                          <img
                            className="sticky-logo"
                            alt="coworking"
                            src="images/internet/logo.svg"
                          />
                        </Link>
                      </div>
                      <div className="site-navigation ms-auto">
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
                                <li className="active">
                                  <CustomLink
                                    propsHref={"/"}
                                    propsText={"Головна"}
                                  />
                                </li>
                                <li className="">
                                  <CustomLink
                                    propsHref={"/service"}
                                    propsText={"Послуги"}
                                  />
                                </li>
                                <li className="">
                                  <CustomLink
                                    propsHref={"/portfolio"}
                                    propsText={"Портфоліо"}
                                  />
                                </li>
                                <li className="">
                                  <CustomLink
                                    propsHref={"/blog"}
                                    propsText={"Блог"}
                                  />
                                </li>
                                <li className="">
                                  <CustomLink
                                    propsHref={"/career"}
                                    propsText={"Карьера"}
                                  />
                                </li>
                                <li className="dropdown">
                                  <CustomLink
                                    propsHref={"/about"}
                                    propsText={"Тощо"}
                                  />
                                  <ul>
                                    <li>
                                      <CustomLink
                                        propsHref={"/about"}
                                        propsText={"Про нас"}
                                      />
                                    </li>
                                    <li>
                                      <CustomLink
                                        propsHref={"/our-history"}
                                        propsText={"Наша історія"}
                                      />
                                    </li>
                                    <li>
                                      <CustomLink
                                        propsHref={"/faq"}
                                        propsText={"Faq"}
                                      />
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <CustomLink
                                    propsHref={"/contacts"}
                                    propsText={"Контакти"}
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className="site-header header-style-1">
          <div className="site-header-menu">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="site-branding">
                      <Link to="/">
                        <img
                          className="logo-img"
                          alt="coworking"
                          src="images/internet/logo.svg"
                        />
                      </Link>
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
                                <CustomLink
                                  propsHref={"/"}
                                  propsText={"Головна"}
                                />
                              </li>
                              <li
                                className={
                                  location.pathname === "/service"
                                    ? "active"
                                    : null
                                }
                              >
                                <CustomLink
                                  propsHref={"/service"}
                                  propsText={"Послуги"}
                                />
                              </li>
                              <li
                                className={
                                  location.pathname === "/portfolio"
                                    ? "active"
                                    : null
                                }
                              >
                                <CustomLink
                                  propsHref={"/portfolio"}
                                  propsText={"Портфоліо"}
                                />
                              </li>
                              <li
                                className={
                                  location.pathname === "/blog"
                                    ? "active"
                                    : null
                                }
                              >
                                <CustomLink
                                  propsHref={"/blog"}
                                  propsText={"Блог"}
                                />
                              </li>
                              <li
                                className={
                                  location.pathname === "/career"
                                    ? "active"
                                    : null
                                }
                              >
                                <CustomLink
                                  propsHref={"/career"}
                                  propsText={"Карьера"}
                                />
                              </li>
                              <li
                                className={`dropdown ${
                                  location.pathname === "/about" ||
                                  location.pathname === "/our-history" ||
                                  location.pathname === "/faq"
                                    ? "active"
                                    : null
                                }`}
                              >
                                <CustomLink
                                  propsHref={"/about"}
                                  propsText={"Тощо"}
                                />
                                <ul>
                                  <li
                                    className={
                                      location.pathname === "/about"
                                        ? "active"
                                        : null
                                    }
                                  >
                                    <CustomLink
                                      propsHref={"/about"}
                                      propsText={"Про нас"}
                                    />
                                  </li>
                                  <li
                                    className={
                                      location.pathname === "/our-history"
                                        ? "active"
                                        : null
                                    }
                                  >
                                    <CustomLink
                                      propsHref={"/our-history"}
                                      propsText={"Наша історія"}
                                    />
                                  </li>
                                  <li
                                    className={
                                      location.pathname === "/faq"
                                        ? "active"
                                        : null
                                    }
                                  >
                                    <CustomLink
                                      propsHref={"/faq"}
                                      propsText={"Faq"}
                                    />
                                  </li>
                                </ul>
                              </li>
                              <li
                                className={
                                  location.pathname === "/contacts"
                                    ? "active"
                                    : null
                                }
                              >
                                <CustomLink
                                  propsHref={"/contacts"}
                                  propsText={"Контакти"}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                    </div>
                    <div className="pbmit-right-main-box">
                      <div className="pbmit-header-social-wrapper">
                        <ul className="pbmit-social-links">
                          <li className="pbmit-social-li pbmit-social-linkedin">
                            <a href="#" target="_blank">
                              <span>
                                <i className="pbmit-base-icon-linkedin-squared"></i>
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
                        </ul>
                      </div>
                      <div className="pbmit-button-box">
                        <div className="pbmit-header-button2">
                          <CustomLink propsHref="/contacts">
                            <span className="pbmit-btn">Консультація</span>
                          </CustomLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default Navbar;
