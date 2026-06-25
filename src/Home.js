import React, { Component } from "react";
import "./css/Home.scss";
import { Link } from "react-router-dom";
//import HCIDP2024 from "./projects/HCI DP 2024 - 2 page.pdf";

class Test extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="banner-content col-2">
            <a
              href="http://users2.smartgb.com/g/g.php?a=s&i=g26-40097-68"
              className="social-media-link"
              target="blank"
            >
              Sign my guestbook!
            </a>
          </div>
        </div>
        <header className="header" style={{ padding: "2vw 0" }}>
          <div className="header-text-wrapper nested">
            <h1 className="header-text col-4">
              <strong>Kanupriya Jamwal</strong> is a Product Manager
            </h1>
            <h3 className="active col-3">UX. Strategy. Research.</h3>
          </div>
          <div className="header-image-wrapper">
            <div className="header-image portrait"></div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>01</h3>
              </div>
              <a
                className="project-link fixed"
                href={
                  "https://drive.google.com/file/d/1_4jJz3v-7t_ua6ueyuBiUOQGUKCxicWE/view?usp=sharing"
                }
                target="blank"
              >
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Pace Yourself"
                    src={require("./images/paceyourself.png")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Pace Yourself</h2>
                  <p>
                    Designing Pain Management for People experiencing Chronic
                    Pain
                  </p>
                </div>
              </a>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>02</h3>
              </div>
              <Link className="project-link fixed" to="/project/dark_side">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Dark Side"
                    src={require("./images/darkside.png")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Strategy</h6>
                  <h2>License to be Evil</h2>
                  <p>How to think like a villain to design for good</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>08</h3>
              </div>
              <Link className="project-link fixed" to="/project/illustrations">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="art"
                    src={require("./images/illustrations.png")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Art</h6>
                  <h2>Illustrations</h2>
                  <p>I also create digital art</p>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
export default Test;
