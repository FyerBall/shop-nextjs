import Image from "next/image";
import Button from "../../layout/Button";
import {
  ProductTitle,
  ProductDescription,
} from "../../layout/Products/ProductLayout";

function SingleProduct({ details }) {
  return (
    <article className=" justify-center mx-auto border-2 p-3  rounded-lg shadow-md cursor-pointer border-blue-200 m-6  grid gap-4 grid-cols-3  hover:shadow-lg hover:border-blue-300 md:w-2/3 md:gap-1">
      <div className="  mx-auto">
        <Image
          width={200}
          height={300}
          src={details.image}
          alt={details.title}
        />
      </div>
      <div className=" col-span-2 flex flex-col justify-between">
        <div className="">
          <ProductTitle>{details.title}</ProductTitle>
          <ProductDescription>{details.description}</ProductDescription>
        </div>
        <div className="mt-4">
          <Button>Add to cart</Button>
        </div>
      </div>
    </article>
  );
}

export default SingleProduct;
