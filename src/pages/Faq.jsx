import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Faq = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
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
                  <h4 className="pbmit-subtitle-white">COMMON QUERIES</h4>
                  <h2 className="pbmit-title">Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div
                  className="accordion accordion-style-3"
                  id="accordionExample"
                >
                  <div className="accordion-item active">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How profitable is a coworking space?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed sol iusmod tempor incididunt ut labore et dolore
                        magna et aliqua ut eos enim ad minim veniam quis
                        nostrudexercitation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What makes a coworking space successful?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed sol iusmod tempor incididunt ut labore et dolore
                        magna et aliqua ut eos enim ad minim veniam quis
                        nostrudexercitation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How do you build a coworking community?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed sol iusmod tempor incididunt ut labore et dolore
                        magna et aliqua ut eos enim ad minim veniam quis
                        nostrudexercitation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="accordion accordion-style-3"
                  id="accordionExample1"
                >
                  <div className="accordion-item active">
                    <h2 className="accordion-header" id="heading-One">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-One"
                        aria-expanded="true"
                        aria-controls="collapse-One"
                      >
                        How profitable is a coworking space?
                      </button>
                    </h2>
                    <div
                      id="collapse-One"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading-One"
                      data-bs-parent="#accordionExample1"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed sol iusmod tempor incididunt ut labore et dolore
                        magna et aliqua ut eos enim ad minim veniam quis
                        nostrudexercitation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading-Two">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-Two"
                        aria-expanded="false"
                        aria-controls="collapse-Two"
                      >
                        What makes a coworking space successful?
                      </button>
                    </h2>
                    <div
                      id="collapse-Two"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-Two"
                      data-bs-parent="#accordionExample1"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed sol iusmod tempor incididunt ut labore et dolore
                        magna et aliqua ut eos enim ad minim veniam quis
                        nostrudexercitation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading-Three">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-Three"
                        aria-expanded="false"
                        aria-controls="collapse-Three"
                      >
                        How do you build a coworking community?
                      </button>
                    </h2>
                    <div
                      id="collapse-Three"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-Three"
                      data-bs-parent="#accordionExample1"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed sol iusmod tempor incididunt ut labore et dolore
                        magna et aliqua ut eos enim ad minim veniam quis
                        nostrudexercitation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lgx section-faq">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="pbmit-heading-subheading text-center">
                  <h4 className="pbmit-subtitle-white">GENERAL QUESTIONS</h4>
                  <h2 className="pbmit-title">Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div
                  className="accordion accordion-style-3"
                  id="accordionExample2"
                >
                  <div className="accordion-item active">
                    <h2 className="accordion-header" id="headingOne1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne1"
                        aria-expanded="false"
                        aria-controls="collapseOne1"
                      >
                        What are the biggest challenges faced by coworking
                        spaces?
                      </button>
                    </h2>
                    <div
                      id="collapseOne1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo1"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed sol iusmod tempor incididunt ut labore et dolore
                        magna et aliqua ut eos enim ad minim veniam sit amet
                        consec tetur quis nostrudexercitation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo1"
                        aria-expanded="false"
                        aria-controls="collapseTwo1"
                      >
                        How are co working spaces changing today's work
                        environment?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo1"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed sol iusmod tempor incididunt ut labore et dolore
                        magna et aliqua ut eos enim ad minim veniam sit amet
                        consec tetur quis nostrudexercitation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree1"
                        aria-expanded="false"
                        aria-controls="collapseThree1"
                      >
                        What are top 3 challenges that you have personally faced
                        in your work?
                      </button>
                    </h2>
                    <div
                      id="collapseThree1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree1"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed sol iusmod tempor incididunt ut labore et dolore
                        magna et aliqua ut eos enim ad minim veniam sit amet
                        consec tetur quis nostrudexercitation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour1"
                        aria-expanded="false"
                        aria-controls="collapseFour1"
                      >
                        What exactly is it that businesses find so special about
                        our work?
                      </button>
                    </h2>
                    <div
                      id="collapseFour1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour1"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed sol iusmod tempor incididunt ut labore et dolore
                        magna et aliqua ut eos enim ad minim veniam sit amet
                        consec tetur quis nostrudexercitation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive1"
                        aria-expanded="false"
                        aria-controls="collapseFive1"
                      >
                        How do you manage an employee who thinks they are the
                        boss?
                      </button>
                    </h2>
                    <div
                      id="collapseFive1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive1"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed sol iusmod tempor incididunt ut labore et dolore
                        magna et aliqua ut eos enim ad minim veniam sit amet
                        consec tetur quis nostrudexercitation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
