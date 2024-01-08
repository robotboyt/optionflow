import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import Service from "./pages/Service/Service";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About";
import History from "./pages/History";
import Faq from "./pages/Faq";
import Contacts from "./pages/Contacts";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-history" element={<History />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
