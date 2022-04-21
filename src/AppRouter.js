import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Design from "./Design";
import DoesNotExist from "./DoesNotExist";
import Illustration from "./Illustration";
import ProjectContainer from "./components/Project";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
//import ScrollToTop from "./ScrollToTop";
import "./css/Navigation.scss";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div className="page-wrapper">
          <nav class="navigation col-2">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/design">Design</Link>
            <Link to="/illustration">Illustration</Link>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/portfolio" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/design/" element={<Design />} />
            <Route exact path="/illustration/" element={<Illustration />} />
            <Route path="*" element={<DoesNotExist />} />
            <Route path="/project/:id" element={<ProjectContainer />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
