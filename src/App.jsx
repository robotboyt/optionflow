import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import About from "./pages/About";
import History from "./pages/ History";
import Faq from "./pages/Faq";
import Contacts from "./pages/Contacts";

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
      </Routes>
    </div>
  );
};

export default App;
