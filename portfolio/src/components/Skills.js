import React from 'react';
import './Skills.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import htmlImage from './images/html1.webp';
import cssImage from './images/css.png';
import JsImage from './images/Js.webp';
import reactImage from './images/react.png';
import nodeImage from './images/node1.webp';
import sqlImage from './images/sql.webp';
import githubImage from './images/github.png';
import scrumImage from './images/scrum2.png';
import trelloImage from './images/trello.webp';

const Skills = () => {
  return (
    <Container fluid className="skills-container" id="skills">
        <h1>My Skills</h1>
      <Row className="skills-row">

        <Col xs={12} md={4} className="skill">

          <div  className="skill-image">
            <img src={htmlImage} alt="skill1" />

             <div className="overlay">
           <div className="text"><b>HTML proficiency demonstrated</b></div>
             </div>
          </div>

        </Col>

        <Col xs={12} md={4} className="skill">

        <div  className="skill-image">
        <img src={cssImage} alt="" className="skill-image" />

        <div className="overlay">
           <div className="text"><b>Expertise in stunning web layouts with CSS</b></div>
             </div>
        </div>

        </Col>

        <Col xs={12} md={4} className="skill">

        <div  className="skill-image">
        <img src={JsImage} alt="Skill 1" className="skill-image" />
        <div className="overlay">
           <div className="text"><b>Skilled in JavaScript for dynamic web development.</b></div>
             </div>
        </div>

        </Col>

      </Row>
      <Row className="skills-row">

        <Col xs={12} md={4} className="skill">

        <div  className="skill-image">
        <img src={ reactImage} alt="Skill 1" className="skill-image" />
        <div className="overlay">
           <div className="text"><b>Skilled in React for building interactive web applications.</b></div>
             </div>
        </div>

        </Col>

        <Col xs={12} md={4} className="skill">

        <div  className="skill-image">
        <img src={nodeImage} alt="Skill 1" className="skill-image" />
        <div className="overlay">
           <div className="text"><b>Proficient in Node.js for server-side JavaScript development.</b></div>
             </div>
        </div>

        </Col>

        <Col xs={12} md={4} className="skill">
        <div  className="skill-image">
        <img src= {sqlImage} alt="Skill 1" className="skill-image" />
        <div className="overlay">
           <div className="text"><b>Skilled in SQL for database management and querying.</b></div>
             </div>
        </div>
        </Col>
      </Row>


      <Row className="skills-row3">

<Col xs={12} md={4} className="skill">

<div  className="skill-image-github">
<img src={ githubImage} alt="Skill 1" className="skill-image-github" />
<div className="overlay" style={{paddingLeft:"8px", paddingRight:"8px"}}>
           <div className="text" style={{paddingLeft:"8px", paddingRight:"8px"}}><b>Proficient in Git for version control and collaboration.</b></div>
             </div>
</div>

</Col>

<Col xs={12} md={4} className="skill">

<div  className="skill-image-scrum">
<img src={scrumImage} alt="Skill 1" className="skill-image-scrum" />
<div className="overlay">
           <div className="text"><b>Proficient in Scrum methodologies for agile project management.</b></div>
             </div>
</div>

</Col>

<Col xs={12} md={4} className="skill">

<div  className="skill-image-trello">
<img src= {trelloImage} alt="Skill 1" className="skill-image-trello" />
<div className="overlay"  style={{paddingLeft:"8px", paddingRight:"8px"}}>
           <div className="text"  style={{paddingLeft:"8px", paddingRight:"8px"}}><b>Experienced with Trello for effective task management and collaboration.</b></div>
             </div>
</div>
</Col>
</Row>

    </Container>
  );
};

export default Skills;
