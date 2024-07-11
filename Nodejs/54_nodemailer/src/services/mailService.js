require('dotenv').config();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'lehoanglinh1051995@gmail.com',
        pass: process.env.PASS_GMAIL
    }
})

const getMailTemplate = (username) => {
    return `
    <h1>Chào mừng, ${username}!</h1>
    <p>Chúng tôi rất vui mừng chào đón bạn đến với dịch vụ của chúng tôi.</p>
    <footer>
      <p>Chào mừng bạn đến với Gooup1</p>
    </footer>
  `;
};

const sendMail = (to, username) => {
    const mailOptions = {
        from : 'lehoanglinh1051995@gmail.com',
        to: to,
        subject: 'Welcome to GooUp1',
        html: getMailTemplate(username)
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
    })
}

module.exports = sendMail;