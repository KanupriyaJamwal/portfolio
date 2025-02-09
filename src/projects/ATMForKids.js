import React, { Component } from "react";

class ATMForKids extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            In our 6th semester of engineering (early 2019), we had 8 subjects
            and one of them was an elective - Human Computer Interface 😀
            <br></br>
            This was my favourite subject and it later got me interested in UX
            Design. For our HCI project, my friend and I designed the UI for an
            ATM for kids.
          </p>
          <p className="reflections col-2">
            The other elective was Operation Research.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">Purpose of the system</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            There are a number of ATMs with good UIs available but none of them
            focus on children’s requirements. We believe that it’s important to
            educate children about money management early on. <br></br>
            <br></br>
            The core functionality of Banksy is to let children withdraw and
            parents deposit money. We have added more functionalities that we
            believe would encourage kids to save money.
          </p>
          <p className="reflections col-2">
            Although, IDBI now offers 'POWERKIDZ' account for children.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">Scope of the system</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            Banksy has an interface which has customisable themes and caters to
            children’s love for cartoons. It gives limited options on-screen but
            has all the functionalities that are necessary, with a few extended
            functionalities.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">User Profiling</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            The target users are kids aged 8-12. Information was gathered by
            conversing with kids of these ages at malls and other public places
            (with consent of parents). This information includes colour scheme
            preferences, their allowances, the places they frequent, etc. We
            kept in mind the money management education they may have received.
            We implemented it in a way that encourages them to save money.
            <br></br>
            <br></br>
            There is a separate login for parents so they can set preferences
            such as setting an allowance limit and accessing account details.
            <br></br>
            <br></br>
            Kids usually spend more time on the screen and are significantly
            tech savvy. They also like to personalize their profiles.
          </p>
          <p className="reflections col-2">
            This was in late 2018, early 2019 so I feel like it's a bit outdated
            now.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">Functional Requirements</h2>
        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li>Different logins for parents and children</li>
            <li>Deposits money into account</li>
            <li>Withdraws money from account</li>
            <li>Customisable avatars and themes</li>
            <li>Balance Check</li>
            <li>Avails scratch cards</li>
            <li>Provides helpful messages</li>
            <li>Rewards money saving</li>
          </ul>
        </div>
        <h2 className="large-spacer-top col-5">
          Objectives and Success Criteria of the Project
        </h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            The success of the application depends upon meeting the following
            core set of objectives:
          </p>
        </div>
        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li>
              The design of a command mechanism to encapsulate all changes to
              the model as a series of commands to be executed on the model.
            </li>
            <li>The design of a seamless navigation capability.</li>
            <li>
              The design of a GUI to enable the user to explore functionalities.
            </li>
            <li>
              The design of a mechanism to provide choices to execute a number
              of operations
            </li>
            <li>
              The interface must be designed to engage the attention of
              preteens. The representation should be adaptive to their needs and
              responsive to their experience.
            </li>
          </ul>
        </div>
        <h2 className="large-spacer-top col-5">Functionalities</h2>
        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li>The atm is accessible by both children and their parents</li>
            <li>
              Users must be able to choose their own avatar when starting out
              and be able to unlock more with the help of Banksy coins
            </li>
            <li>
              Users must be able to start the process again by entering pin
              again
            </li>
            <li>
              Users must not be able to withdraw more than Rs. 500 in 24 days
            </li>
            <li>Users can withdraw using fast withdrawal</li>
            <li>Users may choose colour scheme via avatars</li>
            <li>Scratch can be availed with every withdrawal</li>
            <li>
              Scratch cards results include - “Better luck next time”, Re. 1,
              Rs. 2.
            </li>
            <li>Users can avail Banksy coins by saving money</li>
            <li>
              By saving money, user receives the same number of Banksy coins as
              the percentage as they save.
              <br></br>
              <br></br>
              Eg: User A received Rs. 1000 in April. A saves Rs, 10% savings. At
              the end of April, A receives 10 Banksy coins.
            </li>
            <li> Banksy coins unlock new avatars and themes.</li>
          </ul>
        </div>
        <h2 className="large-spacer-top col-5">
          User Interface – Navigational Paths and Screen Mock-ups
        </h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            The following were created using Adobe XD and Adobe Illustrator:
          </p>
          <p className="reflections col-2">
            <a
              className="social-media-link"
              href="https://github.com/KanupriyaJamwal/Banksy---ATM-for-kids.git"
              target="blank"
            >
              Here is the XD file for CTAs.
            </a>
          </p>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci1.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci2.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci3.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci4.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci5.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci6.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci7.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci8.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci9.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci10.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci11.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci12.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci13.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci14.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci15.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci16.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci17.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci18.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci19.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci20.jpg")}
          />
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img
            className="project-image"
            alt="Signing Up Use Case Diagram"
            src={require("../assets/images/banksy/hci21.jpg")}
          />
        </div>
        <h2 className="large-spacer-top col-5">Feedback:</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            We showed our project to another faculty in college who gave us some
            valuable feedback, including -
          </p>
          <p className="reflections col-2">
            Aka, our then Objected Oriented Software Engineering Professor.
          </p>
        </div>
        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li>
              Our UI is very good and appealing to kids with the lively and
              bright colours.
            </li>
            <li>
              We could add an extra layer of security, such as a biometric
              scanner.
            </li>
            <li>
              The feature of parents receiving messages very pretty good since
              parents can stay in the loop.
            </li>
          </ul>
        </div>
        <h2 className="large-spacer-top col-5">Experimental Evaluation:</h2>
        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li>Participants: Kids aged 8-12 and their guardians.</li>
            <li>
              Hypothesis: Bright colour schemes and the big touchscreen buttons
              help interaction with the kids easier, keeping their interest in
              completing the transaction.
            </li>
            <li>
              Independent variables: Pin assignment, any biometric used, total
              bank balance.
            </li>
            <li>
              Dependent variables: Colour scheme (since we let the kids choose
              it), withdrawable bank balance, coins provided as saving
              initiators, scratch cards provided as withdrawal gifts.
            </li>
            <li>
              Experimental design: The learning in this case is within-groups
              since there is transfer of learning involved as this is aimed
              towards teaching kids how to efficiently use ATM machines.
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ATMForKids;
