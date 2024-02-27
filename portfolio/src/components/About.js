import aboutImage from './images/about.jpg'; 
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid className="about-container" id="about">
      <h1>About Me</h1>
      <Row className="justify-content-center about-row">
        <Col lg={4} className="about-grid1">
          <div className="image-content about-img-box">
            <img className="about-img" src={aboutImage} alt="" />
          </div>
        </Col>
        <Col lg={6} className="about-grid2">
          <div className="text-content about-text">
            <h2>Know More About Me</h2>
            <p>I am a team worker , self-motivated and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am passionate Web developer with a love for coding. I have excellent problem solving skills and I am easy to adaptable. Have abilities to creativity and management. I am confident, organized and work ethic person. </p>
          </div>
        </Col> 
      </Row>
    </Container>
  );
};

export default About;