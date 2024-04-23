import React, { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import an1 from "../../animation/an-6.json";

const TabContent = () => {
  const [click, setClick] = useState(0);
  const animationContainer = useRef(null);

  let testArr = [
    {
      id: 1,
      title: "Аналіз потреб замовника",
      text: "Після подання заявки ми зв'яжемося з замовником та дізнаємося деталі того, що саме він хоче отримати.",
    },
    {
      id: 2,
      title: "Будуємо стратегію проекту",
      text: "Будуємо стратегію та план проекту і узгоджуємо їх із замовником та починаємо роботу.",
    },
    {
      id: 3,
      title: "Готовий результат",
      text: "Після кропітливої роботи та детального перегляду проєкту ми передаємо готовий результат замовнику.",
    },
  ];

  useEffect(() => {
    const anim1 = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: an1,
    });

    return () => {
      if (anim1) {
        anim1.destroy();
      }
    };
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-12 strategy-section-home6">
            <div className="pbmit-heading-subheading-style-6">
              <h4 className="pbmit-subtitle">РОЗРОБКА З OPTIONFLOW</h4>
              <h2 className="pbmit-title">Робочий процесс</h2>
            </div>
            <div className="block pbmit-tab-style-2">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <span
                    className={click === 0 ? "nav-link active" : "nav-link"}
                    id="1"
                    onClick={() => setClick(0)}
                  >
                    Аналіз потреб
                  </span>
                </li>
                <li className="nav-item" role="presentation">
                  <span
                    className={click === 1 ? "nav-link active" : "nav-link"}
                    id="2"
                    onClick={() => setClick(1)}
                  >
                    Cтратегія проекту
                  </span>
                </li>
                <li className="nav-item" role="presentation">
                  <span
                    className={click === 2 ? "nav-link active" : "nav-link"}
                    id="3"
                    onClick={() => setClick(2)}
                  >
                    Готовий результат
                  </span>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane" id="tab-2-3" role="tabpanel">
                  <div className="pbmit-ihbox pbmit-ihbox-style-22">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-ihbox-contents">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-text">
                            {testArr[click].id}
                          </div>
                        </div>
                        <h2 className="pbmit-element-title">
                          {testArr[click].title}
                        </h2>
                        <div className="pbmit-heading-desc">
                          {testArr[click].text}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12 strategy-home-images">
            <div ref={animationContainer} className="animation-block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabContent;
