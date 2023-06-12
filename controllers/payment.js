require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);
const payment = async (req, res) => {
    const price = req.body.price;
    const name = req.body.name;
    const Email = req.body.email
    console.log(req.body)
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
      success_url: 'https://fine-teal-chicken-tie.cyclic.app/success',
      cancel_url: 'https://fine-teal-chicken-tie.cyclic.app/cancel',
      customer_email: Email
      
    });
    let url = session.url
    if (url === session.url) {
        
        res.redirect(session.url)
    } else {
        res.redirect('/cancel')
    }
    
}

module.exports = payment;