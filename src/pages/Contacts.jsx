import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { loadScript } from "../components/common/utils";
import CustomLink from "../components/common/CustomLink";

const Contacts = () => {
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
                  <h1 className="pbmit-tbar-title">Контакти</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="contact-section-home1">
          <div className="container">
            <div className="section-lg">
              <div className="row">
                <div className="col-md-5">
                  <div className="pbmit-heading-subheading">
                    <h4 className="pbmit-subtitle-white">Зв'язатися З Нами</h4>
                    <h2 className="pbmit-title">
                      Просто зв'яжіться з нашими експертами
                    </h2>
                    <div className="mt-2">Нам довіряють наші клієнти</div>
                  </div>
                  <ul className="pbmit-social-links">
                    <li className="pbmit-social-li pbmit-social-facebook">
                      <CustomLink propsHref="#" target="_blank">
                        <span>
                          <i className="pbmit-base-icon-facebook-squared"></i>
                        </span>
                      </CustomLink>
                    </li>
                    <li className="pbmit-social-li pbmit-social-twitter">
                      <CustomLink propsHref="#" target="_blank">
                        <span>
                          <i className="pbmit-base-icon-twitter"></i>
                        </span>
                      </CustomLink>
                    </li>
                    <li className="pbmit-social-li pbmit-social-instagram">
                      <CustomLink propsHref="#" target="_blank">
                        <span>
                          <i className="pbmit-base-icon-instagram"></i>
                        </span>
                      </CustomLink>
                    </li>
                    <li className="pbmit-social-li pbmit-social-youtube">
                      <CustomLink propsHref="#" target="_blank">
                        <span>
                          <i className="pbmit-base-icon-youtube-play"></i>
                        </span>
                      </CustomLink>
                    </li>
                  </ul>
                </div>
                <div className="col-md-7">
                  <form
                    className="contact-left-section contact-form"
                    method="post"
                    id="contact-form"
                    action="send.php"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Повне ім'я"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email адрес"
                          name="email"
                          required=""
                        />
                      </div>
                      <div className="col-lg-12 col-sm-12">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="4"
                          placeholder="Напишіть повідомлення"
                          required=""
                        ></textarea>
                      </div>
                      <div className="col-lg-12 col-sm-12">
                        <button
                          type="submit"
                          className="pbmit-btn pbmit-btn-hover-secondary"
                        >
                          <i className="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none"></i>
                          Відправити
                        </button>
                      </div>
                      <div className="col-md-12 col-lg-12 message-status"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="contact-section-home1-bottom">
              <div className="row">
                <div className="col-md-4">
                  <div className="pbmit-ihbox-style-20">
                    <div className="pbmit-ihbox-box d-flex align-items-center">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper">
                          <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                            <i className="pbmit-xido-icon-email"></i>
                          </div>
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <div className="pbmit-heading-desc">
                          Відправити Email
                        </div>
                        <h2 className="pbmit-element-title">
                          needhelp@company.com
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pbmit-ihbox-style-20">
                    <div className="pbmit-ihbox-box d-flex align-items-center">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper">
                          <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                            <i className="pbmit-xido-icon pbmit-xido-icon-call"></i>
                          </div>
                        </div>
                      </div>
                      <div className="pbmit-ihbox-contents">
                        <div className="pbmit-heading-desc">
                          Телефонуйте у будь-який час
                        </div>
                        <h2 className="pbmit-element-title">
                          + 92 666 888 0000
                        </h2>
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
