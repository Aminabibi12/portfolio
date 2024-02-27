import React from 'react';
import './Projects.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import soulImage from './images/soul-plates.png';
import hotelImage from './images/hotel.png';
import codeUPImage from './images/code-up.png';
import resumeImage from './images/resumeRise.png';
import editorImage from './images/text-editor.png';
import rickImage from './images/rickNmorty.png';

const Projects = () => {
  return (
    <Container fluid className="projects-container" id="projects">
      <h1>My Projects</h1>
      
      <Row className="projects-row">
        <Col xs={12} md={6} className="projects">
          <div className="projects-image">
            <img src={soulImage} alt="" />
          </div>
        </Col>
        <Col xs={12} md={6} className="projects">
          <div className="projects-image">
            <img src={hotelImage} alt="" />
          </div>
        </Col>
      </Row>

      <Row className="projects-row">
        <Col xs={12} md={6} className="projects">
          <div className="projects-image">
            <img src={codeUPImage} alt="" />
          </div>
        </Col>
        <Col xs={12} md={6} className="projects">
          <div className="projects-image">
            <img src={resumeImage} alt="" />
          </div>
        </Col>
      </Row>

      <Row className="projects-row">
        <Col xs={12} md={6} className="projects">
          <div className="projects-image">
            <img src={editorImage} alt="" />
          </div>
        </Col>
        <Col xs={12} md={6} className="projects">
          <div className="projects-image">
            <img src={rickImage} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
