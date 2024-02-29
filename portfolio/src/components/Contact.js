// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import './Contact.css'; 

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Email sent successfully');
//         // Optionally, show a success message to the user
//       } else {
//         console.error('Failed to send email');
//         // Optionally, show an error message to the user
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       // Optionally, show an error message to the user
//     }

//     setFormData({ fullName: '', email: '', message: '' });
//   };

//   return (
//     <div className='contact-box' id="contact">
//       <p><b>If you want to work with me!</b></p>
//       <h2>Contact Me</h2>
//       <div className="contact-form-container">
//         <Form onSubmit={handleSubmit} className="contact-form">
//           <Form.Group className="form-group">
//             <Form.Label htmlFor="fullName">Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="form-group">
//             <Form.Label htmlFor="email">Email</Form.Label>
//             <Form.Control
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="form-group">
//             <Form.Label htmlFor="message">Message</Form.Label>
//             <Form.Control
//               as="textarea"
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>
//           <Button type="submit">Send</Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
