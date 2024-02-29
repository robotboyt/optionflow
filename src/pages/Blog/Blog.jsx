import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import BlogData from "./BlogData";
import BlogContetBox from "./BlogContetBox";

const Blog = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Blog</h1>
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
              {BlogData.map((blogItem) => (
                <BlogContetBox
                  blogTitle={blogItem.title}
                  blogDate={blogItem.date}
                  blogComments={blogItem.comments}
                  blogCategory={blogItem.category}
                  blogImg={blogItem.imageSrc}
                  key={blogItem.id}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
