import React from "react";

const BlogContetBox = ({
  blogTitle,
  blogDate,
  blogComments,
  blogCategory,
  blogImg,
}) => {
  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-blog-style-6">
        <div className="post-item">
          <div className="pbmit-featured-container">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img src={blogImg} className="img-fluid w-100" alt="" />
              </div>
            </div>
          </div>
          <div className="pbminfotech-box-content">
            <div className="pbmit-meta-container">
              <span className="pbmit-meta-category">
                <a href="blog-classic.html" rel="category tag">
                  {blogCategory}
                </a>
              </span>
            </div>
            <div className="pbmit-box-content-wrapper">
              <h3 className="pbmit-post-title">
                <a href="blog-single-details.html">{blogTitle}</a>
              </h3>
              <div className="pbmit-meta-container">
                <span className="pbmit-meta pbmit-date-wrapper">
                  <span className="pbmit-post-date">
                    <i className="pbmit-base-icon-calendar-1 pbmit-base-icon"></i>
                    {blogDate}
                  </span>
                </span>
                <span className="pbmit-meta pbmit-meta-comments">
                  <i className="pbmit-base-icon-comment-empty pbmit-base-icon"></i>
                  {blogComments}
                  <span className="pbmit-meta-comments"> Comments</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogContetBox;
