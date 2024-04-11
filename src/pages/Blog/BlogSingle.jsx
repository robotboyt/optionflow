import React, { useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { useParams } from "react-router-dom";

const BlogSingle = () => {
  const { id } = useParams();
  useEffect(() => {}, [id]);
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title-one">
                    Як ASP.NET Core допомагає підвищити продуктивність вашого
                    веб-сайту
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="section-lgt blog-classic-two">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 blog-right-col">
                <div className="row">
                  <div className="col-md-12">
                    <article className="post blog-details">
                      <div className="post-thumbnail">
                        <div className="pbmit-featured-container">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/coworking/blog/blog-02b.jpg"
                              className="img-fluid w-100"
                              alt=""
                            />
                          </div>
                          <div className="pbmit-short-description">
                            <p>
                              <span className="dropcap rounded">M</span>Posuere
                              morbi leo urna molestie at. Ipsum dolor sit amet
                              consectetur adipiscing elit pellentesque habitant
                              morbi. Odio ut enim blandit volutpat maecenas
                              volutpat. Tristique magna sit amet purus gravida.
                            </p>
                            <p>
                              Posuere morbi leo urna molestie at. Ipsum dolor
                              sit amet consectetur adipiscing elit pellentesque
                              habitant morbi. Odio ut enim blandit volutpat
                              maecenas volutpat. Tristique magna sit amet purus
                              gravida. Vitae proin sagittis nisl rhoncus.
                              Sagittis nisl rhoncus mattis rhoncus urna. Mauris
                              vitae ultricies leo integer. Elit eget gravida cum
                              sociis natoque Amet consectetur adipiscing elit ut
                              aliquam purus sit amet luctus
                            </p>
                            <p>
                              Posuere morbi leo urna molestie at. Ipsum dolor
                              sit amet consectetur adipiscing elit pellentesque
                              habitant morbi. Odio ut enim blandit volutpat
                              maecenas volutpat. Tristique magna sit amet purus
                              gravida. Vitae proin sagittis nisl rhoncus.
                              Sagittis nisl rhoncus mattis rhoncus urna. Mauris
                              vitae ultricies leo integer. Elit eget gravida cum
                              sociis natoque Amet consectetur adipiscing elit ut
                              aliquam purus sit amet luctus
                            </p>
                            <p>
                              Posuere morbi leo urna molestie at. Ipsum dolor
                              sit amet consectetur adipiscing elit pellentesque
                              habitant morbi. Odio ut enim blandit volutpat
                              maecenas volutpat. Tristique magna sit amet purus
                              gravida. Vitae proin sagittis nisl rhoncus.
                              Sagittis nisl rhoncus mattis rhoncus urna. Mauris
                              vitae ultricies leo integer. Elit eget gravida cum
                              sociis natoque Amet consectetur adipiscing elit ut
                              aliquam purus sit amet luctus
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>

                    <nav className="navigation post-navigation">
                      <div className="nav-links">
                        <div className="nav-previous">
                          <a href="" rel="prev">
                            <span className="pbmit-post-nav-thumbnail">
                              <span className="pbmit-post-nav-icon">
                                <i className="pbmit-base-icon-left-small"></i>
                              </span>
                              <img
                                src="images/coworking/blog/blog-03s.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </span>
                            <span className="pbmit-post-nav-wrapper">
                              <span className="pbmit-post-nav-head">
                                Previous
                              </span>
                              <span className="pbmit-post-nav nav-title">
                                Five Ways Elevate Your Employees Workplace
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="nav-next">
                          <a href="#" rel="next">
                            <span className="pbmit-post-nav-wrapper">
                              <span className="pbmit-post-nav-head">Next</span>
                              <span className="pbmit-post-nav nav-title">
                                Easy ways to implement wellbeing programs
                              </span>
                            </span>
                            <span className="pbmit-post-nav-thumbnail">
                              <img
                                src="images/coworking/blog/blog-01s.jpg"
                                className="img-fluid"
                                alt=""
                              />
                              <span className="pbmit-post-nav-icon">
                                <i className="pbmit-base-icon-right-small"></i>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 blog-left-col">
                <aside className="sidebar">
                  <aside className="widget widget-recent-post">
                    <h2 className="widget-title">Останні публікації</h2>
                    <ul className="recent-post-list">
                      <li className="recent-post-list-li">
                        <a className="recent-post-thum" href="#">
                          <img
                            src="images/coworking/recent-post/blog-12.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <div className="media-body">
                          <a href="blog-single-details.html">
                            Easy ways to implement wellbeing programs
                          </a>
                          <span className="post-date">May 17, 2022</span>
                        </div>
                      </li>
                      <li className="recent-post-list-li">
                        <a className="recent-post-thum" href="#">
                          <img
                            src="images/coworking/recent-post/blog-12.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <div className="media-body">
                          <a href="blog-single-details.html">
                            Things Can Help Any coworking Flourish Again
                          </a>
                          <span className="post-date">April 25, 2022</span>
                        </div>
                      </li>
                      <li className="recent-post-list-li">
                        <a className="recent-post-thum" href="#">
                          <img
                            src="images/coworking/recent-post/blog-12.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <div className="media-body">
                          <a href="blog-single-details.html">
                            Five Ways Elevate Your Employees Workplace
                          </a>
                          <span className="post-date">April 8, 2022</span>
                        </div>
                      </li>
                    </ul>
                  </aside>
                  <aside className="widget widget-categories">
                    <h3 className="widget-title">Категорії</h3>
                    <ul>
                      <li>
                        <a href="blog-classic.html">Agreements</a>
                        <span>2</span>
                      </li>
                      <li>
                        <a href="blog-classic.html">coworking</a>
                        <span>2</span>
                      </li>
                      <li>
                        <a href="blog-classic.html">Leadership</a>
                        <span>2</span>
                      </li>
                      <li>
                        <a href="blog-classic.html">Marketing</a>
                        <span>1</span>
                      </li>
                      <li>
                        <a href="blog-classic.html">Proptech</a>
                        <span>1</span>
                      </li>
                      <li>
                        <a href="blog-classic.html">Strategies</a>
                        <span>1</span>
                      </li>
                    </ul>
                  </aside>
                  <aside className="widget single-service-contact">
                    <div className="widget-as-link">
                      <div className="pbmit-ads-inner">
                        <div className="pbmit-ads-logo-white">
                          <img
                            className="size-full"
                            src="images/internet/logo.svg"
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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BlogSingle;
