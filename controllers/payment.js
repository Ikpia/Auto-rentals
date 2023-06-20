require('dotenv').config();
const SignUp = require('../models/signUp');
const { createTransport, getTestMessageUrl } = require("nodemailer");
const stripe = require('stripe')(process.env.SECRET_KEY);
let payed_email = '';


const init_transporter = async () => {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: process.env.HOST,
    secure: true, // true for 465, false for other ports
    auth: {
      user:  process.env.EMAIL,
      pass:  process.env.PASS,
    },
  });
  return transporter;
};


const payment = async (req, res) => {
    const price = req.body.price;
    const name = req.body.name;
    payed_email = req.body.email;
    console.log(req.body);

    const check_email = await SignUp.find({email: payed_email});
    if (!check_email) {
        res.redirect('/wrong_email');
    }

    const send_payed_email = async ({ email }) => {
      const transporter = await init_transporter();
      const info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Payment Received",
        html: `<b>Your puchase of ${name} was successful</b>`,
      });
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", getTestMessageUrl(info));
    };

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: name,
            },
            unit_amount: price*100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:${process.env.PORT}/success`,
      cancel_url: `http://localhost:${process.env.PORT}/cancel`,
      customer_email: payed_email
      
    });
    let url = session.url
    if (url === session.url) {
        await send_payed_email({email:payed_email});
        await SignUp.findOneAndUpdate({ email: payed_email }, { payments: 'paid' }, { new: true })
        res.redirect(session.url)
    } else {
        res.redirect('/cancel')
    }
    
}

module.exports = {
  payment
}