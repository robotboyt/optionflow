import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import logoBlack from "./../../Images/logo.svg";
import { useNavigate } from "react-router-dom";
import CustomLink from "../../components/common/CustomLink";

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
          const dataResponse = await axios.get(
            "https://optionflow.pro/api/Main/Services"
          );

          const resultResponse = await dataResponse.data.filter(
            (obj) => obj.id === +id
          );
          if (resultResponse.length === 0) {
            navigate("/*");
          }
          await setCurrentService(resultResponse);
          setFetchedServiceData(dataResponse.data.reverse());
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
        <>
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
                            {serviceNewData.map((serviceItem) => (
                              <li
                                className={
                                  serviceItem.title === currentService[0].title
                                    ? "post-active"
                                    : null
                                }
                              >
                                <CustomLink
                                  propsHref={`/service-single/${serviceItem.id}`}
                                >
                                  {serviceItem.title}
                                </CustomLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </aside>
                      <aside className="widget pbmit-htmlbgcolor">
                        <div className="widget_text widget-as-link">
                          <div className="textwidget custom-html-widget">
                            <div className="pbmit-download">
                              <div className="pbmit-item-download">
                                <a
                                  href="https://optionflow.pro/docs/OptionFlow.pdf"
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
                              <CustomLink propsHref={"/contacts"}>
                                <span>Консультація</span>
                              </CustomLink>
                            </div>
                          </div>
                        </div>
                      </aside>
                    </aside>
                  </div>
                  <div className="col-lg-8 service-right-col order-1">
                    <img
                      src={`https://optionflow.pro/${currentService[0].serviceImage}`}
                      className="w-100"
                      alt=""
                    />
                    <div className="service-details">
                      <h4 className="pbmit-title">{currentService[0].title}</h4>
                      <div className="mt-4">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: currentService[0].description,
                          }}
                        ></div>
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

export default ServiceSingle;
