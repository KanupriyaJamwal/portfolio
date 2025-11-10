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
              <strong>Kanupriya Jamwal</strong> is a UX Designer
            </h1>
            <h3 className="active col-3">
              Research. Product. Strategy. Visual. AI. Data.
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
                  <h6 className="active">Design</h6>
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
              <Link className="project-link fixed" to="/project/pegasus">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Pegasus"
                    src={require("./images/pegasus.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Essay</h6>
                  <h2>Pegasus</h2>
                  <p>Data & Society: The state of surveillance</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>04</h3>
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
                <h3>05</h3>
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
                  <h6 className="active">Essay</h6>
                  <h2>Gorillaz</h2>
                  <p>Creative & Interactive Media: It's lore on lore on lore</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>06</h3>
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
                  <h6 className="active">Research</h6>
                  <h2>Asexual Dating App</h2>
                  <p>Is there a need for an asexual dating app?</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>07</h3>
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
                  <p>How to get an album listening and ordering flow?</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>08</h3>
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
                  <h6 className="active">Essay</h6>
                  <h2>AI Hallucination</h2>
                  <p>AI & Ethics - An ML Case Study</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>09</h3>
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
                  <h6 className="active">Essay</h6>
                  <h2>AI Superintelligence</h2>
                  <p>AI & Ethics - Can AI be good?</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>10</h3>
              </div>
              <Link className="project-link fixed" to="/project/hired">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Created a Job Recommendation System in college because we weren't getting any jobs"
                    src={require("./images/hired_stamp.png")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Development</h6>
                  <h2>Hired</h2>
                  <p>How can we get hired?</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>11</h3>
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
                <h3>12</h3>
              </div>
              <Link className="project-link fixed" to="/project/cleopatrons">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="Cleopatra would be a bartender with mad patrons around"
                    src={require("./images/cleopatrons.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Illustration</h6>
                  <h2>Cleopatrons</h2>
                  <p>If Cleopatra was not queen</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <div className="project-number col-1">
                <h3>13</h3>
              </div>
              <Link className="project-link fixed" to="/project/atm_for_kids">
                <div className="col-3 project-thumb-fixed">
                  <img
                    className="project-thumb"
                    alt="For an HCI project, we made UI and prototype for an ATM for kids"
                    src={require("./images/banksy.jpg")}
                  />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Banksy</h2>
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
export default Test;
