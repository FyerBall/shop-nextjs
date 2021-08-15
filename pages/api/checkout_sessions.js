const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { products } = req.body;

  const transformedItems = products.map((product) => ({
    description: product.description,
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: product.price * 100,
      product_data: {
        name: product.title,
        images: [product.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST_URL}/success`,
    cancel_url: `${process.env.HOST_URL}/cart`,
  });

  res.status(200).json({ id: session.id });
}
