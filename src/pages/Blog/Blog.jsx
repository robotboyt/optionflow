import React, { useEffect, useState, useContext } from "react";
import BlogContetBox from "./BlogContetBox";
import { DataContext } from "../../Context/DataContext";
import axios from "axios";
import Loader from "../../animation/Loader";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { category } = useParams();
  const [blogData, setBlogData] = useState(null);
  const { blogNewData, setFetchedBlogData } = useContext(DataContext);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const dataResponse = await axios.get(
          "https://optionflow.pro/api/Main/Blog"
        );
        if (category !== undefined) {
          setBlogData(
            dataResponse.data.filter((object) => object.category === category)
          );
        } else {
          setBlogData(dataResponse.data);
        }
        setFetchedBlogData(dataResponse.data);
        console.log("fesdf");
      } catch (error) {
        console.error(error);
      }
    };
    if (blogNewData !== null && blogData === null) {
      setBlogData(blogNewData);
    } else if (blogData === null) {
      fetchService();
    }
  }, [blogData, blogNewData, setFetchedBlogData]);

  console.log(blogData);
  console.log(category);

  return (
    <div className="page-wrapper">
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Блог</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content blog-grid">
        <section className="section-lg">
          <div className="container">
            <div className="row">
              {blogData ? (
                blogData.map((blogItem) => (
                  <BlogContetBox blogObject={blogItem} key={blogItem.id} />
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
