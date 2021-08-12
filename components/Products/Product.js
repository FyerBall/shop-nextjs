import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Button from "../../layout/Button";
import {
  ProductTitle,
  ProductDescription,
} from "../../layout/Products/ProductLayout";
function Product({ id, description, image, price, title }) {
  let starts = Math.floor(Math.random() * 5);

  return (
    <div className=" border-2 p-3  rounded-lg shadow-md cursor-pointer border-blue-200 m-6  grid gap-12 grid-cols-1 w-96 hover:shadow-lg hover:border-blue-300 ">
      <div className=" mx-auto">
        <Image
          src={image}
          width={150}
          height={210}
          className=" bg-cover"
          alt={title}
        />
      </div>
      <div className=" h-56 flex flex-col justify-around">
        <Link href={`product/${id}`}>
          <a>
            <ProductTitle>{title.slice(0, 30)}...</ProductTitle>
          </a>
        </Link>
        <ProductDescription>{description.slice(0, 60)}...</ProductDescription>

        <div className="flex item-center ">
          <FaStar className="w-5 h-5 fill-current text-blue-700" />
          <p className="text-sm font-semibold">{starts > 0 ? starts : "NEW"}</p>
        </div>
        <div className="flex item-center justify-between mt-3">
          <p className="text-gray-700 font-bold text-xl">${price}</p>

          <Button>Add to Card</Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
