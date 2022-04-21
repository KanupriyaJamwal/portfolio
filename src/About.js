import React, { Component } from "react";
import "./css/About.scss";
import CV from "./projects/KanupriyaJamwalCV2022.pdf";

class About extends Component {
  render() {
    return (
      <div>
        <section className="projects-wrapper projects-wrapper-about">
          <div>
            <ul className="about-modules col-8 offset-1 nested">
              <div className="about-group col-8 nested">
                <li className="bio-text col-6 offset-1">
                  <h1>
                    HI! My name is <strong>*chika-chika*</strong> Kanupriya
                    Jamwal
                  </h1>
                  <h2 style={{ marginTop: "32px", color: "#FF5783" }}>
                    I like to watch movies.
                  </h2>
                </li>

                <ul className="social-media col-1">
                  <li>
                    <a href={CV} className="social-media-link" target="blank">
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:kanupriyajamwal15@gmail.com"
                      className="social-media-link"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kanupriya_jamwal/"
                      className="social-media-link"
                      target="blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/KanupriyaJamwal"
                      className="social-media-link"
                      target="blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/kanupriya_jamwal/"
                      className="social-media-link"
                      target="blank"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
