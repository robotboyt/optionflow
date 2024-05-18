import React, { useContext, useEffect, useState } from "react";
import CustomLink from "../../components/common/CustomLink.jsx";
import axios from "axios";
import Sphere from "../../animation/Sphere.jsx";
import TabContent from "../../components/HomeComponents/TabContent.jsx";
import SliderComponent from "../../components/HomeComponents/Slider.jsx";
import { DataContext } from "../../Context/DataContext.jsx";

const Home = () => {
  const [cardData, setCardData] = useState({});
  const [servicesData, setServicesData] = useState({});
  const [blogData, setBlogData] = useState(null);
  const { setFetchedBlogData } = useContext(DataContext);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const cardResponse = await axios.get(
          "http://192.168.0.66:2000/api/cards"
        );
        const servicesResponse = await axios.get(
          "http://192.168.0.66:2000/api/services"
        );
        const blogResponse = await axios.get(
          "https://optionflow.pro/api/Main/Blog"
        );
        setCardData(cardResponse);
        setServicesData(servicesResponse);
        setBlogData(blogResponse.data.slice(0, 3));
        setDataLoading(true);
        setFetchedBlogData(blogResponse.data);
      } catch (error) {
        console.log("We get the error", error);
      }
    };

    getData();

    return () => {};
  }, [setFetchedBlogData]);

  console.log(blogData);

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
                    <CustomLink propsHref="/contacts" className="pbmit-btn">
                      Отримати консультацію
                    </CustomLink>
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
                              <CustomLink propsHref="#">
                                <span>Читати більше</span>
                              </CustomLink>
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
                  <h4 className="pbmit-subtitle">Що ми вміємо?</h4>
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
                  <h4 className="pbmit-subtitle">ОСТАННІ ПУБЛІКАЦІЇ</h4>
                  <h2 className="pbmit-title">
                    Що нового?
                    <br />
                    Наш блог та новини
                  </h2>
                </div>
                <CustomLink
                  propsHref="/blog"
                  className="pbmit-btn pbmit-btn-hover-secondary"
                >
                  ДИВИТИСЬ ВСІ
                </CustomLink>
              </div>
              <div className="col-xl-7 col-md-12 p-0">
                <article className="pbmit-blog-style-5 col-md-12">
                  {blogData
                    ? blogData.map((blogItem) => (
                        <div className="post-item" key={blogItem.id.toString()}>
                          <div className="pbminfotech-box-content">
                            <div className="pbmit-meta-container">
                              <span className="pbmit-date-wrapper">
                                <span className="pbmit-post-date pbmit-meta-line">
                                  {blogItem.dateCreate}
                                </span>
                              </span>
                              <span className="pbmit-meta-category pbmit-meta-line">
                                {blogItem.shortTitle}
                              </span>
                            </div>
                            <div className="pbmit-content-wrapper">
                              <h3 className="pbmit-post-title">
                                <CustomLink
                                  propsHref={`/blog-single/${blogItem.id}`}
                                >
                                  {blogItem.title}
                                </CustomLink>
                              </h3>
                            </div>
                            <div className="pbmit-read-more-link">
                              <CustomLink
                                propsHref={`/blog-single/${blogItem.id}`}
                              >
                                <span className="pbmit-arrow"></span>
                              </CustomLink>
                            </div>
                          </div>
                        </div>
                      ))
                    : null}
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
