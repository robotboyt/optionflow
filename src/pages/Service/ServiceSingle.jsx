import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import logoBlack from "./../../Images/logo.svg";
import { useNavigate } from "react-router-dom";

const ServiceSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { serviceNewData, setFetchedServiceData } = useContext(DataContext);
  const [currentService, setCurrentService] = useState(null);

  useEffect(() => {
    if (serviceNewData !== null) {
      const getResult = (newArr, newID) => {
        const result = newArr.filter((obj) => obj.id === newID);
        setCurrentService(result);
      };

      getResult(serviceNewData, Number(id));
    } else {
      const fetchService = async () => {
        try {
          const serviceResponse = await axios.get(
            "http://192.168.0.66:2000/api/service"
          );

          const resultResponse = await serviceResponse.data.filter(
            (obj) => obj.id === +id
          );
          if (resultResponse.length === 0) {
            navigate("/*");
          }
          await setCurrentService(resultResponse);
          setFetchedServiceData(serviceResponse.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchService();
    }
  }, [id]);

  return (
    <div className="page-wrapper">
      {currentService ? (
        <div>
          <div className="pbmit-title-bar-wrapper">
            <div className="container">
              <div className="pbmit-title-bar-content">
                <div className="pbmit-title-bar-content-inner">
                  <div className="pbmit-tbar">
                    <div className="pbmit-tbar-inner container">
                      <h1 className="pbmit-tbar-title">
                        {currentService[0].title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-content">
            <section className="section-lgx service-details-two">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 service-left-col order-2 order-lg-1">
                    <aside className="service-sidebar">
                      <aside className="widget post-list">
                        <h2 className="widget-title">Всі послуги</h2>
                        <div className="all-post-list">
                          <ul>
                            <li className="post-active">
                              <a href="services-details.html">ІТ-консалтинг</a>
                            </li>
                            <li>
                              <a href="services-details.html">
                                Супровід проектів
                              </a>
                            </li>
                            <li>
                              <a href="services-details.html">
                                Розробка мобільних додатків
                              </a>
                            </li>
                            <li>
                              <a href="services-details.html">
                                {" "}
                                React розробка{" "}
                              </a>
                            </li>
                            <li>
                              <a href="services-details.html"> SSM послуги </a>
                            </li>
                            <li>
                              <a href="services-details.html">
                                .Net Core розробка
                              </a>
                            </li>
                            <li>
                              <a href="services-details.html">
                                Контекстна та таргетована реклама
                              </a>
                            </li>
                            <li>
                              <a href="services-details.html">
                                Корпоративні платформи
                              </a>
                            </li>
                          </ul>
                        </div>
                      </aside>
                      <aside className="widget pbmit-htmlbgcolor">
                        <div className="widget_text widget-as-link">
                          <div className="textwidget custom-html-widget">
                            <div className="pbmit-download">
                              <div className="pbmit-item-download">
                                <a
                                  href="#"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i className="pbmit-xido-icon pbmit-xido-icon-pdf"></i>
                                  Завантажте нашу презентацію
                                  <i className="industrey-base-icons tstk-rightpostn tstk-base-icon-download"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </aside>
                      <aside className="widget single-service-contact">
                        <div className="widget-as-link">
                          <div className="pbmit-ads-inner">
                            <div className="pbmit-ads-logo">
                              <img
                                className="size-full"
                                src={logoBlack}
                                alt="single15img"
                              />
                            </div>
                            <h3 className="pbmit-ads-title">
                              Цифрова <br />
                              ідентичність
                              <br />
                              Як головна <br />
                              Мета
                            </h3>
                            <div className="pbmit-ads-button">
                              <a href="#">
                                <span>Консультація</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </aside>
                    </aside>
                  </div>
                  <div className="col-lg-8 service-right-col order-1">
                    <img
                      src={currentService[0].imageUrl}
                      className="w-100"
                      alt=""
                    />
                    <div className="service-details">
                      <h4 className="pbmit-title">{currentService[0].title}</h4>
                      <div className="mt-4">
                        {/* <span className="dropcap rounded">
                          {currentService[0].subtitle}
                        </span> */}
                        {/* {currentService[0].article} */}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: currentService[0].article,
                          }}
                        ></div>
                      </div>
                      {/* <div>
                    <div>
                      Posuere morbi leo urna molestie at. Ipsum dolor sit amet
                      consectetur adipiscing elit pellentesque habitant morbi.
                      Odio ut enim blandit volutpat maecenas volutpat. Tristique
                      magna sit amet purus gravida. Vitae proin sagittis nisl
                      rhoncus. Sagittis nisl rhoncus mattis rhoncus urna. Mauris
                      vitae ultricies leo integer. Elit eget gravida cum sociis
                      natoque Amet consectetur adipiscing elit ut aliquam purus
                      sit amet luctus.
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ServiceSingle;
