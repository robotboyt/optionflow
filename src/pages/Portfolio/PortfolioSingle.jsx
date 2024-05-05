import React from "react";

const PortfolioSingle = () => {
  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Name of Project</h1>
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
                  <h4>Сайт для сервісу ремонту автомобілів</h4>
                  До нас звернувся невеликий сервіс з ремонту автомобілів із
                  пропозицією створити для них веб-сайт для розвитку їхнього
                  бізнесу. Мета - залучити більше клієнтів і надати їм
                  можливість зв'язатися та отримати початкові відповіді на свої
                  питання.
                </div>
                <img
                  src="images/coworking/project/project-02big.jpg"
                  className="img-fluid w-100 mb-4"
                  alt=""
                />
                <div className="pbmit-single-project-details-list">
                  <div className="pbmit-portfolio-lines-wrapper">
                    <ul className="pbmit-portfolio-lines-ul">
                      <li className="pbmit-portfolio-line-li">
                        <span className="pbmit-portfolio-line-title">
                          Клієнт:{" "}
                        </span>
                        <span className="pbmit-portfolio-line-value">
                          Сервіс по ремонту автомобілів
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
                          <a href="#" rel="tag">
                            Малий бізнес
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="portfolio-details">
                <h4>Робочий процесс</h4>
                <p>
                  Робочий процес у нашій команді залежить від багатьох принципів
                  та деталей. Ми завжди орієнтовані на побажання клієнта та на
                  результат, щоб він був якомога кращим для клієнта.
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <div className="pbmit-ihbox pbmit-ihbox-style-22">
                      <div className="pbmit-ihbox-box">
                        <div className="pbmit-ihbox-contents">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">
                              01
                            </div>
                          </div>
                          <h2 className="pbmit-element-title">
                            Аналіз потреб замовника
                          </h2>
                          <div className="pbmit-heading-desc">
                            Після подання заявки ми зв'яжемося з замовником та
                            дізнаємося деталі того, що саме він хоче отримати.
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
                              02
                            </div>
                          </div>
                          <h2 className="pbmit-element-title">
                            Будуємо стратегію проекту
                          </h2>
                          <div className="pbmit-heading-desc">
                            Будуємо стратегію та план проекту і узгоджуємо їх із
                            замовником та починаємо роботу.
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
                              03
                            </div>
                          </div>
                          <h2 className="pbmit-element-title">
                            Готовий результат
                          </h2>
                          <div className="pbmit-heading-desc">
                            Після кропітливої роботи та детального перегляду
                            проєкту ми передаємо готовий результат замовнику.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-challange">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Про проект</h4>
                      <div className="subchallange">
                        Тут подані основні деталі проекту, які ми розробили
                        спеціально для нього. Крім того, при натисканні на фото
                        ви зможете переглянути демонстраційну версію проекту
                      </div>
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item">
                          <i className="pbmit-base-icon-ok"></i>Автоматизація
                          додавання нових єлементів
                        </li>
                        <li className="list-group-item">
                          <i className="pbmit-base-icon-ok"></i>SEO-оптимізація
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
                      href="https://robotboyt.github.io/website-Autotool/"
                      className="col-md-6"
                      target="_blank"
                    >
                      <div className="portfolio-challange-bg"></div>
                    </a>
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

export default PortfolioSingle;
