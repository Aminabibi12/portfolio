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
          <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
            <div className="front">
              <img src={soulImage} alt="" />
            </div>
            <div className="back">
                <h3>Soul Plates Project</h3>
              <p>This full-stack project is a comprehensive solution tailored for Non-Governmental Organization. Tools used in this project are Bootstrap, React.js, Node.js and PostgreSQL. </p> 
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} className="projects">
          <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
            <div className="front">
              <img src={hotelImage} alt="" />
            </div>
            <div className="back">
            <h3>Hotel App</h3>
              <p>This is a comprehensive one-page website showcasing a hotel. The website is built using React.js for dynamic interactivity and Bootstrap for responsive design.</p> 
            </div>
          </div>
        </Col>

      </Row>

      <Row className="projects-row">

        <Col xs={12} md={6} className="projects">
          <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
            <div className="front">
              <img src={codeUPImage} alt="" />
            </div>
            <div className="back">
            <h3>Code-UP App</h3>
              <p>This comprehensive frontend application is designed specifically for educational institutes, built using React.js to deliver a dynamic and interactive user experience. </p> 
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} className="projects">
          <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
            <div className="front">
              <img src={resumeImage} alt="" />
            </div>
            <div className="back">
                <h3>Resume Rise</h3>
              <p>A comprehensive resume application powered by React.js, designed to facilitate the creation and downloading of colourful resumes in a matter of minutes. </p>  
            </div>
          </div>
        </Col>
      </Row>

      <Row className="projects-row">

        <Col xs={12} md={6} className="projects">
          <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
            <div className="front">
              <img src={editorImage} alt="" />
            </div>
            <div className="back">
            <h3>Text-Document App</h3>
              <p>A versatile text document application powered by JavaScript, designed to empower users to create stunning documents effortlessly and download them with ease.</p> 
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} className="projects">
          <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
            <div className="front">
              <img src={rickImage} alt="" />
            </div>
            <div className="back">
            <h3>Rick and Morty</h3>
              <p>An immersive and dynamic page dedicated to the captivating world of Rick and Morty, brought to life with JavaScript DOM manipulation and the Fetch API.</p> 
            </div>
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default Projects;
