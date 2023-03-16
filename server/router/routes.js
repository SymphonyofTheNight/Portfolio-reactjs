import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const routes = express.Router();

let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.NODEMAILER_AUTH_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

routes.post('/', (req, res) => {

    let mailOptions = {
        from: req.body.email,
        to: 'ginodelavega1997@gmail.com',
        subject: 'Message',
        html: `
            <h1>From: ${req.body.email}</h1>
            <p>${req.body.message}</p>
        `,
    };
    transport.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error occurs', err);
        } else {
            console.log(data);
        }
    })
});

export default routes;