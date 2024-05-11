import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";

const CareerSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { careerNewData, setFetchedCareerData } = useContext(DataContext);
  const [currentCareer, setCurrentCareer] = useState(null);

  useEffect(() => {
    if (careerNewData !== null) {
      const getResult = (newArr, newID) => {
        const result = newArr.filter((obj) => obj.id === newID);
        setCurrentCareer(result);
      };

      getResult(careerNewData, Number(id));
    } else {
      const fetchService = async () => {
        try {
          const dataResponse = await axios.get(
            "https://optionflow.pro/api/Main/Career"
          );

          const resultResponse = await dataResponse.data.filter(
            (obj) => obj.id === +id
          );
          if (resultResponse.length === 0) {
            navigate("/*");
          }
          await setCurrentCareer(resultResponse);
          setFetchedCareerData(dataResponse.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchService();
    }
  }, [id, careerNewData]);

  console.log(currentCareer);

  return (
    <div className="page-wrapper">
      {currentCareer ? (
        <>
          <div className="pbmit-title-bar-wrapper">
            <div className="container">
              <div className="pbmit-title-bar-content">
                <div className="pbmit-title-bar-content-inner">
                  <div className="pbmit-tbar">
                    <div className="pbmit-tbar-inner container">
                      <h1 className="pbmit-tbar-title">
                        {currentCareer[0].title}
                      </h1>
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
                        <h4>{currentCareer[0].title}</h4>
                        <span className="dropcap rounded">
                          {currentCareer[0].experiences.tag}
                        </span>
                      </div>
                      {currentCareer[0].shortTitle}
                    </div>
                    <div className="pbmit-single-project-details-list">
                      <div className="pbmit-portfolio-lines-wrapper">
                        <ul className="pbmit-portfolio-lines-ul">
                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Досвід:
                            </span>
                            {currentCareer[0].experiences.experiences.map(
                              (experienceItem) => {
                                return experienceItem ? (
                                  <>
                                    <span className="pbmit-portfolio-line-value">
                                      {experienceItem}
                                    </span>
                                    <br />
                                  </>
                                ) : null;
                              }
                            )}
                          </li>
                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Технології:
                            </span>
                            {currentCareer[0].technologies.map(
                              (technologyItem) => {
                                return technologyItem ? (
                                  <>
                                    <span className="pbmit-portfolio-line-value">
                                      {technologyItem}
                                    </span>
                                    <br />
                                  </>
                                ) : null;
                              }
                            )}
                          </li>
                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Інструменти:
                            </span>
                            {currentCareer[0].tools.map((toolsItem) => {
                              return toolsItem ? (
                                <>
                                  <span className="pbmit-portfolio-line-value">
                                    {toolsItem}
                                  </span>
                                  <br />
                                </>
                              ) : null;
                            })}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-details">
                    <h4>Процес свіпбесіди</h4>
                    {/* <p>**CUSTOM TEXT HERE**</p> */}
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
                              <h2 className="pbmit-element-title">
                                Розмова з HR
                              </h2>
                              <div className="pbmit-heading-desc">
                                Після укладання угоди про дзвінок наш HR
                                зателефонує вам. Це буде короткий діалог, під
                                час якого ви дізнаєтеся більше про нас, а ми —
                                про вас.
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
                                Після успішної розмови з HR ми надамо вам
                                тестове завдання з визначеними термінами
                                виконання та умовами, яке відповідатиме вимогам
                                обраної вами посади.
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
                            {currentCareer[0].functionalHarnesses.map(
                              (harnessesItem) => {
                                return harnessesItem ? (
                                  <li className="list-group-item">
                                    <i className="pbmit-base-icon-ok"></i>
                                    {harnessesItem}
                                  </li>
                                ) : null;
                              }
                            )}
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h5>Наші обов'язки</h5>
                          <ul className="list-group list-group-borderless">
                            {currentCareer[0].ourHarnesses.map(
                              (harnessesItem) => {
                                return harnessesItem ? (
                                  <li className="list-group-item">
                                    <i className="pbmit-base-icon-ok"></i>
                                    {harnessesItem}
                                  </li>
                                ) : null;
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CareerSingle;
