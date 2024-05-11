import React from "react";
import CustomLink from "../../components/common/CustomLink";

const BlogContetBox = ({ blogObject }) => {
  return (
    <div className="col-sm-12 col-md-4">
      <article className="pbmit-blog-style-6">
        <div className="post-item">
          <div className="pbmit-featured-container">
            <div className="pbmit-featured-img-wrapper">
              <div className="pbmit-featured-wrapper">
                <img
                  src={blogObject.blogImage}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pbminfotech-box-content">
            <div className="pbmit-meta-container">
              <span className="pbmit-meta-category">
                <CustomLink propsHref="/blog-single" rel="category tag">
                  {blogObject.category}
                </CustomLink>
              </span>
            </div>
            <div className="pbmit-box-content-wrapper">
              <h3 className="pbmit-post-title">
                <CustomLink propsHref={`/blog-single/${blogObject.id}`}>
                  {blogObject.title}
                </CustomLink>
              </h3>
              <div className="pbmit-meta-container">
                <span className="pbmit-meta pbmit-date-wrapper">
                  <span className="pbmit-post-date">
                    <i className="pbmit-base-icon-calendar-1 pbmit-base-icon">
                      {blogObject.dateCreate}
                    </i>
                  </span>
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
