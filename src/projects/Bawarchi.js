import React, { Component } from "react";
class Bawarchi extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            This is a project I worked on as a prompt from a 7 day design
            challenge by India Film Project season 12 in September 2022. A MAJOR
            inspiration for this is the Tasty app by Buzzfeed.{" "}
          </p>
          <p className="reflections col-2">
            The preview image has pancakes. I was obsessed with perfecting
            pancakes in 2020.
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
            A user experience to help people learn how to cook world cuisines
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
          <div className="text-group">September 2022</div>
        </p>
        <h3 className="project-subheading medium-spacer-top col-5">
          <strong>
            <span role="img" aria-label="sparkle">
              ⚠️
            </span>{" "}
            The Prompt
          </strong>{" "}
        </h3>
        <br></br>
        <p className="large-paragraph medium-spacer-bottom col-5">
          <div className="text-group">
            You are selected by a company that has an app for collecting recipes
            of world cuisines. The app hasn’t been updated for a while so you’re
            being asked to add 4 useful features that will make it more
            marketable. You can also rebrand it with a cool name.
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
            To design a recipe app that provides easy to recreate world cuisine
            recipes
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
            UX designer designing a recipe app, overseeing the project from
            start to finish.
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
            Wireframing, prototyping and iterating on designs.
          </div>
        </p>

        <h2 className="large-spacer-top col-5">Paper wireframes</h2>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            Before getting started, I made several itertions for the home screen
            before settling on the final home screen with all the best features
            from previous iterations. Then I added a few other screens.
          </p>
        </div>
        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/page1.jpg")}
            />
          </div>
          <p className="reflections col-2">
            I laid out 4 different iterations of the home page and marked
            functionalities that I definitely wanted to include with a star.
            After going through every iteration, I made the final homescreen and
            expanded on all the initial iterations.
          </p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/page2.jpg")}
            />
          </div>
          <p className="reflections col-2">
            Next, I laid out the paper wireframes for the screens - Recipe,
            Step-by-step recipe, Basket, Search and Search results.
          </p>
        </div>

        <h2 className="large-spacer-top col-5">
          Digital wireframes and lofi prototype
        </h2>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            After completing the rough design on paper, I made lo fidelity
            wireframes and added interactions to the designs to create a
            prototype in Figma.
          </p>
        </div>

        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/lofi_prototype.png")}
            />
          </div>
        </div>

        <h2 className="large-spacer-top col-5">Mockups</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            From digital wireframes, I created these mockups.
          </p>
        </div>

        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/mockups.png")}
            />
          </div>
        </div>

        <h3 className="project-subheading col-5">Discover / Home</h3>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/mockup_1.jpeg")}
            />
          </div>
        </div>

        <h3 className="project-subheading col-5">Search</h3>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/mockup_2.jpeg")}
            />
          </div>
        </div>

        <h3 className="project-subheading col-5">Recipes</h3>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/mockup_3.png")}
            />
          </div>
        </div>

        <h3 className="project-subheading col-5">Recipe</h3>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/mockup_4.jpeg")}
            />
          </div>
        </div>

        <h3 className="project-subheading col-5">Recipe - (step by step)</h3>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/mockup_5.jpeg")}
            />
          </div>
        </div>

        <h3 className="project-subheading col-5">Shopping</h3>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/mockup_6.png")}
            />
          </div>
        </div>

        <h2 className="large-spacer-top col-5">Style Guide</h2>

        <h3 className="project-subheading col-5">Colour Palette</h3>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/palette.png")}
            />
          </div>
        </div>

        <h3 className="project-subheading col-5">Typography</h3>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/typography.png")}
            />
          </div>
        </div>

        <h2 className="large-spacer-top col-5">High Fidelity Prototype</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            And finally, I created a high fidelity prototype.
          </p>
        </div>
        <div className="text-group">
          <div className="medium-spacer-bottom small-spacer-top">
            <img
              className="project-image"
              alt="4 home iterations"
              src={require("../assets/images/bawarchi/prototype.gif")}
            />
          </div>
        </div>

        <h2 className="large-spacer-top col-5">Summary</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            The app has simple navigation, i.e., a bottom drawer with –
            Discover, Shop and Recipes. Since the focus is on world cuisine
            recipes, I have added that to be distinctly noticeable in Discover.
            The Search box and cookbook in Recipes also lets the user scroll
            through world cuisines.
            <br></br>4 New Features – Filtered search, stepwise recipe, shopping
            options, cookbooks.
            <br></br>A few inspirations worth mentioning –
          </p>
        </div>
        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li>Hero image in home from Netflix</li>
            <li>Search categories from Twitter</li>
            <li>Stepwise playthrough from Nike Fitness App</li>
          </ul>
        </div>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            Designing this app was so fun, it inspired me to try out a couple of
            recipes myself.
          </p>
        </div>
      </section>
    );
  }
}

export default Bawarchi;
