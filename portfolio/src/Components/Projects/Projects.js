import React from 'react';
import './Projects.css';
import Carousel from 'nuka-carousel';
import homeFC from '../../Assets/homeFC.png';
import jordans from '../../Assets/jordans.png';
import stripe from '../../Assets/stripe.png';
import steps from '../../Assets/steps.png';
import NFLanding from '../../Assets/NFLanding.png';
import profile from '../../Assets/profile.png';



export default function Projects() {
    return (
      <div className="Projects_Main" id="projects">
        <hr className="Portfolio_HR" />
        <div className="Portfolio_Container">
          <div className="Portfolio_Img">
          <Carousel>
          <img src={homeFC} alt="" className="fc_Image" />
          <img src={jordans} alt="" className="fc_Image" />
          <img src={stripe} alt="" className="fc_Image" />
          </Carousel>
          </div>
          <div className="Portfolio_About">
            <div className="Portfolio_About_Container">
              <h1>Flight Club Clone</h1>
              <div className="Portfolio_Explanation">
                <p>
                  <strong className="strong">Description:</strong> This is a clone of the website flight club, an ecommerce site that sells rare and limited shoes and apparel, my clone solely focused on the shoes aspect of the site, due to only having two weeks to complete. 
                </p>
                <p>
                  <strong className="strong">Technologies Used:</strong> Built
                  with HTML/CSS, JavaScript, React, Redux, NodeJS, Express,
                  Massive, PostgreSQL, Stripe, and Auth0
                </p>
              </div>
              <div className="Portfolio_Buttons">
                <a
                  href="http://flightclubclone.com/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="Portfolio_Button">Website</div>
                </a>
                <a
                  href="https://github.com/TMeamber/flightclub-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="Portfolio_Button">
                    Github Repository
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="Portfolio_HR" />
        <div className="Portfolio_Container">
          <div className="Portfolio_Img">
          <Carousel>
            <img src={NFLanding} alt="" className="NF_Image" />
            <img src={steps} alt="" className="NF_Image" />
            <img src={profile} alt="" className="NF_Image" />
            </Carousel>
          </div>
          <div className="Portfolio_About">
            <div className="Portfolio_About_Container">
              <h1>Nebo Fit</h1>
              <div className="Portfolio_Explanation">
                <p>
                  <strong className="strong">Description:</strong> 
                   Full-Stack app that shows the user there sleep, water, calories, and can add in the work outs they did. Using the fitbit API we are able to display the users information on our app.
                </p>
                <p>Built with the purpose of mobile view first. The app uses media queries to display responsively in various views such as mobile, tablet and desktop.</p>
                <p>
                  <strong className="strong">Technologies Used:</strong> Built
                  with HTML/CSS, JavaScript, React, Redux, NodeJS, Express,
                  Massive, PostgreSQL, OAuth, ChartJS, RC Progress, and Jest (Endpoint Testing)
                </p>
              </div>
              <div className="Portfolio_Buttons">
                <a
                  href="http://nebofitness.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="Portfolio_Button">Website</div>
                </a>
                <a
                  href="https://github.com/NeboCreatives/nebofit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="Portfolio_Button">
                    Github Repository
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  