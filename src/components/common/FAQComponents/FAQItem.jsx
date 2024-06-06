import React, { useState } from "react";

const FAQItem = ({ question, answer, identificator }) => {
  const [questionOpened, setQuestionOpened] = useState(null);

  const handleOpenQuestion = (identificator) => {
    console.log(identificator);
    setQuestionOpened(questionOpened === identificator ? null : identificator);
  };
  return (
    <div
      className={questionOpened ? "accordion-item active" : "accordion-item"}
      onClick={handleOpenQuestion}
    >
      <h2 className="accordion-header" id="headingOne">
        <button
          className={
            questionOpened ? "accordion-button " : "accordion-button collapsed"
          }
          type="button"
          id={identificator}
        >
          {question}
        </button>
      </h2>
      <div
        className={
          questionOpened ? "accordion-collapse" : "accordion-collapse collapse"
        }
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;
