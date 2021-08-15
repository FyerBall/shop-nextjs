import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Image from "next/image";
import { useSelector } from "react-redux";
import Button from "../../layout/Button";
import {
  ProductDescription,
  ProductTitle,
  ProductTitle as Title,
} from "../../layout/Products/ProductLayout";
const stripePromise = loadStripe(process.env.strip_public_key);

function CartItems() {
  // redux selector
  const { products, total } = useSelector((state) => state.cart);

  // stripe
  const createCheckoutSession = async (e) => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/checkout_sessions", {
      products: products,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };
  return (
    <section className="bg-red-200 mt-5 ">
      <Title>You {products.length} items in the cart</Title>

      <div className=" md:flex md:flex-col md:w-1/3">
        {products.map((product) => {
          const { id, description, title, image, price } = product;
          return (
            <article
              key={id}
              // grid gap-12 grid-cols-1
              className=" border-2 p-3 space-x-4  rounded-lg shadow-md cursor-pointer border-gray-200 m-6 flex justify-between flex-col  items-center hover:shadow-lg   "
            >
              <Image src={image} width={150} height={210} alt={title} />
              <div className=" h-56 flex flex-col  justify-center md:flex-1  md:items-start  ">
                <ProductTitle>{title}</ProductTitle>
                <ProductDescription>{description}</ProductDescription>
              </div>

              <p className="text-gray-700 font-bold text-xl">${price}</p>
            </article>
          );
        })}

        {/* sidebar */}
        <article className="bg-red-500 text-center">
          <ProductTitle>Checkout</ProductTitle>
          <Button onClick={createCheckoutSession} role="link">
            total ${total}
          </Button>
        </article>
      </div>
    </section>
  );
}

export default CartItems;
