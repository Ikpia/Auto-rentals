const payment = async (req, res) => {
    const price = req.body.price;
    const choice = req.body.choice;
    const Email = req.body.email
    console.log(req.body)
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: choice,
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