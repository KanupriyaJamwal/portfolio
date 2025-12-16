import React, { Component } from "react";
class Illustrations extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/lofi_prototype.png")}
            />
          </div>
        </div>
      </section>
    );
  }
}
export default Illustrations;
