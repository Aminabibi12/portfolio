import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <div className='contact-box' id="contact">
      <p><b>If you want to work with me!</b></p>
      <h2>Contact Me</h2>
      <div className="contact-form-container">
        <Form onSubmit={handleSubmit} className="contact-form">
          <Form.Group className="form-group">
            <Form.Label htmlFor="fullName">Full Name</Form.Label>
            <Form.Control
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              as="textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit">Send</Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
