import Link from "next/link";
import { useRouter } from "next/router";
// comps.
import Button from "../../layout/Button";
import Greeting from "../Greeting";
// icons
import { FaSearch } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import Category from "./Category";
import { useAuth } from "../../store/authContext";
import { useSelector } from "react-redux";

function Header() {
  // let auth = false;
  const { auth, login, logout, authReady } = useAuth();

  // redux selector
  const { products } = useSelector((state) => state.cart);

  const router = useRouter();
  return (
    <>
      {/* Nav bar */}
      <nav className="flex items-center sticky top-0 z-50 bg-white justify-between capitalize tracking-wider space-x-4 my-3 mb-7 md:px-20">
        {/* first - logo */}
        <div className=" flex items-center">
          <AiFillShop
            size={50}
            className="mr-4 text-blue-500"
            onClick={() => router.push("/")}
          />

          <Link href="/seller">
            <a>
              <p className="cursor-pointer hover:underline ">Sell online</p>
            </a>
          </Link>
        </div>
        {/* middle - search  */}
        <div className="hidden  md:flex items-center flex-grow max-w-md relative">
          <input
            type="text"
            name="search"
            id="search"
            className="bg-gray-200 p-2 pl-3 rounded-lg w-full border text-black  focus:border-blue-500 focus:outline-none"
          />
          <FaSearch size={20} className="absolute right-3 text-blue-500" />
        </div>
        {/* last - cta */}

        <div className="">
          {auth ? (
            <div className=" flex items-center">
              <Greeting />
              <Button>my account</Button>
              <Button onClick={logout}>logout</Button>
            </div>
          ) : (
            <div className="flex list-none">
              <Button onClick={login}>sign in / sign up</Button>
              <li className="relative ">
                <Button
                  classes=""
                  onClick={() => router.push("/cart")}
                  bgColor="blue"
                >
                  Cart
                </Button>
                {products.length > 0 && (
                  <span
                    className={`absolute top-2 right-1 bg-blue-500  rounded-full h-5 w-5 text-center m-auto flex items-center justify-center p-1 text-gray-50 font-medium `}
                  >
                    {products.length}
                  </span>
                )}
              </li>
            </div>
          )}
        </div>
      </nav>

      <Category />
    </>
  );
}

export default Header;
