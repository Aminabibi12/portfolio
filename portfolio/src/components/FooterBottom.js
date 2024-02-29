import React from "react";
import './FooterBottom.css'; 
import { Container } from 'react-bootstrap';

function FooterBottom() {
  return (
    <div className="footer-bottom">
      <Container className='footer-bottom-box'>
        <p className="text-center">© 2024. All rights reserved.</p>
      </Container>
    </div>
  );
}

export default FooterBottom;
