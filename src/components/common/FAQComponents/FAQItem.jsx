import React from "react";

const FAQItem = ({ question, answer, isVisible, isOnToogle }) => {
  return (
    <div
      className={isVisible ? "accordion-item active" : "accordion-item"}
      onClick={isOnToogle}
    >
      <h2 className="accordion-header" id="headingOne">
        <button
          className={
            isVisible ? "accordion-button " : "accordion-button collapsed"
          }
          type="button"
          id="1"
        >
          {question}
        </button>
      </h2>
      <div
        className={
          isVisible ? "accordion-collapse" : "accordion-collapse collapse"
        }
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;
