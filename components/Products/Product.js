import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Button from "../../layout/Button";
import {
  ProductDescription,
  ProductTitle,
} from "../../layout/Products/ProductLayout";
import { addToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
function Product({ id, description, image, price, title }) {
  let starts = Math.floor(Math.random() * 5);
  const dispatch = useDispatch();
  const addProductToCart = () => {
    const product = {
      id,
      description,
      image,
      price,
      title,
    };
    dispatch(addToCart(product));
  };

  return (
    <article className="mx-auto text-left container space-y-5 relative shadow-lg border-gray-300 pb-5 hover:shadow-md cursor-pointer">
      <div className="text-center">
        <Image
          src={image}
          width={190}
          height={360}
          alt={title}
          objectFit="contain"
        />
      </div>
      <h2 className="mt-2 font-semibold text-black truncate"> {title}</h2>
      <p className="text-black font-black text-2xl">${price}</p>
      <p className="line-clamp-3">{description}</p>

      <div className="flex items-center justify-between">
        <p className="flex text-sm font-semibold">
          <FaStar className="w-5 h-5 fill-current text-gray-700" />
          {starts > 0 ? starts : "NEW"}
        </p>
        <Link href={`product/${id}`}>
          <a className=" inset-0 absolute"></a>
        </Link>
        <Button className="z-10" onClick={addProductToCart}>
          Add to Card
        </Button>
      </div>
    </article>
  );
}

export default Product;
