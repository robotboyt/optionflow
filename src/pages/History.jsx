import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import { loadScript } from "../components/common/utils";
import Footer from "../components/common/Footer";

const History = () => {
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
                  <h1 className="pbmit-tbar-title">Наша Історія</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="section-lg about-us-section-home3 our-history">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="about-us-left-bg-home3">
                  <div className="about-us-home3">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="pbminfotech-ele-fid-style-8">
                          <div className="pbmit-fld-contents">
                            <div className="pbmit-fld-wrap">
                              <h3 className="pbmit-fid-title">
                                <span>Вдалі проекти</span>
                              </h3>
                              <h4 className="pbmit-fid-inner d-flex">
                                <span className="pbmit-fid"></span>
                                <span
                                  className="pbmit-number-rotate numinate"
                                  data-appear-animation="animateDigits"
                                  data-from="0"
                                  data-to="10"
                                  data-interval="3"
                                  data-before=""
                                  data-before-style=""
                                  data-after=""
                                  data-after-style=""
                                >
                                  10
                                </span>
                                <span className="pbmit-fid">
                                  <span>+</span>
                                </span>
                              </h4>
                              <div className="pbmit-fid-description">
                                <div className="pbmit-heading-desc">
                                  Різної складності
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="pbminfotech-ele-fid-style-6">
                          <div className="pbmit-fld-contents">
                            <div className="pbmit-fld-wrap">
                              <h3 className="pbmit-fid-title">
                                <span>Співробітники</span>
                              </h3>
                              <h4 className="pbmit-fid-inner d-flex">
                                <span className="pbmit-fid"></span>
                                <span
                                  className="pbmit-number-rotate numinate"
                                  data-appear-animation="animateDigits"
                                  data-from="0"
                                  data-to="25"
                                  data-interval="5"
                                  data-before=""
                                  data-before-style=""
                                  data-after=""
                                  data-after-style=""
                                >
                                  25
                                </span>
                                <span className="pbmit-fid">
                                  <span>+</span>
                                </span>
                              </h4>
                              <div className="pbmit-fid-description">
                                <div className="pbmit-heading-desc">
                                  Кращих спеціалістів
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 about-us-right-home3">
                <div className="pbmit-heading-subheading-style-3">
                  <h4 className="pbmit-subtitle">WHAT WE OFFER</h4>
                  <h2 className="pbmit-title">
                    We Offer Expert SEO and Marketing.
                  </h2>
                  <div>
                    We are offer a broad range of businesses that manage money,
                    including credit unions, banks, credit-card companies,
                    insurance companies, accountancy companies, consumer-finance
                    companies.
                  </div>
                </div>
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item">
                    <i className="pbmit-base-icon-ok"></i> We Are Result
                    Oriented
                  </li>
                  <li className="list-group-item">
                    <i className="pbmit-base-icon-ok"></i> We Make To Execute
                  </li>
                  <li className="list-group-item">
                    <i className="pbmit-base-icon-ok"></i> Our experts works
                    harder
                  </li>
                </ul>
                <img
                  src="images/finance/signature.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-lgx pbmit-bg-color-light">
          <div className="container">
            <div className="pbmit-heading-subheading text-center">
              <h4 className="pbmit-subtitle-white">Наша Історія</h4>
              <h2 className="pbmit-title">Як ми створили нашу студію</h2>
            </div>
            <div className="pbmit-timeline">
              <div className="pbmit-first-timeline"></div>
              <div className="pbmit-timeline-post-items">
                <div className="pbmit-timeline-inner">
                  <div className="col-sm-12 pbmit-ourhistory-type2">
                    <div className="row pbmit-ourhistory-row">
                      <div className="col-md-6 col-sm-12 col-xs-6 pbmit-ourhistory-right">
                        <span className="label">2017</span>
                        <div className="content">
                          <h4>
                            Двоє студентів знайомляться на першому курсі
                            коледжу.
                          </h4>
                          <div className="simple-text">
                            <p>
                              Вони починають ділитися цілями та думками щодо
                              сфери ІТ, глибоко вивчають програмування та
                              дизайн. Розглядають попит на ринку та досліджують,
                              як створити свою власну студію. Знаходять
                              однодумців, щоб утворити команду, яка спільно
                              працює над інноваційними проектами.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 pbmit-ourhistory-left">
                        <span className="pbmit-timeline-image">
                          <img
                            src="images/coworking/history/history-01.jpg"
                            className="img-fluid w-100"
                            alt="We started  business industry"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pbmit-timeline-inner">
                  <div className="col-sm-12 pbmit-ourhistory-type2">
                    <div className="row pbmit-ourhistory-row">
                      <div className="col-md-6 col-sm-12 col-xs-6 pbmit-ourhistory-right">
                        <span className="label">2020</span>
                        <div className="content">
                          <h4>Створюємо першу команду</h4>
                          <div className="simple-text">
                            <p>
                              Ми випробовуємо свої сили в геймдеві та беремо
                              участь у державних проектах. Протягом безлічі
                              ночей ми працюємо над проектами, обмінюючись
                              ідеями та ентузіазмом. Ми намагаємося знайти
                              партнерів та спонсорів для втілення наших ідей.
                              Кожен успіх та, навіть, кожна невдача налаштовують
                              нас докладати більше зусиль.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 pbmit-ourhistory-left">
                        <span className="pbmit-timeline-image">
                          <img
                            src="images/coworking/history/history-02.jpg"
                            className="img-fluid w-100"
                            alt="We have expert Team Member"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pbmit-timeline-inner">
                  <div className="col-sm-12 pbmit-ourhistory-type2">
                    <div className="row pbmit-ourhistory-row">
                      <div className="col-md-6 col-sm-12 col-xs-6 pbmit-ourhistory-right">
                        <span className="label">2023</span>
                        <div className="content">
                          <h4>Створення optionflow</h4>
                          <div className="simple-text">
                            <p>
                              На початку 2023 року ми заснували нашу студію в ці
                              важкі для нашої країни часи. Знаходимо проекти та
                              реалізовуємо їх на високому рівні, ставимо перед
                              собою нові цілі та віддано працюємо, намагаючись
                              досягти їх. Поступово розширюємо нашу студію та
                              прибавляємо новий персонал.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 pbmit-ourhistory-left">
                        <span className="pbmit-timeline-image">
                          <img
                            src="images/coworking/history/history-04.jpg"
                            className="img-fluid w-100"
                            alt="We got the high level of success"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pbmit-last-timeline"></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default History;
