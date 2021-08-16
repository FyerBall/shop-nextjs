import { ProductTitle as Title } from "../../layout/Products/ProductLayout";
import Button from "../../layout/Button";
import { useRouter } from "next/router";

function EmptyCart() {
  const router = useRouter();
  return (
    <section className="container mx-auto overflow-hidden flex-1 ">
      <div className="flex items-center h-screen  flex-col justify-center  ">
        <Title>Your Cart is Empty</Title>
        <Button onClick={() => router.push("/")}>shop</Button>
      </div>
    </section>
  );
}

export default EmptyCart;
