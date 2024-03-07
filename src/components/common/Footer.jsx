import React from "react";
import { useLocation } from "react-router-dom";
import CustomLink from "./CustomLink";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="pbmit-bg-color-secondary footer-style-1 footer site-footer">
      <div className="footer-wrap pbmit-footer-big-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9 col-sm-12">
              <h3>
                Не соромтесь звертатися до нас
                <br />З нетерпінням чекаємо можливості спілкування з вами!
              </h3>
              <CustomLink propsHref="#">info@optionflow.pro</CustomLink>
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
            <div className="col-md-6 col-lg-4">
              <div className="widget">
                <h3 className="widget-title">Наша компанія</h3>
                <div className="textwidget">
                  <ul>
                    <li>
                      <CustomLink propsHref="/contacts">Контаки</CustomLink>
                    </li>
                    <li>
                      <CustomLink propsHref="/blog">Блог</CustomLink>
                    </li>
                    <li>
                      <CustomLink propsHref="/career">Карʼєра</CustomLink>
                    </li>
                    <li>
                      <CustomLink propsHref="/about">Про нас</CustomLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="widget">
                <h3 className="widget-title">Потрібна підтримка?</h3>
                <div className="pbmit-footer-contact">
                  <div className="pbmit-footer-contact-info">
                    <div className="pbmit-content-box">Центр кліентів</div>
                    <div className="pbmit-contact-box">
                      <CustomLink propsHref="mailto:hello@infoxido.com">
                        info@optionflow.pro
                      </CustomLink>
                    </div>
                  </div>
                  <div className="pbmit-footer-contact-info">
                    <div className="pbmit-content-box">
                      Потрібна жива підтримка?
                    </div>
                    <div className="pbmit-contact-box">
                      <CustomLink propsHref="tel:+38 (099) 760 76 69">
                        +38 (099) 760 76 69
                      </CustomLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="widget">
                <h3 className="widget-title">Розсилка Новин</h3>
                <div className="mc4wp-form-fields">
                  <div className="pbmit-footer-newsletter">
                    <input
                      type="email"
                      name="EMAIL"
                      placeholder="Додайте вашу пошту"
                    />
                    <button type="submit" value="Sign up">
                      <i className="pbmit-base-icon-arroba"></i>
                    </button>
                  </div>
                  Наші знання, досвід і страсть до веб-дизайну вирізняють нас
                  серед інших агентств.
                </div>
                <ul className="pbmit-social-links">
                  <li className="pbmit-social-li pbmit-social-linkedin">
                    <a href="#" target="_blank">
                      <span>
                        <i className="pbmit-base-icon-linkedin-squared"></i>
                      </span>
                    </a>
                  </li>
                  <li className="pbmit-social-li pbmit-social-instagram">
                    <CustomLink propsHref="#" target="_blank" rel="noopener">
                      <span>
                        <i className="pbmit-base-icon-instagram"></i>
                      </span>
                    </CustomLink>
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
                  Copyright © 2024{" "}
                  <CustomLink propsHref="#">OptionFlow</CustomLink>, All Rights
                  Reserved.
                </div>
              </div>
              <div className="col-md-6">
                <div className="pbmit-footer-menu-area">
                  <div className="menu-copyright-menu-container">
                    <ul className="pbmit-footer-menu">
                      <li className="menu-item">
                        <CustomLink propsHref="#">Privacy Policy</CustomLink>
                      </li>
                      <li className="menu-item">
                        <CustomLink propsHref="#">Contact</CustomLink>
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
  );
};

export default Footer;
