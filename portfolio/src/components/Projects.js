import React from 'react';
import './Projects.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import soulImage from './images/soul-plates.png';
import hotelImage from './images/hotel.png';
import codeUPImage from './images/code-up.png';
import resumeImage from './images/resumeRise.png';
import editorImage from './images/text-editor.png';
import rickImage from './images/rickNmorty.png';
import TaskImage from './images/task.jpeg';
import TranslateImage from './images/translate.jpeg';
import PalindromImage from './images/palinndrom.png';
import CounterImage from './images/counter.png';
import ClockImage from './images/clock.png';
import CalenderImage from './images/calender.png';

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
              <p>This full-stack project is a comprehensive solution tailored for Non-Governmental Organization. Tools used in this project are <b>Bootstrap, React.js, Node.js and PostgreSQL</b>. </p> 
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
              <p>This is a comprehensive one-page website showcasing a hotel. The website is built using <b>React and javaScrip</b> for dynamic interactivity and Bootstrap for responsive design.</p> 
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
              <p>This comprehensive frontend application is designed specifically for educational institutes, built using <b>React and javaScrip</b>to deliver a dynamic and interactive user experience. </p> 
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
              <p>A comprehensive resume application powered by <b>React and javaScrip</b>, designed to facilitate the creation and downloading of colourful resumes in a matter of minutes. </p>  
            </div>
          </div>
        </Col>
      </Row>


      <Row className="projects-row">

        <Col xs={12} md={6} className="projects">
          <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
            <div className="front">
              <img src={PalindromImage } alt="" />
            </div>
            <div className="back">
            <h3>Palindrom App</h3>
              <p>Palindrome Checker is a simple <b>Java Swing</b> application that allows users to input a string and determine whether it is a palindrome or not.</p> 
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} className="projects">
          <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
            <div className="front">
              <img src={CounterImage} alt="" />
            </div>
            <div className="back">
            <h3>Word Counter App</h3>
              <p>Word Counter is a <b>Java Swing</b> application designed to count the number of words in a given text input. Users can enter text into a text area provided by the application.</p> 
            </div>
          </div>
        </Col>

      </Row>

     

      <Row className="projects-row">

<Col xs={12} md={6} className="projects">
  <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
    <div className="front">
      <img src={CalenderImage} alt="" />
    </div>
    <div className="back">
    <h3>Calender event App</h3>
      <p>Calendar Event Manager is a <b>Java Swing</b> application that enables users to efficiently add, edit ad delete their events and appointments.</p> 
    </div>
  </div>
</Col>

<Col xs={12} md={6} className="projects">
  <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
    <div className="front">
      <img src={ClockImage} alt="" />
    </div>
    <div className="back">
    <h3>Digital Clock App</h3>
      <p>Digital Clock is a <b>Java Swing</b> application that displays the current time in a digital format. Provides users with an accurate and easy-to-read representation of the time, including hours, minutes, and seconds.</p> 
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
              <p>A versatile text document application powered by <b>JavaScript</b>, designed to empower users to create stunning documents effortlessly and download them with ease.</p> 
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
              <p>An immersive and dynamic page dedicated to the captivating world of Rick and Morty, brought to life with <b>JavaScript DOM</b> manipulation and the Fetch API.</p> 
            </div>
          </div>
        </Col>

      </Row>


      <Row className="projects-row">

        <Col xs={12} md={6} className="projects">
          <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
            <div className="front">
              <img src={TaskImage} alt="" />
            </div>
            <div className="back">
            <h3>Task-Scheduler App</h3>
              <p>A <b>React and JavaScript</b> task scheduler app, streamlining your daily agenda with intuitive features and seamless task management.</p> 
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} className="projects">
          <div className="projects-image" onMouseEnter={(e) => e.currentTarget.classList.add('flip')} onMouseLeave={(e) => e.currentTarget.classList.remove('flip')}>
            <div className="front">
              <img src={TranslateImage} alt="" />
            </div>
            <div className="back">
            <h3>Translator App</h3>
              <p>A <b>React and JavaScript</b> translator app, leveraging the Fetch API to seamlessly access translation services and facilitate cross-cultural communication.</p> 
            </div>
          </div>
        </Col>

      </Row>

    </Container>
  );
};

export default Projects;
