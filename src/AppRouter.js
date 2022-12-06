import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Design from "./Design";
import DoesNotExist from "./DoesNotExist";
import Illustration from "./Illustration";
import Development from "./Development";
import ProjectContainer from "./components/Project";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./css/Navigation.scss";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="page-wrapper">
            <nav class="navigation col-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/design">Design</NavLink>
              <NavLink to="/illustration">Illustration</NavLink>
              <NavLink to="/development">Development</NavLink>
            </nav>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/portfolio" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/design/" element={<Design />} />
              <Route exact path="/illustration/" element={<Illustration />} />
              <Route exact path="/development/" element={<Development />} />
              <Route path="*" element={<DoesNotExist />} />
              <Route path="/project/:id" element={<ProjectContainer />} />
            </Routes>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default AppRouter;
