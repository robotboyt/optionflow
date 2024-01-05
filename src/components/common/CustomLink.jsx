import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ propsHref, propsText, children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link to={propsHref} onClick={scrollToTop}>
      {/* {propsText} {children} */}
      {propsText ? propsText : children}
    </Link>
  );
};

export default CustomLink;
