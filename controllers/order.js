const { createTransport, getTestMessageUrl } = require("nodemailer");   
const indexControllers = require('./indexControllers')
const init_transporter = async () => {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "scottlexium@gmail.com",
        pass: "rgqsukiknmwtdjiw",
      },
    });
    return transporter;
  };
  
  const send_order_email = async ({ indexControllers.selectCar.email}) => {
    const transporter = await init_transporter();
    const info = await transporter.sendMail({
      from: "echukwuka97@gmail.com",
      to: email,
      subject: "Payment Successful",
      html: `<b>Your car will be delivered to your location in 5 hours</b>`,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", getTestMessageUrl(info));
  };

  const order = async (req, res) => {
    const email = req.body.email;
    await send_order_email({ email });
    res.redirect("/order");
    };
  
  module.exports = order;