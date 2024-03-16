import stripePackage from "stripe";
import dotenv from 'dotenv'

dotenv.config();
const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

const makePayment = async (req, res) => {
  try {
    const { totalAmount,user, id } = req.body; // Extract totalAmount directly

    // Create a customer in Stripe
    const customer = await stripe.customers.create({
      metadata: {
        order: JSON.stringify(totalAmount),
        user:req.body.user._id,
        // neederId:req.body.id
      },
    });

    // Create line items for the checkout session
    const line_items = [
      {
        price_data: {
          currency: 'lkr',
          product_data: {
            name: 'CareGivi',
          },
          unit_amount: totalAmount * 100, // Convert to cents
        },
        quantity: 1,
      }
    ];

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      customer: customer.id,
      success_url: `${process.env.BASE_URL}/CheckoutSuccess`,
      cancel_url: `${process.env.BASE_URL}/home`,
    });

    // Return the URL of the checkout session to the client
    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Error during payment:', error);
    res.status(500).json({ error: 'An error occurred during payment processing.' });
  }
};

export { makePayment };
