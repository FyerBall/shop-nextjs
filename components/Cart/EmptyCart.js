import { ProductTitle as Title } from "../../layout/Products/ProductLayout";
import Button from "../../layout/Button";
import { useRouter } from "next/router";

function EmptyCart() {
  const router = useRouter();
  return (
    <div className="">
      <Title>Your Cart is Empty</Title>
      <Button onClick={() => router.push("/")}>shop</Button>
    </div>
  );
}

export default EmptyCart;
