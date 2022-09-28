import React, { Component } from "react";
class Deuce extends Component {
  state = {};
  render() {
    return (
      <section className="col-7 nested">
        <div className="col-7 medium-spacer-bottom">
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1);",
            }}
            width="300"
            height="600"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FFW0vm7lWJLGImXMGyycv2l%2FReaction-game%3Fnode-id%3D2%253A4%26scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A4"
            allowfullscreen
          ></iframe>
        </div>
        <h2>
          Sorry! The rest is under development. I'll update this project soon.
        </h2>
      </section>
    );
  }
}

export default Deuce;
