import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

const CareerSingle = () => {
  const { id } = useParams();
  useEffect(() => {}, [id]);
  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">.Net Developer</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="section-lgt career-single portfolio-single-two">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="pbmit-short-description">
                  <div className="pbmit-short-head">
                    <h4>.Net Developer</h4>
                    <span className="dropcap rounded">Midle</span>
                  </div>
                  Шукаємо .Net розробника, для створення робочого бекенду та
                  підтримку старого, створення та автоматизація сервісів
                </div>
                <div className="pbmit-single-project-details-list">
                  <div className="pbmit-portfolio-lines-wrapper">
                    <ul className="pbmit-portfolio-lines-ul">
                      <li className="pbmit-portfolio-line-li">
                        <span className="pbmit-portfolio-line-title">
                          Досвід:{" "}
                        </span>
                        <span className="pbmit-portfolio-line-value">
                          3+ роки з .Net
                        </span>
                        <br />
                        <span className="pbmit-portfolio-line-value">
                          5+ роки з C#
                        </span>
                      </li>
                      <li className="pbmit-portfolio-line-li">
                        <span className="pbmit-portfolio-line-title">
                          Технології:
                        </span>
                        <span className="pbmit-portfolio-line-value">.Net</span>
                        <br />
                        <span className="pbmit-portfolio-line-value">C#</span>
                        <br />
                        <span className="pbmit-portfolio-line-value">HTML</span>
                        <br />
                        <span className="pbmit-portfolio-line-value">
                          React
                        </span>
                        <br />
                      </li>
                      <li className="pbmit-portfolio-line-li">
                        <span className="pbmit-portfolio-line-title">
                          Інструменти:
                        </span>
                        <span className="pbmit-portfolio-line-value">
                          Azure Net
                        </span>
                        <br />
                        <span className="pbmit-portfolio-line-value">
                          Google Cloud Services
                        </span>
                        <br />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="portfolio-details">
                <h4>Процес свіпбесіди</h4>
                <p>**CUSTOM TEXT HERE**</p>
                <div className="row">
                  <div className="col-md-4">
                    <div className="pbmit-ihbox pbmit-ihbox-style-22">
                      <div className="pbmit-ihbox-box">
                        <div className="pbmit-ihbox-contents">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">
                              1
                            </div>
                          </div>
                          <h2 className="pbmit-element-title">Розмова з HR</h2>
                          <div className="pbmit-heading-desc">
                            Після укладання угоди про дзвінок наш HR зателефонує
                            вам. Це буде короткий діалог, під час якого ви
                            дізнаєтеся більше про нас, а ми — про вас.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="pbmit-ihbox pbmit-ihbox-style-22">
                      <div className="pbmit-ihbox-box">
                        <div className="pbmit-ihbox-contents">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">
                              2
                            </div>
                          </div>
                          <h2 className="pbmit-element-title">
                            Тестове завдання
                          </h2>
                          <div className="pbmit-heading-desc">
                            Після успішної розмови з HR ми надамо вам тестове
                            завдання з визначеними термінами виконання та
                            умовами, яке відповідатиме вимогам обраної вами
                            посади.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="pbmit-ihbox pbmit-ihbox-style-22">
                      <div className="pbmit-ihbox-box">
                        <div className="pbmit-ihbox-contents">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">
                              3
                            </div>
                          </div>
                          <h2 className="pbmit-element-title">
                            Технічна співбесіда
                          </h2>
                          <div className="pbmit-heading-desc">
                            Після успішного виконання тестового завдання ми
                            перейдемо до фінального етапу, де ми з вами
                            поговоримо на тему технічних знань обраної вами
                            посади.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-challange">
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Основні функціональні обов'язки</h5>

                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item">
                          <i className="pbmit-base-icon-ok"></i> Research beyond
                          the business plan
                        </li>
                        <li className="list-group-item">
                          <i className="pbmit-base-icon-ok"></i> Marketing
                          options and rates
                        </li>
                        <li className="list-group-item">
                          <i className="pbmit-base-icon-ok"></i> The ability to
                          turnaround consulting
                        </li>
                        <li className="list-group-item">
                          <i className="pbmit-base-icon-ok"></i> Customer
                          engagement matters
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Наші обов'язки</h5>
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item">
                          <i className="pbmit-base-icon-ok"></i> Research beyond
                          the business plan
                        </li>
                        <li className="list-group-item">
                          <i className="pbmit-base-icon-ok"></i> Marketing
                          options and rates
                        </li>
                        <li className="list-group-item">
                          <i className="pbmit-base-icon-ok"></i> The ability to
                          turnaround consulting
                        </li>
                        <li className="list-group-item">
                          <i className="pbmit-base-icon-ok"></i> Customer
                          engagement matters
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerSingle;
