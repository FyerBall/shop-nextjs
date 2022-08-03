import Link from "next/link";
import { useRouter } from "next/router";
// comps.
import Button from "../../layout/Button";
import Greeting from "../Greeting";
// icons
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import Category from "./Category";
import { useAuth } from "../../store/authContext";
import { useSelector } from "react-redux";
import Logo from "../Logo.js";

function Header() {
  // let auth = false;
  const { auth, login, logout, authReady } = useAuth();

  // redux selector
  const { products } = useSelector((state) => state.cart);

  const router = useRouter();
  return (
    <header className="fixed z-50 top-0 w-full">
      <nav className="flex  items-center sticky top-0 z-50 bg-gray-50 justify-between capitalize tracking-wider py-5 space-x-4  md:px-20">
        {/* first - logo */}
        <div className="flex items-center uppercase  space-x-4">
          <Logo />
        </div>
        {/* middle - search  */}
        <div className="hidden  lg:flex items-center flex-grow max-w-md relative">
          <input
            type="text"
            name="search"
            id="search"
            className="bg-gray-200 p-2 pl-3 rounded-lg w-full border text-black  focus:border-gray-500 focus:outline-none"
            aria-label="search bar"
          />
          <FaSearch size={20} className="absolute right-3 text-gray-500" />
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/seller">
            <a>
              <p className="cursor-pointer hover:underline ">Sell</p>
            </a>
          </Link>
          {/* {auth ? (
            <div className=" flex items-center">
              <Greeting />
              <Button>my account</Button>
              <Button onClick={logout}>logout</Button>
            </div>
          ) : ( */}
          <ul className="flex items-center list-none space-x-4">
            <Button
            //  onClick={login}
            >
              Sign In
            </Button>
            <li
              className="relative cursor-pointer"
              onClick={() => router.push("/cart")}
            >
              <Button
              //  onClick={login}
              >
                My cart
              </Button>
              {products.length > 0 && (
                <span
                  className={`absolute -top-2 right-0 bg-red-500  rounded-full h-5 w-5 text-center m-auto flex items-center justify-center p-1 text-gray-50 font-medium `}
                >
                  {products.length}
                </span>
              )}
            </li>
          </ul>
          {/* )} */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
