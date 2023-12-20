import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiGift } from "react-icons/fi";
import { FcFlashOn } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingBasket } from "react-icons/fa";
import { BiSolidMessageAltAdd } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { GiBeachBag } from "react-icons/gi";
import FormSearch from "./FormSearch";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <div className="bg-[#2C95C0] py-3">
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
          <FaShoppingBasket className="w-6 h-6 block lg:hidden" />
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
              to="/carts"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow hover:ring-1 hover:ring-purple-500"
            >
              <GiBeachBag className="w-6 h-6 text-white" />
              <span className="absolute top-1/2 right-1/2 bg-indigo-500 w-5 h-5 flex items-center justify-center text-white rounded-full">0</span>
            </Link>
            <Link to="/login" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow hover:ring-1 hover:ring-purple-500">
              <FiUser className="w-6 h-6 text-white" />
            </Link>
          </div>
          {/* mobile navber */}
          <div className="fixed bottom-0 left-0 px-5 py-2 lg:hidden bg-primary flex justify-between w-full gap-3">
            <div className="flex flex-col items-center">
              <FiGift className="w-4 h-4" />
              <div>
                <h2 className="text-[12px] font-normal">Offer</h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FcFlashOn className="w-4 h-4 animate-pulse" />
              <div>
                <h2 className="text-[12px] font-normal">Desktop Deal</h2>
              </div>
            </div>
            <Link href="/pcbuilder" className="flex flex-col items-center">
              <BiSolidMessageAltAdd className="w-4 h-4" />
              <div>
                <h2 className="text-[12px] font-normal">Pc builder</h2>
              </div>
            </Link>
            <Link href="/login" className="flex flex-col items-center">
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
    </div>
  );
};

export default Header;
