import React, { Component } from "react";
import "./css/Home.scss";
import { Link } from "react-router-dom";
import HCIDP2024 from "./projects/HCI DP 2024 - 2 page.pdf";

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
              <strong>Kanupriya Jamwal</strong> is a Designer
            </h1>
            <h3 className="active col-3">
              Research. Product. Strategy. Visual. AI. Data. UX.
            </h3>
          </div>
          <div className="header-image-wrapper">
            <div className="header-image portrait"></div>
          </div>
        </header>

        <section className="projects-wrapper" style={{ marginBottom: "0" }}>
          <div className="projects project col-8 offset-3 nested">
            <a className="project-link fixed" href={HCIDP2024} target="blank">
              <div className="col-3 project-thumb-fixed">
                <img
                  className="project-thumb"
                  alt="Pace Yourself"
                  src={require("./images/paceyourself.png")}
                />
              </div>
              <div className="col-3 project-title">
                <h6 className="active">Flagship Project</h6>
                <h2>Pace Yourself</h2>
                <p>
                  Designing Pain Management for People experiencing Chronic Pain
                </p>
              </div>
            </a>
          </div>
        </section>

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>01</h3>
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
                <h3>02</h3>
              </div>
              <Link className="project-link fixed" to="/project/grandmamas">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Grandma"
                    src={require("./images/grandmamas.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Grandmamas</h2>
                  <p>How to preview a menu remotely?</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>03</h3>
              </div>
              <Link className="project-link fixed" to="/project/railway">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Railway"
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
                <h3>04</h3>
              </div>
              <Link className="project-link fixed" to="/project/bawarchi">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="I just want pancakes"
                    src={require("./images/bawarchi.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Bawarchi</h2>
                  <p>How to cook?</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>05</h3>
              </div>
              <Link className="project-link fixed" to="/project/hallucination">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="hallucination"
                    src={require("./images/hallucination.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">AI</h6>
                  <h2>AI Hallucination</h2>
                  <p>Hallucinations in LLMs. What? How? Why?</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>06</h3>
              </div>
              <Link
                className="project-link fixed"
                to="/project/superintelligence"
              >
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="is ai good or bad tho"
                    src={require("./images/superintelligence.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">AI</h6>
                  <h2>AI Superintelligence</h2>
                  <p>Can AI be good?</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>07</h3>
              </div>
              <Link className="project-link fixed" to="/project/pegasus">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Pegasus"
                    src={require("./images/pegasus.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Case Study</h6>
                  <h2>Pegasus</h2>
                  <p>The state of surveillance</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>08</h3>
              </div>
              <Link className="project-link fixed" to="/project/gorillaz">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Gorillaz"
                    src={require("./images/gorillaz.jpeg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Case Study</h6>
                  <h2>Gorillaz</h2>
                  <p>Storytelling: It's lore on lore on lore</p>
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
