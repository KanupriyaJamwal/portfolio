import React, { Component } from "react";
class Grandmamas extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            When I was in college, back in 2018, one of my favourite places to
            visit was Grandmama's, Juhu. A lot has changed since then. We live
            in a post pandemic world where paper menus have become rarer and
            rarer. The same is true for Grandmama's. They started using QR code
            menus but it has lost the charm the physical{" "}
            <a target="blank" href="http://www.grandmamascafe.com/menu.html">
              menu
            </a>{" "}
            had. So I have designed a menu preview app for Grandmama's that lets
            you view it before you get to the cafe location, but also lets you
            use the already existing QR code functionality.
          </p>
          <p className="reflections col-2">
            If you ever do visit Grandmama's, do try their Signature Hot
            Chocolate.
          </p>
        </div>

        <h2 className="large-spacer-top col-5">Project Overview</h2>

        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>
            <span role="img" aria-label="sparkle">
              📱
            </span>{" "}
            The Product
          </strong>{" "}
        </h3>
        <br></br>
        <p className="large-paragraph medium-spacer-bottom col-5">
          <div className="text-group">
            A menu preview app for Grandmama’s to attract new customers who may
            not know the menu and may be curious to find out the various items
            available at the café. This app would also be helpful to existing
            customers to select their food and instantly place their order at
            café location.
          </div>
        </p>
        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>
            <span role="img" aria-label="sparkle">
              ⌛
            </span>{" "}
            Project Duration
          </strong>{" "}
        </h3>
        <br></br>
        <p className="large-paragraph medium-spacer-bottom col-5">
          <div className="text-group">June 2022 – July 2022</div>
        </p>
        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>
            <span role="img" aria-label="sparkle">
              ⚠️
            </span>{" "}
            The Problem
          </strong>{" "}
        </h3>
        <br></br>
        <p className="large-paragraph medium-spacer-bottom col-5">
          <div className="text-group">
            Curious customers would like to view food menu items before reaching
            a cafe
          </div>
        </p>
        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>
            <span role="img" aria-label="sparkle">
              🏆
            </span>{" "}
            The Goal
          </strong>{" "}
        </h3>
        <br></br>
        <p className="large-paragraph medium-spacer-bottom col-5">
          <div className="text-group">
            Design a menu preview app for Grandmama’s to let cutomers view their
            food without having to physically go to the café and view the menu
          </div>
        </p>
        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>
            <span role="img" aria-label="sparkle">
              ⚙️
            </span>{" "}
            My Role
          </strong>{" "}
        </h3>
        <br></br>
        <p className="large-paragraph medium-spacer-bottom col-5">
          <div className="text-group">
            UX designer designing the menu preview app for Grandmama’s,
            overseeing the project from start to finish
          </div>
        </p>
        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>
            <span role="img" aria-label="sparkle">
              ✍️
            </span>{" "}
            Resposibilities
          </strong>{" "}
        </h3>
        <br></br>
        <p className="large-paragraph medium-spacer-bottom col-5">
          <div className="text-group">
            User research, Competitive analysis, Conducting interviews, paper
            and digital wireframing, low and high-fidelity prototyping,
            conducting usability studies and iterating on designs.
          </div>
        </p>

        <h1 className="large-spacer-top col-5">Understanding The User</h1>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            I created journey maps and conducted a usability study to understand
            the needs of users I’m designing for. Two user groups were
            identified through the research – young adults who like to explore
            new food joints when exploring the city and working men and women
            with little patience to go through the menu at café location, before
            placing an order.
          </p>
          <p className="reflections col-2">
            I'd been going to this place with my friends for so long, I needed
            to find a broader perspective with a new pool of people.
          </p>
        </div>

        <h2 className="medium-spacer-top col-5">Pain Points</h2>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            <span>
              <h3 className="project-subheading">Time</h3>{" "}
            </span>
            <br></br>
            With the commute so long in Mumbai, users don’t get enough time to
            actually enjoy their time at café.
            <br></br>
            <br></br>
            <span>
              <h3 className="project-subheading">Options</h3>{" "}
            </span>
            <br></br>
            With so many choices of food places, user have difficulty to make a
            decision on where to visit.
            <br></br>
            <br></br>
            <span>
              <h3 className="project-subheading">Health</h3>{" "}
            </span>
            <br></br>
            Users would like to know exactly what is in their meals when eating
            out so they can make healthier choices.
          </p>
        </div>

        <h2 className="project-subheading medium-spacer-top col-5">
          <strong> Personas </strong>
        </h2>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Signing Up Use Case Diagram"
              src={require("../assets/images/grandmamas/aashni.jpg")}
            />
          </div>
          <p className="reflections col-2">
            Aashni is a journalist who needs to find a good café in Mumbai
            because she is interested to visit popular cafes and check the
            food/drinks catalogue they provide.
          </p>
        </div>
        <br></br>
        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Signing Up Use Case Diagram"
              src={require("../assets/images/grandmamas/sandeep.jpg")}
            />
          </div>
          <p className="reflections col-2">
            Sandeep is a hard working father and husband who needs to know the
            café menu before hand because he wants to have healthy food options
            for him and his family.
          </p>
        </div>
        <h2 className="medium-spacer-top col-5">Usability Study</h2>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            I formed some research questions and decided to talk with actual
            users. I sat down with 5 people from the ages 20 to 60 and presented
            them with a basic prototype. I made a compilation of major points
            that they had.
          </p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Signing Up Use Case Diagram"
              src={require("../assets/images/grandmamas/affinity.jpg")}
            />
          </div>
          <p className="reflections col-2">
            Here is the link to the
            <a
              className="social-media-link"
              target="blank"
              href="https://www.figma.com/file/v3pDxNcgdVFJkDcQi8Vvzm/Affinity-Diagram?node-id=0%3A1"
            >
              affinity diagram
            </a>
            if you would like to view it.
          </p>
        </div>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            Interviews with the users revealed that with QR code scanning being
            the norm since the pandemic, users have become used to viewing
            digital menus. Having a menu and cart available before reaching the
            café is a plus. Users also expect to be able to place orders before
            reaching the venue itself, while also having a payment portal built
            in the app itself.<br></br>
            <br></br>
            The findings from the usability study were -
          </p>
        </div>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            <span>
              <h3>01</h3> Payment portal is essential
            </span>
            <br></br>
            <br></br>
            <span>
              <h3>02</h3>{" "}
            </span>
            Wish list is not necessary
            <br></br>
            <br></br>
            <span>
              <h3>03</h3>{" "}
            </span>
            Users expect to be able to place orders remotely
          </p>
        </div>
        <h1 className="large-spacer-top col-5">Design</h1>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            I am glad I conducted the usability study before I started designing
            high fidelity mockups as it saved a lot of work and iterations. It
            took 3 iterations to complete the design.
          </p>
          <p className="reflections col-2">
            Designing and Prototyping is my favourite part of the process.
          </p>
        </div>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Signing Up Use Case Diagram"
              src={require("../assets/images/grandmamas/mockups-1.JPG")}
            />
          </div>
        </div>
        <br></br>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Signing Up Use Case Diagram"
              src={require("../assets/images/grandmamas/mockups-2.JPG")}
            />
          </div>
        </div>
        <br></br>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Signing Up Use Case Diagram"
              src={require("../assets/images/grandmamas/mockups-3.JPG")}
            />
          </div>
        </div>
        <br></br>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="Signing Up Use Case Diagram"
              src={require("../assets/images/grandmamas/prototype.gif")}
            />
          </div>
          <br></br>
        </div>
        <h2 className="project-subheading medium-spacer-top col-5">
          <strong> Accessibility Considerations </strong>
        </h2>
        <br></br>
        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li>
              Used back buttons and navigation icons to make the flow easier
            </li>
            <li>
              Included sliding gestures and alternate buttons to make the
              navigation fluid
            </li>
            <li>
              Provided error prevention dialog to give users better freedom and
              control
            </li>
          </ul>
        </div>
        <h1 className="large-spacer-top col-5">Going Forward</h1>
        <br></br>

        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>
            <span role="img" aria-label="sparkle">
              💥
            </span>{" "}
            Impact
          </strong>{" "}
        </h3>
        <br></br>
        <p className="large-paragraph medium-spacer-bottom col-5">
          <div className="text-group">
            With the addition of payment portal and remote ordering, we met user
            needs from several interviews and tests.
          </div>
        </p>
        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>
            <span role="img" aria-label="sparkle">
              📘
            </span>{" "}
            Learning
          </strong>{" "}
        </h3>
        <br></br>
        <p className="large-paragraph medium-spacer-bottom col-5">
          <div className="text-group">
            After going through 3 iterations of the design, I learned that it is
            not necessary to perfect the flow in one go. From every iteration,
            there is an opportunity to get user insights and improve on the
            designs
          </div>
        </p>
        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>
            <span role="img" aria-label="sparkle">
              🔮
            </span>{" "}
            Future Work
          </strong>{" "}
        </h3>
        <br></br>
        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li>
              Conduct another round of usability studies to validate whether the
              pain points users experienced have been effectively addressed.
            </li>
            <li>
              Adding past orders and favourites screen would help users make
              better choices to revisit the café.
            </li>
            <li>
              Letting a group of users place their individual orders at the same
              table would reduce work on just one user would be taking group
              orders.
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Grandmamas;
