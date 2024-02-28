import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <Container className='footer-container'>
        <Row className='footer-row1'>
          <Col xs={12} sm={6} md={4} className='col1'>
            {/* <h5>Contact Us</h5> */}
            <p><b>Email</b>: bibiamina453@gmail.com</p>
            <p><b>Phone</b>:(34) 664 527 105</p>
          </Col>

          <Col xs={12} sm={6} md={4} className='col2'  style={{ }}>
            <h5>Follow Me!</h5>
            <div className="social-icons">
  <a href="https:www.linkedin.com/in/amina-bibi-a6bb03250/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
  </a>
  <span className="icon-space"></span> 
  <a href="https://twitter.com/AminaBibi86873/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} size="2x" />
  </a>
  <span className="icon-space"></span> 
  <a href="https://github.com/Aminabibi12" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} size="2x" />
  </a>
</div>
          </Col>

          <Col xs={12} md={4} className='col3'  style={{  }}>
            <h5>Address</h5>
            <p>Barcelona, Spain</p>
          </Col>

        </Row>

      </Container>

      <div className="footer-bottom">
        <Container className='footer-bottom-box'>
          <p className="text-center">© 2024. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
