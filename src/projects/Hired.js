import React, { Component } from 'react';

class Hired extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">In 2019, 2 of my friends and I went through the placement process in college and it made us realise that a more optimal solution can be developed to increase efficiency in the recruitment and job seeking domain.</p>
          <p className="reflections col-2">Basically, we wanted LinkedIn, but for college placements.</p>
        </div>

        <h2 className="large-spacer-top col-5">Problem Definition</h2>
        <div className="text-group">
        <p className="large-paragraph medium-spacer-bottom col-5">
          <span><h3>01</h3></span>With large number of freshers applying for jobs and large number of job posting available on job portals, it is difficult for Employer as well as fresher to go through thousands of profile before choosing their ideal employee and job respectively. <br></br><br></br>
          <span><h3>02</h3></span>To tackle this problem and to personalise Job searching and hiring experience, we proposed a recommendation system approach where most suitable jobs will be recommended to freshers while the most suitable candidate profile will be suggested to the employer. <br></br><br></br>
          <span><h3>03</h3></span>The recommendation system will use both content based as well as collaborative filtering approach.
        </p>

        <p className="reflections col-2">Basically, we wanted LinkedIn, but for college placements.</p>
        </div>

        <h2 className="large-spacer-top col-5">Literature Review</h2>
        <div className="text-group">
        <ul className="text-list medium-spacer-bottom col-5">
          <li> A Recommendation System, in simple language, is a classification and information filtering system that shows the user(s) material and information tailored around the profile, history and current data of the user(s).</li>
          <li> A JRS is designed to suggest either a list of job positions to a job applicant based on his/her preferences, or to retrieve a list of job candidates to an employer or recruiter based on the job requirements.</li>
        </ul>
        <p className="reflections col-2">Basically, we wanted LinkedIn, but for college placements.</p>
        </div>
        
        <h3 className="project-subheading medium-spacer-top col-5"><strong><span role="img" aria-label="sparkle">✨</span> Algorithm 1.</strong> Content Based (CBR)</h3>
        <br></br>

        <div className="text-group">        
          <ul className="text-list medium-spacer-bottom col-5">           
            <li> It recommends items based on a comparison between the content of the items and a user profile.</li>
            <li> The suggestions depend upon the user’s profile only</li>
            <li> Advantages: <br></br><br></br>
              <ul className="nested-text-list small-spacer-bottom col-5">
                <li>It doesn't need any data about other users since the recommendations are specific to this user.</li>
                <li>The model can capture the specific interests of a user and can recommend niche items that very few other users are interested in.</li>
              </ul>
            </li>
            <li> Limitations: <br></br><br></br>
              <ul className="nested-text-list small-spacer-bottom col-5">
                <li>Limited content analysis</li>
                <li>Impossible to predict the totally distinct types of items the particular user has never expressed interest in.</li>
                <li>Overspecialization</li>
                <li>Unable to use quality judgments from other users</li>
                <li>Sparsity of data</li>
              </ul>
            </li>
        </ul>
        </div>

        <h3 className="project-subheading medium-spacer-top col-5"><strong><span role="img" aria-label="sparkle">✨</span> Algorithm 2.</strong> Collaborative Filtering (CFR)</h3>
        <br></br><br></br>

        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">           
            <li>It defines a group of users as a type on the basis of matching criteria and similarity to other users. </li>
            <li>Collaborative filtering systems apply the so-called neighbourhood-based technique.</li>
            <li> Advantages: <br></br><br></br>
              <ul className="nested-text-list small-spacer-bottom col-5">
                <li>No domain knowledge necessary</li>
                <li>The model can help users discover new interests.</li>
                <li>To some extent, the system needs only the feedback matrix to train a matrix factorization model.</li>
              </ul>
            </li>
            <li> Limitations: <br></br><br></br>
              <ul className="nested-text-list small-spacer-bottom col-5">
                <li>Cold start problem for the new users.</li>
                <li>Sparsity rating problem on the same item.</li>
                <li>First rater: cannot recommend an item that has not been previously rated.</li>
                <li>Popularity Bias: It cannot recommend items to someone with a unique taste. It tends to recommend popular items instead.</li>
              </ul>
            </li>
          </ul>
        </div>

        <h3 className="project-subheading medium-spacer-top col-5"><strong><span role="img" aria-label="sparkle">✨</span> Algorithm 3.</strong> Hybrid System</h3>
        <br></br><br></br>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            It is the amalgamation of two or more recommendation systems into one.
          </p>
        </div>
        <div className='text-group'>
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img className="project-image" alt="User research illustration" src={require("../assets/images/hired/hybrid-system.png")}/>
          </div>
          <p className="reflections col-2">
            Different Type of Recommendation system approach <br></br><br></br>
            Source: “Applying Data Mining Techniques in Job Recommender System for Considering Candidate Job Preferences”
          </p>
        </div>

        <h3 className="project-subheading medium-spacer-top col-5"><strong><span role="img" aria-label="sparkle">✨</span> Algorithm 4.</strong> Proactive and iHR</h3>
        <br></br><br></br>

        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li><strong>Proactive:</strong> It is used as a vehicle to explore a range of innovative personalized access approaches.</li>
            <li><strong>iHR:</strong> It collects users’ profiles from multiple information channels, including users’ demographic information, the extracted data from external files</li>
          </ul>
        </div>
        <div className='text-group'>
          <div className="col-5 medium-spacer-bottom small-spacer-top">
            <img className="project-image" alt="User research illustration" src={require("../assets/images/hired/proactive.png")}/>
          </div>
          <p className="reflections col-2">
            Proactive recommendation taxonomy
          </p>
        </div>

        <h3 className="project-subheading medium-spacer-top col-5"><strong> Relevance to our project </strong></h3>
        <br></br><br></br>
        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li>CBR and CFR are both appropriate for recommending jobs.</li>
            <li>But both have limitations due to which accuracy and efficiency take a toll.</li>
            <li>Best way to tackle this is by using hybrid recommendation strategy (intelligent switching between CBR and CFR)</li>
            <li>iHR- best recommendation technique which involves CBR and CFR</li>
          </ul>
        </div>
        <h1>Rest is under development. Sorry! We'll update this page (and the rest of the site) soon!</h1>
      </section>
    );
  }
}

export default Hired;
