require('dotenv').config(); // Load environment variables from .env file
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS // Your email password or App Password if using Gmail
    }
});

// Define email options
let mailOptions = {
    from: process.env.EMAIL_USER, // Sender email address
    to: 'jilumaryalias@gmail.com', // Receiver email address
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent using nodemailer.' // Plain text body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error);
    }
    console.log('Email sent:', info.response);
});
