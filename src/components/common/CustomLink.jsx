import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";

const CustomLink = ({ propsHref, propsText, children }) => {
  const { openedHeader, setHeaderOpened } = useContext(DataContext);
  const scrollToTop = () => {
    if (openedHeader === true) {
      setHeaderOpened(!openedHeader);
    }
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
