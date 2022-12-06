import React, { Component } from "react";
class RailSafe extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            RailSafe provides the necessary software required to monitor railway
            tracks in real time. We have provided a SaaS product to a suburban
            railway system that lets the driver and control room members keep
            railway tracks in check.
          </p>
          <p className="reflections col-2">
            This is a UI / UX case study made along with 2 other teammates from
            Capgemini. My role - Research, Competitor Analysis and designing
            Mockups.
          </p>
        </div>

        <h2 className="large-spacer-top col-5">Problem Statements</h2>
        <br></br>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Desktop Screen"
              src={require("../assets/images/railsafe/crash.png")}
            />
          </div>
          <p className="reflections col-2">Aka how to stop a train crash</p>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            <span>
              <h3>01</h3> Monitor malfunctioning and detection of wear and tear
              of tracks.
            </span>
            <br></br>
            <br></br>
            <span>
              <h3>02</h3>{" "}
            </span>
            Identify any abnormality in the tracks at early stages, share
            information of other trains that will be passong through that
            locations.
            <br></br>
            <br></br>
            <span>
              <h3>03</h3>{" "}
            </span>
            Monitor the irregularities in railway tracks by updating the staus
            of the tracks, check the health of the track.
          </p>
        </div>

        <h2 className="large-spacer-top col-5">Our Approach</h2>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            Use of the rail networks around the world is growing fast. Railways
            and metros often wish to run more trains on the existing
            infrastructure, to carry more passengers and freight - and generate
            increased revenues. Optimizing existing infrastructure avoids the
            huge investment required for new lines and new trains. One proven
            way to achieve greater frequency of service is to use cutting edge
            technology solutions to manage rail traffic – and to do it in a
            sustainable manner. Deliver a comprehensive human factors program to
            support the ground-up development of a digital communications-based
            Advanced Train Management.
          </p>
          <p className="reflections col-2">
            We needed facilitate an instant and constant interaction of train
            crew with the Control Centre.
          </p>
        </div>

        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>Monitoring dashboard in train</strong>
        </h3>
        <br></br>
        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Monitoring dashboard in train"
              src={require("../assets/images/railsafe/approach_dashboard.png")}
            />
          </div>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            Usually, for monitoring dashboards in trains, there are a lot of
            buttons and constant information flashing at the driver. Our
            solution is to provide a Screen to the driver which is familiar but
            more useful to the driver.
          </p>
        </div>

        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>Railway track monitor</strong>
        </h3>
        <br></br>
        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Railway track monitor"
              src={require("../assets/images/railsafe/approach_monitor.png")}
            />
          </div>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            The control room is the most important system for monitoring railway
            tracks. We plan on designing a dashboard for a person to access via
            desktop in the control room. They would be able to communicate with
            the driver and other required members.
          </p>
        </div>

        <h2 className="large-spacer-top col-5">Design Process Diagram</h2>
        <br></br>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Design Process Diagram"
              src={require("../assets/images/railsafe/design_process.png")}
            />
          </div>
        </div>

        <h1 className="large-spacer-top col-5">Project Research</h1>
        <br></br>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Project Research"
              src={require("../assets/images/railsafe/research.jpg")}
            />
          </div>
        </div>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            The IoT based Railway Track Monitoring System (IoT-RMS) is proposed
            for monitoring the health of the railway track. The system
            identifies any abnormality in the tracks at an early stage. These
            abnormalities are rectified before they develop for smoother
            transportation. The micro electro mechanical system accelerometers
            are placed in the axle box for measuring the signal. It becomes hard
            to identify the exact location of abnormalities when the global
            positioning system (GPS) falters due to signalling issues.
            <br></br>
            <br></br>
            The IoT-RMS updates the location of the abnormality in the cloud and
            shares it with other trains that will be passing through that
            location. As a result, the drivers of trains respond accordingly and
            avoid derailment.
          </p>
          <p className="reflections col-2">
            This information has been collated from the Research paper - 'An IoT
            based rail track condition monitoring and derailment prevention
            system'
          </p>
        </div>

        <h2 className="large-spacer-top col-5">Competitor Analysis</h2>
        <br></br>

        <table cellspacing="0" border="1">
          <tbody>
            <tr>
              <th>Competitor</th>
              <th>Competitor type (direct or indirect)</th>
              <th>Location(s)</th>
              <th>Product offering</th>
              <th>Target audience </th>
              <th>Unique value proposition </th>
            </tr>
            <tr>
              <td>SKF Rail Track Monitoring</td>
              <td>Direct (Direct for TMB case study)</td>
              <td>Sweden +</td>
              <td>
                {" "}
                To control the condition of the tracks, spotting problems more
                quickly and enabling rail operators to optimize the planning and
                execution of track maintenance activities.
              </td>
              <td>
                Railway staff of Transports Metropolitans de Barcelona (TMB) in
                Spain
              </td>
              <td>
                Customized kit that can be easily installed on the bogie frame.
                Vibration Analysis
              </td>
            </tr>
            <tr>
              <td>Japan Railway Track Consultants (NSG)</td>
              <td>
                Indirect (includes a wide variety of construction and education
                services)
              </td>
              <td>Japan</td>
              <td>
                Consulting services and support and suggestions for improvement
                of track maintenance methods
              </td>
              <td>
                Japanese railways operators and consultants, researchers and
                trainers all over South East Asia
              </td>
              <td>
                Inspection, measurement, survey, and design of railway tracks
                along with track maintainence technical education
              </td>
            </tr>
            <tr>
              <td>Rail Watch</td>
              <td>Indirect (for frieght trains maintainence)</td>
              <td>Germany +</td>
              <td>
                Information on the technical condition of all locomotives and
                wagons - whether there is any critical wear, and when and how
                maintenance is required.
              </td>
              <td>Railway engineers around Germany and bits of Europe</td>
              <td>
                Clients can choose which data they require about freight trains
                and see critical wear. They can decide when and how the
                maintainence is required
              </td>
            </tr>
            <tr>
              <td>Center for Railway Information Systems (CRIS)</td>
              <td>Direct (when comes to TMS. Same target audience)</td>
              <td>India</td>
              <td>
                A system for management, inspections recording and proactive
                track + related assets maintenance in order to improve Track
                assets reliability.
              </td>
              <td>Entirety of Indian Railways</td>
              <td>
                Manages an incredible amount of passengers, locations,
                resources, products, operations and assets since 1986
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="large-spacer-top col-5">User personas</h2>
        <br></br>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            <span>
              <h3>Abhay Singh</h3>
              Abhay Singh works in senior management at IRTC (Indian Railway
              Catering and Tourism Corporation). He is in charge of overseeing
              train routes, fixing delays and managing complaints. Abhay is
              close to retirement and claims to be technologically challenged
              but open to learning.
              <br></br>
              <br></br>
              <span>
                <h4>Paint points</h4>{" "}
              </span>
              <br></br>
              To retirement and claims to be technologically challenged but open
              to learning.
            </span>
            <br></br>
            <br></br>
            <span>
              <h3>Harsh Sharma</h3>
              Harsh Sharama as a Train Driver at IRTC (Indian Railway Catering
              and Tourism Corporation). He is facing issues in the winter where
              he is not able to check the track and signal.
              <br></br>
              <br></br>
              <span>
                <h4>Paint points</h4>{" "}
              </span>
              <br></br>
              He is facing issues in the winter where he is not able to check
              the track and signal.
            </span>
            <br></br>
            <br></br>
            <span>
              <h3>Rahul Yadav</h3>
              Rahul Yadav works in at IRTC (Indian Railway Catering and Tourism
              Corporation). He is in charge of overseeing train routes, fixing
              delays and managing complaints.
              <br></br>
              <br></br>
              <span>
                <h4>Paint points</h4>{" "}
              </span>
              <br></br>
              To retirement and claims to be technologically challenged but open
              to learning.
            </span>
            <br></br>
            <br></br>
            <span>
              <h3>Raghav Daniesh</h3>
              He is head TC in IRTC, where he need to gave the signal to the
              train driver but due to some weather problem he is not able to
              communicate with driver and facing problem.
              <br></br>
              <br></br>
              <span>
                <h4>Paint points</h4>{" "}
              </span>
              <br></br>
              Not able to see the Train and communicate with drivers.
            </span>
            <br></br>
          </p>
        </div>

        <h1 className="large-spacer-top col-5">UI Screens</h1>
        <br></br>

        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Project Research"
              src={require("../assets/images/railsafe/ui_issues.png")}
            />
          </div>
        </div>

        <h2 className="large-spacer-top col-5">Control Room Desktop Screen</h2>
        <br></br>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            We placed a desktop screen in control room and where an officer can
            monitor other train and train routes.
            <br></br>
            <br></br>
            They can communicate easily with the driver and pass their message
            to track the train.
          </p>
        </div>
        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Desktop Screen"
              src={require("../assets/images/railsafe/desktop.png")}
            />
          </div>
        </div>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            <span>
              <h4>Active Trains</h4>{" "}
            </span>
            <br></br>
            User can view the status of all trains, sending updates to train
            drivers as per relevance.
            <br></br>
            <br></br>
            <span>
              <h4>Updates</h4>{" "}
            </span>
            <br></br>
            User can also check on updates like the train status and information
            on delays.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">Train Dashboard Screen</h2>
        <br></br>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            We have designed an updated screen for the monitoring dashboard
            available to the driver in the train.
          </p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Desktop Screen"
              src={require("../assets/images/railsafe/train_dashboard.png")}
            />
          </div>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            Rather than having analog trackers and fixed buttons, we would like
            to provide the driver with a <strong>touchscreen</strong> that has a
            similar interface that the driver is used to.
            <br></br>
            <br></br>
            This screen has a <strong>map of all the train routes</strong>. The
            map can be pinched to zoom in and out. The map can also be rotated
            by the driver and the direction of train can be perceived by the
            left bottom corner symbol.
            <br></br>
            <br></br>
            There is the <strong>real time graph</strong> of the track status
            that monitors track health and relays the same to the control room.
            <br></br>
            <br></br>
            There are <strong>icons</strong> that let the driver raise an
            emergency, communicate with the control room, check schedule and
            view / update system.
            <br></br>
            <br></br>
            Lastly, the driver can <strong>view data</strong> - date-time,
            location and track status in a box. The colour of this box will
            change according to track health status.
          </p>
        </div>

        <h1 className="large-spacer-top col-5">Conclusion</h1>
        <br></br>

        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li>
              While the Indian Railway system does have a setup to monitor the
              health of railway tracks, we propose simplifying data collection
              by opting for real time vibration analysis by attaching an IOT
              device to the axle of a train coach. This requires minimum manual
              effort and a low cost setup.
            </li>
            <li>
              This kind of setup is beneficial in locating the exact position of
              all trains, should the global positioning system (GPS) fail to
              work or is not accurate enough.
            </li>
            <li>
              Additionally, we have designed easy to navigate screens for both
              train driver and control room members to access. The screens are
              intuitive and similar enough to the existing Monitoring dashboards
              so minimal training is required.
            </li>
          </ul>
        </div>

        <h2 className="large-spacer-top col-5">Reflections</h2>
        <br></br>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Desktop Screen"
              src={require("../assets/images/railsafe/reflections.png")}
            />
          </div>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            The main constraint we had while working on this project was to
            bring viable solutions to the problem. The IOT devices needed to be
            plausibly easy to install and maintain. Even while designing UI, we
            had to consider the familiarity of drivers with using existing
            technology. Even if the technology and designs we came up with were
            futuristic, they would still fall flat when considering the existing
            user.
          </p>
        </div>
      </section>
    );
  }
}

export default RailSafe;
