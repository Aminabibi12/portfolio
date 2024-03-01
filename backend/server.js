// require('dotenv').config(); 
// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// }));

// app.post('/send-email', (req, res) => {
//   const { fullName, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USERNAME, // Your email address
//     to: email, // Use the sender's email as the recipient
//     subject: 'New Contact Form Submission',
//     text: `
//       Full Name: ${fullName}
//       Email: ${email}
//       Message: ${message}
//     `
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Error: Could not send email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
