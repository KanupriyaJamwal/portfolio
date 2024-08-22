import React, { Component } from "react";
import "./css/About.scss";
import CV from "./projects/Kanupriya Jamwal Resume.pdf";

class About extends Component {
  render() {
    return (
      <div>
        <section className="projects-wrapper projects-wrapper-about nested">
          <div>
            <ul className="about-modules col-10 nested">
              <div className="about-group col-10 nested">
                <li className="bio-text col-9 offset-1">
                  <h1>HI! My name is Kanupriya Jamwal</h1>
                  <h2
                    style={{
                      textAlign: "center",
                      marginTop: "32px",
                      color: "#FF5783",
                    }}
                  >
                    I am a pop-culture nerd.
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
                      href="https://www.linkedin.com/in/kanupriya-jamwal/"
                      className="social-media-link"
                      target="blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/kanupriyajamwal"
                      className="social-media-link"
                      target="blank"
                    >
                      Behance
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
                      href="https://twitter.com/zoobydparampara"
                      className="social-media-link"
                      target="blank"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </section>
        <section className="col-7 nested left-margin-120">
          <div className="text-group">
            <div className="large-paragraph medium-spacer-bottom col-2">
              <h3>TV shows</h3>
              <br></br>
              <br></br>
              <ul className="text-list medium-spacer-bottom col-2">
                <li>You're The Worst</li>
                <li>Fleabag</li>
                <li>Broad City</li>
              </ul>
            </div>

            <div className="large-paragraph medium-spacer-bottom col-2">
              <h3>Movies</h3>
              <br></br>
              <br></br>
              <ul className="text-list medium-spacer-bottom col-2">
                <li>Gangs of Wasseypur</li>
                <li>Heathers</li>
                <li>In The Loop</li>
              </ul>
            </div>

            <div className="large-paragraph medium-spacer-bottom col-2">
              <h3>Manga</h3>
              <br></br>
              <br></br>
              <ul className="text-list medium-spacer-bottom col-2">
                <li>One Piece</li>
                <li>Slam Dunk</li>
                <li>Dorohedoro</li>
              </ul>
            </div>

            <div className="large-paragraph medium-spacer-bottom col-2">
              <h3>Podcasts</h3>
              <br></br>
              <br></br>
              <ul className="text-list medium-spacer-bottom col-2">
                <li>Trash Taste</li>
                <li>Dead Ends</li>
                <li>The Midnight Gospel</li>
              </ul>
            </div>

            <div className="large-paragraph medium-spacer-bottom col-2">
              <h3>Subcultures</h3>
              <br></br>
              <br></br>
              <ul className="text-list medium-spacer-bottom col-2">
                <li>Impressionism</li>
                <li>Indie Rock</li>
                <li>Engineers on YouTube</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
