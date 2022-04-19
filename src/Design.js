import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/Design.scss';

class Design extends Component {
    render() { 
        return (
            <div>
              <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
                <div className="col-7">
                  <div className="header-image design">
                  </div>
                </div>
              </header>

              <section className="projects-wrapper">
                <ul className="projects col-10 offset-2 nested">
                  <li className="project col-8 nested">
                    <div className="project-number col-1">
                    <h3>01</h3>
                    </div>
                    <Link className="project-link fixed" to="/project/hired">
                        <div className="col-3 project-thumb-fixed">
                        <img className="project-thumb" alt="Created a Job Recommendation System in college because we weren't getting any jobs" src="/images/kids-save-money.jpeg" />
                        </div>
                        <div className="col-3 project-title">
                        <h6 className="active">Design</h6>
                        <h2>Hired</h2>
                        <p>How can we get hired easily?</p>
                        </div>
                    </Link>
                </li>

                <li className="project col-8 nested">
                    <div className="project-number col-1">
                    <h3>02</h3>
                    </div>
                    <Link className="project-link fixed" to="/project/atm_for_kids">
                        <div className="col-3 project-thumb-fixed">
                        <img className="project-thumb" alt="For an HCI project, we made UI and prototype for an ATM for kids" src="/images/kids-save-money.jpeg" />
                        </div>
                        <div className="col-3 project-title">
                        <h6 className="active">Design</h6>
                        <h2>ATM for kids</h2>
                        <p>Even kids need money now</p>
                        </div>
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
        );
    }
}
 
export default Design;