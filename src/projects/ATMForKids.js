import React, { Component } from "react";

class ATMForKids extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            In our 6th semester of college, we had 6 subjects and one of them
            was an elective - Human Computer Interaction 😀
            <br></br>
            This was my favourite subject and it later got me interested in UX
            Design. For our HCI project, my friend Shreya and I designed the UI
            for an ATM for kids.
          </p>
          <p className="reflections col-2">
            The other elective was Operation Research.
          </p>
        </div>
        <h2>
          The rest is under development, sorry. Will update this (and the rest
          of the website) soon!
        </h2>
      </section>
    );
  }
}

export default ATMForKids;
