import React from 'react';
import './Skills.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import htmlImage from './images/html1.webp';
import cssImage from './images/css.png';
import JsImage from './images/Js.webp';
import reactImage from './images/react.png';
import nodeImage from './images/node1.webp';
import sqlImage from './images/sql.webp';

const Skills = () => {
  return (
    <Container fluid className="skills-container" id="skills">
        <h1>My Programmng Skills</h1>
      <Row className="skills-row">

        <Col xs={12} md={4} className="skill">

            <div  className="skill-image">
        <img src={htmlImage} alt="skill1" />
        </div>

        </Col>

        <Col xs={12} md={4} className="skill">

        <div  className="skill-image">
        <img src={cssImage} alt="" className="skill-image" />
        </div>

        </Col>

        <Col xs={12} md={4} className="skill">

        <div  className="skill-image">
        <img src={JsImage} alt="Skill 1" className="skill-image" />
        </div>

        </Col>

      </Row>
      <Row className="skills-row">

        <Col xs={12} md={4} className="skill">

        <div  className="skill-image">
        <img src={ reactImage} alt="Skill 1" className="skill-image" />
        </div>

        </Col>

        <Col xs={12} md={4} className="skill">

        <div  className="skill-image">
        <img src={nodeImage} alt="Skill 1" className="skill-image" />
        </div>

        </Col>

        <Col xs={12} md={4} className="skill">
        <div  className="skill-image">
        <img src= {sqlImage} alt="Skill 1" className="skill-image" />
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
