import React, { Component } from "react";
import "../css/Project.scss";
import hired from "../images/hired_stamp.png";
import atmforkids from "../images/banksy.jpg";
import cleopatrons from "../images/cleopatrons.jpg";
import Hired from "../projects/Hired";
import ATMForKids from "../projects/ATMForKids";
import Cleopatrons from "../projects/Cleopatrons";

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
        <section className="col-8 nested offset-neg-1 next-shelf">
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
        </section>
      </div>
    );
  }
}

export default ProjectContainer;
