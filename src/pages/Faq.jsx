import React, { useEffect, useState } from "react";
import FAQItem from "../components/common/FAQComponents/FAQItem";
import FetchModule from "../components/module/FetchModule";
import Loader from "../animation/Loader";

const Faq = () => {
  const [questionOpened, setQuestionOpened] = useState(null);
  const [faqData, setFaqData] = useState(null);

  const faqLink = "https://optionflow.pro/api/Main/FAQ";
  useEffect(() => {
    FetchModule(setFaqData, undefined, faqLink);
  }, []);

  console.log(faqData);
  const handleOpenQuestion = (id) => {
    setQuestionOpened(questionOpened === id ? null : id);
  };
  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">FAQ</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="section-lgt section-faq">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="pbmit-heading-subheading text-center">
                  <h4 className="pbmit-subtitle-white">ПОШИРЕНІ ЗАПИТАННЯ</h4>
                  <h2 className="pbmit-title">Часті запитання</h2>
                </div>
              </div>
            </div>
            {faqData ? (
              <div className="row">
                <div className="col-md-6">
                  <div className="accordion accordion-style-3">
                    {faqData.slice(0, 3).map((item, index) => (
                      <FAQItem
                        question={item.question}
                        answer={item.answer}
                        key={`col1-${index}`}
                        isVisible={questionOpened === `col1-${index}`}
                        isOnToogle={() => handleOpenQuestion(`col1-${index}`)}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="accordion accordion-style-3">
                    {faqData.slice(3, 6).map((item, index) => (
                      <FAQItem
                        question={item.question}
                        answer={item.answer}
                        key={`col2-${index}`}
                        isVisible={questionOpened === `col2-${index}`}
                        isOnToogle={() => handleOpenQuestion(`col2-${index}`)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </section>

        {faqData ? (
          <section className="section-lgx section-faq">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="pbmit-heading-subheading text-center">
                    <h4 className="pbmit-subtitle-white">ЗАГАЛЬНІ ПИТАННЯ</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="accordion accordion-style-3">
                    {faqData.slice(6).map((item, index) => (
                      <FAQItem
                        question={item.question}
                        answer={item.answer}
                        key={`col3-${index}`}
                        isVisible={questionOpened === `col3-${index}`}
                        isOnToogle={() => handleOpenQuestion(`col3-${index}`)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default Faq;
