import React from "react";
import Navbar from "../components/common/Navbar";

const Contacts = () => {
  return (
    <div class="page-wrapper">
      <Navbar />
      <div class="pbmit-title-bar-wrapper">
        <div class="container">
          <div class="pbmit-title-bar-content">
            <div class="pbmit-title-bar-content-inner">
              <div class="pbmit-tbar">
                <div class="pbmit-tbar-inner container">
                  <h1 class="pbmit-tbar-title">Contact Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-content">
        <section class="contact-section-home1">
          <div class="container">
            <div class="section-lg">
              <div class="row">
                <div class="col-md-5">
                  <div class="pbmit-heading-subheading">
                    <h4 class="pbmit-subtitle-white">CONTACT WITH US</h4>
                    <h2 class="pbmit-title">
                      Feel free to get in touch with experts
                    </h2>
                    <div class="mt-2">Trusted by more than 4,200 customers</div>
                  </div>
                  <ul class="pbmit-social-links">
                    <li class="pbmit-social-li pbmit-social-facebook">
                      <a href="#" target="_blank">
                        <span>
                          <i class="pbmit-base-icon-facebook-squared"></i>
                        </span>
                      </a>
                    </li>
                    <li class="pbmit-social-li pbmit-social-twitter">
                      <a href="#" target="_blank">
                        <span>
                          <i class="pbmit-base-icon-twitter"></i>
                        </span>
                      </a>
                    </li>
                    <li class="pbmit-social-li pbmit-social-instagram">
                      <a href="#" target="_blank">
                        <span>
                          <i class="pbmit-base-icon-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li class="pbmit-social-li pbmit-social-youtube">
                      <a href="#" target="_blank">
                        <span>
                          <i class="pbmit-base-icon-youtube-play"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-7">
                  <form
                    class="contact-left-section contact-form"
                    method="post"
                    id="contact-form"
                    action="send.php"
                  >
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Full Name"
                          name="name"
                          required=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email Address"
                          name="email"
                          required=""
                        />
                      </div>
                      <div class="col-lg-12 col-sm-12">
                        <textarea
                          class="form-control"
                          name="message"
                          rows="4"
                          placeholder="Write Message"
                          required=""
                        ></textarea>
                      </div>
                      <div class="col-lg-12 col-sm-12">
                        <button
                          type="submit"
                          class="pbmit-btn pbmit-btn-hover-secondary"
                        >
                          <i class="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none"></i>
                          Post Comment
                        </button>
                      </div>
                      <div class="col-md-12 col-lg-12 message-status"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="contact-section-home1-bottom">
              <div class="row">
                <div class="col-md-4">
                  <div class="pbmit-ihbox-style-20">
                    <div class="pbmit-ihbox-box d-flex align-items-center">
                      <div class="pbmit-ihbox-icon">
                        <div class="pbmit-ihbox-icon-wrapper">
                          <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                            <i class="pbmit-xido-icon pbmit-xido-icon-location"></i>
                          </div>
                        </div>
                      </div>
                      <div class="pbmit-ihbox-contents">
                        <div class="pbmit-heading-desc">Visit Our Store</div>
                        <h2 class="pbmit-element-title">
                          66 Road Broklyn Street, New York
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="pbmit-ihbox-style-20">
                    <div class="pbmit-ihbox-box d-flex align-items-center">
                      <div class="pbmit-ihbox-icon">
                        <div class="pbmit-ihbox-icon-wrapper">
                          <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                            <i class="pbmit-xido-icon-email"></i>
                          </div>
                        </div>
                      </div>
                      <div class="pbmit-ihbox-contents">
                        <div class="pbmit-heading-desc">Send Email</div>
                        <h2 class="pbmit-element-title">
                          needhelp@company.com
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="pbmit-ihbox-style-20">
                    <div class="pbmit-ihbox-box d-flex align-items-center">
                      <div class="pbmit-ihbox-icon">
                        <div class="pbmit-ihbox-icon-wrapper">
                          <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                            <i class="pbmit-xido-icon pbmit-xido-icon-call"></i>
                          </div>
                        </div>
                      </div>
                      <div class="pbmit-ihbox-contents">
                        <div class="pbmit-heading-desc">Call Anytime</div>
                        <h2 class="pbmit-element-title">+ 92 666 888 0000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <iframe
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
            title="London Eye, London, United Kingdom"
            aria-label="London Eye, London, United Kingdom"
          ></iframe>
        </section>
      </div>

      <footer class="pbmit-bg-color-secondary footer-style-1 footer site-footer">
        <div class="footer-wrap pbmit-footer-big-area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-9 col-sm-12">
                <h3>
                  Don't be shy - drop us a line
                  <br />
                  We're looking forward to speaking to you!
                </h3>
                <a href="#">info@xido.com</a>
              </div>
              <div class="col-md-3 col-sm-12">
                <div class="pbmit-footer-logo">
                  <img
                    class="img-fluid"
                    src="images/internet/logo-white.svg"
                    alt="optionflow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pbmit-footer-widget-area">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <div class="widget">
                  <h3 class="widget-title">Our Company</h3>
                  <div class="textwidget">
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
              <div class="col-md-6 col-lg-3">
                <div class="widget">
                  <h3 class="widget-title">Support</h3>
                  <div class="textwidget">
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
              <div class="col-md-6 col-lg-3">
                <div class="widget">
                  <h3 class="widget-title">Need Help?</h3>
                  <div class="pbmit-footer-contact">
                    <div class="pbmit-footer-contact-info">
                      <div class="pbmit-content-box">Customer Care</div>
                      <div class="pbmit-contact-box">
                        <a href="tel:(+1)555234-8765">(+1)555234-8765</a>
                      </div>
                    </div>
                    <div class="pbmit-footer-contact-info">
                      <div class="pbmit-content-box">Need live support?</div>
                      <div class="pbmit-contact-box">
                        <a href="mailto:hello@infoxido.com">
                          hello@infoxido.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="widget">
                  <h3 class="widget-title">Subscribe</h3>
                  <div class="mc4wp-form-fields">
                    <div class="pbmit-footer-newsletter">
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Get news &amp; updates"
                      />
                      <button type="submit" value="Sign up">
                        <i class="pbmit-base-icon-arroba"></i>
                      </button>
                    </div>
                    Our expertise, as well as our passion for web design sets us
                    apart from other agencies
                  </div>
                  <ul class="pbmit-social-links">
                    <li class="pbmit-social-li pbmit-social-facebook">
                      <a href="#" target="_blank" rel="noopener">
                        <span>
                          <i class="pbmit-base-icon-facebook-squared"></i>
                        </span>
                      </a>
                    </li>
                    <li class="pbmit-social-li pbmit-social-twitter">
                      <a href="#" target="_blank" rel="noopener">
                        <span>
                          <i class="pbmit-base-icon-twitter"></i>
                        </span>
                      </a>
                    </li>
                    <li class="pbmit-social-li pbmit-social-instagram">
                      <a href="#" target="_blank" rel="noopener">
                        <span>
                          <i class="pbmit-base-icon-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li class="pbmit-social-li pbmit-social-youtube">
                      <a href="#" target="_blank" rel="noopener">
                        <span>
                          <i class="pbmit-base-icon-youtube-play"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pbmit-footer-bottom">
          <div class="container">
            <div class="pbmit-footer-text-inner">
              <div class="row">
                <div class="col-md-6">
                  <div class="pbmit-footer-copyright-text-area">
                    Copyright © 2022 <a href="#">Xido</a>, All Rights Reserved.
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="pbmit-footer-menu-area">
                    <div class="menu-copyright-menu-container">
                      <ul class="pbmit-footer-menu">
                        <li class="menu-item">
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li class="menu-item">
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

export default Contacts;
