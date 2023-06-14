require('dotenv').config();
const SignUp = require('../models/signUp');
const stripe = require('stripe')(process.env.SECRET_KEY);
let payed_email = '';
const payment = async (req, res) => {
    const price = req.body.price;
    const name = req.body.name;
    payed_email = req.body.email;
    console.log(req.body);

    const check_email = await SignUp.find({email: payed_email});
    if (!check_email) {
        res.redirect('/wrong_email');
    }
    
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
      
        res.redirect(session.url)
    } else {
        res.redirect('/cancel')
    }
    
}

module.exports = {
  payment,
  payed_email
}