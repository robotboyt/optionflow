import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sphere from "../../animation/Sphere.jsx";
import TabContent from "../../components/HomeComponents/TabContent.jsx";
import SliderComponent from "../../components/HomeComponents/Slider.jsx";

const Home = () => {
  const [cardData, setCardData] = useState({});
  const [servicesData, setServicesData] = useState({});
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const cardResponse = await axios.get("http://192.168.0.66:8080/cards");
        const servicesResponse = await axios.get(
          "http://192.168.0.66:8080/services"
        );
        setCardData(cardResponse);
        setServicesData(servicesResponse);
        setDataLoading(true);
      } catch (error) {
        console.log("We get the error", error);
      }
    };

    getData();

    return () => {};
  }, []);

  console.log(servicesData);

  return (
    <div className="page-wrapper">
      <div className="page-content pbmit-bg-color-light">
        <section className="banner-section-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-12">
                <div className="pbmit-text-style-6">
                  <h1 style={{ userSelect: "none" }}>&nbsp;</h1>
                  <h6 className="pbmit-subtitle">
                    <span className="text-style">
                      ЛАСКАВО ПРОСИМО ДО
                      <span className="color-text-name"> Option Flow </span>
                      web-studio
                    </span>
                  </h6>
                  <h2 className="pbmit-title">
                    Цифрова ідентичність - як головна мета
                  </h2>
                  <p>
                    Cпільно творимо майбутнє: об'єднуємо іновації та творчість.
                  </p>
                  <div>
                    <Link to="/contacts" className="pbmit-btn">
                      Отримати консультацію
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <Sphere />
              </div>
            </div>
          </div>
        </section>

        <section className="about-section-home6">
          <div className="container">
            <div className="row">
              {dataLoading
                ? cardData.data.map((item) => (
                    <div className="col-xl-4 col-md-6" key={item.id}>
                      <div className="pbmit-ihbox-style-8">
                        <div className="pbmit-ihbox-box">
                          <div className="pbmit-ihbox-contents">
                            <div className="pbmit-ihbox-icon">
                              <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                                <img
                                  src={item.imageUrl}
                                  className="img-fluid-service"
                                  alt="web-service"
                                />
                              </div>
                            </div>
                            <h2 className="pbmit-element-title">{item.name}</h2>
                            <div className="pbmit-heading-desc">
                              <span>{item.category.category1}</span>
                              <br />
                              <span>{item.category.category2}.</span>
                              <br />
                              <span>{item.category.category3}</span>
                            </div>
                            <div className="pbmit-ihbox-btn">
                              <Link to="#">
                                <span>Читати більше</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </section>

        <section className="web-section">
          <div className="container">
            <div className="row align-items-center align-content-center">
              <div className="col-xl-6 col-md-12 agency-right-section-home6">
                <div className="pbmit-heading-subheading-style-6">
                  <h4 className="pbmit-subtitle">РОЗРОБКА ВЕБ-ДОДАТКІВ</h4>
                  <h2 className="pbmit-title">
                    Розробка під ключ від OptionFlow
                  </h2>
                </div>
                <div className="mb-4">
                  Завдяки нашим спеціалістам - ваш проєкт буде реалізовано від
                  ідеї до готового продукту. Вам не потрібно шукати команди
                  окремо під кожну частину проєкту!
                </div>
              </div>
            </div>
            <div className="sub-section">
              <div className="pbmit-ihbox-style-9">
                <div className="pbmit-ihbox-box d-flex align-items-center">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-xido-icon pbmit-xido-icon-satellite"></i>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      Веб-сайти для бізнесу
                    </h2>
                    <div className="pbmit-heading-desc">
                      Розробляємо веб-сайти які не лише презентують вашу
                      компанію, а й автоматизують бізнес-процеси
                    </div>
                  </div>
                </div>
              </div>
              <div className="pbmit-ihbox-style-9">
                <div className="pbmit-ihbox-box d-flex align-items-center">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-xido-icon  pbmit-xido-icon-ar-camera"></i>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">Мобільні додатки</h2>
                    <div className="pbmit-heading-desc">
                      Наявність мобільного додатку підвищує технологічний статус
                      вашого бренду, створюючи враження сучасності та
                      інноваційності
                    </div>
                  </div>
                </div>
              </div>
              <div className="pbmit-ihbox-style-9">
                <div className="pbmit-ihbox-box d-flex align-items-center">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-xido-icon pbmit-xido-icon-analysis"></i>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">Blockchain розробка</h2>
                    <div className="pbmit-heading-desc">
                      Blockchain це не тільки грошові перекази криптовалют, але
                      й безпечні обміни інформації такими як повідомлення або
                      корпоративні системи управління даними.
                    </div>
                  </div>
                </div>
              </div>
              <div className="pbmit-ihbox-style-9">
                <div className="pbmit-ihbox-box d-flex align-items-center">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-xido-icon pbmit-xido-icon-networking"></i>
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">ШІ - розробка</h2>
                    <div className="pbmit-heading-desc">
                      Штучний інтелект це вже не майбутнє - а реальність.
                      Створюємо онлайн-чати на основі ШІ для більш зручної
                      комунікації з клієнтами та аналізу даних.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lg pbmit-bg-color-secondary service-section-home6">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="pbmit-heading-subheading text-white">
                  <h4 className="pbmit-subtitle">&nbsp;</h4>
                  <h2 className="pbmit-title">Наші послуги</h2>
                </div>
              </div>
            </div>

            <div>
              {dataLoading ? (
                <SliderComponent sliderData={servicesData.data} />
              ) : null}
            </div>
          </div>
        </section>
        <TabContent />
        <section className="section-lg">
          <div className="container">
            <div className="row g-0">
              <div className="col-xl-5 col-md-12 p-0">
                <div className="pbmit-heading-subheading-style-6">
                  <h4 className="pbmit-subtitle">LATEST NEWS</h4>
                  <h2 className="pbmit-title">
                    What's new?
                    <br />
                    My Blog And News.
                  </h2>
                </div>
                <Link
                  to="blog-grid-view.html"
                  className="pbmit-btn pbmit-btn-hover-secondary"
                >
                  View All
                </Link>
              </div>
              <div className="col-xl-7 col-md-12 p-0">
                <article className="pbmit-blog-style-5 col-md-12">
                  <div className="post-item">
                    <div className="pbminfotech-box-content">
                      <div className="pbmit-meta-container">
                        <span className="pbmit-date-wrapper">
                          <span className="pbmit-post-date pbmit-meta-line">
                            May 17
                          </span>
                        </span>
                        <span className="pbmit-meta-category pbmit-meta-line">
                          <Link to="" rel="category tag">
                            Broadband
                          </Link>
                        </span>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <h3 className="pbmit-post-title">
                          <Link to="blog-single-details-two.html">
                            Easy ways to implement wellbeing programs
                          </Link>
                        </h3>
                      </div>
                      <div className="pbmit-read-more-link">
                        <Link to="blog-single-details-two.html">
                          <span className="pbmit-arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="pbmit-blog-style-5 col-md-12">
                  <div className="post-item">
                    <div className="pbminfotech-box-content">
                      <div className="pbmit-meta-container">
                        <span className="pbmit-date-wrapper">
                          <span className="pbmit-post-date pbmit-meta-line">
                            Apr 25
                          </span>
                        </span>
                        <span className="pbmit-meta-category pbmit-meta-line">
                          <Link to="" rel="category tag">
                            Internet
                          </Link>
                        </span>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <h3 className="pbmit-post-title">
                          <Link to="blog-single-details-two.html">
                            Things Can Help Any coworking Flourish Again
                          </Link>
                        </h3>
                      </div>
                      <div className="pbmit-read-more-link">
                        <Link to="blog-single-details-two.html">
                          <span className="pbmit-arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="pbmit-blog-style-5 col-md-12">
                  <div className="post-item">
                    <div className="pbminfotech-box-content">
                      <div className="pbmit-meta-container">
                        <span className="pbmit-date-wrapper">
                          <span className="pbmit-post-date pbmit-meta-line">
                            Apr 08
                          </span>
                        </span>
                        <span className="pbmit-meta-category pbmit-meta-line">
                          <Link to="" rel="category tag">
                            Mobile
                          </Link>
                        </span>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <h3 className="pbmit-post-title">
                          <Link to="blog-single-details-two.html">
                            Five Ways Elevate Your Employees Workplace
                          </Link>
                        </h3>
                      </div>
                      <div className="pbmit-read-more-link">
                        <Link to="blog-single-details-two.html">
                          <span className="pbmit-arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
