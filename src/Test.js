import React, { Component } from "react";
import "./Project.scss";
import { Link, useParams } from "react-router-dom";

import hired from "../images/banksy.png";
import Hired from "../projects/Hired";

class ProjectContainer extends Component {
  _getProjectName = (project) => {
    const path = this.props.match.params.id;
    return path;
  };

  render() {
    const projectPath = this._getProjectName(this.path);
    var project;
    switch (projectPath) {
      case "hired":
        project = (
          <Project
            title="Hired"
            header={hired}
            description="Please hire me"
            body="{Hired}"
            prev_title="Before hired? home for now"
            prev_link="/home/"
            next_title="After hired about for now"
            next_link="/about/"
          />
        );
        break;

      default:
    }

    return (
      <div className="col-7 offset-3 nested" style={{ padding: "2vw 0" }}>
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
        {this.props.body}
        <section className="col-8 nested offset-neg-1 next-shelf">
          <li className="project col-4 nested prev-project">
            <Link className="shelf-project-link" to={this.props.prev_link}>
              <div className="col-1">
                <h6 className="active">Previous</h6>
              </div>
              <div className="col-3">
                <h2>{this.props.prev_title}</h2>
              </div>
            </Link>
          </li>
          <li className="project col-4 nested next-project" s>
            <Link className="shelf-project-link" to={this.props.next_link}>
              <div className="right-text col-3">
                <h2>{this.props.next_title}</h2>
              </div>
              <div className="next-shelf-label col-1">
                <h6 className="active">Next</h6>
              </div>
            </Link>
          </li>
        </section>
      </div>
    );
  }
}

export default ProjectContainer;
