import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../layout/Button";
import {
  ProductTitle,
  ProductTitle as Title,
} from "../../layout/Products/ProductLayout";
import { FaWindowClose } from "react-icons/fa";
import { removeFromCart } from "../../store/cartSlice";
const stripePromise = loadStripe(process.env.strip_public_key);

function CartItems() {
  // redux selector
  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // stripe
  const createCheckoutSession = async () => {
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
    <section className="mt-10">
      <Title>You {products.length} items in the cart</Title>

      <div className="grid gap-10 grid-cols-1 mt-10">
        {products.map((product) => {
          const { id, title, image, price } = product;
          return (
            <article
              key={id}
              className="flex justify-between
               items-center "
            >
              <div className="flex items-center">
                <Image
                  src={image}
                  alt={title}
                  objectFit="contain"
                  width={50}
                  height={50}
                />
                <div className="">
                  <ProductTitle>{title}</ProductTitle>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <p className="text-gray-700 font-bold ">${price}</p>
                <FaWindowClose
                  onClick={() => dispatch(removeFromCart(id))}
                  size={20}
                  className="text-red-500 cursor-pointer"
                />
              </div>
            </article>
          );
        })}

        {/* sidebar */}
        <article className=" text-center">
          <ProductTitle>Checkout with Stripe</ProductTitle>
          <Button onClick={createCheckoutSession} role="link">
            total ${total}
          </Button>
        </article>
      </div>
    </section>
  );
}

export default CartItems;
