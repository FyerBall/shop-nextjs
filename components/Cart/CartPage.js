import { useSelector } from "react-redux";
import { ProductTitle } from "../../layout/Products/ProductLayout";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";

function CartPage() {
  // redux selector
  const { products } = useSelector((state) => state.cart);

  return (
    <section className=" ">
      {products.length > 0 ? <CartItems /> : <EmptyCart />}
    </section>
  );
}

export default CartPage;
