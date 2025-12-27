import React, { Component } from "react";
class Illustrations extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="perspectives"
              src={require("../assets/images/illustrations/perspective.png")}
            />
          </div>
        </div>

        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="time"
              src={require("../assets/images/illustrations/time.png")}
            />
          </div>
        </div>

        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="truck dhaba"
              src={require("../assets/images/illustrations/truck dhaba.png")}
            />
          </div>
        </div>

        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="queue"
              src={require("../assets/images/illustrations/queue.png")}
            />
          </div>
        </div>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="night rainbow"
              src={require("../assets/images/illustrations/busy city.png")}
            />
          </div>
        </div>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <p className="large-paragraph medium-spacer-bottom col-7">
              More on{" "}
              <a
                className="social-media"
                href="https://www.instagram.com/kanupriya_jamwal/"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Illustrations;
