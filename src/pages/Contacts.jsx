import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

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
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
