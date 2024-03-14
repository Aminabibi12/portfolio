import profileImage from './images/pic.jpeg';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row className="justify-content-center home-row">
        <Col lg={6} className="home-grid1">
          <div className="text-content home-text">
            <h1>Hi, There &#x1F44B; </h1>
            <p>My name is <b>Amina</b>. I'm a passionate <b>Full-Stack developer</b> with a creative flair and a strong commitment to delivering exceptional digital experiences. I have professional skills ( Frontend and Backend ) as well as have impressive soft skills.  </p>
          </div>
        </Col>
        <Col lg={4} className="home-grid2">
          <div className="image-content home-img-box">
            <img className="home-img" src={profileImage} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
