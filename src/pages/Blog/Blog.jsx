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
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const dataResponse = await axios.get(
          "https://optionflow.pro/api/Main/Blog"
        );
        setBlogData(dataResponse.data);
        setFetchedBlogData(dataResponse.data);
        console.log("request");
      } catch (error) {
        console.error(error);
      }
    };

    if (category !== undefined) {
      console.log(blogNewData);
      setFilteredData(blogNewData.filter((item) => item.category === category));
    }

    if (blogNewData !== null && blogData === null) {
      setBlogData(blogNewData);
    } else if (blogData === null) {
      fetchService();
    }
  }, [blogData, blogNewData, setFetchedBlogData, category]);

  let data = category ? filteredData : blogData;
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
              {data ? (
                data.map((blogItem) => (
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
