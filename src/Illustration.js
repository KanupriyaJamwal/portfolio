import React, { Component } from 'react';
import './css/Illustration.scss';
import { Link } from "react-router-dom";

class Illustration extends Component {
  render() {
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
          <div className="col-7">
            <div className="header-image illustration">
            </div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">
            <li className="project col-8 nested" id="project-1">
              <div className="project-number col-1">
                  <h3>01</h3>
              </div>
              <Link className="project-link fixed" to="/about">
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Cleopatra would be a bartender with mad patrons around" src="/images/kids-save-money.jpeg" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Illustration</h6>
                  <h2>Cleopatrons</h2>
                  <p>If Cleopatra was not the queen</p>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Illustration;
