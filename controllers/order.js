require("dotenv").config();
const { createTransport, getTestMessageUrl } = require("nodemailer");   
const payment = require('./payment');
const pemail = payment.payed_email;
console.log(pemail);

const init_transporter = async () => {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: 'gmail',
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    return transporter;
  };
  
  const send_order_email = async ({ email }) => {
    const transporter = await init_transporter();
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "We have received your order",
      html: `<b>Your car will be delivered to your location in 5 hours</b>`,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", getTestMessageUrl(info));
  };

  const order = async (req, res) => {
    try {
        console.log(pemail);
        await send_order_email({ email: pemail });
        res.send('<h1>Please check your email to see the details of your order</h1>');
    } catch (error) {
        console.log(error);
        res.send('<h1>Something went wrong</h1>');
    }
}
  
  module.exports = order;