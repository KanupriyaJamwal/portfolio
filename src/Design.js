import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Design.scss";

class Design extends Component {
  render() {
    return (
      <div>
        <header
          className="header col-9 offset-3 nested"
          style={{ padding: "2vw 0" }}
        >
          <div className="col-7">
            <div className="header-image design"></div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>01</h3>
              </div>
              <Link className="project-link fixed" to="/project/ace_dating_app">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="ACE Dating App"
                    src={require("./images/acedatingapp.png")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Asexual Dating App</h2>
                  <p>Prelminary Research For an Asexual Dating App</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>02</h3>
              </div>
              <Link className="project-link fixed" to="/project/hired">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Stopping train crashes"
                    src={require("./images/railsafe.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>RailSafe</h2>
                  <p>How can we prevent a train crash?</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>03</h3>
              </div>
              <Link className="project-link fixed" to="/project/deuce">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Wanna take a deuce?"
                    src={require("./images/grandmamas.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Grandmama's Cafe</h2>
                  <p>A Menu Preview App</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>04</h3>
              </div>
              <Link
                className="project-link fixed"
                to="/project/cage_the_elephant"
              >
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Band pic"
                    src={require("./images/cagetheelephant.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Cage The Elephant</h2>
                  <p>An Album Ordering and Listening flow</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>05</h3>
              </div>
              <Link className="project-link fixed" to="/project/atm_for_kids">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="For an HCI project, we made UI and prototype for an Banksy"
                    src={require("./images/banksy.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>ATM for kids</h2>
                  <p>Even kids need money now</p>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Design;
