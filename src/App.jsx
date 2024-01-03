import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Service from "./pages/Service";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
};

export default App;
