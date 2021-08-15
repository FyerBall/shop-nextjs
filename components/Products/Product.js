import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Button from "../../layout/Button";
import {
  ProductTitle,
  ProductDescription,
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
    <article className="mx-auto text-center">
      <div className="">
        <Image
          src={image}
          width={190}
          height={360}
          alt={title}
          objectFit="contain"
        />
      </div>
      <div className="text-left">
        <Link href={`product/${id}`}>
          <a>
            <ProductTitle>{title.slice(0, 26)}...</ProductTitle>
          </a>
        </Link>
        {/* <ProductDescription>{description.slice(0, 131)}...</ProductDescription> */}

        <div className="">
          <div className="flex item-center justify-between">
            <p className="flex text-sm font-semibold">
              <FaStar className="w-5 h-5 fill-current text-gray-700" />
              {starts > 0 ? starts : "NEW"}
            </p>
            <p className="text-gray-700 font-bold ">${price}</p>
          </div>

          <Button classes="w-full" onClick={addProductToCart}>
            Add to Card
          </Button>
        </div>
      </div>
    </article>
  );
}

export default Product;
