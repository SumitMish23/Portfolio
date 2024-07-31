const nodemailer = require('nodemailer');

const contact = async (user_name, user_email, message) => {
    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.SENDER_EMAIL_FROM, // Email address
            pass: process.env.SENDER_EMAIL_PASS, // Email password or app password
        },
    });

    const mailOptions = {
        from: process.env.SENDER_EMAIL_FROM, // Sender address
        to: process.env.SENDER_EMAIL, // Recipient address
        subject: 'MESSAGE ON PORTFOLIO WEBSITE',
        html: `
      <div style="font-size:15px;font-family:'Google Sans', sans-serif;">
        <p>Hi Sumit,</p>
        <p>This message was sent by:</p>
        <ul style='list-style-type:none;'>
          <li><strong>Name:</strong> ${user_name}</li>
          <li><strong>Email:</strong> ${user_email}</li>
          <li><strong>Message:</strong><br>${message}</li>
        </ul>
        
      </div>    
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        return { success: false, message: `Failed to send email: ${error.message}` };
    }
};

module.exports = contact;
