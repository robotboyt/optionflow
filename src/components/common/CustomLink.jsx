import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";

const CustomLink = ({ propsHref, propsText, children, className }) => {
  const { openedHeader, setHeaderOpened } = useContext(DataContext);
  const scrollToTop = () => {
    if (openedHeader === true) {
      setHeaderOpened(!openedHeader);
    }
  };

  return (
    <Link to={propsHref} onClick={scrollToTop} className={className}>
      {propsText ? propsText : children}
    </Link>
  );
};

export default CustomLink;
