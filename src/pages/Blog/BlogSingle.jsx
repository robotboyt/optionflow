import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import CustomLink from "../../components/common/CustomLink";

const BlogSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { blogNewData, setFetchedBlogData } = useContext(DataContext);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [categoryCount, setCategoryCount] = useState(0);

  useEffect(() => {
    if (blogNewData !== null) {
      const getResult = (newArr, newID) => {
        const result = newArr.filter((obj) => obj.id === newID);
        setCurrentBlog(result);
      };

      getResult(blogNewData, Number(id));
    } else {
      const fetchService = async () => {
        try {
          const dataResponse = await axios.get(
            "https://optionflow.pro/api/Main/Blog"
          );

          const resultResponse = await dataResponse.data.filter(
            (obj) => obj.id === +id
          );
          if (resultResponse.length === 0) {
            navigate("/*");
          }
          await setCurrentBlog(resultResponse);
          setFetchedBlogData(dataResponse.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchService();
    }
  }, [id, blogNewData]);

  return (
    <div className="page-wrapper">
      {currentBlog ? (
        <>
          <div className="pbmit-title-bar-wrapper">
            <div className="container">
              <div className="pbmit-title-bar-content">
                <div className="pbmit-title-bar-content-inner">
                  <div className="pbmit-tbar">
                    <div className="pbmit-tbar-inner container">
                      <h1 className="pbmit-tbar-title-one">
                        {currentBlog[0].title}
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
                                  src={`https://optionflow.pro/${currentBlog[0].blogImage}`}
                                  className="img-fluid w-100"
                                  alt=""
                                />
                              </div>
                              <div
                                className="pbmit-short-description"
                                dangerouslySetInnerHTML={{
                                  __html: currentBlog[0].description,
                                }}
                              ></div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 blog-left-col">
                    <aside className="sidebar">
                      <aside className="widget widget-recent-post">
                        <h2 className="widget-title">Останні публікації</h2>
                        <ul className="recent-post-list">
                          {blogNewData.slice(0, 3).map((postItem) => (
                            <li
                              className="recent-post-list-li"
                              key={postItem.id.toString()}
                            >
                              <CustomLink
                                className="recent-post-thum"
                                propsHref={`/blog-single/${postItem.id}`}
                              >
                                <img
                                  src={`https://optionflow.pro/${postItem.blogImage}`}
                                  className="img-fluid"
                                  alt=""
                                />

                                <div className="media-body">
                                  {postItem.title}
                                  <span className="post-date"></span>
                                </div>
                              </CustomLink>
                            </li>
                          ))}
                        </ul>
                      </aside>
                      <aside className="widget widget-categories">
                        <h3 className="widget-title">Категорії</h3>
                        <ul>
                          {Array.from(
                            new Set(
                              blogNewData.map((item) => {
                                return item.category;
                              })
                            )
                          ).map((categoryItem) => (
                            <li key={categoryItem.toString()}>
                              <a href="/blog/blogCategory/:id">
                                {categoryItem}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </aside>
                      <aside className="widget single-service-contact">
                        <div className="widget-as-link">
                          <div className="pbmit-ads-inner">
                            <div className="pbmit-ads-logo-white">
                              <img
                                className="size-full"
                                src="https://optionflow.pro/images/internet/logo.svg"
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
                </div>
              </div>
            </section>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default BlogSingle;
