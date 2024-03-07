import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Про нас</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="section-lg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-12">
                <div className="about-us-section-bg">
                  <div className="about-us-section-wrap">
                    Станьте більш впізнаваними разом з нами.
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="about-us-section-home">
                  <div className="pbmit-heading-subheading">
                    <h4 className="pbmit-subtitle-white">ЧОМУ САМЕ МИ</h4>
                    <h2 className="pbmit-title">
                      Ми пропонуємо розробку та автоматизацію веб-сайтів.
                    </h2>
                  </div>
                  <div>
                    Ми молода команда, яка складається з досвідчених
                    розробників, які люблять і цінують свою роботу.
                  </div>
                  <div className="pbmit-list-style-1">
                    <ul className="icon-list-items">
                      <li className="icon-list-item">
                        <span className="icon-list-text">
                          Найкращий вибір для великих агентств та додатків.
                        </span>
                      </li>
                      <li className="icon-list-item">
                        <span className="icon-list-text">
                          Цінуємо наших клієнтів.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <a href="contact-us.html" className="pbmit-btn">
                    Консультація
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lg">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-6 col-md-12">
                <div className="pbmit-heading-subheading">
                  <h4 className="pbmit-subtitle-white">Чому ми маємо успіх</h4>
                  <h2 className="pbmit-title">
                    Маємо досвід у розробці SEO-дружніх рішень з використанням
                    новітніх технологій.
                  </h2>
                </div>
                <div className="pe-4">
                  SEO-френдлі сайт - це спеціально налаштований веб-ресурс, який
                  має високий рівень оптимізації для пошукових систем. Такі
                  сайти приваблюють більше уваги в Інтернеті, забезпечуючи
                  ефективне просування, підвищення трафіку і залучення цільової
                  аудиторії.
                </div>
                <div className="pbmit-ihbox pbmit-ihbox-style-20 mt-5">
                  <div className="pbmit-ihbox-box d-flex align-items-center">
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper">
                        <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                          <i className="pbmit-xido-icon pbmit-xido-icon-email"></i>
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-contents">
                      <div className="pbmit-heading-desc">Відправити пошту</div>
                      <h2 className="pbmit-element-title">
                        optionflowit@gmail.com
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 progressbar-section-home">
                <div className="progressbar pbmit-progress-style-4">
                  <span className="progress-label">Розробка</span>
                  <div className="progress progress-lg progress-percent-bg">
                    <div
                      className="progress-bar aos aos-init aos-animate"
                      data-aos="slide-right"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    >
                      <span className="progress-percent">90%</span>
                    </div>
                  </div>
                </div>
                <div className="progressbar pbmit-progress-style-4">
                  <span className="progress-label">Дизайн</span>
                  <div className="progress progress-lg progress-percent-bg">
                    <div
                      className="progress-bar aos aos-init aos-animate"
                      data-aos="slide-right"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    >
                      <span className="progress-percent">80%</span>
                    </div>
                  </div>
                </div>
                <div className="progressbar pbmit-progress-style-4">
                  <span className="progress-label">SEO</span>
                  <div className="progress progress-lg progress-percent-bg">
                    <div
                      className="progress-bar aos aos-init aos-animate"
                      data-aos="slide-right"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "70%" }}
                    >
                      <span className="progress-percent">70%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lg">
          <div className="container">
            <div className="pbmit-heading-subheading">
              <h4 className="pbmit-subtitle-white">ОСТАННІ ОНОВЛЕННЯ</h4>
              <h2 className="pbmit-title">Читайте Наші Останні Новини</h2>
            </div>
            <div className="row">
              <article className="pbmit-blog-style-2 col-md-12">
                <div className="post-item">
                  <div className="pbminfotech-box-content">
                    <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                      <div className="pbmit-meta-date">
                        <span className="pbmit-date-wrap">17</span>
                        <span> May , 2022 </span>
                      </div>
                    </div>
                    <div className="pbmit-content-wrapper">
                      <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                        <div className="pbmit-meta-category">
                          <a href="#" rel="category tag">
                            Agreements
                          </a>
                        </div>
                      </div>
                      <h3 className="pbmit-post-title">
                        <a href="#">
                          Easy ways to implement wellbeing programs
                        </a>
                      </h3>
                    </div>
                    <div className="pbmit-featured-container">
                      <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                          <img
                            src="images/coworking/blog/blog-01.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-read-more-link">
                      <a href="blog-single-details.html">
                        <span>Продовжити читати</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="pbmit-blog-style-2 col-md-12">
                <div className="post-item">
                  <div className="pbminfotech-box-content">
                    <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                      <div className="pbmit-meta-date">
                        <span className="pbmit-date-wrap">25</span>
                        <span> April , 2022 </span>
                      </div>
                    </div>
                    <div className="pbmit-content-wrapper">
                      <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                        <div className="pbmit-meta-category">
                          <a href="#" rel="category tag">
                            coworking
                          </a>
                        </div>
                      </div>
                      <h3 className="pbmit-post-title">
                        <a href="#">
                          Things Can Help Any coworking Flourish Again
                        </a>
                      </h3>
                    </div>
                    <div className="pbmit-featured-container">
                      <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                          <img
                            src="images/coworking/blog/blog-01.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-read-more-link">
                      <a href="blog-single-details.html">
                        <span>Продовжити читати</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="pbmit-blog-style-2 col-md-12">
                <div className="post-item">
                  <div className="pbminfotech-box-content">
                    <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                      <div className="pbmit-meta-date">
                        <span className="pbmit-date-wrap">08</span>
                        <span> April , 2022 </span>
                      </div>
                    </div>
                    <div className="pbmit-content-wrapper">
                      <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                        <div className="pbmit-meta-category">
                          <a href="#" rel="category tag">
                            Leadership
                          </a>
                        </div>
                      </div>
                      <h3 className="pbmit-post-title">
                        <a href="#">
                          Five Ways Elevate Your Employees Workplace
                        </a>
                      </h3>
                    </div>
                    <div className="pbmit-featured-container">
                      <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                          <img
                            src="images/coworking/blog/blog-01.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-read-more-link">
                      <a href="blog-single-details.html">
                        <span>Продовжити читати</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
