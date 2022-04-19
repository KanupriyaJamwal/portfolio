import React, { Component } from 'react';
import './Home.scss';
import Sparkle from './components/Sparkle';
import { BrowserRouter as Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Helloo</h1>
        <header className="header" style={{padding: "2vw 0"}}>
          <div className="header-text-wrapper nested">
            <h1 className="header-text col-4"><span className="highlighter"><strong>Elizabeth Lin</strong> is a product designer &amp; aspiring princess.</span></h1>
          </div>
          <div className="header-image-wrapper">
            <div className="header-image">
              <Sparkle />
            </div>
          </div>
        </header>
        <section className="projects-wrapper">
            <ul className="projects col-10 offset-2 nested">
                <li className="project col-4 nested" id="project-1">
                    <div className="project-number col-1">
                        <h3>01</h3>
                    </div>
                    <div className="col-3">
                        <Link className="project-link" to="/teaching/project/labs/">
                            <img className="project-thumb" alt="Slides from a lecture about iteration showcasing my past design work about student exercises" src="images/thumbs/thumb-labs.gif"/>
                            <h6 className="active">Teaching</h6>
                            <h2>Creating the Lambda Labs design experience</h2>
                            <p>Mentoring & guiding students to ship products together.</p>
                        </Link>
                    </div>
                </li>
                <li className="project col-4 nested" id="project-2" to="/teaching/project/visual-design-club/">
                    <div className="project-number col-4">
                    <h3>02</h3>
                    </div>
                    <div className="col-4">
                    <Link className="project-link" to="/teaching/project/visual-design-club/">
                        <img className="project-thumb" alt="Grid of bright colored squares with different illustrations in pink, purple, and yellow" src="images/thumbs/thumb-visual-design-club.png" />
                        <h6 className="active">Teaching</h6>
                        <h2>Teaching visual design</h2>
                        <p>Designing lessons & activities to push the boundaries of visual design education.</p>
                    </Link>
                    </div>
                </li>

                <li className="project col-4 offset-1 nested" id="project-3">
                    <div className="project-number col-4">
                    <h3>03</h3>
                    </div>
                    <div className="col-4">
                    <Link className="project-link" to="/design/project/review-game/" style={{display:"block"}}>
                        <img className="project-thumb" alt="A review game prototype with a math problem in the center and flowers on both sides symbolizing the different teams" src="images/thumbs/thumb-review-game.png" />
                        <h6 className="active">Design</h6>
                        <h2>Prototyping a math review game for classrooms</h2>
                        <p>How can we make an engaging in-class review game for classrooms?</p>
                    </Link>
                    </div>
                </li>

            <li className="project col-4 nested" id="project-4">
                <Link className="project-link flipped" to="/experiments/project/fashion-avgs/" style={{display:"flex"}}>
                <div className="project-number col-2">
                    <h3>04</h3>
                    <h6 className="active">Experiments</h6>
                    <h2>Fashion averages</h2>
                    <p>What's the average of fashion week?</p>
                </div>
                <div className="col-2">
                    <img className="project-thumb" alt="An average of the spring 2019 fashion week shows. Looks like a ghostly brunette model" src="images/thumbs/thumb-fashion-avgs.jpg" />
                </div>
                </Link>
            </li>

            <li className="project col-4 nested" id="project-5">
                <div className="project-number col-1">
                    <h3>05</h3>
                </div>
                <div className="col-3">
                    <Link className="project-link" to="/design/project/student-progress/">
                        <img className="project-thumb" alt="Khan Academy's teacher progress page with a grid of scores" src="./images/thumbs/thumb-student-progress.png" />
                        <h6 className="active">Design</h6>
                        <h2>Defining student progress</h2>
                        <p>How can we help teachers identify and fill student gaps in learning?</p>
                    </Link>
                </div>
            </li>

            <li className="project col-4 nested" id="project-6">
                <div className="project-number col-4">
                    <h3>06</h3>
                </div>
                <div className="col-4">
                    <Link className="project-link" to="/design/project/cultural-values/">
                        <img className="project-thumb" alt="A column with an open book on top. The book has a pencil, mountain, and apple bursting out!" src="images/thumbs/thumb-cultural-values.png" />
                        <h6 className="active">Illustrations</h6>
                        <h2>Visualizing cultural values</h2>
                        <p>To celebrate Khan Academy's new values, I created a series of illustrations to represent each value.</p>
                    </Link>
                </div>
            </li>

            </ul>
        </section>
      </div>
    );
  }
}

export default App;
