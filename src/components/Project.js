import React, { Component } from "react";
import "../css/Project.scss";
import hired from "../images/hired_stamp.png";
import atmforkids from "../images/banksy.jpg";
import cleopatrons from "../images/cleopatrons.jpg";
import deuce from "../images/deuce-logo.jpg";
import grandmamas from "../images/grandmamas.jpg";
import cagetheelephant from "../images/cagetheelephant.jpg";
import railsafe from "../images/railsafe.jpg";
import acedatingapp from "../images/acedatingapp.png";
import bawarchi from "../images/bawarchi.jpg";
import gorillaz from "../images/gorillaz.jpeg";
import pegasus from "../images/pegasus.jpg";
import superintelligence from "../images/superintelligence.jpg";
import hallucination from "../images/hallucination.jpg";

import Hired from "../projects/Hired";
import ATMForKids from "../projects/ATMForKids";
import Cleopatrons from "../projects/Cleopatrons";
import Deuce from "../projects/Deuce";
import Grandmamas from "../projects/Grandmamas";
import CageTheElephant from "../projects/CageTheElephant";
import RailSafe from "../projects/RailSafe";
import AceDatingApp from "../projects/AceDatingApp";
import Bawarchi from "../projects/Bawarchi";
import Gorillaz from "../projects/Gorillaz";
import Pegasus from "../projects/Pegasus";
import Superintelligence from "../projects/Superintelligence";
import Hallucination from "../projects/Hallucination";

class ProjectContainer extends Component {
  _getProjectName = (project) => {
    const path = window.location.pathname;
    //console.log(path.split("/").pop());
    return path;
  };

  render() {
    const projectPath = this._getProjectName();
    var project;
    switch (projectPath) {
      case "/project/hired":
        project = (
          <Project
            title="Hired"
            header={hired}
            description="A Job Recommendation System"
            body={<Hired />}
            prev_title="Cleopatrons"
            prev_link="/project/cleopatrons"
            next_title="Banksy"
            next_link="/project/atm_for_kids"
          />
        );
        break;
      case "/project/atm_for_kids":
        project = (
          <Project
            title="Banksy"
            header={atmforkids}
            description="ATM For Kids"
            body={<ATMForKids />}
            prev_title="Hired"
            prev_link="/project/hired"
            next_title="Cleopatrons"
            next_link="/project/cleopatrons"
          />
        );
        break;
      case "/project/cleopatrons":
        project = (
          <Project
            title="Cleopatrons"
            header={cleopatrons}
            description="Cleopatra as a bartender"
            body={<Cleopatrons />}
            prev_title="Banksy"
            prev_link="/project/atm_for_kids"
            next_title="Hired"
            next_link="/project/hired"
          />
        );
        break;
      case "/project/deuce":
        project = (
          <Project
            title="Deuce"
            header={deuce}
            description="2 Player Game"
            body={<Deuce />}
            prev_title="Cleopatrons"
            prev_link="/project/cleopatrons"
            next_title="Banksy"
            next_link="/project/atm_for_kids"
          />
        );
        break;
      case "/project/grandmamas":
        project = (
          <Project
            title="Grandmama's"
            header={grandmamas}
            description="A Menu Preview App"
            body={<Grandmamas />}
            prev_title="Cleopatrons"
            prev_link="/project/cleopatrons"
            next_title="Banksy"
            next_link="/project/atm_for_kids"
          />
        );
        break;
      case "/project/cage_the_elephant":
        project = (
          <Project
            title="Cage The Elephant"
            header={cagetheelephant}
            description="An Album Listening and Ordering Flow"
            body={<CageTheElephant />}
            prev_title="Cleopatrons"
            prev_link="/project/cleopatrons"
            next_title="Banksy"
            next_link="/project/atm_for_kids"
          />
        );
        break;
      case "/project/railway":
        project = (
          <Project
            title="RailSafe"
            header={railsafe}
            description="A Railway Monitoring and Derailment Prevention System"
            body={<RailSafe />}
            prev_title="Cleopatrons"
            prev_link="/project/cleopatrons"
            next_title="Banksy"
            next_link="/project/atm_for_kids"
          />
        );
        break;
      case "/project/ace_dating_app":
        project = (
          <Project
            title="Ace Dating App"
            header={acedatingapp}
            description="Prelminary Research For an Asexual Dating App"
            body={<AceDatingApp />}
            prev_title="Cleopatrons"
            prev_link="/project/cleopatrons"
            next_title="Banksy"
            next_link="/project/atm_for_kids"
          />
        );
        break;
      case "/project/bawarchi":
        project = (
          <Project
            title="Bawarchi"
            header={bawarchi}
            description="Visual design for a recipe app"
            body={<Bawarchi />}
            prev_title="Cleopatrons"
            prev_link="/project/cleopatrons"
            next_title="Banksy"
            next_link="/project/atm_for_kids"
          />
        );
        break;
      case "/project/gorillaz":
        project = (
          <Project
            title="Gorillaz"
            header={gorillaz}
            description="A Transmedia Storytelling Case Study"
            body={<Gorillaz />}
            prev_title="Cleopatrons"
            prev_link="/project/cleopatrons"
            next_title="Banksy"
            next_link="/project/atm_for_kids"
          />
        );
        break; /*why not commit?*/
      case "/project/pegasus":
        project = (
          <Project
            title="Pegasus"
            header={pegasus}
            description="Exploring the Intersection of Pegasus Spyware, Surveillance Realism, and
Human Rights Implications in the Digital Era"
            body={<Pegasus />}
            prev_title="Cleopatrons"
            prev_link="/project/cleopatrons"
            next_title="Banksy"
            next_link="/project/atm_for_kids"
          />
        );
        break;
      case "/project/superintelligence":
        project = (
          <Project
            title="AI Superintelligence"
            header={superintelligence}
            description="Envisioning AI Superintelligence Through a Transhumanist Lens"
            body={<Superintelligence />}
            prev_title="Cleopatrons"
            prev_link="/project/cleopatrons"
            next_title="Banksy"
            next_link="/project/atm_for_kids"
          />
        );
        break;
      case "/project/hallucination":
        project = (
          <Project
            title="AI Hallucination"
            header={hallucination}
            description="Hallucinations in LLMs. What? How? Why?"
            body={<Hallucination />}
            prev_title="Cleopatrons"
            prev_link="/project/cleopatrons"
            next_title="Banksy"
            next_link="/project/atm_for_kids"
          />
        );
        break;
      default:
    }

    return (
      <div className="col-9 offset-3 nested" style={{ padding: "2vw 0" }}>
        {project}
      </div>
    );
  }
}

class Project extends Component {
  render() {
    return (
      <div id="project-area">
        <header className="col-7 nested">
          <div className="col-7">
            <img
              className="image project-header"
              alt={this.props.title}
              src={this.props.header}
            ></img>
          </div>
          <h1 className="col-7 project-title">
            <strong>{this.props.title}</strong>
          </h1>
          <h2 className="col-7 project-description">
            {this.props.description}
          </h2>
        </header>
        <p>{this.props.body}</p>

        {/* <section className="col-8 nested offset-neg-1 next-shelf">
          <li className="project col-4 nested prev-project">
            <a className="shelf-project-link" href={this.props.prev_link}>
              <div className="col-1">
                <h6 className="active">Previous</h6>
              </div>
              <div className="col-3">
                <h2>{this.props.prev_title}</h2>
              </div>
            </a>
          </li>
          <li className="project col-4 nested next-project">
            <a className="shelf-project-link" href={this.props.next_link}>
              <div className="right-text col-3">
                <h2>{this.props.next_title}</h2>
              </div>
              <div className="next-shelf-label col-1">
                <h6 className="active">Next</h6>
              </div>
            </a>
          </li>
        </section> */}
      </div>
    );
  }
}

export default ProjectContainer;
