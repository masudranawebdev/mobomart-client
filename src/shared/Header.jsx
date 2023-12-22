import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiGift, FiMinus } from "react-icons/fi";
import { FcFlashOn } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight, FaShoppingBasket } from "react-icons/fa";
import { BiSolidMessageAltAdd } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { GiBeachBag } from "react-icons/gi";
import FormSearch from "./FormSearch";
import { AuthContext } from "../context/AuthProvider";
import { getInitials } from "../utils/getInitials";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { GoArrowRight, GoPlus } from "react-icons/go";
import ProductNotFound from "../components/product-not-found/ProductNotFound";
import {
  addToCart,
  removeFromCart,
  removeOne,
} from "../redux/features/cartSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const name = getInitials(user?.displayName);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="bg-[#2C95C0] py-3">
      {/* main content */}
      <div className="container">
        <div className="flex justify-between items-center text-white">
          <div onClick={handleToggle}>
            {isOpen ? (
              <MdClose className="w-6 h-6 block lg:hidden" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6 block lg:hidden" />
            )}
          </div>
          <a className="uppercase" href="/">
            MoboMart
          </a>
          <Link
            to="#"
            onClick={toggleDrawer}
            className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow hover:ring-1 hover:ring-purple-500 md:hidden"
          >
            <GiBeachBag className="w-6 h-6 text-white" />
            <span className="absolute top-1/2 right-1/2 bg-indigo-500 w-5 h-5 flex items-center justify-center text-white rounded-full">
              {products?.length}
            </span>
          </Link>
          <div className="grow px-10 hidden lg:block">
            <FormSearch />
          </div>
          <div className="hidden lg:flex gap-5">
            <div className="flex items-center gap-3">
              <FiGift className="w-6 h-6" />
              <div>
                <h2 className="text-[16px] font-normal">Offer</h2>
                <p className="text-[12px]">latest offer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FcFlashOn className="w-6 h-6 animate-pulse" />
              <div>
                <h2 className="text-[16px] font-normal">Mobile Deal</h2>
                <p className="text-[12px]">Special Deals</p>
              </div>
            </div>

            <Link
              to="#"
              onClick={toggleDrawer}
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow hover:ring-1 hover:ring-purple-500"
            >
              <GiBeachBag className="w-6 h-6 text-white" />
              <span className="absolute top-1/2 right-1/2 bg-indigo-500 w-5 h-5 flex items-center justify-center text-white rounded-full">
                {products?.length}
              </span>
            </Link>
            <div className="group relative overflow-visible">
              <Link
                to={user?.uid ? "#" : "/sign-in"}
                className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow hover:ring-1 hover:ring-purple-500"
              >
                {user?.uid ? (
                  <span className="text-white font-bold text-lg">{name}</span>
                ) : (
                  <FiUser className="w-6 h-6 text-white" />
                )}
              </Link>
              {user?.uid && (
                <span
                  onClick={handleLogout}
                  className="opacity-0 absolute -bottom-10 bg-error-300 -right-4 group-hover:opacity-100 cursor-pointer py-2 px-5 rounded-full"
                >
                  Logout
                </span>
              )}
            </div>
          </div>
          {/* mobile navber */}
          <div className="fixed bottom-0 left-0 px-5 py-2 lg:hidden flex justify-between w-full gap-3 bg-primaryColor">
            <div className="flex flex-col items-center">
              <FiGift className="w-4 h-4" />
              <div>
                <h2 className="text-[12px] font-normal">Offer</h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FcFlashOn className="w-4 h-4 animate-pulse" />
              <div>
                <h2 className="text-[12px] font-normal">Mobile Deal</h2>
              </div>
            </div>
            <Link to="#" className="flex flex-col items-center">
              <BiSolidMessageAltAdd className="w-4 h-4" />
              <div>
                <h2 className="text-[12px] font-normal">Buy Mobile</h2>
              </div>
            </Link>
            <Link to="/sign-in" className="flex flex-col items-center">
              <FiUser className="w-4 h-4" />
              <div>
                <h2 className="text-[12px] font-normal">Account</h2>
              </div>
            </Link>
          </div>
        </div>
        <div
          className={`absolute z-50 lg:hidden  transition-all w-[300px] duration-300 ${
            isOpen ? "-translate-x-1" : "-translate-x-[320px]"
          }`}
        >
          {/* <MobileMenu /> */}
        </div>
      </div>
      {/* cart drawer */}
      <div
        className={`min-h-screen fixed inset-y-0 right-0 z-50 bg-white w-full md:w-2/5 overflow-y-auto transition-transform duration-500 transform ${
          isDrawerOpen ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <button className="text-4xl" onClick={toggleDrawer}>
            <GoArrowRight className="p-1 bg-blue-gray-50 shadow rounded-full" />
          </button>
          <p>
            <strong>Total:</strong>{" "}
            <span className="text-orange">{total}৳</span>
          </p>
        </div>
        <div className="pt-2 pb-5 px-4">
          <div>
            {products?.length > 0 ? (
              <div className="flex flex-col gap-y-1">
                {products?.map((mobile) => (
                  <div className="border shadow-sm rounded" key={mobile.id}>
                    <div className="flex items-center pr-5">
                      <img
                        className="w-20 h-20"
                        src={mobile?.thumbnail}
                        alt={mobile?.title}
                      />
                      <div className="px-5 flex-1">
                        <h2 className="text-base md:text-lg font-normal md:font-semibold">
                          {mobile.title}
                        </h2>
                        <p className="text-orange font-bold">{mobile.price}৳</p>
                      </div>
                      <div className="flex items-center pr-3 md:pr-10">
                        <span
                          onClick={() => {
                            if (mobile.quantity > 1) {
                              dispatch(removeOne(mobile));
                            }
                          }}
                          className={`${
                            mobile.quantity > 1
                              ? "cursor-pointer"
                              : "cursor-not-allowed"
                          } text-2xl md:text-4xl`}
                        >
                          <FiMinus className="p-1 group-hover:bg-blue-gray-50 shadow rounded-lg" />{" "}
                        </span>
                        <span className="text-lg md:text-3xl border mx-1 px-3 rounded-sm">
                          {mobile.quantity}
                        </span>
                        <span
                          onClick={() => dispatch(addToCart(mobile))}
                          className="text-2xl md:text-4xl cursor-pointer"
                        >
                          <GoPlus className="p-1 group-hover:bg-blue-gray-50 shadow rounded-lg" />
                        </span>
                      </div>
                      <span
                        onClick={() => dispatch(removeFromCart(mobile))}
                        className="text-2xl md:text-4xl group cursor-pointer"
                      >
                        <IoMdClose className="p-1 group-hover:bg-blue-gray-50 shadow rounded-lg" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ProductNotFound />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
