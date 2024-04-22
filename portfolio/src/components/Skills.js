import React from 'react';
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
import JavaImage from './images/java.webp';
import AwsImage from './images/aws1.webp';
import PythonImage from './images/python.webp';
import './Skills.css';

const Skills = () => {
  return (
    <Container fluid className="skills-container" id="skills">
      <h1 className="text-center">My Skills</h1>
      <Row className="skills-row">
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image">
            <img src={htmlImage} alt="HTML" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>HTML proficiency demonstrated</b></div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image">
            <img src={cssImage} alt="CSS" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>Expertise in stunning web layouts with CSS</b></div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image">
            <img src={JsImage} alt="JavaScript" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>Skilled in JavaScript for dynamic web development</b></div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="skills-row">
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image">
            <img src={reactImage} alt="React" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>Skilled in React for building interactive web applications</b></div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image">
            <img src={nodeImage} alt="Node.js" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>Proficient in Node.js for server-side JavaScript development</b></div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image">
            <img src={sqlImage} alt="SQL" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>Skilled in SQL for database management and querying</b></div>
            </div>
          </div>
        </Col>
      </Row>




      <Row className="skills-row">
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image">
            <img src={JavaImage} alt="React" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>Possessing a solid foundation in Java programming fundamentals</b></div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image">
            <img src={AwsImage} alt="Node.js" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>Have foundational knowledge of cloud computing and AWS services.</b></div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image">
            <img src={PythonImage } alt="SQL" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>Having strong kowledge in Python scripting for system administration tasks and file management</b></div>
            </div>
          </div>
        </Col>
      </Row>





      <Row className="skills-row3">
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image-github">
            <img src={githubImage} alt="GitHub" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>Proficient in Git for version control and collaboration</b></div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image">
            <img src={scrumImage} alt="Scrum" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>Proficient in Scrum methodologies for agile project management</b></div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <div className="skill-image-trello">
            <img src={trelloImage} alt="Trello" className="img-fluid" />
            <div className="overlay">
              <div className="text"><b>Experienced with Trello for effective task management and collaboration</b></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
