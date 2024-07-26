import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Footer from "../Footer";
import Navbar from "../Navbar";

const RouteContainer = () => {
  return (
    <Router>
      <Navbar />
      <div className="root">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default RouteContainer;
