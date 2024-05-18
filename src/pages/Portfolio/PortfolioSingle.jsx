import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import axios from "axios";
import Loader from "../../animation/Loader";

const PortfolioSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { portfolioNewData, setFetchedPortfolioData } = useContext(DataContext);
  const [currentPortfolio, setCurrentPortfolio] = useState(null);

  useEffect(() => {
    if (portfolioNewData !== null) {
      const getResult = (newArr, newID) => {
        const result = newArr.filter((obj) => obj.id === newID);
        setCurrentPortfolio(result);
      };

      getResult(portfolioNewData, Number(id));
    } else {
      const fetchService = async () => {
        try {
          const dataResponse = await axios.get(
            "https://optionflow.pro/api/Main/Portfolio"
          );
          const resultResponse = await dataResponse.data.filter(
            (obj) => obj.id === +id
          );
          if (resultResponse.length === 0) {
            navigate("/*");
          }
          await setCurrentPortfolio(resultResponse);
          setFetchedPortfolioData(dataResponse.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchService();
    }
  }, [id, navigate, portfolioNewData, setFetchedPortfolioData]);

  return (
    <div className="page-wrapper">
      {currentPortfolio ? (
        <>
          <div className="pbmit-title-bar-wrapper">
            <div className="container">
              <div className="pbmit-title-bar-content">
                <div className="pbmit-title-bar-content-inner">
                  <div className="pbmit-tbar">
                    <div className="pbmit-tbar-inner container">
                      <h1 className="pbmit-tbar-title">
                        {currentPortfolio[0].title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-content">
            <section className="section-lgt portfolio-single portfolio-single-two">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="pbmit-short-description">
                      <h4>{currentPortfolio[0].title}</h4>
                      {currentPortfolio[0].shortTitle}
                    </div>
                    <img
                      src={currentPortfolio[0].portfolioImage}
                      className="img-fluid w-100 mb-4"
                      alt=""
                    />
                    <div className="pbmit-single-project-details-list">
                      <div className="pbmit-portfolio-lines-wrapper">
                        <ul className="pbmit-portfolio-lines-ul">
                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Клієнт:
                            </span>
                            <span className="pbmit-portfolio-line-value">
                              {currentPortfolio[0].client}
                            </span>
                          </li>

                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Технології:
                            </span>
                            <span className="pbmit-portfolio-line-value">
                              HTML, JS, .NET, C#
                            </span>
                          </li>
                          <li className="pbmit-portfolio-line-li">
                            <span className="pbmit-portfolio-line-title">
                              Категорія:
                            </span>
                            <span className="pbmit-portfolio-line-value">
                              {currentPortfolio[0].category}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-details">
                    <div className="portfolio-challange">
                      <div className="row">
                        <div className="col-md-6">
                          <h4>Про проект</h4>
                          <div
                            className="subchallange"
                            dangerouslySetInnerHTML={{
                              __html: currentPortfolio[0].aboutProject,
                            }}
                          ></div>
                          <ul className="list-group list-group-borderless">
                            <li className="list-group-item">
                              <i className="pbmit-base-icon-ok"></i>
                              Автоматизація додавання нових єлементів
                            </li>
                            <li className="list-group-item">
                              <i className="pbmit-base-icon-ok"></i>
                              SEO-оптимізація
                            </li>
                            <li className="list-group-item">
                              <i className="pbmit-base-icon-ok"></i>Адаптивний
                              дизайн
                            </li>
                            <li className="list-group-item">
                              <i className="pbmit-base-icon-ok"></i>Анімації
                            </li>
                          </ul>
                        </div>

                        <a
                          href={currentPortfolio[0].projectLink}
                          class="col-md-6"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div class="portfolio-challange-bg">
                            <img
                              src={`https://optionflow.pro/${currentPortfolio[0].portfolioImage}`}
                              alt="Portfolio present"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PortfolioSingle;
