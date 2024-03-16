import React, { useEffect, useState } from "react";
import lottie from "lottie-web";
import animationData from "../../animation/internet-banner.json";
import anim2Data from "../../animation/internet-anim-01.json";
import anim3Data from "../../animation/internet-anim-02.json";
import { Link } from "react-router-dom";
import sliderContent from "./HomeSliderContent";
import HomeSliderBlock from "./HomeSliderBlock";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import axios from "axios";

const Home = () => {
  const [cardData, setCardData] = useState({});
  const [servicesData, setServicesData] = useState({});
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    const container = document.getElementById("internet-banner");
    const container2 = document.getElementById("internet-anim-01");
    const container3 = document.getElementById("internet-anim-02");

    const getData = async () => {
      try {
        const cardResponse = await axios.get("http://127.0.0.1:5000/cards");
        const servicesResponse = await axios.get(
          "http://127.0.0.1:5000/services"
        );
        setCardData(cardResponse);
        setServicesData(servicesResponse);
        setDataLoading(true);
      } catch (error) {
        console.log("We get the error", error);
      }
    };

    const anim1 = lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    const anim2 = lottie.loadAnimation({
      container: container2,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: anim2Data,
    });

    const anim3 = lottie.loadAnimation({
      container: container3,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: anim3Data,
    });

    getData();

    return () => {
      anim1.destroy();
      anim2.destroy();
      anim3.destroy();
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
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
                <div className="internet-lottie">
                  <div id="internet-banner" className="lottie-anim"></div>
                </div>
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

        <section>
          <div className="container">
            <div className="row align-items-center align-content-center">
              <div className="col-xl-6 col-md-12">
                <div>
                  <div id="internet-anim-01" className="lottie-anim"></div>
                </div>
              </div>
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
                <div className="pbmit-ihbox-style-9">
                  <div className="pbmit-ihbox-box d-flex align-items-center">
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper">
                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                          <i className="pbmit-xido-icon pbmit-xido-icon-cloud-computing"></i>
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
                          <i className="pbmit-xido-icon pbmit-xido-icon-satellite"></i>
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">Мобільні додатки</h2>
                      <div className="pbmit-heading-desc">
                        Наявність мобільного додатку підвищує технологічний
                        статус вашого бренду, створюючи враження сучасності та
                        інноваційності
                      </div>
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
              <div className="col-md-4">
                <div className="service6-arrow swiper-btn-white swiper-btn-circle swiper-btn-custom d-flex flex-row-reverse"></div>
              </div>
            </div>
            <div
              className="swiper-slider"
              data-arrows-class="service6-arrow"
              data-autoplay="false"
              data-dots="false"
              data-arrows="true"
              data-columns="4"
              data-margin="30"
              data-effect="slide"
            >
              <div className="swiper-wrapper">
                {dataLoading
                  ? servicesData.data.map((sliderItem) => (
                      <HomeSliderBlock
                        sliderTitle={sliderItem.title}
                        sliderLink={sliderItem.href}
                        sliderContent={sliderItem.subtitle}
                        sliderIcon={sliderItem.icon}
                        key={sliderItem.id}
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-12">
                <div className="strategy-lottie-home6">
                  <div id="internet-anim-02" className="lottie-anim"></div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 strategy-section-home6">
                <div className="pbmit-heading-subheading-style-6">
                  <h4 className="pbmit-subtitle">РОЗРОБКА З OPTIONFLOW</h4>
                  <h2 className="pbmit-title">Робочий процесс</h2>
                </div>
                <div className="block pbmit-tab-style-2">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link active"
                        data-bs-toggle="tab"
                        to="#tab-2-1"
                        aria-selected="true"
                        role="tab"
                      >
                        Аналіз потреб
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="#tab-2-2"
                        aria-selected="false"
                        role="tab"
                        tabIndex="-1"
                      >
                        Cтратегія проекту
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="#tab-2-3"
                        aria-selected="false"
                        role="tab"
                        tabIndex="-1"
                      >
                        Готовий результат
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane show active"
                      id="tab-2-1"
                      role="tabpanel"
                    >
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
                    <div className="tab-pane" id="tab-2-2" role="tabpanel">
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
                              Будуємо стратегію та план проекту і узгоджуємо їх
                              із замовником та починаємо роботу.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-2-3" role="tabpanel">
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
                </div>
              </div>
            </div>
          </div>
        </section>
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

      <Footer />
    </div>
  );
};

export default Home;
