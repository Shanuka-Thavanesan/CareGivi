import stripePackage from "stripe";
import dotenv from 'dotenv'

dotenv.config();
const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);


const makePayment =  async (req, res) =>{
  {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'lkr',
            product_data: {
              name: 'CareGivi',
            },
            unit_amount:1500000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.BASE_URL}/CheckoutSuccess`,
      cancel_url: `${process.env.BASE_URL}/home`,
    });
  
    res.send({url:session.url});
  }
}
export  {makePayment};
