import React from 'react';
import './Skills.css';
import CSS3 from '../../Assets/css.png';
import ReactLogo from '../../Assets/react.png';
import JavaS from '../../Assets/javascript.png';
import HTML5 from '../../Assets/html.png';
import Git from '../../Assets/git.png';
import NodeLogo from '../../Assets/node.png';
import Postgre from '../../Assets/postgre.png';


export default function Skills() {
    return (
      <div className="Skill_Main" id="skill">
          <div className="Skill_Header">
              <h1>Skills</h1>
              <hr/>
          </div>
          <div className="Skill_Container">
              <div className="Front">
                  <div className="Tech">
                  <p>HTML5</p>
                  <p>JavaScript(ES6)</p>
                  <p>ReactJS</p>
                  <p>Redux</p>
                  </div>
              </div>
              <div className="UI_UX">
                  <div className="Tech">
                  <p>CSS3</p>
                  <p>Material UI</p>
                  </div>
              </div>
              <div className="Back">
                  <div className="Tech">
                  <p>Node.js</p>
                  <p>Express</p>
                  <p>PostgreSQL</p>
                  </div>
              </div>
          </div>
          <div className="Tech_Icon_Container">
              <div className="Tech_Icons">
                  <div className="Tech_icon"><img src={CSS3} alt="csslogo" className="Tech_Logo"/></div>
                  <div className="Tech_icon"><img src={HTML5} alt="htmllogo" className="Tech_Logo"/></div>
                  <div className="Tech_icon"><img src={JavaS} alt="jslogo" className="Tech_Logo"/></div>
                  <div className="Tech_icon"><img src={ReactLogo} alt="reactlogo" className="Tech_Logo"/></div>
                  <div className="Tech_icon"><img src={NodeLogo} alt="nodelogo" className="Tech_Logo"/></div>
                  <div className="Tech_icon"><img src={Postgre} alt="postgreslogo" className="Tech_Logo"/></div>
                  <div className="Tech_icon"><img src={Git} alt="gitlogo" className="Tech_Logo"/></div>
              </div>
          </div>
      </div>
    );
  }
  